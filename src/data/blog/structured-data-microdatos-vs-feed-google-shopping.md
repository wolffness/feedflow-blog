---
title: "Structured Data (Microdados) vs Feed Google Shopping: Qual Usar?"
description: "JSON-LD microdados schema.org vs feed XML: quando usar cada um, convergência, conflitos de dados, checklist."
pubDatetime: 2026-04-02T10:30:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - structured-data
  - schema
  - microdados
  - json-ld
  - google-shopping
author: "FeedFlow"
---

## Structured Data vs Feed: A Confusão Que Mata Catalálogos

Você usa Google Shopping (feed XML). Seu desenvolvedor quer adicionar structured data (JSON-LD) no website.

Duas estruturas de dados sobre **o mesmo produto, em dois lugares diferentes**.

Se dados divergem:
- Preço no feed = R$89,90
- Preço em JSON-LD = R$99,90
- Google fica confuso, reduz confiança no site

Este artigo explica quando usar feed, quando usar structured data, quando usar ambos, e como evitar conflitos.

---

## O Que é Cada Um (Simplicidade)

### Feed XML (Google Shopping)

```xml
<item>
  <g:id>PROD-001</g:id>
  <g:title>Camiseta Azul</g:title>
  <g:price>89,90 BRL</g:price>
  <g:availability>in stock</g:availability>
</item>
```

- **Localização:** arquivo separado (seu servidor ou Google)
- **Atualizado:** a cada 4-6 horas (batch)
- **Usado por:** Google Shopping, Meta Ads, Pinterest
- **Função:** alimentar anúncios em plataformas

