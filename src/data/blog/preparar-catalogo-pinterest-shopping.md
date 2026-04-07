---
title: "Pinterest Shopping: Como Usar Seu Catálogo de Google Sem Retrabalho"
description: "Pinterest Shopping: reutilizar feed Google, atributos críticos, setup Commerce Manager Pinterest, case 340% ROI."
pubDatetime: 2026-04-01T10:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/6207736/pexels-photo-6207736.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - pinterest
  - shopping
  - catalogo
  - multi-canal
  - e-commerce
author: "FeedFlow"
---

## Pinterest Shopping: A Oportunidade Menos Explorada em Moda (340% ROI vs Google 120%)

Pinterest é a plataforma esquecida de vendas para moda. 97% das lojas de vestuário rodas Google Shopping + Instagram Shopping e ignoram Pinterest completamente.

Mas a verdade é brutal: usuárias que clicam em Pinterest convertem 2.8x melhor que Google Shopping e têm maior lifetime value (compram mais vezes).

**Por quê?** Porque usuária de Pinterest não está "buscando agora" — está inspirando-se, salvando ideias, planejando. Quando clica em "Comprar", é decisão quase pronta.

A boa notícia: você pode reutilizar 95% do seu feed Google Shopping no Pinterest. Nenhum retrabalho. Este artigo mostra exatamente como.

---

## Pinterest Shopping vs Google Shopping: Quem Converte Melhor?

### Usuária Típica

**Google Shopping:**
- Busca "camiseta branca feminina P"
- Intent: compra imediata (15-30 min)
- Tá acelerada, quer rápido
- Taxa de conversão: 2-3%
- Lifetime value: R$150-250

**Pinterest:**
- Clica em pin de camiseta branca em outfit
- Intent: inspiração → possível compra (alguns dias depois)
- Tá relaxada, navegando, salvando
- Taxa de conversão: 5-8%
- Lifetime value: R$350-600 (2.8x melhor)

**ROAS Comparado:**
- Google Shopping: 1,2-2,5x
- Pinterest Shopping: 3,4-5,8x (2-3x melhor)

Razão: Pinterest treina IA em "estilo visual" e "contexto inspirador". Sua camiseta não compete com 500 anúncios genéricos — compete com lifestyle, outfit completo, mood.

---

## Diferenças Técnicas: Google → Pinterest Feed

Boas notícias: 90% do feed Google funciona direto no Pinterest. Mas 5 campos precisam ajuste.

### O que muda (Mínimo)

**1. Imagens:** Pinterest exige imagem com proporção 1:1.5 (portrait, não quadrado)
- Google: 1.200x1.200px quadrado ✓
- Pinterest: 1.200x1.800px portrait (ideal)
- Solução: mantenha ambas em feed, Pinterest usa additional_image_link

**2. Descrição:** Pinterest quer descrição emocional/inspiradora
- Google: "100% algodão, lavar 30°C" (técnica)
- Pinterest: "Camiseta que combina com tudo. Macia, durável, perfeita para looks casual e sofisticado" (benefício)
- Solução: use description já otimizada (ideal para ambos)

**3. Rich Pins:** Pinterest exige structured data (JSON-LD)
- Google: feed XML é suficiente
- Pinterest: precisa markup HTML (microdados no website)
- Solução: FeedFlow gera ambos automaticamente

**4. Price & Sale Price:** Pinterest sinaliza desconto visual
- Google: price + optional sale_price
- Pinterest: sale_price (desconto) é call-to-action
- Solução: mapeie sale_price direto no feed

**5. Link: ** Pinterest quer URL com parâmetro de tracking
- Google: URL simples do produto
- Pinterest: URL + `?utm_source=pinterest&utm_medium=shopping`
- Solução: FeedFlow adiciona parâmetros automaticamente

### O que não muda

- **id, title, color, size, gender, availability** → mesmo as de Google
- **item_group_id** → Pinterest respeita agrupamento de variações
- **product_type, category** → Pinterest usa para filtragem
- **additional_image_link** → Critical no Pinterest (up to 10)

---

## Setup Pinterest Shopping: 5 Passos

### Passo 1: Criar Conta Business no Pinterest (2 min)
1. Acesse pinterest.com
2. Crie conta de negócios (business.pinterest.com)
3. Verifique website (clique no link de verificação)
4. Ative modo "Merchant" em Configurações

### Passo 2: Conectar Google Merchant Center ao Pinterest (5 min)
1. Acesse merchant.pinterest.com
2. Clique em "Conectar Catálogo"
3. Escolha: upload manual via XML ou conectar GMC
4. Recomendado: **conectar GMC direto** (sincroniza automaticamente)
5. Pinterest puxa feed do seu Merchant Center cada 24h

### Passo 3: Validar Catálogo no Pinterest (30 min)
1. Vá a "Qualidade do Catálogo"
2. Pinterest mostra erros similares a Google (imagem rejeitada, preço faltando)
3. Erros comuns em moda:
   - Imagem muito pequena (<300px)
   - Fundo colorido demais
   - Título genérico
4. Corrija no Nuvemshop → re-exporte → re-upload

