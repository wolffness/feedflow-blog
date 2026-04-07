---
title: "Variações de Cor e Tamanho no Feed: Quando Criar Itens Separados Versus Agrupar"
description: "Variações de produto Google Shopping moda: item_group_id, SKU único, quando Google rejeita duplicatas, Nuvemshop armadilhas."
pubDatetime: 2026-04-07T12:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - google-shopping
  - variacoes
  - moda
  - feed-produtos
  - sku
author: "FeedFlow"
---

## Variações de Cor e Tamanho: A Confusão Mais Custosa em Moda Google Shopping

Uma camiseta azul tamanho P e uma camiseta azul tamanho M são o mesmo produto ou dois produtos diferentes no Google Shopping?

A resposta errada custa 30-50% do seu orçamento em impressões desperdiçadas.

A maioria dos lojistas em Nuvemshop comete um de dois erros:

**Erro 1 — Criar um item no feed para TODAS as cores/tamanhos juntos**
- Resultado: Google rejeita como "duplicata" porque não consegue saber que cor/tamanho o usuário clicou
- Conversão quebra: usuário vê "Camiseta Azul" mas pode receber vermelho

**Erro 2 — Criar um item separado no feed para cada cor/tamanho SEM agrupar**
- Resultado: o consumidor vê 5 anúncios idênticos (mesma marca, tipo, imagem) — Google os junta, competem entre si
- Cliques dispersos, ROAS baixo

A solução é **item_group_id** — estrutura elegante que Google entende perfeitamente. Este artigo explica exatamente quando usar, como estruturar, e as armadilhas específicas de Nuvemshop.

---

## Regra Fundamental: item_group_id Agrupa, SKU Diferencia

**Princípio:**
- **item_group_id** = "qual produto pai" (ex: "CAMISA-001")
- **id (SKU)** = "qual variação específica" (ex: "CAMISA-001-AZUL-P")
- Cada SKU é um item único no feed
- Cada item com mesmo item_group_id agrupa no anúncio Google como opção de cor/tamanho

**Exemplo estruturado:**

```
item_group_id: CAMISA-001
id: CAMISA-001-AZUL-P
color: Azul
size: P
title: Camiseta Aramis Azul 100% Algodão Masculina Tamanho P
---
item_group_id: CAMISA-001
id: CAMISA-001-AZUL-M
color: Azul
size: M
title: Camiseta Aramis Azul 100% Algodão Masculina Tamanho M
---
item_group_id: CAMISA-001
id: CAMISA-001-VERM-P
color: Vermelho
size: P
title: Camiseta Aramis Vermelho 100% Algodão Masculina Tamanho P
---
item_group_id: CAMISA-001
id: CAMISA-001-VERM-M
color: Vermelho
size: M
title: Camiseta Aramis Vermelho 100% Algodão Masculina Tamanho M
```

Google agrupa assim no anúncio:

```
[Camiseta Aramis 100% Algodão Masculina]
Cor: [Azul ▼] [Vermelho ▼]
Tamanho: [P] [M]
```

Usuário seleciona cor e tamanho antes de clicar — landing page abre direto no SKU correto.

---

## Quando Usar item_group_id: Critério Claro

**USE item_group_id quando:**
- Mesmo produto, cores diferentes
- Mesmo produto, tamanhos diferentes
- Mesmo produto, padrões diferentes (sólido vs listrado do mesmo modelo)

**NÃO USE item_group_id quando:**
- Produtos completamente diferentes (camiseta + calça)
- Marcas diferentes
- Categorias diferentes
- Linhas ou coleções diferentes (ex: linha Premium vs linha Budget de mesma marca)

---

## Campos Que EXIGEM item_group_id em Moda

Quando você usa item_group_id, Google espera diferenciadores claros. Campos obrigatórios:

**1. color** (obrigatório se cores diferentes)
- Cada SKU com mesmo item_group_id DEVE ter color diferente
- Google rejeita: item_group_id duplicado com color identicamente = "duplicata"

**2. size** (obrigatório se tamanhos diferentes)
- P/M/G/GG ou 35/36/37 ou XS/S/M/L/XL
- Não deixe em branco

**3. pattern** (se padrão varia — ex: sólido vs listrado)
- Exemplo: mesma camiseta em "Sólido" e "Listrado"

**4. title com color+size no final** (fortemente recomendado)
- Diferencia visualmente no anúncio
- Exemplo:
  - "Camiseta Aramis Azul 100% Algodão Masculina Tamanho P" ✓
  - "Camiseta Aramis" (genérico, sem color/size) ✗

---

## Armadilha #1: Nuvemshop Não Gera SKU Único Automaticamente

**O Problema:**
Nuvemshop, por padrão, cria uma **variação de atributo** (cor/tamanho) mas usa o mesmo SKU para todas. Exemplo:

```
Produto: Camiseta Aramis
SKU: CAMISA-001
Variações:
  - Cor: Azul, Tamanho: P
  - Cor: Azul, Tamanho: M
  - Cor: Vermelho, Tamanho: P
```

No feed gerado, você vê:

```
id: CAMISA-001 (aparece 3x!)
color: Azul
size: P
---
id: CAMISA-001 (duplicado!)
color: Azul
size: M
---
id: CAMISA-001 (triplicado!)
color: Vermelho
size: P
```

Google vê "CAMISA-001" três vezes = **rejeita como duplicata**.

**A Solução:**
Configure Nuvemshop para gerar SKU **único por variação**:

