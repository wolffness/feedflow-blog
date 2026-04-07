---
title: "Filtrar Produtos Sem Estoque e Imagem do Feed: Pré-Validação Que Economiza 20h"
description: "Feed filtrado: remover produtos sem imagem, fora de estoque, antes de Google Ads, audit automático, checklist."
pubDatetime: 2026-04-01T14:30:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/5912324/pexels-photo-5912324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - feed
  - filtro
  - validacao
  - estoque
  - google-shopping
author: "FeedFlow"
---

## Por Que Enviar Produtos Sem Estoque/Imagem Para Google = Jogar Orçamento Fora

Uma loja tem 800 produtos. Google Shopping recebe feed com 800 produtos. Mas:

- 120 produtos estão fora de estoque (availability = "out of stock")
- 45 produtos não têm imagem (image_link vazio)
- 30 produtos têm preço = R$0

Google não rejeita esses produtos no upload. Aceita, carrega, mas pausa automaticamente assim que vê que tá errado.

Resultado: seus primeiros 7 dias de campanha, você está pagando por impressões de produtos que não estão à venda.

**Impacto financeiro:**
- 195 produtos pausados (24% do catálogo)
- Impressões perdidas: ~30% do esperado
- Budget em 7 dias: R$1.500 × 7 = R$10.500
- Desperdiçado: R$10.500 × 30% = R$3.150

A solução: **pré-filtrar** o feed ANTES de enviar para Google. Remove problemas, economiza tempo de re-upload.

Este artigo explica como filtrar em 5 minutos usando ferramentas simples.

---

## O Que Filtrar: 5 Critérios Obrigatórios

### 1. Disponibilidade (Estoque)

**Remover:**
- availability = "out of stock"
- availability = vazio
- availability = "preorder" (opcional, mas recomendado tirar em primeira versão)

**Manter:**
- availability = "in stock"
- availability = "backorder" (OK — Google permite)

**Por quê?** Usuário clica, vê produto indisponível, bounce. Converte 0%. Google aprende que seu site é ruim, reduz impressões.

**Filtro SQL/Excel:**
```
=IF(AND(A2="in stock", B2<>""), "MANTER", "REMOVER")
```

### 2. Imagem

**Remover:**
- image_link vazio
- image_link = "https://" (URL incompleta)
- image_link retorna 404 (imagem deletada)

**Manter:**
- image_link válido (http:// ou https://)

**Por quê?** Google mostra anúncio SEM imagem = CTR 0%. Invisível.

**Filtro rápido:**
```
=IF(LEN(A2)>10, "MANTER", "REMOVER")
```

### 3. Preço

**Remover:**
- price vazio
- price = 0
- price = "gratuito" ou "sob consulta"

**Manter:**
- price > R$5 (sanity check)

**Por quê?** Google não mostra anúncios com preço 0. Tecnicamente rejeita.

**Filtro:**
```
=IF(AND(NOT(ISBLANK(A2)), A2>5), "MANTER", "REMOVER")
```

### 4. Título

**Remover:**
- title vazio
- title < 5 palavras
- title = "Produto", "Item", "Sem título"

**Manter:**
- title 5+ palavras, descritivo

**Por quê?** Título genérico = CTR ruim, Google pausa prioritariamente.

**Filtro:**
```
=IF(LEN(A2)-LEN(SUBSTITUTE(A2," ",""))+1>=5, "MANTER", "REMOVER")
```
(conta espaços = conta palavras)

### 5. Link (URL do Produto)

**Remover:**
- link vazio
- link = homepage (URL sem SKU/ID de produto)
- link retorna 404 (página deletada)

**Manter:**
- link válido e único por produto

**Por quê?** Se link é homepage, usuário clica "Comprar" mas não sabe qual produto quer. Bounce.

**Filtro:**
```
=IF(AND(NOT(ISBLANK(A2)), LEN(A2)>30, ISNUMBER(SEARCH("produto", A2))), "MANTER", "REMOVER")
```

---

## Como Fazer Filtragem Rápida (3 Opções)

### Opção 1: Excel (15 minutos)

1. Exporte feed do Nuvemshop como CSV
2. Abra em Excel
3. Coluna M: crie fórmula que avalia os 5 critérios
4. Filtrar coluna M: manter só "MANTER"
5. Delete linhas "REMOVER"
6. Save, re-upload

**Fórmula consolidada:**
```
=IF(AND(
    A2="in stock",
    LEN(B2)>10,
    C2>5,
    LEN(A3)-LEN(SUBSTITUTE(A3," ",""))+1>=5,
    LEN(D2)>20
), "MANTER", "REMOVER")
```

### Opção 2: Google Sheets (10 minutos)

Mesma lógica Excel, mas na nuvem (compartilhável):

1. Upload CSV para Google Sheets
2. Adicione coluna com fórmula
3. Filtre
4. Download como CSV
5. Re-upload Merchant Center

Vantagem: colaborativo (você + seu time veem filtros sendo aplicados).

### Opção 3: Ferramentas Automáticas (1 minuto)

FeedFlow automatiza filtragem:
- Input: feed bruto Nuvemshop
- Output: feed filtrado (sem estoque, sem imagem, sem erros)
- Você não toca em nada

---

## Caso Real: Loja Que Descobriu 30% do Catálogo Era Inútil

Uma loja em Curitiba com 600 produtos no Nuvemshop.

**Antes (sem filtragem):**
- Subiu os 600 produtos para Google Shopping
- Resultado após 3 dias: Google pausou 180 produtos
- Motivos: 95 estavam out of stock, 60 sem imagem, 25 preço 0
- Impressões reduzidas: 40%
- Orçamento de R$1.000/semana desperdiçado: ~R$400/semana

**Descobriu filtragem:**
- Rodou script rápido: filtra os 600
- Resultado: 420 produtos válidos, 180 inúteis
- Remove os 180 do feed
- Re-upload: 420 produtos, todos "in stock" e com imagem

**Depois:**
- Google não precisou pausar nada
- Impressões: 100% esperado (vs 60% antes)
- Mesma quantidade (180 produtos removidos não vendiam nada mesmo)
- Economia: R$400/semana (deixou de desperdiçar)

---

## Checklist de Filtragem: 5 Itens Críticos

```
☐ Remover produtos: availability != "in stock"
☐ Remover produtos: image_link vazio ou inválido
☐ Remover produtos: price <= 0 ou vazio
☐ Remover produtos: title < 5 palavras
☐ Remover produtos: link = homepage ou vazio
```

---

## Próximos Passos

1. Exporte feed (Nuvemshop → Configurações → Feed)
2. Abra em Excel/Sheets
3. Crie coluna filtro (5 critérios)
4. Marque "REMOVER" nos problemáticos
5. Delete linhas "REMOVER"
6. Save como CSV
7. Re-upload Merchant Center
8. Monitore: 0 pausas nos primeiros 7 dias

[Filtre feed automaticamente com FeedFlow](https://feed-flow.app/auth/signup)
