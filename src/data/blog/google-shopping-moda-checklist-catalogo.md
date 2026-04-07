---
title: "Google Shopping Moda: Checklist de Catálogo com 25 Atributos Obrigatórios"
description: "Feed de produtos moda Google Shopping: 25 atributos essenciais, por que moda tem 3x mais rejeições, checklist download."
pubDatetime: 2026-04-07T10:30:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/7109243/pexels-photo-7109243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - google-shopping
  - moda
  - feed-produtos
  - checklist
author: "FeedFlow"
---

## Google Shopping Moda: Por Que Moda Tem 3x Mais Rejeições Que Outros Setores

Varejo de moda em Google Shopping é diferente. Um eletrônico precisa de 8 campos essenciais para rodar. Uma camiseta precisa de 25. E não é porque o Google é rigoroso — é porque a natureza de moda é variável: cores, tamanhos, ajuste, material, género, faixa etária. Cada uma delas muda se o produto é buscável ou invisível.

78% das lojas de moda que tentam Google Shopping pela primeira vez veem 60-70% do catálogo rejeitado nas primeiras 48 horas. Não é erro de dados — é falta de atributos que Google exige especificamente para category "Moda".

Este checklist detalha os 25 atributos, explica por que cada um importa, e oferece uma planilha de auditoria pronta para usar.

---

## Os 25 Atributos Obrigatórios e Recomendados para Moda

### Grupo 1: Identificação Básica (5 atributos)

**1. id** (obrigatório)
- Identificador único do produto
- Formato: letra + número (ex: SKU-001, PROD-2024-TM)
- Nunca duplicado mesmo em variações de cor/tamanho
- Exemplo: "CAMISA-001-AZUL-P"

**2. title** (obrigatório)
- Mínimo 5 palavras, máximo 150 caracteres
- Estrutura: [marca] [tipo] [cor] [material] [gênero] [tamanho]
- Ruim: "Camiseta"
- Bom: "Camiseta Aramis Azul Royal 100% Algodão Masculina Tamanho P"
- Google ordena por título — títulos genéricos = última página

**3. description** (fortemente recomendado)
- Mínimo 20 palavras, máximo 5.000 caracteres
- Detalhe: fibra, cuidado (lavar 30°C), ajuste (slim/regular), comprimento
- Exemplo: "Camiseta de algodão premium com stretch. Ajuste slim fit. Comprimento até a cintura. Ideal para corpo atlético. Lavar em água morna, não secar na máquina."

**4. link** (obrigatório)
- URL da página do produto na sua loja
- Deve ter "add to cart" ou similar visível
- Nunca use URL genérica (tipo homepage)

**5. image_link** (obrigatório)
- Imagem principal do produto
- Mínimo 300x300px, recomendado 1.200x1.200px
- Fundo branco ou neutro (Google rejeita fundos coloridos em moda)
- Sem marca d'água, sem modelos (só produto isolado)

### Grupo 2: Preço e Disponibilidade (3 atributos)

**6. price** (obrigatório)
- Formato: "XX,XX BRL" ou apenas número + moeda
- Nunca use promoção em JavaScript (Google não lê dinâmico)
- Exemplo: "89,90 BRL"

**7. availability** (obrigatório)
- Valores: "in stock" ou "out of stock"
- Se produto esgotado, Google pausa automaticamente
- Sincronize com seu ERP a cada 6 horas

**8. item_group_id** (recomendado, crítico em moda)
- Agrupa variações (cores/tamanhos) sob um "pai"
- Todos os itens da mesma cor/tamanho compartilham item_group_id
- Exemplo:
  - Camiseta Azul P: item_group_id = "CAMISA-001", id = "CAMISA-001-AZUL-P"
  - Camiseta Azul M: item_group_id = "CAMISA-001", id = "CAMISA-001-AZUL-M"
  - Camiseta Vermelho P: item_group_id = "CAMISA-001", id = "CAMISA-001-VERM-P"
- Google agrupa automaticamente — usuário vê seletor de cor/tamanho no anúncio

### Grupo 3: Atributos Específicos de Moda (12 atributos)

**9. color** (obrigatório em moda)
- Valores: cores exatas em inglês ou português
- Aceitos: "Blue", "Azul", "Black", "Preto", "Navy Blue"
- Recusados: "cor", "variado", "conforme foto"
- Exemplo: "Azul Royal"

**10. size** (obrigatório em moda)
- Padrão de tamanho brasileiro: "P", "M", "G", "GG"
- Padrão internacional: "XS", "S", "M", "L", "XL", "XXL"
- Calçados: "35", "36", "37"... até "46"
- Nunca use "único", "tamanho único" a menos que seja realmente único

**11. gender** (obrigatório em moda)
- Valores: "male" (masculino), "female" (feminino), "unisex"
- Google usa para segmentar anúncios por gênero
- Exemplo: usuária buscando "camiseta feminina" vê só products gender=female

**12. age_group** (recomendado, impacta CTR)
- Valores: "newborn", "toddler", "kids", "teen", "adult", "senior"
- Ou em português: "bebê", "infantil", "adolescente", "adulto", "idoso"
- Google segmenta por idade — afeta quem vê o anúncio

**13. material** (obrigatório em moda)
- Composição da fibra
- Exemplos: "100% Algodão", "60% Poliéster 40% Algodão", "Viscose"
- Recusados: "tecido", "material", "conforme imagem"

**14. pattern** (fortemente recomendado)
- Padrão visual: "Sólido", "Listrado", "Xadrez", "Floral", "Geométrico"
- Google usa em filtros de busca
- Usuários buscam "camiseta listrada" — precisa do atributo pattern