### Structured Data (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Camiseta Azul",
  "price": "89.90",
  "priceCurrency": "BRL",
  "availability": "https://schema.org/InStock"
}
</script>
```

- **Localização:** dentro do HTML da página do produto
- **Atualizado:** em tempo real (conforme usuário acessa página)
- **Usado por:** Google Search (rich snippets), IA do Google
- **Função:** ajudar Google entender conteúdo da página

---

## Quando Usar Cada Um (Regra Simples)

### USE FEED (Google Shopping)

```
✓ Você quer aparecer em anúncios pagos (Google Shopping, Meta, Pinterest, TikTok)
✓ Você tem >50 produtos (feed é mais eficiente)
✓ Quer sincronizar automaticamente com plataformas
✓ Quer segmentar por campanha (custom labels, product_type)
✓ Exemplo: loja Nuvemshop vendendo em Google Shopping
```

### USE STRUCTURED DATA (JSON-LD)

```
✓ Você quer melhorar SEO orgânico (busca não-paga)
✓ Você quer rich snippets (estrelas, preço, disponibilidade) no Google Search
✓ Você quer que IA do Google entenda melhor sua página
✓ Você tem <200 produtos (caso contrário, JSON-LD se torna pesado)
✓ Exemplo: página de produto precisa aparecer bem no Google Search
```

### USE AMBOS (Feed + Structured Data)

```
✓ Você quer Google Shopping E Google Search
✓ Você quer que dados estejam sincronizados (ideal)
✓ Você é loja grande (>500 produtos)
✓ Exemplo: loja de moda que vende via anúncios E busca orgânica
```

---

## O Conflito: Quando Dados Divergem

Se você mantém **feed SEPARATE do JSON-LD**, divergências aparecem:

**Cenário 1 — Preço diferente:**
```
Feed XML: R$89,90 BRL
JSON-LD: R$99,90 BRL
```
Google vê conflito. Qual preço é verdade? Reduz confiança.

**Cenário 2 — Disponibilidade diferente:**
```
Feed XML: availability = "in stock"
JSON-LD: availability = "out of stock"
```
Usuário clica em anúncio (feed diz em estoque), chega no site (JSON-LD diz fora de estoque). Confusão.

**Cenário 3 — Título diferentes:**
```
Feed XML: "Camiseta Aramis Azul 100% Algodão Masculina"
JSON-LD: "Camiseta Azul"
```
Google não consegue verificar se é mesmo produto.

---

## A Solução: Sincronizar Feed + JSON-LD

### Opção 1: Feed é Verdade, JSON-LD é Espelho

1. Exporte feed (source of truth)
2. Use feed para popular JSON-LD na página
3. **Cada visita ao produto:** JSON-LD = dados mais recentes do feed

Vantagem: 1 source of truth (feed).
Desvantagem: complexo para implementar (precisa script que puxa feed).

### Opção 2: Website é Verdade, Feed é Espelho

1. Dados no website (Nuvemshop, WordPress) são primários
2. Export automaticamente para feed
3. Feed sempre = website

Vantagem: simples (você só atualiza website).
Desvantagem: risco de divergência se export falhar.

### Opção 3: Sistema Centralizado (Recomendado)

1. Uma base de dados centralizada (seu ERP)
2. Feed e JSON-LD ambos puxam dados dessa base
3. Tudo sincronizado automaticamente

Vantagem: 100% consistência, sem conflitos.
Desvantagem: implementação mais complexa.

---

## Campos Críticos: Manter Sempre em Sincronismo

**7 campos que Google valida contra conflitos:**

| Campo | Feed | JSON-LD | Crítico? |
|-------|------|---------|----------|
| id | g:id | sku/mpn | SIM |
| title | g:title | name | SIM |
| price | g:price | price | SIM |
| currency | BRL | priceCurrency | SIM |
| availability | g:availability | availability | SIM |
| image | g:image_link | image | NÃO (aviso) |
| description | g:description | description | NÃO (aviso) |

**SIM** = Google sinaliza como erro crítico se divergem.
**NÃO** = Google tolera divergências (aviso, não erro).

---

## Quando NÃO Usar Structured Data (Pitfalls)

### Pitfall 1: JSON-LD Desatualizado Mata Conversão

Você atualiza preço no Nuvemshop → feed atualiza em 4h → Google Shopping mostra novo preço.

Mas JSON-LD está cacheado na página → mostra preço antigo por dias.

Usuário vê R$89 em anúncio, clica, vê R$99 na página → abandona.

**Solução:** cachear JSON-LD com TTL máximo de 1h.

### Pitfall 2: JSON-LD em HTML Pesado

Você bota JSON-LD de 500 produtos em uma página → página fica pesada, carrega lento → Google reduz ranking.

**Solução:** JSON-LD só do produto atual, não todo catálogo.

### Pitfall 3: Schema.org Incorreto

Você usa `@type: "Service"` em vez de `"Product"` → Google não reconhece como produto.

**Solução:** usar generator (esquema.org ou Yoast) para validar.

---

## Caso Real: Loja Que Perdeu 30% de Conversão Por Divergência

Uma loja em São Paulo, vendendo pela Nuvemshop.

**Setup original:**
- Feed Google Shopping (feed XML, atualizado 4h)
- JSON-LD no website (developer colocou 2 meses atrás, nunca atualizou)

**O problema:**
- Mês 1: tudo sincronizado OK
- Mês 2: Nuvemshop atualiza preços de 150 produtos (promoção)
- Feed atualiza em 4h (mostra novo preço no Google Shopping)
- JSON-LD não atualiza (static, hardcoded)
- Resultado: 150 produtos com preço diferente no anúncio vs página

**Impacto:**
- Cliques diminuem (usuário vê preço diferente, não confia)
- Conversão cai 30% (em 7 dias)
- Google penaliza (vê site pouco confiável)
- Campanhas pausadas automaticamente (muita divergência)

**Descoberta:**
- SEO specialist descobre JSON-LD desatualizado
- Alerta: "Seu JSON-LD está fora de sincronismo"
- Atualiza JSON-LD manualmente (ou implementa sincronismo automático)

**Resultado após fix:**
- Preço no anúncio = preço no site
- Confiança aumenta
- Conversão volta ao normal (30% recuperado)
- Google reativa campanhas

---

## Implementação: Checklist de Sincronização

```
☐ Feed XML definido (Google Shopping)
☐ JSON-LD implementado no website (schema.org/Product)
☐ Preço no feed = preço em JSON-LD (comparar 10 produtos)
☐ Disponibilidade: "in stock" / "out of stock" sincronizado
☐ Título idêntico ou muito similar
☐ ID (SKU) idêntico em ambos
☐ Imagem principal é mesma URL (opcional, mas recomendado)
☐ Google Search Console: 0 erros de rich snippets
☐ Sistema de atualização: feed E JSON-LD atualizam juntos (não separados)
☐ Teste: atualizar preço no Nuvemshop, confirma em ambos (feed + website)
```

---

## Próximos Passos: Sincronização Segura

1. Auditar dados: feed vs JSON-LD (10 produtos)
2. Se divergem: definir qual é "source of truth" (recomendado: feed)
3. Implementar sincronismo: feed atualiza → JSON-LD atualiza também
4. Validar: Google Search Console (rich snippets deve dar 0 erros)
5. Monitorar: semanal, confirmar sincronismo

[Sincronize feed e microdados automaticamente com FeedFlow](https://feed-flow.app/auth/signup)
