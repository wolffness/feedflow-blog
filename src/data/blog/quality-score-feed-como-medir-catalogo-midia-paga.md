---
title: "Quality Score de feed: o que medir para saber se seu catálogo está pronto para mídia paga"
description: "Framework prático para avaliar a qualidade do seu feed de produtos em 3 dimensões. Scorecard e checklist para preparar seu catálogo antes de investir em Google Shopping e Meta Ads."
pubDatetime: 2026-04-06T10:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/4975666/pexels-photo-4975666.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - troubleshooting
  - merchant-center
  - nuvemshop
  - feed-de-produtos
author: "FeedFlow"
---

Você está prestes a investir em **Google Shopping** ou **Meta Catalog Ads** e quer saber: meu catálogo está realmente pronto? A resposta não é binária (sim ou não), mas um **quality score de feed** que mede três dimensões críticas.

Neste artigo você vai aprender a avaliar seu catálogo como um profissional de e-commerce faria — com um framework estruturado que você pode aplicar **hoje mesmo** no seu próprio negócio.

## O que é Quality Score de feed (e por que importa)

Imagine que seu **quality score é a nota do seu catálogo** antes de ele aparecer nos anúncios pagos. Quanto maior, melhor o desempenho. Quanto menor, mais dinheiro você queima em cliques inúteis e menos conversão ganha.

Meta e Google **não divulgam o algoritmo exato** de ranking de qualidade (é confidencial), mas sabemos que avaliam:

1. **Completude** — campos obrigatórios preenchidos + campos recomendados preenchidos
2. **Precisão** — dados do feed batem com o que está no site (sem enganação)
3. **Otimização** — título, imagem e descrição em nível de excelência, não amador

Um catálogo com score baixo não aparece em posição premium, sofre com custo por clique (CPC) alto e taxa de conversão baixa. Um com score alto? Aprova rápido e tira proveito do efeito riqueza (mais vendas = mais budget liberado).

## Framework: 3 dimensões do Quality Score

### 1. Completude (Peso: 35%)

**Pergunta central:** Seus produtos têm os dados que Meta e Google precisam para renderizar anúncio profissional?

#### Campos obrigatórios (nota ≤50)
Se faltam estes, o anúncio nem aparece:

- `id` — código único do produto (SKU, EAN ou ID interno)
- `title` — título do produto (≤70 caracteres, melhor <50)
- `description` — descrição (≤5.000 caracteres, melhor 200-300)
- `image_link` — URL da imagem principal
- `price` — preço em formato válido (ex: `99.90 BRL`)
- `availability` — status (in stock, out of stock, preorder)
- `link` — URL do produto no seu site (sem UTM, sem redirect)

#### Campos recomendados (nota 51-85)
Aumentam clique-through rate (CTR) e taxa de conversão:

- `additional_image_link` — 3 a 5 fotos extras (carousel em Meta)
- `product_type` — categoria hierárquica (`Eletrônicos > Smartphones > iPhone`)
- `brand` — marca do produto
- `color` — cor (quando aplicável)
- `size` — tamanho (quando aplicável)
- `material` — material (quando aplicável)
- `mpn` — número de peça do fabricante
- `gtin` — código de barras (EAN, UPC)
- `condition` — condição (new, refurbished, used)

#### Campos premium (nota 86-100)
Diferenciam seu anúncio da concorrência:

- `sale_price` — preço em promoção
- `sale_price_effective_date` — data da promoção
- `shipping` — frete + custo
- `shipping_weight` — peso em kg (otimiza entrega)
- `custom_label_[0-4]` — até 5 etiquetas personalizadas (segmentação interna)
- `promotion_id` — vincular a cupom/promoção

**Exemplo prático — Produto com score 45/100:**
```
id: SKU12345
title: Jaqueta de Couro Masculina
description: Jaqueta de couro genuíno, tamanho M
image_link: https://seu-site.com/images/jaq.jpg
price: 299.90 BRL
availability: in stock
link: https://seu-site.com/produtos/jaqueta-couro
```
❌ Faltam: brand, color, additional_image_link, shipping, gtin