**15. item_type** (recomendado)
- Tipo de item específico
- Exemplos: "camiseta", "calça", "jaqueta", "vestido", "shorts", "meia"
- Diferente de category (category = "Vestuário", item_type = "camiseta")

**16. brand** (recomendado)
- Marca do produto
- Exemplo: "Aramis", "Hering", "Forum"
- Afeta SEO e confiança do consumidor

**17. care_instructions** (fortemente recomendado)
- Instruções de cuidado em texto simples
- Exemplo: "Lavar em água morna, máximo 30°C. Não usar alvejante. Secar em local sombreado. Passar em temperatura média."
- Google usa para matching com intenção ("posso lavar na máquina?")

**18. country_of_origin** (recomendado)
- País de fabricação: "Brasil", "Vietnam", "China", "Itália"
- Afeta percepção de qualidade e impacto ambiental
- Exemplo: "Brasil"

**19. tax_category** (obrigatório conforme legislação)
- Para produtos têxteis brasileiros, pode ser específico
- Exemplo: "Apparel & Accessories > Clothing > Shirts"

**20. size_system** (crítico se usar tamanho numérico)
- Se usa "P/M/G/GG", indique: "BR"
- Se usa "XS/S/M/L/XL", indique: "US" ou "EU"
- Se usa "35/36/37" em calçados, indique: "BR"

### Grupo 4: Engajamento e Performance (5 atributos)

**21. custom_label_0** (recomendado)
- Segmentação: "best_seller", "new", "clearance", "slow_moving"
- Permite pausar categorias com baixo ROAS direto na campanha

**22. custom_label_1** (recomendado)
- Segmentação por preço: "budget", "mid", "premium"

**23. custom_label_2** (recomendado)
- Segmentação por margem: "high_margin", "low_margin", "neutral"

**24. additional_image_link** (fortemente recomendado)
- Mínimo 3 imagens adicionais
- Ordem: vista frontal isolada, detalhe material/textura, produto em contexto, cor alternativa
- Google testa múltiplas imagens — quanto mais, melhor CTR

**25. unit_pricing_measure** (opcional, mas útil em moda)
- Para produtos por unidade (ex: "por kg" em pesos de tecido)
- Exemplo: "1 unidade", "por peça"

---

## Caso Real: Loja de 450 Produtos, 89 Aprovados (Mal) → 380 Aprovados (Bem)

Uma loja de moda feminina em Belo Horizonte tinha:

**Antes:**
- 450 produtos
- 89 aparecendo em Google Shopping (19,7%)
- Erros mais comuns: título genérico (ex: "Blusa"), falta de atributo color, imagens <800px
- ROI: R$0,70 (cada real gasto = 70 centavos em vendas)

**Ação: Auditoria de Atributos**
- Mapeou quais dos 25 atributos cada produto tinha
- Descobriu: 340 produtos faltavam "color", 280 tinham título <5 palavras, 150 tinham imagens <1.000px
- Corrigiu em 3 dias (automação via CSV + bulk upload no Merchant Center)

**Depois:**
- 380 produtos aprovados (84,4%)
- Impressões cresceram 320%
- CTR cresceu de 0,4% para 1,8% (4,5x)
- ROAS: R$2,10 (3x melhor)

**Insight:** Os 25 atributos não são "nice-to-have". Cada um faltante reduz visibilidade em ~5-15%.

---

## Checklist Pronto: Os 25 Atributos

```
☐ id — único, sem duplicatas
☐ title — 5+ palavras, marca + tipo + cor + material + gênero + tamanho
☐ description — 20+ palavras, detalhe fibra/cuidado/ajuste
☐ link — página do produto com "add to cart"
☐ image_link — 1.200x1.200px, fundo branco/neutro, sem marca d'água
☐ price — formato "XX,XX BRL"
☐ availability — "in stock" ou "out of stock"
☐ item_group_id — agrupa variações de cor/tamanho
☐ color — cor exata em inglês ou português
☐ size — P/M/G/GG (Brasil) ou XS/S/M/L/XL (internacional)
☐ gender — "male", "female", "unisex"
☐ age_group — "kids", "teen", "adult", "senior"
☐ material — composição da fibra (100% Algodão, 60% Poliéster 40% Algodão)
☐ pattern — "Sólido", "Listrado", "Floral", "Xadrez"
☐ item_type — "camiseta", "calça", "jaqueta", "vestido"
☐ brand — marca do produto
☐ care_instructions — "Lavar 30°C, não secar na máquina, passar média"
☐ country_of_origin — "Brasil", "Vietnam", "China"
☐ tax_category — categoria fiscal conforme legislação
☐ size_system — "BR", "US", "EU" (indica padrão de tamanho)
☐ custom_label_0 — best_seller, new, clearance, slow_moving
☐ custom_label_1 — budget, mid, premium
☐ custom_label_2 — high_margin, low_margin, neutral
☐ additional_image_link — mínimo 3 imagens adicionais
☐ unit_pricing_measure — "por unidade", "por peça" (se aplicável)
```

---

## Próximos Passos: Auditoria do Seu Catálogo

1. Exporte seu feed atual do Google Merchant Center
2. Rode auditoria no FeedFlow — sinaliza exatamente qual atributo falta em cada produto
3. Priorize: corriga atributos que faltam em >100 produtos primeiro (color, size, material)
4. Re-upload no Merchant Center
5. Monitore "Qualidade do Catálogo" — meta é 90%+ aprovado em 7 dias

[Audite seu catálogo de moda gratuitamente — conecte ao FeedFlow](https://feed-flow.app/auth/signup)
