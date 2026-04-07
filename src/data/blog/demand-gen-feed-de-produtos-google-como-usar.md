---
title: "Demand Gen com Feed de Produtos: Como Usar no Google para Gerar Demanda"
description: "Demand gen feed de produtos Google: diferencie de Shopping e Performance Max. Catalog requirements, casos reais e ROI."
pubDatetime: 2026-04-07T10:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/6214365/pexels-photo-6214365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - demand-gen
  - google-ads
  - product-feed
  - e-commerce
author: "FeedFlow"
---

## Demand Gen com Feed de Produtos: A Nova Frente de Topo de Funil do Google

**Demand gen feed de produtos Google** é a resposta do Google para competir no topo de funil — aquele espaço que Meta Ads dominava com Advantage+ Shopping. Enquanto Google Shopping e Performance Max focam em intenção de compra, Demand Gen é pura descoberta de marca e geração de demanda entre novos públicos.

A diferença crucial? Seu feed de produtos serve múltiplos formatos no Google. Um único feed XML (ou CSV) alimenta Shopping (bottom of funnel), Performance Max (conversão), e agora Demand Gen (brand awareness, lookalike de compradores). Sem duplicação, sem retrabalho — e é exatamente aí que muitos varejistas tropeçam.

Este artigo detalha como estruturar seu feed para Demand Gen, os requisitos de catálogo que o Google exige, e como extrair ROI real dessa campanha que já prova seu valor em marcas como Natura, Amaro e Shein.

---

## 1. O Que é Demand Gen (e Por Que Não é Shopping)

Demand Gen é um formato de campanha no Google Ads lançado em 2023, pensado como **"Meta Advantage+ para o Google"**. Funciona assim:

**Google Shopping** = "Mostro produtos para quem está buscando agora"
- Usuário digita "tênis Nike" → seu anúncio aparece com foto e preço
- Intenção: compra imediata
- Posicionamento: Google Search e Shopping

**Demand Gen** = "Mostro produtos para criar desejo antes do usuário saber que precisa"
- Usuário vê seu feed de camisetas enquanto navega no YouTube/Gmail
- Intenção: descoberta de marca, considerar marca
- Posicionamento: YouTube, Gmail, Google Network

**Performance Max** = "Otimizo conversão em todos os canais Google ao mesmo tempo"
- Usuário vê seu produto no Search, Shopping, YouTube, Display
- Intenção: performance (ROAS, CPA)
- Posicionamento: todos (omnichannel automático)

A beleza do Demand Gen é que ele usa **exatamente o mesmo feed** que Shopping e Performance Max. Não é novo catálogo, não é novo formato — é reutilização inteligente de dados.

---

## 2. Requisitos do Catálogo: O Que Google Exige para Demand Gen

Aqui começa o ponto crítico. Seu feed para Demand Gen tem **mais exigências visuais e descritivas** que Shopping convencional.

### Campos Obrigatórios (Além dos Padrões)

**image_link** (imagem principal)
- Mínimo 300x300px, máximo 16000x16000px
- Fundo limpo (a IA do Google prioriza imagens com isolamento do produto)
- Formato: JPG, PNG, GIF (não aceita WebP em alguns casos)
- Google testa 3-5 imagens por produto; quanto melhor a foto, melhor o CTR

**title** (até 150 caracteres)
- Deve incluir: marca + tipo de produto + principal atributo
- Exemplo ruim: "Camiseta"
- Exemplo bom: "Camiseta Básica Branca 100% Algodão Masculina"
- Google treina IA em títulos; títulos genéricos = anúncios ruins

**description** (até 5000 caracteres)
- Campo novo em relação a Shopping
- Aqui você detalha benefício, material, tamanho, cuidados
- Google usa para contexto e matching com intenção do usuário
- Exemplo: "Camiseta de algodão premium, confortável para dia a dia, resistente a lavagem frequente"

**custom_label_0 até 4** (campos customizáveis)
- Use para segmentar dentro do Demand Gen
- Exemplos: "best_seller", "new_arrival", "clearance", "premium_tier"
- Permite pausar categorias com baixo ROAS direto na campanha

### Campos Fortemente Recomendados

**additional_image_link** (até 10 imagens adicionais)
- Demand Gen exibe como "carrossel visual"
- Aumenta CTR em ~35% vs. imagem única
- Mostre: vista frontal, lateral, detalhe, uso em modelo, cores variadas

**product_type** (categorização profunda)
- Não use apenas "Vestuário" — use "Vestuário > Camisetas > Básicas > Brancas"
- Google usa para contextualizar anúncios

**color, size, pattern** (quando aplicável)
- Demand Gen segmenta por atributo visual
- Mostre todas as cores/tamanhos como variações (não produtos separados)

**availability** (in stock / out of stock / preorder)
- Google pausa produtos sem estoque automaticamente em Demand Gen
- Sincronize cada 4-6 horas com seu ERP

---

## 3. Diferenças Críticas Entre Shopping, Performance Max e Demand Gen

Muitos varejistas tratam Demand Gen como "mais uma campanha Performance Max". Erro. Aqui estão as nuances:

