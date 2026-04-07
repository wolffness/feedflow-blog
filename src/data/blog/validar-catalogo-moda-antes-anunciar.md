---
title: "Validar Catálogo de Moda Antes de Anunciar: 30 Checklist Items That Save R$10k"
description: "Validação catálogo Google Shopping moda: 30-item checklist, erros silenciosos, audit pré-campanha, diagnóstico automático."
pubDatetime: 2026-04-07T15:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/34069/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - google-shopping
  - validacao
  - moda
  - checklist
  - diagnostico
author: "FeedFlow"
---

## A Validação de Catálogo Que Faz Diferença: Por Que Esperar 7 Dias = Perder R$10k

Uma loja de moda começa campanha no Google Shopping com orçamento de R$1.500/dia.

**Cenário A (sem validação):**
- Dia 1-7: campanha roda
- Dia 4: Google descobre 340 produtos com erros
- Dia 4-7: 340 produtos pausados automaticamente
- Resultado: só 160 produtos visíveis (de 500)
- Impressões: 30% do esperado
- Gasto desperdiçado: R$1.500 × 7 dias × 70% = R$7.350

**Cenário B (com validação antes):**
- Pré-campanha: auditoria 2-3 horas
- Corrigir 340 produtos: 1 dia
- Dia 1: campanha roda COM 500 produtos válidos
- Impressões: 100% do esperado
- Economia: R$7.350 (+ receita que deixou de entrar)

A diferença entre validação e não validação é R$10-15k em 7 dias.

Este artigo é um guia de 30 checklist items para validar catálogo ANTES de anunciar.

---

## Os 30 Items: Checklist Completo de Validação

### Seção 1: Campos Obrigatórios (5 items)

**1. Todos os produtos têm "id" único?**
- Valide: nenhum id aparece 2x no feed
- Ferramenta: abra feed em Excel → procure duplicatas na coluna ID
- Teste rápido: `sort ID | uniq -d` (shell) — deve retornar 0 linhas

**2. Todos os produtos têm "title"?**
- Valide: 0 valores vazios na coluna title
- Mínimo: 5 palavras
- Máximo: 150 caracteres
- Teste: título <5 palavras → reescrever 20 palavras adicionais

