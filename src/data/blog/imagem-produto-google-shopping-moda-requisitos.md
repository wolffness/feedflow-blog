---
title: "Imagem de Produto em Google Shopping Moda: Requisitos e Rejeições"
description: "Google Shopping imagens moda: dimensões, fundo branco, rejeições automáticas, por que imagens impactam 40% do CTR."
pubDatetime: 2026-04-07T16:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/7013070/pexels-photo-7013070.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - google-shopping
  - moda
  - imagens
  - requisitos
  - fotografia
author: "FeedFlow"
---

## Imagens em Google Shopping: Por Que Uma Foto Aumenta CTR 3.5x

No Google Shopping, usuário clica ou não na sua camiseta em 2 segundos. O que ele vê?

- Título (40% da decisão)
- Preço (30% da decisão)
- **Imagem (30% da decisão)**

Imagens ruins = Google rejeita automaticamente. Imagens boas = CTR 3.5x melhor que imagens mediocres.

Este artigo detalha os requisitos técnicos, por que cada um importa, e as 12 razões mais comuns que Google rejeita imagens de moda.

---

## Requisitos Técnicos: Checklist Mínimo

### Dimensões

**image_link (imagem principal):**
- Mínimo: 300x300px
- Recomendado: 1.200x1.200px ou maior
- Máximo: 16.000x16.000px
- Proporção: quadrada (1:1) ou rectangular (até 3:1)

Google rejeita imagens <300px automaticamente em moda. Motivo: IA não consegue extrair detalhes do produto (textura, ajuste, qualidade).

**additional_image_link (imagens adicionais):**
- Mínimo 3, máximo 10 por produto
- Mesmas dimensões que image_link
- Formato: cada URL em campo separado (não uma string comma-separated)

### Formato de Arquivo

**Aceitos:**
- JPEG (máximo 85% de compressão — não super-comprimido)
- PNG
- GIF
- WebP (em alguns casos, mas não garantido)

**Rejeitados:**
- BMP
- TIFF
- SVG
- Animated GIF (Google pausa automaticamente)

**Dica:** Exporte como JPEG com qualidade 80-85% — balanceia tamanho de arquivo (carregamento rápido) vs clareza (produto visível).

### Fundo

**Obrigatório em moda:**
- Fundo branco (RGB 255,255,255) ou neutro (cinza claro)
- Sem degradê, sem textura
- Sem padrão ou cor forte de fundo

**Por que?** Moda é tudo sobre o produto. Fundo branco força o olho para o item. Google treina IA em "isolamento do produto" — fundos coloridos reduzem confiança da IA.

Teste: se remover fundo com ferramenta automática, produto fica bem recortado? Bom sinal para Google.

---

## Rejeições Automáticas: Por Que Google Mata Suas Imagens

### Rejeição 1: Imagem Muito Pequena (<300px)

**Sinalização:** "Imagem rejeitada — resolução insuficiente"

Causa: arquivo redimensionado para <300x300px

**Solução:**
- Use imagem em 1.200x1.200px ou maior
- Não comprima para tamanho de site (site pode ser responsivo, feed não)
- Teste: salve a imagem local, abra em visualizador — se pixelada, rejeitada

### Rejeição 2: Fundo Colorido Demais

**Sinalização:** "Imagem rejeitada — produto isolamento insuficiente"

Causa: fundo azul, verde, padrão ou gradiente

**Solução:**
- Re-edite imagem: pinte fundo em branco ou cinza (% cinza <15%)
- Use ferramenta automática: Photoshop, Canva, ou online (remove.bg)
- Teste: escureça imagem 50% (olho nú) — produto ainda é destaque? Sim = bom fundo

### Rejeição 3: Marca d'Água ou Logo

**Sinalização:** "Imagem rejeitada — marca d'água não permitida"

Causa: sua logo, watermark, endereço no canto

