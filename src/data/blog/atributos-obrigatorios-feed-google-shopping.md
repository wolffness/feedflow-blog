---
title: Atributos Obrigatórios do Feed Google Shopping - Guia Completo para o Brasil
description: Referência completa de todos os campos obrigatórios, recomendados e de alto impacto para feeds de Google Shopping. Checklist para lojas brasileiras.
pubDatetime: 2026-04-05T16:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - google-shopping
  - feed-de-produtos
  - merchant-center
  - especificacao-feed
author: "FeedFlow"
---

## O que faz um feed funcionar no Google Shopping

A maioria das lojas conhece os campos "óbvios" de um feed: título, preço, imagem. Mas o Google exige muito mais. E aqui está o problema: se você deixa um campo obrigatório em branco, o produto fica reprovado sem aviso.

Se ignora um campo recomendado que importa (como GTIN ou categoria), o produto aparece em contextos errados e ninguém clica.

Este é um guia de referência. Cole aqui sempre que tiver dúvida sobre um campo.

## Campos obrigatórios (sem esses, produto não aparece)

| Campo | Descrição | Exemplo | Notas |
|-------|-----------|---------|-------|
| `id` | Identificador único do item | `SKU-12345` ou `CAMISETA-AZUL-M` | Nunca mude depois de publicado |
| `title` | Título do produto | `Camiseta Aramis Algodão Gola V Preta M` | Máx 150 caracteres |
| `description` | Descrição em texto | `100% algodão pré-encolhido. Gola V. Manga curta.` | Mín 10 caracteres, máx 5000 |
| `link` | URL do produto na loja | `https://loja.com.br/camiseta-azul` | Sem parâmetros UTM, sem encurtador |
| `image_link` | URL da imagem principal | `https://loja.com.br/images/camiseta-azul.jpg` | HTTPS, sem watermark, 250x250 mín |
| `price` | Preço em BRL | `89.90` | Sempre > 0 |
| `availability` | Status de estoque | `in_stock` ou `out_of_stock` | Use exatamente esses valores |
| `condition` | Estado do produto | `new` ou `refurbished` | 99% das lojas: `new` |

## Campos recomendados (muito impacto se preenchidos)

| Campo | Descrição | Exemplo | Por quê importa |
|-------|-----------|---------|-----------------|
| `gtin` | Código de barras (EAN) | `7894567890123` | Google valida e usa para deduplicação. Essencial se o produto tem GTIN real |
| `brand` | Marca do produto | `Aramis` | Filtro importante em Shopping. Dá contexto de qualidade |
| `google_product_category` | Categoria da taxonomia oficial Google | `Apparel & Accessories > Clothing > Shirts & Tops` | Determina onde produto aparece em buscas |
| `product_type` | Categoria interna da loja | `Camisetas \> Básicas \> Manga Curta` | Complementa google_product_category |
| `additional_image_link` | URLs de imagens adicionais | `https://loja.com.br/img2.jpg;https://loja.com.br/img3.jpg` | Até 10 imagens. Aumenta confiança |
| `sale_price` | Preço de promoção | `69.90` | Sempre menor que `price`. Mostra desconto em Shopping |
| `sale_price_effective_date` | Período da promoção | `2026-04-06T00:00/2026-04-10T23:59` | Define quando promo é válida |

## Campos ignorados por 80% das lojas (mas fazem grande diferença)

Esses não são tecnicamente obrigatórios, mas mudaram a game se preenchidos corretamente.

### **Color** 
Cor específica do item. Não "Multicolorido" — use valores exatos.
- ✓ Correto: `Black`, `Navy Blue`, `Dark Gray`
- ✗ Errado: `Multi`, `Variado`, `Colorido`

**Por quê**: Cliente busca "Camiseta preta" e seu item preta aparece. Sem cor, aparece em tudo.

### **Size**
Tamanho com unidade clara. 
- ✓ Correto: `S`, `M`, `L`, `XL` ou `PP`, `P`, `M`, `G`, `GG`
- ✗ Errado: `Único`, `One Size`, `Ajustável`

**Por quê**: Cliente filtra por tamanho na busca. Sem tamanho, não filtra corretamente.

### **Material**
Material de confecção.
- ✓ Correto: `Cotton`, `Polyester`, `Wool`, `Linen`
- ✗ Errado: `Bom`, `Resistente`, `Premium`

**Por quê**: Alérgicos a certos materiais filtram por aqui. Aumenta confiança na compra.

### **Pattern**
Padronagem ou estampa.
- ✓ Correto: `Striped`, `Solid`, `Floral`, `Plaid`, `Checkered`
- ✗ Errado: `Bonito`, `Moderno`, `Esporte`

**Por quê**: Cliente que quer "camiseta listrada" encontra a sua. Muda CPC e CTR.