**3. Todos os produtos têm "image_link"?**
- Valide: URL válida (comece com http:// ou https://)
- URL não deve retornar 404
- Teste: clique em 5 URLs aleatórias — carregam? Se não, fix

**4. Todos os produtos têm "price"?**
- Valide: formato "XX,XX BRL"
- Nenhum produto com price = 0 ou vazio
- Teste: preço mínimo deve ser >R$5 (anúncios muito baratos geram fraude)

**5. Todos os produtos têm "availability"?**
- Valide: valor = "in stock" ou "out of stock"
- Nenhum vazio
- Teste: conte produtos in_stock — mínimo 80% devem estar disponíveis

### Seção 2: Atributos de Moda (10 items)

**6. Todos os produtos têm "color"?**
- Valide: 0 vazios em categoria moda
- Cores em português ou inglês padrão
- Rejeito: "cor", "conforme foto", "variado"
- Teste: liste cores únicas — máximo 20 cores diferentes faz sentido? Se 200 cores, há erro de entrada

**7. Todos os produtos têm "size"?**
- Valide: 0 vazios em categoria moda
- Formato padrão (P/M/G/GG ou 35/36 ou XS/S/M/L)
- Teste: nenhum valor como "único", "tamanho único" (a menos que seja legítimo)

**8. Moda feminina tem "gender" = "female"?**
- Valide: produtos em categoria "feminino" têm gender correspondente
- Teste: filtro product_type "Feminino" → todos devem ter gender = female

**9. Moda com múltiplas cores tem "item_group_id"?**
- Valide: se mesmo produto em cores diferentes, item_group_id idêntico
- Teste: "Camiseta Azul" e "Camiseta Vermelha" = mesmo item_group_id

**10. Calçados têm "size_system"?**
- Valide: produtos categoria "Calçados" → size_system = "BR" ou "US"
- Rejeito: vazio
- Teste: nenhum calçado com size_system vazio

**11. Camisetas têm "pattern"?**
- Valide: produtos camiseta → pattern = "Sólido" ou "Estampado" ou "Floral"
- Teste: pattern vazio é aceitável (valor padrão = sólido), mas preenchido é melhor

**12. Produtos com tamanho têm "item_type"?**
- Valide: item_type = "camiseta", "calça", "vestido", etc
- Teste: lista item_type únicos — devem fazer sentido

**13. Descrição tem 20+ palavras?**
- Valide: produtos com description <20 palavras
- Teste: contar palavras — 0 deve ter <20 palavras (OK vazio, OK >20)

**14. Material está preenchido (quando aplicável)?**
- Valide: produtos têxteis → material = "100% Algodão", "60% Poliéster 40% Algodão"
- Teste: rejeito "material", "tecido", "conforme imagem"

**15. Product_type tem 3+ níveis?**
- Valide: product_type = "Vestuário > Camisetas > Básicas" (mínimo 3)
- Rejeito: "Vestuário" ou "Vestuário > Camisetas" (muito raso)
- Teste: contar ">" em cada product_type — mínimo 2 (= 3 níveis)

### Seção 3: Imagens (5 items)

**16. image_link é JPEG ou PNG (não WebP)?**
- Valide: extensão .jpg, .jpeg, .png
- Rejeito: .webp, .gif, .svg
- Teste: últimas 100 URLs → verifique extensão

**17. Imagens são 300x300px no mínimo?**
- Valide: todas as imagens >300x300
- Teste: download 5 imagens aleatórias → open in viewer → se visível em 100%, OK

**18. Imagens não têm marca d'água?**
- Valide: nenhuma imagem com logo da loja
- Teste: olho visual em 10 imagens — nenhuma deve ter marca ou texto

**19. Fundo é branco ou cinza neutro?**
- Valide: nenhuma imagem com fundo colorido (azul, verde, preto, padrão)
- Teste: 10 imagens — fundo deve ser RGB 200-255 branco/cinza

**20. Há 3+ imagens por produto (additional_image_link)?**
- Valide: mínimo 3 additional_image_link por produto
- Teste: contar campos — 0 produtos com <3 imagens adicionais

### Seção 4: Preço e Disponibilidade (5 items)

**21. Preço não é dinâmico (JavaScript)?**
- Valide: preço é campo simples, não calculado por código
- Teste: feed offline (sem internet) → todos os preços devem estar visíveis em texto puro

**22. Preço bate com website?**
- Valide: amostra de 20 produtos → preço no feed = preço no website
- Teste: pick 20 produtos aleatórios → verifica no Nuvemshop se batem

**23. Estoque sincroniza com ERP?**
- Valide: produto com availability = "in stock" → realmente em estoque no Nuvemshop
- Teste: 10 produtos → confirma em_stock

**24. Availability tem valores consistentes?**
- Valide: só "in stock" e "out of stock" (sem "preorder", "unavailable", etc)
- Teste: lista valores únicos → máximo 2 valores

**25. Nenhum produto com preço = 0?**
- Valide: mínimo price = R$1,00 (sanidade check)
- Teste: filtrar price <= 0 → 0 resultados

### Seção 5: Estrutura de Feed (5 items)

**26. Feed está em XML ou CSV válido?**
- Valide: feed é bem-formado (XML com <!DOCTYPE> ou CSV com headers)
- Teste: abra em editor → sem erros de syntax

**27. Encoding é UTF-8?**
- Valide: caracteres especiais (é, ã, ç) aparecem corretamente
- Teste: feed + descrição com acentos → visualizar no Merchant Center (sem ?--)

**28. Feed tem header correto (XML ou CSV)?**
- Valide: XML tem <rss> root, CSV tem headers em primeira linha
- Teste: primeira linha == id,title,price,... (CSV) ou <item> (XML)

**29. Nenhum campo com quebra de linha dentro do valor?**
- Valide: descrições não têm \n ou <br> embutido (quebra parse)
- Teste: descrições gigantescas → verificar se são quebras ou texto contínuo

**30. Arquivo < 100MB?**
- Valide: tamanho do feed não excede limites de Google
- Teste: `ls -lh seu_feed.xml` — deve ser <100MB

---

## Ferramenta de Diagnóstico Automático (Shell)

Se você sabe usar terminal, rode este script para validar:

```bash
#!/bin/bash
# feed_validator.sh

FILE=$1

echo "=== VALIDAÇÃO DE FEED MODA ==="
echo ""

# 1. Contar produtos
echo "1. Total de produtos:"
grep -c "<item>" $FILE
echo ""

# 2. IDs duplicados
echo "2. IDs duplicados (deve ser 0):"
grep "<g:id>" $FILE | sort | uniq -d | wc -l
echo ""

# 3. Títulos vazios
echo "3. Títulos vazios (deve ser 0):"
grep "<g:title></g:title>" $FILE | wc -l
echo ""

# 4. Imagens vazias
echo "4. Image links vazios (deve ser 0):"
grep "<g:image_link></g:image_link>" $FILE | wc -l
echo ""

# 5. Preços com 0
echo "5. Preços = 0 (deve ser 0):"
grep "<g:price>0" $FILE | wc -l
echo ""

# 6. Colors vazios
echo "6. Colors vazios (deve ser <10%):"
grep -c "<g:color></g:color>" $FILE
echo ""

echo "=== FIM ==="
```

Salve como `feed_validator.sh`, rode: `bash feed_validator.sh seu_feed.xml`

---

## Caso Real: Loja Que Descobriu 120 Erros Antes de Anunciar

Uma loja em São Paulo tinha 500 produtos prontos para campanha de R$2.000/dia.

**Validação pré-campanha encontrou:**
- 45 títulos <5 palavras
- 120 produtos sem color
- 30 imagens <300px
- 15 produtos com price = R$0,00
- 20 produtos sem item_group_id (variações desagrupadas)

**Se lançassem sem validar:**
- Google pausaria 225 produtos (~45%)
- Impressões reduzidas a 55% do esperado
- Perda: R$2.000/dia × 7 dias × 45% = R$6.300

**Com validação:**
- Corrigiu tudo em 1 dia
- Lançou com 500 produtos válidos
- 0 pausas automáticas
- ROI 3.2x (vs 1.8x se tivesse lançado com erros)

---

## Checklist Rápido: 5 Mins Antes de Anunciar

```
☐ Total de produtos > 200? (campanha pequena = CTR baixo)
☐ 0 IDs duplicados?
☐ Todos os títulos têm 5+ palavras?
☐ 0 image_link vazios ou 404?
☐ Todos os produtos têm price > R$1?
☐ Color preenchido em moda?
☐ Size preenchido em moda?
☐ 0 product_type com <3 níveis?
☐ Mínimo 3 imagens adicionais por produto?
☐ Preço bate com website (amostra de 10)?
☐ Estoque bate com ERP (amostra de 10)?
☐ Feed em XML/CSV bem-formado?
☐ Encoding UTF-8 (acentos corretos)?
☐ Arquivo <100MB?
☐ Validado no Merchant Center (0 erros críticos)?
```

---

## Próximos Passos

1. Baixe seu feed atual (Nuvemshop → Google Merchant Center → Feed)
2. Rode os 30 checks acima (manualmente ou script)
3. Corrija erros críticos (IDs, títulos, imagens, preço)
4. Re-upload no Merchant Center
5. Aguarde validação completa (24-48h)
6. Monitore "Qualidade do Catálogo" — meta 95%+ aprovado
7. Inicie campanha

[Valide seu catálogo de moda automaticamente com FeedFlow](https://feed-flow.app/auth/signup)