**Solução:**
- Remova todas as marcas d'água (Photoshop, Figma)
- Exceção: marca do produto (ex: logo Aramis na camiseta) = permitido
- Teste: Google aceita logo do produto, mas não da sua loja

### Rejeição 4: Texto Grande na Imagem (Exceto Marca)

**Sinalização:** "Imagem rejeitada — texto promocional não permitido"

Causa: "DESCONTO 50%", "COMPRE AGORA", "NOVO"

**Solução:**
- Remova texto promocional
- Remova preços
- Remova datas ou ofertas
- Mantenha: marca do produto (Aramis, Hering), composição de fibra SE pequena (ex: "100% Algodão" em etiqueta visível)

### Rejeição 5: Imagem Cortada ou Produto Parcial

**Sinalização:** "Imagem rejeitada — produto incompleto"

Causa: camiseta cortada, braços fora de quadro, cabeça de modelo não aparece

**Solução:**
- Reframe: produto inteiro visível
- Se usar modelo: cabeça do modelo deve aparecer (ou pelo menos pescoço)
- Teste: posso ver o produto completo da cintura até o topo?

### Rejeição 6: Imagem com Modelo Cobrindo >50% do Espaço

**Sinalização:** "Imagem rejeitada — produto como tela de fundo"

Causa: modelo gigante, produto minúsculo

**Solução:**
- Modelo = máximo 50% da imagem (produto = mínimo 50%)
- Melhor ainda: nenhum modelo (Google não gosta em moda)
- Se usar modelo, certifique-se que produto é foco, não modelo

### Rejeição 7: Imagem Muito Escura ou Muito Clara

**Sinalização:** "Imagem rejeitada — qualidade de imagem insuficiente"

Causa: foto com pouca luz, foto com exposição demais

**Solução:**
- Teste de contraste: produto diferencia de fundo? Sim = boa
- Ajuste em Photoshop: Curves/Levels para melhorar contraste
- Studio: use luz difusa (fundo branco + 2 luzes laterais)

### Rejeição 8: JPEG Comprimido Demais

**Sinalização:** "Imagem rejeitada — artefatos de compressão detectados"

Causa: salvo em JPEG com qualidade <70%

**Solução:**
- Re-exporte JPEG com qualidade 80-85%
- Teste: zoom 200% — vê "blocos" de cor? Muito comprimido. Re-exporte.

### Rejeição 9: Imagem Desforada (Blurry)

**Sinalização:** "Imagem rejeitada — foco insuficiente"

Causa: fotografia com movimento, lente desforada

**Solução:**
- Use tripé + timer (evita tremor manual)
- Focus: aponte para centro do produto (ou use auto-focus)
- Teste: zoom 100% — texto/etiqueta nítido? Se sim, bom foco

### Rejeição 10: Imagem Girada/Distorcida

**Sinalização:** "Imagem rejeitada — perspectiva distorcida"

Causa: camiseta inclinada, sapato em ângulo estranho

**Solução:**
- Alinha produto: camiseta reta, calça reta, sapato de lado ou frontal
- Use grid no Photoshop (View > Grid) — alinha produto aos eixos

### Rejeição 11: Imagem com Conteúdo Indevido

**Sinalização:** "Imagem rejeitada — conteúdo não permitido"

Causa: imagem ofensiva, política, religiosa, violenta contextualizada com produto

**Solução:**
- Fotos apenas do produto em contexto neutro
- Sem frases políticas/religiosas
- Sem nudes ou sexualizado

### Rejeição 12: Foto com Modelo Muito Jovem ou Aparência Infantil

**Sinalização:** "Imagem rejeitada — política de menores"

Causa: modelo aparenta <18 anos (mesmo que seja roupa infantil)

**Solução:**
- Para roupas infantis: mostre produto em manequim ou hanger, não em modelo
- Para roupas adultas: modelo aparenta >18 anos

---

## Por Que Múltiplas Imagens Aumentam CTR 3.5x