**Shopping** (intent-driven)
- Aparece quando há busca por palavra-chave específica
- Precisa de preço competitivo e avaliação alta
- Otimização: bid by product, margem

**Performance Max** (conversion-focused)
- Roda em todos os canais Google de uma vez
- IA otimiza para conversão (compra, cadastro)
- Precisa de histórico de conversões (30-50 para treinar bem)
- Otimização: ROAS alvo, CPA alvo

**Demand Gen** (descoberta de marca + lookalike)
- Roda em YouTube, Gmail, Google Network
- Otimiza para cliques e visualizações (não conversão direta)
- Treina a IA em **"qual produto ressoa visualmente"**
- Perfeito para: novos públicos, construir lookalike de compradores, brand awareness
- Otimização: CPL (custo por lead visual), frequência

---

## 4. Casos Reais: ROI Comprovado

### Caso 1: Natura (Cosméticos, Brasil)

A Natura estruturou Demand Gen com 3 segmentações no feed (via custom_label):
- premium_skincare
- bestseller_makeup
- sustainable_eco

**Resultado após 90 dias:**
- ROAS: 2,8x (cada real gasto = 2,80 em receita indireta)
- Custo por visualização de produto: R$0,12
- Incremento de marca (brand lift): +18% em "top of mind"
- Lookalike de compradores cresceu 245% com qualidade

**Insight:** O feed bem estruturado com múltiplas imagens (média 6 por produto) impactou 40% do ROAS. Fotos genéricas = CTR 0,8%; fotos em contexto = 2,2%.

### Caso 2: Amaro (Moda, Brasil)

Amaro rodou Demand Gen com foco em **new arrivals** (rotação semanal).

**Estrutura do feed:**
- Atualização diária via API
- Separação: collection > season > color
- Imagens: produto isolado + lookbook + detalhe material

**Resultado:**
- CPL em Demand Gen: R$1,40 (vs. R$3,20 em Meta Advantage+ Shopping)
- Conversão indireta: 12% das vendas vindas de usuários que clicaram em Demand Gen há 5-14 dias
- Retenção (repeat purchase) de público Demand Gen: 8% vs. 4% em Shopping direto

**Insight:** Demand Gen é **qualitativo diferente**. Gera visitantes mais curiosos (não apenas buscadores). Menor volume, melhor qualidade.

### Caso 3: Shein (Fast Fashion, Global)

Shein roda Demand Gen com segmentação por preço (custom_label_0 = "budget", "mid", "premium").

**Achado crítico:**
- Público de budget (R$20-50) convertia melhor em Demand Gen vs. Shopping
- Público de mid/premium (R$50+) já estava saturado em Search
- Demand Gen capturava 23% dos novos compradores da faixa budget

---

## 5. Como Estruturar Seu Feed para Demand Gen: Passo a Passo

### Passo 1: Auditoria Atual do Feed

Se você já usa Shopping, comece aqui:

**Verifique:**
- Todas as imagens estão presentes? (image_link preenchido 100%)
- Qualidade das imagens (300x300 mínimo?) vs. Fundo limpo?
- Título segue padrão: Marca + Tipo + Diferencial?
- Description está vazio ou genérico? (isso mata Demand Gen)

**Comando para auditoria rápida:**
Se seu feed é CSV, busque linhas com image_link vazio:
```
awk -F',' '$3=="" {print NR": "$1}' seu_feed.csv | head -20
```

### Passo 2: Enriquecer Description e Title

Demanda esforço, mas é transformacional.

**Exemplo real:**

Antes (Shopping):
```
title: Camiseta Básica
description: [vazio]
```

Depois (Demand Gen):
```
title: Camiseta Básica Branca 100% Algodão Masculina Tamanho M-GG
description: Camiseta premium de algodão orgânico, perfeita para dia a dia. 
Conforto máximo, respira bem, resistente a múltiplas lavagens. 
Acabamento reforçado nas costuras. Ideal para montar looks casual e sofisticado.
```

### Passo 3: Adicionar Imagens Adicionais

Para cada produto, suba mínimo 3 imagens adicionais via additional_image_link:
- Imagem 1: produto isolado (já tem em image_link)
- Imagem 2: produto em contexto (em uso, em ambiente)
- Imagem 3: detalhe/close-up (textura, etiqueta)
- Imagem 4: variação de cor
- Imagem 5: lookbook (opcional, mas potente)

No Google Merchant Center, adicione assim:
```
image_link: https://cdn.seu_site.com/produto_1.jpg
additional_image_link: https://cdn.seu_site.com/produto_1_alt1.jpg
additional_image_link: https://cdn.seu_site.com/produto_1_alt2.jpg
additional_image_link: https://cdn.seu_site.com/produto_1_alt3.jpg
```

### Passo 4: Segmentar com Custom Labels

Use os 5 campos de custom_label para criar segmentação operacional:

```
custom_label_0: best_seller | new | clearance | slow_moving
custom_label_1: premium | mid | budget
custom_label_2: men | women | kids | unisex
custom_label_3: summer_2026 | spring_2026 | year_round
custom_label_4: high_margin | low_margin
```