1. Em Nuvemshop, vá a seu produto
2. Edite seção "Variações"
3. Para CADA variação (cor/tamanho), edite manualmente o SKU:
   - Azul P → CAMISA-001-AZUL-P
   - Azul M → CAMISA-001-AZUL-M
   - Vermelho P → CAMISA-001-VERM-P

Salve. Re-exporte o feed. Agora cada item tem ID único.

**Alternativa (se muitos produtos):**
Use FeedFlow — auto-gera SKU único por variação quando detecta item_group_id. Você mapeia uma vez, depois automático.

---

## Armadilha #2: Falta de Diferenciador Quando item_group_id Existe

Google tem regra: **"se item_group_id é usado, cada item precisa diferir em color OU size OU pattern".**

Exemplo que Google REJEITA:

```
item_group_id: CAMISA-001
id: CAMISA-001-AZUL-P
color: Azul
size: P
image_link: https://img1.com/camisa_azul_p.jpg
---
item_group_id: CAMISA-001
id: CAMISA-001-AZUL-P-ALT
color: Azul (IDÊNTICO!)
size: P (IDÊNTICO!)
image_link: https://img2.com/camisa_azul_p_alt.jpg
```

Erro: "item_group_id duplicado com color/size identicamente. Remova duplicata ou use ID diferente sem item_group_id."

**Solução:** Se você realmente tem 2 imagens do mesmo color/size (ex: vista frontal vs lateral), não use item_group_id — use IDs separados sem agrupamento.

---

## Armadilha #3: Calçados — Tamanho Numérico Sem size_system

Em calçados, tamanho é números (35, 36, 37...). Google pode confundir:
- É tamanho brasileiro (35-46)?
- É tamanho americano (5-16)?
- É tamanho europeu (39-50)?

**Solução:** Sempre inclua **size_system** em calçados.

```
id: SAPATO-001-PRETO-35
color: Preto
size: 35
size_system: BR (← obrigatório em calçados)
item_group_id: SAPATO-001
```

Sem size_system, Google pode rejeitar ou mostrar tamanhos confusos.

---

## Estrutura Correta: Exemplo Completo de Calçado com 3 Cores e 5 Tamanhos

```
item_group_id: SAPATO-001
id: SAPATO-001-PRETO-35
title: Sapato Social Masculino Preto Couro Tamanho 35
color: Preto
size: 35
size_system: BR
price: 189,90 BRL
availability: in stock
image_link: https://img.com/sapato_preto_35.jpg
---
item_group_id: SAPATO-001
id: SAPATO-001-PRETO-36
title: Sapato Social Masculino Preto Couro Tamanho 36
color: Preto
size: 36
size_system: BR
price: 189,90 BRL
availability: in stock
image_link: https://img.com/sapato_preto_36.jpg

(... repete para 37, 38, 39, 40, 41, 42, 43, 44, 45, 46 ...)

item_group_id: SAPATO-001
id: SAPATO-001-MARROM-35
title: Sapato Social Masculino Marrom Couro Tamanho 35
color: Marrom
size: 35
size_system: BR
price: 189,90 BRL
availability: in stock
image_link: https://img.com/sapato_marrom_35.jpg

(... continua para todas as combinações ...)
```

Google agrupa assim no anúncio:
```
[Sapato Social Masculino Couro]
Cor: [Preto] [Marrom] [Azul Marinho]
Tamanho: [35] [36] [37] [38] ... [46]
```

---

## Caso Real: Loja de Calçados Que Triplicou Conversão com Estrutura Correta

Uma loja de calçados em Curitiba tinha estrutura bagunçada:

**Antes:**
- 150 sapatos
- Cada cor/tamanho era um produto separado = 850 SKUs no feed
- item_group_id não configurado
- Google via 850 produtos não relacionados = CTR 0,15%
- ROAS: R$0,60

**Estrutura encontrada:**
- SKUs duplicados (item_group_id vazio, color/size também vazios)
- Imagens genéricas (mesma foto para todos os tamanhos)

**Ação: Restructuring**
- Definiu item_group_id (ex: SAPATO-001 para "Sapato Social Preto")
- Gerou SKU único por variação (SAPATO-001-PRETO-35, SAPATO-001-PRETO-36...)
- Preencheu color, size, size_system
- Atualizou imagens (uma para cada cor, não tamanho)

**Depois:**
- 150 produtos principais (não 850)
- 150 anúncios agrupados em seletores de cor/tamanho
- CTR: 0,15% → 1,2% (8x)
- ROAS: R$0,60 → R$2,40 (4x)
- Tempo médio no site: aumentou 45%

---

## Checklist: Variações no Feed

```
☐ Cada variação (cor/tamanho) = SKU único
☐ SKUs relacionadas = item_group_id idêntico
☐ color preenchido (valores diferentes por variação)
☐ size preenchido (valores diferentes por variação)
☐ Em calçados: size_system ("BR", "US", "EU")
☐ Título inclui color + size no final
☐ Sem duplicata: mesma cor/tamanho não aparece 2x
☐ Se Nuvemshop: SKU manualmente editado por variação
☐ Imagens: mínimo 1 por cor (não é necessário por tamanho)
☐ Validar no Merchant Center: "Qualidade do Catálogo" mostra erros
```

---

## Próximos Passos

1. Exporte seu feed atual do Nuvemshop
2. Identifique produtos com múltiplas cores/tamanhos
3. Configure item_group_id (mesma ID para mesmos produtos diferentes variações)
4. Gere SKU único por variação (ferramenta: FeedFlow auto-faz isso)
5. Re-valide no Google Merchant Center
6. Monitore "Erros de duplicata" — devem zeramento

[Estruture variações de moda automaticamente com FeedFlow](https://feed-flow.app/auth/signup)