**Exemplo prático — Produto com score 92/100:**
```
id: SKU12345
title: Jaqueta de Couro Masculina Marrom — Tamanho M
description: Jaqueta de couro genuíno premium, forro 100% algodão, costura reforçada. Disponível P, M, G, GG. Ajuste italiano. Ideal para inverno.
image_link: https://seu-site.com/images/jaq-1.jpg
additional_image_link: https://seu-site.com/images/jaq-2.jpg | https://seu-site.com/images/jaq-3.jpg | https://seu-site.com/images/jaq-4.jpg
price: 299.90 BRL
sale_price: 249.90 BRL
sale_price_effective_date: 2026-04-01/2026-04-30
brand: Leather Co.
color: Marrom
size: M
material: Couro Genuíno
gtin: 1234567890123
availability: in stock
link: https://seu-site.com/produtos/jaqueta-couro-m
shipping: 25.00 BRL
custom_label_0: promocao_abril
custom_label_1: frete_gratis
```
✓ Completo, pronto para mídia paga.

### 2. Precisão (Peso: 40%)

**Pergunta central:** Os dados do feed batem **exatamente** com o que o cliente vê no seu site?

Quando há discrepâncias, Meta e Google **sinalizam seu catálogo** e baixam a confiança. Custo por clique sobe, e o cliente se arrepende da compra (taxa de devolução sobe).

#### Checklist de precisão

- ✓ **Preço no feed = preço no site** (no mesmo horário)
  - Muitas lojas usam preço dinâmico. Se o feed mostra R$ 100 e o site mostra R$ 150, é bloqueador de conversão.
  - Solução: sincronizar feed a cada 6h (no máximo 24h)

- ✓ **Título no feed ≤ título real**
  - Feed diz "Jaqueta Couro Marrom" → site não pode estar "Jaqueta de Couro Masculina Premium Marrom Tamanho M"
  - Ok se título site é mais longo; não ok se diferente

- ✓ **Imagem no feed = imagem em destaque no site**
  - Cliente vê jaqueta marrom no anúncio → abre o site → vê jaqueta azul = conversão perdida
  - Use sempre foto do ângulo principal (frontal, sem pessoas)

- ✓ **Estoque no feed = estoque no site (em tempo real)**
  - Se feed diz "in stock" e site diz "fora de estoque", o cliente clica, fica frustrado, sai
  - Atualizar a cada 1h (crítico)

- ✓ **URL no feed leva exatamente ao produto (sem redirect)**
  - URL feed: `https://seu-site.com/produtos/jaqueta-couro-m`
  - Após 301 redirects: vai pra página inicial = conversão perdida
  - Teste: copie a URL do feed, cole no navegador, veja aonde para

- ✓ **Sem enganação nas descrições**
  - Feed não pode dizer "Frete grátis" se o site cobra
  - Feed não pode dizer "Produto original" se é falsificado
  - Auditoria Meta/Google penaliza discrepâncias

#### Estratégia de sincronização recomendada

| Dados | Frequência | Ferramenta |
|-------|-----------|-----------|
| Preço, estoque | A cada 1-6h | API nativa ou webhook |
| Título, descrição | 1x por dia | SFTP/API batch |
| Imagens | 1x por semana | FTP/API (mudar é caro) |
| Atributos (cor, tamanho) | 1x por semana | API batch |

### 3. Otimização (Peso: 25%)

**Pergunta central:** Seu título, imagem e descrição estão em nível de excelência para **atrair clique**?

Aqui você não compete com Meta/Google — compete com seus **concorrentes diretos** que também anunciam nesta plataforma. Meta e Google mostram lado a lado: qual anúncio o cliente clica?

#### Título (impacto máximo em CTR)

❌ Ruim (genérico):
```
Jaqueta
```

❌ Ruim (cheio de jargão):
```
JQT-COURO-MASC-TAM-MARROM-FRETE-PROMO-50OFF
```

✓ Bom (estruturado):
```
Jaqueta de Couro Genuíno Masculina Marrom — Frete Grátis
```

**Fórmula testada:**
```
[Tipo] + [Material/Qualidade] + [Atributo 1] + [Atributo 2] + [Benefício urgente]
```

Exemplos por categoria:

1. **Eletrônicos**
   - ✓ "iPhone 15 Pro Max Titânio 256GB — 12x sem juros"
   