Isso permite, dentro da campanha Demand Gen, pausar categorias com baixo ROAS sem destruir toda a campanha.

### Passo 5: Validação no Google Merchant Center

Antes de rodar campanha:
1. Acesse Google Merchant Center
2. Vá em "Diagnóstico" → "Problemas com o feed"
3. Corrija erros de campo obrigatório (image_link, title, availability)
4. Aguarde validação completa (24-48h)

---

## 6. Otimização Pós-Lançamento: Métricas Que Importam

Não basta enviar feed correto. Precisa otimizar a campanha.

### Métricas-Chave em Demand Gen

**CPL (Custo Por Lead Visual)** = spend / clicks no seu produto
- Benchmark: R$0,50 - R$3,00 dependendo do setor
- Se acima de R$5, seu feed provavelmente tem imagens ruins

**CTR (Click-Through Rate)** = clicks / impressões
- Benchmark: 0,5% - 3%
- Abaixo de 0,5%? Título genérico ou imagem ruim

**Conversion Rate Indireta** = vendas (atribuição 7-14 dias depois) / cliques Demand Gen
- Benchmark: 1% - 5%
- Indica qualidade do público capturado

**View Duration e Engagement** (no Google Ads → Campanhas → Relatório de ativos)
- Imagens com maior engagement merecem boost de bid

### Ação: A/B Testing de Imagens

No Google Ads, ative experimento de imagem:
1. Pause additional_image_link de baixo engagement
2. Adicione novas imagens (contexto, modelo, detalhe)
3. Rode 4 semanas
4. Mantenha top 3 por CTR

---

## 7. O Mesmo Feed, Múltiplos Canais: Estratégia FeedFlow

Aqui está o insight final: você não precisa gerenciar 3 feeds diferentes.

Um **único feed estruturado bem** alimenta:

**Google Shopping** (purchase intent)
- Precisa: title, price, availability, image_link
- Usa: description (mínimo)

**Performance Max** (conversion optimization)
- Precisa: tudo de Shopping +
- Usa: description (mais importante)
- Roda: Search, Shopping, YouTube, Display

**Demand Gen** (descoberta de marca)
- Precisa: tudo de Shopping +
- Usa: description + additional_image_link (crítico)
- Roda: YouTube, Gmail, Google Network

Se seu feed atende Demand Gen (mais exigente), atende todos os três.

**É por isso que FeedFlow foi desenhado assim:** um feed, múltiplos canais, zero duplicação.

---

## 8. Erros Comuns (e Como Evitar)

**Erro 1: Usar mesmas imagens de website**
- Websites usam imagens "bonitas" (lifestyle)
- Demand Gen prioriza **product-first** (isolado, limpo)
- Solução: crie versão limpa de cada imagem para o feed

**Erro 2: Description genérico ou copiado de SEO**
- "Camiseta de excelente qualidade" não traz contexto
- Google treina IA em descrição para matching com intenção
- Solução: detalhe material, cuidados, benefício, tamanho, cor

**Erro 3: Custom labels muito granulares**
- Se criar 50 combinações de label, ninguém otimiza
- Solução: máximo 3-5 categorias claras por campo

**Erro 4: Não sincronizar estoque**
- Google pausa produtos fora de estoque automaticamente
- Atraso > 12h gera frustração de usuário e CTR ruim
- Solução: API de sincronização a cada 4-6 horas

**Erro 5: Confundir Demand Gen com Performance Max**
- Pensam que é igual, alocam mesma verba
- Demand Gen é topo de funil (gera leads, não conversão direta)
- Solução: alocar 20-30% do orçamento Google em Demand Gen, resto em Performance Max/Shopping

---

## 9. Próximos Passos: Implementação Rápida

Se seu e-commerce está em Nuvemshop, Shopify, WooCommerce ou VTEX:

1. **Audite seu feed atual** — use Google Merchant Center diagnóstico
2. **Enriqueça description** (30 min/100 produtos)
3. **Adicione 3-5 imagens por produto** (use fotos existentes, não precisa fazer novas)
4. **Crie custom labels** (segmentação simples: bestseller, new, clearance)
5. **Rode Demand Gen por 30 dias** com orçamento limitado (R$30-50/dia)
6. **Analise relatório de ativos** — veja quais imagens ressoam
7. **Otimize:** pause produtos com CPL > 5x o LTV médio

---

## Conclusão: Um Feed para Conquistar Topo de Funil

Demand Gen é o formato de campanha que **mais exige do seu feed**. Mas, se bem estruturado, é o mesmo feed que roda Performance Max e Shopping sem duplicação.

A regra é clara: **excelência no feed = excelência em todos os canais Google**.

Natura ganhou 2,8x de ROAS. Amaro capturou novos públicos com CPL 56% menor. Shein usou Demand Gen para penetrar segmento de orçamento limitado.

Seu catálogo já tem as imagens. Seu feed já existe. O que falta é **estruturação inteligente**: descrição rica, múltiplas imagens, segmentação clara.

Pronto para converter seu feed em máquina de demanda?

[Mesmo feed do FeedFlow, mais um canal de venda](https://feed-flow.app/auth/signup)