### Passo 4: Criar Campanha Shopping no Pinterest Ads (15 min)
1. Acesse Pinterest Ads Manager
2. Crie campanha: objetivo = "Traffic" ou "Conversions"
3. Selecione catálogo (o que você carregou)
4. Orçamento: comece com R$500/mês (teste)
5. Público: mulheres 25-45, interesse em moda

### Passo 5: Monitorar Performance (ongoing)
- **Impressões:** esperado 1.000-5.000/dia em teste
- **Cliques:** CTR ideal 1,5-4% (vs Google 0,5-1%)
- **Conversão:** rastrear via Pixel Pinterest no website
- **ROAS:** após 15 dias, espera-se 2-4x (melhor que Google)

---

## Mapeamento: Feed Google → Pinterest (Lado a Lado)

```
GOOGLE (XML)                    →  PINTEREST (mesmo feed ou ajustado)
id: CAMISA-001-AZUL-P           →  id: CAMISA-001-AZUL-P
title: Camiseta Aramis...       →  title: (mesmo)
description: Algodão premium... →  description: (expandir para benefício)
price: 89,90 BRL                →  sale_price: 89,90 BRL
image_link: 1200x1200 (square)  →  image_link: 1200x1800 (portrait, se possível)
additional_image_link: (5 imgs) →  additional_image_link: (7-10 imgs, portrait)
color: Azul                     →  color: (mesmo)
size: P                         →  size: (mesmo)
item_group_id: CAMISA-001       →  item_group_id: (mesmo)
availability: in stock          →  availability: (mesmo)
```

---

## Caso Real: Loja de Moda Que Descobriu Pinterest Como 2º Maior Canal

Uma loja em Salvador vendendo vestidos e tops femininos tinha:

**Antes (só Google + Instagram):**
- Google Shopping: R$1.500/mês de orçamento, 2,1x ROAS = R$3.150 receita
- Instagram Shopping: R$500/mês, 1,8x ROAS = R$900 receita
- Total: R$2.000/mês de gasto = R$4.050 receita

**Descobriu Pinterest:**
- Reaproveitou feed Google (0 retrabalho)
- Ajustou imagens: portrait 1200x1800
- Lançou campanha Pinterest: R$1.000/mês
- Resultado (primeiro mês): R$1.000 × 3,4x ROAS = R$3.400 receita

**Depois (3 meses):**
- Google Shopping: R$1.500 → R$1.200 (mudou mix, não reduziu)
- Instagram Shopping: R$500 → R$600 (cresceu)
- Pinterest Shopping: R$1.000 → R$2.500 (escalou agressivamente)
- Total gasto: R$4.300/mês
- Total receita: R$3.150 + R$1.080 + R$8.500 = R$12.730

**ROI:** R$4.300 gasto = R$12.730 receita = 2,96x ROAS (vs 2.02x sem Pinterest)

**Insight:** Pinterest é canal "eficiente" — usuárias já meio decididas, conversão 2.8x melhor. Ideal para escalabilidade.

---

## Diferenças Críticas: Por Que Pinterest Não Pisa em Google

**Google Shopping** domina "bottom of funnel" — usuária pronta para comprar agora.

**Pinterest** domina "consideration fase" — usuária inspecionando, comparando, salvando.

Não competem. Complementam.

Estratégia ideal:

```
Orçamento: R$3.000/mês

Google Shopping (80%) ← bottom of funnel (compra imediata)
├─ R$2.400/mês
├─ ROAS esperado: 2-2,5x
├─ Conversão: 60% do total

Pinterest Shopping (20%) ← consideration (inspiração → compra futura)
├─ R$600/mês
├─ ROAS esperado: 3-4x
├─ Conversão: 25% do total (mas lifetime value 2.8x melhor)
```

---

## Checklist: Pinterest Shopping Pronto

```
☐ Conta Pinterest Business criada
☐ Website verificado em Pinterest
☐ Catálogo carregado (via GMC ou upload direto)
☐ "Qualidade do Catálogo" validada (mínimo 85% aprovado)
☐ Imagens em proporção adequada (1.200x1.800 portrait, ideal)
☐ Descrição enriquecida (benefício, não técnica)
☐ Preço com sale_price mapeado
☐ Color, size, item_group_id configurados
☐ Pixel Pinterest instalado no website
☐ Campanha Shopping criada em Pinterest Ads
☐ Orçamento definido (recomendado: 15-25% do gasto total em Google)
☐ Objetivo: Traffic ou Conversions (testar ambos)
☐ Monitorar ROAS por semana (meta: 3-4x)
```

---

## Próximos Passos: Lançar em 1 Dia

1. Exporte seu feed Google (já valido, com imagens)
2. Crie conta Pinterest Business + verifique website
3. Carregue catálogo (conectar ao Merchant Center = automático)
4. Valide qualidade (30 min de ajustes)
5. Crie primeira campanha Shopping (budget: R$500-1.000)
6. Monitore: após 15 dias, analise ROAS
7. Se ROAS > 2.5x, scale budget

Tempo total: 2-3 horas (sem retrabalho em feed).

[Configure Pinterest Shopping em minutos com FeedFlow](https://feed-flow.app/auth/signup)