2. **Moda**
   - ✓ "Camiseta Básica 100% Algodão Preta — Tamanho P/M/G"
   
3. **Casa & Jardim**
   - ✓ "Luminária Neon LED Azul 60cm — Controle Remoto Grátis"
   
4. **Livros/Conteúdo**
   - ✓ "Guia Completo de E-commerce 2024 — PDF + 5 Templates"

#### Imagem (impacto máximo em conversão)

❌ Ruim:
- Fundo branco sem contraste
- Modelo de roupa desconfortável (pose estranha)
- Múltiplos produtos na mesma foto
- Marca d'água ou logo em 30% da imagem
- Qualidade <1000px de largura

✓ Bom:
- Fundo limpo ou branco com levíssima sombra
- Produto em ângulo frontal, bem iluminado
- Detalhes visíveis (textura, padrão, cor)
- 100% espaço pro produto (sem pessoas, sem props)
- Mínimo 1200px de largura (retina display)

**Checklist de imagem:**
- [ ] Resolução ≥1200px
- [ ] Produto ocupa 70-85% do frame
- [ ] Fundo neutro (branco ou tom claro)
- [ ] Sem watermark maior que 5% da imagem
- [ ] Sem modelo (pessoas) nas fotos principais
- [ ] Cor real (não super-saturada em Photoshop)
- [ ] Sem efeitos (blur, vignette, filtro)

#### Descrição (impacto médio em conversão)

❌ Ruim (muito curta):
```
Jaqueta de couro.
```

❌ Ruim (muito longa/spam):
```
A MELHOR JAQUETA DO MUNDO PROMOÇÃO PROMOÇÃO PROMOÇÃO 50% OFF CLIQUE AQUI CLIQUE AGORA APROVEITE ANTES QUE ACABE!!!
```

✓ Bom (200-300 caracteres):
```
Jaqueta de couro genuíno com forro em algodão. Costura reforçada, ajuste italiano, ideal para inverno. Disponível em P, M, G, GG. Frete grátis acima de R$150.
```

**Estrutura de descrição ótima:**
1. Linha 1: O que é (produto + material)
2. Linha 2: Benefícios principais (resistência, conforto, durabilidade)
3. Linha 3: Variações disponíveis (tamanhos, cores)
4. Linha 4: Promoção/Benefício urgente (frete grátis, parcelamento)

---

## Scorecard prático: Calcule seu Quality Score

Acima você aprendeu a avaliar suas 3 dimensões. Agora **quantifique**.

### Passo 1: Escolha 5 produtos aleatoriamente (não é cherry-picking)

Pegue 5 produtos do seu catálogo **sem escolher** (aleatoriamente). Eles devem representar seus bestsellers + produtos lentos, para média realista.

### Passo 2: Preencha a planilha

| Dimensão | Critério | Seu Produto 1 | Seu Produto 2 | Seu Produto 3 | Seu Produto 4 | Seu Produto 5 | Média |
|----------|----------|---|---|---|---|---|---|
| **Completude (35%)** | Todos obrigatórios preenchidos (id, title, desc, img, price, link) | 10 | 10 | 8 | 5 | 10 | 8.6 |
| | ≥5 campos recomendados | 8 | 6 | 4 | 0 | 8 | 5.2 |
| | ≥3 campos premium (sale_price, shipping, promo) | 6 | 4 | 0 | 0 | 6 | 3.2 |
| | **Subtotal Completude** | 24 | 20 | 12 | 5 | 24 | **17 / 30** |
| **Precisão (40%)** | Preço feed = preço site | 10 | 10 | 10 | 8 | 10 | 9.6 |
| | Estoque feed = estoque site | 10 | 10 | 8 | 0 | 10 | 7.6 |
| | Título feed ⊆ título site | 10 | 8 | 8 | 5 | 10 | 8.2 |
| | Imagem feed = imagem principal site | 10 | 10 | 10 | 0 | 10 | 8.0 |
| | URL sem redirect + funcional | 10 | 10 | 10 | 0 | 10 | 8.0 |
| | **Subtotal Precisão** | 50 | 48 | 46 | 13 | 50 | **41.4 / 50** |
| **Otimização (25%)** | Título estruturado (tipo + atributos + benefício) | 8 | 6 | 4 | 0 | 10 | 5.6 |
| | Imagem >1200px, clara, produto 70-85% | 8 | 4 | 4 | 0 | 10 | 5.2 |
| | Descrição 200-300 chars, benefícios + CTA | 6 | 4 | 2 | 0 | 8 | 4.0 |
| | **Subtotal Otimização** | 22 | 14 | 10 | 0 | 28 | **14.8 / 25** |
| | | | | | | | |
| **QUALITY SCORE TOTAL** | **(Completude × 0,35) + (Precisão × 0,40) + (Otimização × 0,25)** | | | | | | **73 / 100** |