Google testa até 10 imagens por produto. Cada imagem gera dados:
- Quantos usuários viram?
- Quantos clicaram?
- Qual imagem teve melhor engagement?

**Hierarquia de imagens recomendada:**

1. **Imagem principal (image_link):** Produto isolado, frontal, limpo
   - Deve ser melhor foto que você tem
   - Modelo: nenhum (ou máximo 30% de corpo visível)
   - Contexto: estúdio, fundo branco, iluminação profissional

2. **Imagem 2 (additional_image_link #1):** Produto em contexto
   - Modelo usando produto (se aplicável)
   - Ambiente real (não estúdio)
   - Mostra como fica em uso

3. **Imagem 3 (additional_image_link #2):** Detalhe/Textura
   - Close-up de material (trama de algodão, brilho de seda)
   - Costuras, gola, detalhes
   - Zoom 150-200%

4. **Imagem 4 (additional_image_link #3):** Variação (cor, ângulo)
   - Se camiseta azul: mostra lado, costas
   - Se calça: detalhe de bolso, zíper
   - Se sapato: lado, acima, abaixo

5. **Imagem 5+:** Composições, lookbooks
   - Camiseta com calça recomendada (outfits)
   - Esticada vs enrugada (diferencial)
   - Detalhes de etiqueta (tamanho, cuidado)

**Teste A/B:** Google mostra diferentes imagens para diferentes usuários. Após 2 semanas, veja "Relatório de Ativos" — qual imagem teve mais cliques? Boost bid.

---

## Caso Real: Loja de Moda Que 2.5x'd CTR Atualizando Imagens

Uma loja de moda em Brasília tinha imagens de website (muito "styled", modelos, fundos coloridos).

**Antes:**
- Imagens: mesma da website (800x600px, modelos ocupando 80%, fundo cinza)
- Rejeições: 23% dos produtos
- CTR: 0,3%
- Motivo: "Imagem rejeitada — isolamento insuficiente", "Imagem rejeitada — produto como fundo"

**Ação: Re-fotografia**
- Studio simples: pano branco, tripé, luz LED
- Re-fotografou todos os produtos: produto isolado, 1.200x1.200px
- Adicionar 3 imagens por produto: contexto, detalhe, ângulo
- JPEG qualidade 82%

**Depois:**
- Rejeições: 23% → 2% (apenas 1 erro que não conseguiu corrigir)
- CTR: 0,3% → 0,75% (2.5x)
- Conversão: aumentou 40%
- ROAS: R$1,10 → R$2,20

---

## Ferramenta: Checklist de Imagem

Para cada imagem, valide:

```
☐ Dimensões: 1.200x1.200px ou maior
☐ Formato: JPEG (80-85% qualidade) ou PNG
☐ Fundo: Branco (RGB 255,255,255) ou cinza neutro
☐ Sem marca d'água ou logo da loja
☐ Sem texto promocional
☐ Produto inteiro visível (não cortado)
☐ Se modelo: máximo 50% da imagem
☐ Contraste: produto diferencia de fundo
☐ Foco: nítido em zoom 100%
☐ Alinhado: produto reto, não girado
☐ Sem artefatos: nenhum "pixelado" visível em zoom
☐ Sem conteúdo ofensivo ou político
```

---

## Próximos Passos: Audit de Imagens

1. Exporte feed do Nuvemshop
2. Verifique em Merchant Center: "Qualidade do Catálogo" → marque erros de imagem
3. Para cada erro, identifique categoria (muito pequena? Fundo ruim? Marca d'água?)
4. Priorize: corrigir imagens de produtos >10 vendas/semana primeiro
5. Re-fotografia: use dicas de studio acima (pode ser caseiro)
6. Re-upload: image_link + 3-5 additional_image_link por produto
7. Monitore CTR: mínimo 0,5%, ideal 0,8-1,2%

[Valide imagens de moda automaticamente com FeedFlow](https://feed-flow.app/auth/signup)
