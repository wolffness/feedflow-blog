---
title: GTIN, Marca e identifier_exists no Google Shopping - Guia para o Brasil
description: Guia definitivo sobre GTIN, brand e identifier_exists para o mercado brasileiro. Quando usar cada um, validação de checksum e riscos de usar identifier_exists=false.
pubDatetime: 2026-04-06T20:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - google-shopping
  - gtin
  - ean
  - brand
  - merchant-center
author: "FeedFlow"
---

## O enigma do GTIN no Brasil

Você vai ao Google Merchant Center e vê: "Campo GTIN recomendado". Clica em ajuda e descobre: "Use GTIN para produtos com código de barras".

Simples, certo? Errado.

Aqui no Brasil, a maioria das lojas de moda — especialmente marcas próprias — não tem GTIN real. E muitos produtos importados têm GTIN de origem (Alibaba) que não vale para venda no Brasil.

Resultado: 80% das lojas Nuvemshop deixam GTIN em branco ou inventam números. Depois reclamam que produto é reprovado ou aparece duplicado.

Este artigo resolve isso.

## O que é GTIN (e por que Google quer)

**GTIN** = Global Trade Item Number. É um código de barras internacional que identifica um produto único no mundo.

Existem variações:
- **EAN-13**: 13 dígitos (padrão no Brasil, formato local)
- **UPC**: 12 dígitos (padrão nos EUA)
- **ISBN**: para livros
- **GTIN-14**: embalagem de carga (raramente usado em retail)

Quando você escaneia um código de barras em um supermercado, está lendo um GTIN.

**Google usa GTIN para**:
1. Deduplicar produtos — se múltiplas lojas vendem o mesmo produto (mesmo GTIN), Google agrupa
2. Buscar informações adicionais — marca, categoria, imagens da base de dados do Google
3. Validar dados — checar se a marca/categoria conferem com o código
4. Prevenir fraude — detectar produtos falsificados

---

## O problema brasileiro: muitos produtos não têm GTIN

Diferente de varejistas grandes (que cadastram produtos importados com GTIN real), lojas pequenas e marcas próprias frequentemente não têm código.

**Exemplos**:
- Loja D2C de moda cria camiseta própria: sem GTIN
- Produto customizado/personalizável: sem GTIN
- Importado direto de Alibaba: tem GTIN chinês, não brasileiro
- Produto descontinuado: GTIN não mais válido

**Pergunta natural**: "Posso colocar qualquer número?"

**Resposta**: Não. Google valida. E se ficar de pé, você perde credibilidade.

---

## Como funciona validação de checksum

GTINs (especialmente EAN-13) usam checksum — um algoritmo que valida se o código é legítimo.

Exemplo de EAN-13 válido: `7894567890123`

Se você inventa `9999999999999`, Google detecta que o checksum não bate e rejeita.

**Validação EAN-13 (algoritmo simples)**:

1. Multiplique os 12 primeiros dígitos alternando ×1 e ×3
2. Some tudo
3. O dígito de check (13º) é o número que falta para chegar a um múltiplo de 10

Exemplo: `789456789012X` (X = o que falta)

```
7×1 + 8×3 + 9×1 + 4×3 + 5×1 + 6×3 + 7×1 + 8×3 + 9×1 + 0×3 + 1×1 + 2×3
= 7 + 24 + 9 + 12 + 5 + 18 + 7 + 24 + 9 + 0 + 1 + 6
= 122

Próximo múltiplo de 10: 130
130 - 122 = 8

Então: 7894567890128 é válido. O 13º dígito é 8.
```