### Passo 3: Interprete seu score

- **0-40:** Catálogo crítico. Não invista em mídia paga ainda. Dedique 2-4 semanas a arrumar obrigatórios.
- **41-60:** Catálogo básico. Sua conversão será 30-40% abaixo do potencial. Comece com orçamento baixo (R$100/dia) enquanto otimiza.
- **61-80:** Catálogo bom. Você está preparado. Suba orçamento gradualmente enquanto continua otimizando.
- **81-100:** Catálogo excelente. Seu ROI será máximo. Invista confiante.

---

## Checklist de ação: Prepare seu catálogo em 15 passos

Use este checklist para melhorar seu score **esta semana**:

1. ☐ Auditoria: escolha 5 produtos aleatórios e calcule seu score (use a planilha acima)

2. ☐ Completude: adicione `gtin` (código de barras) para ≥90% dos produtos. Se não tem, use EAN do fornecedor

3. ☐ Completude: preencha `brand` para todos os produtos (nunca deixe em branco)

4. ☐ Completude: adicione `product_type` em formato hierárquico (ex: "Eletrônicos > Smartphones > iPhone")

5. ☐ Completude: estenda `description` para 200-300 caracteres (não menos, não mais)

6. ☐ Precisão: sincronize preço com seu ERP/sistema de gestão. Frequência mínima: 6h

7. ☐ Precisão: sincronize estoque em tempo real (crítico para Meta/Google)

8. ☐ Precisão: teste 10 URLs do feed — todas devem abrir o produto correto (sem redirects)

9. ☐ Precisão: compare preço feed vs site para mesmos 5 produtos — devem ser idênticos

10. ☐ Otimização: reescreva titulo de ≥30 produtos de maior volume. Fórmula: tipo + material + atributo + benefício

11. ☐ Otimização: substitua imagens menores que 1200px por versões em alta resolução

12. ☐ Otimização: remova watermarks ou logos que ocupem >5% da imagem

13. ☐ Otimização: para produtos em promoção, preencha `sale_price` e `sale_price_effective_date`

14. ☐ Otimização: crie 2-3 etiquetas personalizadas em `custom_label_0` (ex: "promocao_abril", "frete_gratis")

15. ☐ Validação: recalcule seu score após 2 semanas. Meta: sair de 60 → 75+

---

## Por que isso importa para sua margem

Cada 10 pontos de aumento no Quality Score resulta em:

- **CPC -15%:** Você gasta menos por clique
- **CTR +20%:** Mais pessoas clicam no seu anúncio
- **Conversão +8%:** Melhor experiência = menos devoluções
- **ROAS +40%:** Seu retorno por real gasto sobe

Se você investe R$10.000/mês em Google Shopping com score 50, esperava R$30.000 em vendas (ROAS 3:1). Com score 80, você consegue o **mesmo ROAS gastando apenas R$7.000** (ou manter os R$10.000 e gerar R$42.000 em vendas).

---

## O FeedFlow mede seu Quality Score em tempo real

Aqui na FeedFlow, **você não precisa calcular manualmente**. Nossa plataforma **mostra seu score automaticamente** para cada feed, atualizado a cada sincronização.

Você vê:
- Completude de cada produto (% de campos preenchidos)
- Problemas de precisão (preço desatualizado, URL quebrada, estoque fora de sync)
- Sugestões de otimização (título muito curto, imagem muito pequena)

Tudo em um dashboard intuitivo. Não é teoria — é **ação em tempo real**.

[O FeedFlow mostra seu quality score em tempo real](https://feed-flow.app/auth/signup)