### **Item_group_id**
Agrupa variantes do mesmo produto (cor/tamanho diferentes).

Se tem camiseta em preto, azul e vermelho:
- Todos os 3 itens compartilham o MESMO `item_group_id`: `CAMISETA-BASICA-001`
- Cada um tem `id` único: `CAMISETA-BASICA-001-PRETO`, `CAMISETA-BASICA-001-AZUL`, etc.
- Cada um tem `color` diferente

**Por quê**: No Shopping, aparecem agrupadas. Cliente escolhe cor/tamanho em um card só.

### **Gender**
Gênero alvo: Male, Female ou Unisex.

**Por quê**: Filtro importantíssimo em moda. "Blusa feminina" filtra por aqui.

### **Age_group**
Faixa etária: Kids, Teen, Adult, Mature.

**Por quê**: Roupa de criança é categoria separada. Sem isso, aparece junto com roupa de adulto.

## Campos por tipo de produto

### **Moda/Vestuário**
Obrigatórios extras:
- `gender` (Male, Female, Unisex)
- `size` (S, M, L ou 34, 36, 38)
- `color` (Red, Blue, Black, etc.)
- `material` (Cotton, Polyester)

Exemplo completo:
```
id: SHIRT-001-BLK-M
title: Aramis Camiseta Básica Preta Tamanho M
color: Black
size: M
gender: Female
material: Cotton
price: 89.90
gtin: 7894567890123
```

### **Eletrônicos**
Obrigatórios extras:
- `brand` (marca é crítica)
- Especificações técnicas na descrição (RAM, armazenamento, etc.)

Exemplo:
```
id: LAPTOP-DELL-001
title: Dell Inspiron 15 Intel i5 8GB RAM 256GB SSD
brand: Dell
description: Processador Intel Core i5, 8GB DDR4, SSD 256GB, Tela 15.6"
price: 3499.90
gtin: 8435490345678
```

### **Casa/Decoração**
Obrigatórios extras:
- `material`
- `color`

Exemplo:
```
id: PILLOW-GRAY-001
title: Almofada Cinza 50x50cm Veludo
color: Gray
material: Velvet
size: 50x50cm
price: 89.90
```

## Checklist: seu feed está 80% correto se tiver tudo isso

- [ ] **id**: Único por item, nunca mude
- [ ] **title**: 10-150 caracteres, sem CAPS LOCK
- [ ] **description**: Mínimo 10 caracteres
- [ ] **link**: HTTPS, sem UTM, sem redirecionamento
- [ ] **image_link**: HTTPS, 250x250+, sem watermark
- [ ] **price**: > 0 em BRL
- [ ] **availability**: `in_stock` ou `out_of_stock`
- [ ] **condition**: `new` para 99% dos casos
- [ ] **gtin**: Se o produto tem código real
- [ ] **brand**: Nome da marca (se aplicável)
- [ ] **google_product_category**: Taxonomia oficial Google
- [ ] **color/size/material** (se moda): Valores específicos, nunca genéricos
- [ ] **item_group_id**: Grupos variantes corretamente
- [ ] **gender** (se aplicável): Male, Female, Unisex
- [ ] **additional_image_link**: Até 10 imagens

## O que NUNCA fazer em um feed

- ✗ DEIXAR CAMPOS OBRIGATÓRIOS EM BRANCO
- ✗ Usar valores genéricos ("Produto", "Camiseta", "Item")
- ✗ Copiar titles e descriptions iguais de multiplos produtos
- ✗ Colocar TUDO EM MAIÚSCULAS
- ✗ Usar caracteres especiais quebrados (ç vira ?, é vira ?)
- ✗ Colocar promoção sem data de fim
- ✗ Usar item_group_id aleatorio (mesmo produto, IDs diferentes)
- ✗ Colocar preço zero ou negativo
- ✗ Esquecer google_product_category

## Validação antes de publicar

Antes de enviar seu feed para o Google Merchant Center:

1. Exporte um sample de 10 produtos
2. Valide contra o checklist acima
3. Se 10/10 estão corretos, o resto provavelmente está
4. Se 8/10, há padrão de erro — fix tudo antes de enviar

[Teste seu feed com o FeedFlow](https://feed-flow.app/auth/signup) — validamos todos os campos contra a especificação oficial do Google e você vê erros em segundos, não em dias.

## Conclusão

Os 8 campos obrigatórios são o mínimo. Mas para vencer em Google Shopping, você precisa dos campos recomendados também — especialmente `gtin`, `brand`, `google_product_category` e, para moda, `color` e `size`.

Preenchat esses 12-14 campos corretamente = feed aprovado, bom CTR, bom ROAS.

[O FeedFlow preenche automaticamente 80% dos campos obrigatórios — teste grátis por 14 dias](https://feed-flow.app/auth/signup)