**Ferramenta online**: Se não quer calcular, use [validador de EAN](https://www.gs1.org/services/check-digit-calculator) (mantém esse link entre abas).

---

## O dilema: "Não tenho GTIN. E agora?"

Você tem três caminhos.

### **Caminho 1: Deixar GTIN em branco**

Google recomenda que você deixe o campo vazio se não tiver GTIN.

**Impacto**:
- Produto é aprovado normalmente
- Aparece em Google Shopping com a mesma visibilidade
- Não é penalizado
- Mas: produto não se beneficia de deduplicação (se 2 lojas vendem, parecem 2 produtos diferentes)

**Quando usar**: Marca própria, produto customizado, qualquer coisa sem código real.

### **Caminho 2: Usar identifier_exists=false**

Este é um campo adicional do feed que diz: "Este produto não tem GTIN, mas é legítimo."

Exemplo de XML:
```xml
<item>
  <id>SKU-CAMISETA-001</id>
  <title>Camiseta Marca Própria Preta</title>
  <price>89.90</price>
  <identifier_exists>false</identifier_exists>
</item>
```

**Impacto**:
- Google diz: "Beleza, entendo que não tem código"
- Produto é aprovado normalmente
- Sem penalidade

**Diferença vs. deixar vazio**:
- Sem `identifier_exists`: Google assume que GTIN pode vir depois
- Com `identifier_exists=false`: Google sabe com certeza que não vai ter

**Quando usar**: Quando você quer ser explícito e honesto: "não temos GTIN e está tudo bem".

### **Caminho 3: Forjar um GTIN (NÃO FAÇA)**

Você inventa um número que passa na validação de checksum.

**Impacto**:
- Google detecta que o código é fake (não está em nenhuma base de dados internacional)
- Produto sinalizado ou reprovado
- Risco de suspensão da conta
- Credibilidade abalada

**Quando usar**: Nunca.

---

## Marca (brand): por que importa tanto

Diferente de GTIN (que é código), **brand** é o nome da marca — texto.

| Campo | Tipo | Obrigatório? | Importância |
|-------|------|-------------|------------|
| GTIN | Número | Não | Alta (deduplicação) |
| brand | Texto | Não | Crítica |
| identifier_exists | Sim/Não | Não | Média |

**Por quê marca é crítica**:
1. **Filtro de busca**: Cliente busca "Aramis" e aparecem produtos Aramis
2. **Qualidade**: Brand de nome conhecido sinaliza confiança
3. **Deduplicação**: Se múltiplas lojas vendem "Camiseta Aramis" com o mesmo GTIN, Google agrupa
4. **Categorizaçã**o automática: Google usa brand para validar se a categoria faz sentido

**Exemplo**:
- Brand: "Aramis", Category: "Eletrônicos" = suspeita (Aramis não faz eletrônicos)
- Google questiona: produto pode estar categorizado errado

---

## Checklist: configuração correta para cada tipo de produto

### **Produto com GTIN real e marca conhecida**

```
GTIN: 7894567890123 (código real, validado)
brand: Aramis
identifier_exists: (deixe vazio — não preencha)
google_product_category: Apparel & Accessories > Clothing > Shirts & Tops
```

**Resultado**: Melhor aprovação, deduplicação funcionando, visibilidade máxima.

---

### **Marca própria (sem GTIN)**

```
GTIN: (deixe vazio)
brand: Minha Marca
identifier_exists: false
google_product_category: Apparel & Accessories > Clothing > Shirts & Tops
```

**Resultado**: Aprovado, honesto, sem risco.

---

### **Importado de Alibaba (tem GTIN chinês, não brasileiro)**

```
GTIN: (deixe vazio — o código chinês é inválido no Brasil)
brand: Marca Original
identifier_exists: false
google_product_category: Apparel & Accessories > Clothing > Shirts & Tops
```

**Resultado**: Seguro. Sem risco de rejeição.

---

### **Produto customizável (cliente escolhe cores/tamanhos)**

```
GTIN: (deixe vazio)
brand: Sua Marca
identifier_exists: false
google_product_category: (apropriada)
```

**Resultado**: Sem problemas. Cada variante pode ter id único.

---

## Sincronização com Nuvemshop

Se sua loja é Nuvemshop, você pode cadastrar GTIN/EAN diretamente no painel da Nuvemshop.

**Caminho**:
1. Vá a **Produtos > Detalhes do Produto**
2. Procure por **"Código (EAN)"** ou **"GTIN"**
3. Preencha se tiver

**FeedFlow sincroniza automaticamente** — se está preenchido na Nuvemshop, aparece no feed.

---

## Erros comuns

### **Erro 1: Colocar "Não tem" ou "N/A" como GTIN**

```xml
<gtin>Não tem</gtin>
```

Google detecta que não é número e rejeita.

**Correto**: Deixe vazio ou use `identifier_exists=false`.

---

### **Erro 2: Colocar SKU (código interno) como GTIN**

```xml
<gtin>SKU-CAMISETA-001</gtin>
```

SKU é código interno da sua loja, não um GTIN global. Google valida e rejeita.

**Correto**: GTIN é número de 8-14 dígitos, internacional.

---

### **Erro 3: Colocar GTIN de outro produto similar**

"Mesma marca, mesma cor, vou copiar o GTIN do outro tamanho."

Google detecta que o GTIN não bate com o produto específico. Reprovação.

**Correto**: Se o produto não tem GTIN real, deixe vazio ou use `identifier_exists=false`.

---

### **Erro 4: Esquecer brand quando tem GTIN**

```xml
<gtin>7894567890123</gtin>
<brand></brand>
```

Google consegue buscar a marca pela base de dados do GTIN. Mas é melhor informar explicitamente.

**Correto**: Sempre preencha brand junto com GTIN.

---

## Impacto na suspensão de conta

Google é bem tolerante com GTIN/identifier. Suspensões raramente vêm daqui — vêm de:
- Preço divergente
- Produto fora de estoque anunciado
- Link quebrado
- Imagem com watermark

Mas **inventar GTIN** (forjar número) pode gerar avisos e banners de alerta na conta.

---

## Resumo: o que fazer

| Situação | GTIN | brand | identifier_exists | Risco |
|----------|------|-------|-------------------|-------|
| Marca conhecida + GTIN real | Preencha | Preencha | (vazio) | Baixo |
| Marca própria | Vazio | Preencha | false | Baixo |
| Importado sem GTIN local | Vazio | Preencha | false | Baixo |
| Inventar GTIN | ❌ Não faça | Preencha | (vazio) | Alto |
| Deixar tudo vazio | Vazio | Vazio | Vazio | Médio (menos visibilidade) |

---

## Conclusão

GTIN é recomendado, não obrigatório. Se não tem, use `identifier_exists=false` e siga em frente.

O que realmente importa é **brand** — use uma marca legítima e clara. E se tem GTIN real, preencha (mas não invente).

[O FeedFlow valida GTINs e aplica identifier_exists automaticamente — nunca mais reprovação por erro de código. Teste grátis por 14 dias.](https://feed-flow.app/auth/signup)
