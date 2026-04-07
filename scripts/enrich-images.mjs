/**
 * enrich-images.mjs
 *
 * Adiciona ogImage via Pexels API a todos os posts do blog sem imagem.
 *
 * Uso:
 *   PEXELS_KEY=sua_chave node scripts/enrich-images.mjs
 *   — ou —
 *   npm run enrich-images   (lê automaticamente do .env)
 *
 * Obter chave grátis em: https://www.pexels.com/api/
 * Limite: 200 req/hora, 20.000 req/mês no plano grátis.
 *
 * Response usa src.landscape (1200x627) — dimensão ideal para OG image.
 */

import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

// Carrega .env manualmente (sem depender de dotenv)
const envPath = new URL('../.env', import.meta.url).pathname
if (existsSync(envPath)) {
  const envContent = await readFile(envPath, 'utf8')
  for (const line of envContent.split('\n')) {
    const [key, ...rest] = line.split('=')
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
  }
}

const PEXELS_KEY = process.env.PEXELS_KEY
const BLOG_DIR = new URL('../src/data/blog', import.meta.url).pathname

// Mapeia tags para queries mais relevantes no Pexels
const TAG_TO_QUERY = {
  'google-shopping':    'analytics dashboard laptop',
  'meta-ads':           'social media smartphone advertising',
  'feed-de-produtos':   'ecommerce product catalog',
  'nuvemshop':          'small business owner online store',
  'troubleshooting':    'problem solving computer work',
  'comparativos':       'business comparison decision making',
  'merchant-center':    'google search analytics screen',
  'automacao-de-feeds': 'automation workflow technology',
  'custo-operacional':  'spreadsheet business cost analysis',
  'e-commerce':         'online shopping store',
  'feed-xml':           'data technology server',
  'feed-manager':       'software dashboard management',
  'iniciante':          'learning laptop beginner',
  'feedflow':           'ecommerce store analytics',
  'feedxml':            'ecommerce store comparison',
  'marketplace':        'marketplace online selling',
}

function getQuery(tags) {
  for (const tag of tags) {
    if (TAG_TO_QUERY[tag]) return TAG_TO_QUERY[tag]
  }
  return tags[0]?.replace(/-/g, ' ') ?? 'ecommerce online store'
}

async function fetchPexelsPhoto(query, attempt = 0) {
  // Pega página 1 ou 2 alternando para variar fotos entre artigos similares
  const page = attempt % 2 === 0 ? 1 : 2
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5&page=${page}&orientation=landscape`
  const res = await fetch(url, {
    headers: { Authorization: PEXELS_KEY }
  })
  if (!res.ok) throw new Error(`Pexels error: ${res.status} ${await res.text()}`)
  const data = await res.json()
  // Pega foto no índice do attempt (varia entre artigos com a mesma query)
  const photo = data.photos?.[attempt % 5]
  if (!photo) return null
  // src.landscape = 1200x627 (ideal para OG image)
  return photo.src.landscape
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  return match ? match[1] : null
}

function extractTags(fm) {
  const tagsMatch = fm.match(/^tags:\n((?:\s+-\s+.+\n?)+)/m)
  if (!tagsMatch) return []
  return tagsMatch[1]
    .split('\n')
    .map(l => l.replace(/^\s+-\s+/, '').trim())
    .filter(Boolean)
}

function hasOgImage(fm) {
  return /^ogImage:/m.test(fm)
}

function addOgImage(content, url) {
  return content.replace(
    /^(draft:\s*false)$/m,
    `$1\nogImage: "${url}"`
  )
}

async function run() {
  if (!PEXELS_KEY) {
    console.error('❌  PEXELS_KEY não encontrada')
    console.error('   Adicione no .env: PEXELS_KEY=sua_chave')
    console.error('   Obtenha em: https://www.pexels.com/api/')
    process.exit(1)
  }

  const files = (await readdir(BLOG_DIR))
    .filter(f => f.endsWith('.md'))
    .sort()

  console.log(`📂 ${files.length} artigos encontrados\n`)

  let updated = 0, skipped = 0, errors = 0, attempt = 0

  for (const file of files) {
    const filePath = join(BLOG_DIR, file)
    const content = await readFile(filePath, 'utf8')
    const fm = parseFrontmatter(content)

    if (!fm) {
      console.log(`⚠️  ${file}: sem frontmatter, pulando`)
      skipped++
      continue
    }
    if (hasOgImage(fm)) {
      console.log(`⏭  ${file}: já tem ogImage`)
      skipped++
      continue
    }

    const tags = extractTags(fm)
    const query = getQuery(tags)

    try {
      const photoUrl = await fetchPexelsPhoto(query, attempt++)
      if (!photoUrl) {
        console.log(`⚠️  ${file}: sem resultado para "${query}"`)
        errors++
        continue
      }

      const newContent = addOgImage(content, photoUrl)
      await writeFile(filePath, newContent, 'utf8')
      console.log(`✅ ${file}`)
      console.log(`   tags: ${tags.slice(0, 3).join(', ')}`)
      console.log(`   query: "${query}"`)
      console.log(`   url: ${photoUrl}\n`)
      updated++

      // Respeita rate limit: ~300ms entre requests
      await new Promise(r => setTimeout(r, 300))
    } catch (err) {
      console.error(`❌ ${file}: ${err.message}`)
      errors++
    }
  }

  console.log(`\n📊 Resultado: ${updated} atualizados, ${skipped} pulados, ${errors} erros`)
}

run()
