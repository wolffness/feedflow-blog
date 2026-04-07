---
title: Custom Labels Google Shopping - Segmentação Prática por Margem, Sazonalidade e Performance
description: Guia completo sobre os 5 custom labels do Google Shopping. Estratégias práticas de segmentação para Shopping e Performance Max com exemplos reais.
pubDatetime: 2026-04-06T22:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/7109243/pexels-photo-7109243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - google-shopping
  - custom-labels
  - segmentacao
  - performance-max
author: "FeedFlow"
---

## O que são custom labels (e por que a maioria ignora)

Custom labels são 5 campos de texto no feed (custom_label_0 até custom_label_4) que servem para segmentar seus produtos sem mudar o preço ou a estrutura.

Exemplo:
```xml
<item>
  <id>CAMISETA-001</id>
  <title>Aramis Camiseta Preta M</title>
  <price>89.90</price>
  <custom_label_0>High Margin</custom_label_0>
  <custom_label_1>Summer Collection</custom_label_1>
  <custom_label_2>Top 20%</custom_label_2>
</item>
```

**Por que ignoram**: Parece complicado. "Para que segmentar se posso ajustar bid diretamente na campanha?"

**Por que importa**: Porque Custom Labels viram filtros poderosos em Google Shopping e Performance Max. Você consegue lidar com promoções, sazonalidade e performance de forma automática — sem tocar na campanha.

Vamos aos 5 slots e as melhores estratégias de uso.

---

## Os 5 custom labels: o que colocar em cada

### **custom_label_0: Margem de Lucro**

Segmente por faixa de margem — o quanto cada produto te gera de lucro.

**Valores sugeridos**:
- `High Margin`: Margem > 50%
- `Medium Margin`: Margem 30-50%
- `Low Margin`: Margem < 30%

**Exemplo prático**:
```
Camiseta Bsásica Aramis | Preço R$ 89,90 | Custo R$ 40 | Margem 55% → High Margin
Jaqueta Slim | Preço R$ 189,90 | Custo R$ 100 | Margem 47% → Medium Margin
Promoção Flash | Preço R$ 29,90 | Custo R$ 20 | Margem 33% → Low Margin
```

**Uso em Shopping**:
- Campanha de margem alta: bid mais agressivo
- Campanha de margem baixa: bid conservador ou pausada

**Uso em Performance Max**:
- Criar asset groups separados por margem
- Performance Max prioriza produtos de alto valor

---

### **custom_label_1: Sazonalidade**

Marque produtos conforme estação ou período do ano.

**Valores sugeridos**:
- `Summer`: Primavera/Verão
- `Winter`: Outono/Inverno
- `Holiday`: Natal, Black Friday, outros eventos
- `Year-Round`: Disponível sempre

**Exemplo prático**:
```
Camiseta Leve Verão | custom_label_1: Summer
Casaco Lã | custom_label_1: Winter
Suéter Natalino | custom_label_1: Holiday
Camiseta Básica | custom_label_1: Year-Round
```

**Uso prático**:
- Mês de dezembro: aumenta bid em `Holiday`
- Junho: pausa `Summer`, aumenta `Winter`
- Mantém `Year-Round` sempre ligado

---

### **custom_label_2: Performance / Best Sellers**

Marque os produtos que mais vendem, melhor ROAS, melhor taxa de conversão.

**Valores sugeridos**:
- `Top 20%`: Top sellers (20% dos produtos = 80% do faturamento)
- `Top 50%`: Segunda faixa
- `Bottom 50%`: Produtos com baixo desempenho

**Exemplo prático**:
```
Camiseta Aramis Preta (3.000 vendas/mês) → Top 20%
Camiseta Aramis Branca (1.200 vendas/mês) → Top 20%
Vestido Festa (200 vendas/mês) → Top 50%
Jaqueta Especial (30 vendas/mês) → Bottom 50%
```

**Uso**:
- Performance Max: prioriza produtos `Top 20%`
- Shopping: bid mais agressivo em top sellers
- Testar: experimentos com `Bottom 50%` para entender por que vendem menos

---

### **custom_label_3: Status de Estoque / Urgência**

Marque produtos que precisam sair rápido (estoque baixo, expiração próxima).

**Valores sugeridos**:
- `In Stock`: Disponível normalmente
- `Low Stock`: Menos de 10 unidades
- `Last Units`: Últimas 3 unidades
- `Expiring Soon`: Data de validade em menos de 30 dias

**Exemplo prático**:
```
Camiseta Aramis (1.000 unidades) → In Stock
Camiseta Edição Limitada (5 unidades) → Last Units → bid aumentado 30%
Produto Vencimento 15/05 (hoje 10/04) → Expiring Soon → bid aumentado 50%
```

**Uso**:
- Shopping: aumentar bid automaticamente em `Last Units` e `Expiring Soon`
- Performance Max: Mostrar urgência em copy: "Últimas unidades"
- Validação: `Low Stock` ≠ `out_of_stock` — ainda está disponível

---

### **custom_label_4: Coleção / Promoção**

Marque por coleção temática, linha de produtos ou campanha de promoção.

**Valores sugeridos**:
- `New Collection`: Itens novos (últimos 30 dias)
- `Flash Sale`: Promoção flash (válida por X dias)
- `Premium Line`: Linha premium da marca
- `Bundle Deal`: Produtos que virão em pacote

**Exemplo prático**:
```
Camiseta Coleção Primavera 2026 (publicada 05/04) → New Collection
Jaqueta (preço reduzido até 10/04) → Flash Sale
Jaqueta Couro Genuíno → Premium Line
Kit 3 camisetas (vender como combo) → Bundle Deal
```

**Uso**:
- Performance Max: asset groups separados por coleção
- Shopping: campanha separada para `Flash Sale` com bid agressivo
- Remarketing: mostrar `New Collection` para clientes que compraram antes

---

## Estratégias práticas de combinação

Você não é obrigado a usar os 5. Mas usar bem pede estratégia.

### **Estratégia 1: E-commerce de moda (mais comum)**

```
custom_label_0: Margem (High/Medium/Low)
custom_label_1: Sazonalidade (Summer/Winter/Year-Round)
custom_label_2: Performance (Top 20%/Top 50%/Bottom 50%)
custom_label_3: Estoque (In Stock/Low Stock/Last Units)
custom_label_4: Coleção (New Collection/Flash Sale/Premium)
```

**Resultado**: Controle total. Você segmenta por 5 dimensões e consegue criar campanhas muito específicas.

---

### **Estratégia 2: E-commerce pequeno**

Se não quer complicar:

```
custom_label_0: Margem (High/Low)
custom_label_1: Sazonalidade (apenas se relevante)
custom_label_2: Performance (Top 20%/Bottom 50%)
```

Use 3, ignore 4 e 5. Simples.

---

### **Estratégia 3: Google Shopping vs. Performance Max**

Se roda os dois:

```
custom_label_0: Margem
custom_label_1: Sazonalidade
custom_label_2: Performance
custom_label_3: Estoque (sincroniza com Nuvemshop em tempo real)
custom_label_4: Channel (Shopping/PMax/Both) — controle de onde rodar cada produto
```

---

## Performance Max com Custom Labels

Performance Max é "IA à solta" — você dá produtos e budget, Google otimiza.

Mas Performance Max precisa de sinais: "Quais produtos são bons?"

**Custom labels viram sinais automáticos**:

1. Você marca `Top 20%` em 100 produtos que mais vendem
2. Performance Max vê: "Esses 100 têm margem alta, conversão melhor"
3. PMax prioriza mostrar os `Top 20%`
4. Você entra com um budget de R$ 5.000 e deixa a IA escolher quais produtos destacar

**Resultado**: PMax consegue otimizar melhor sem você ter que ajustar bid manualmente em centenas de produtos.

---

## Google Shopping padrão com Custom Labels

Em Shopping padrão (não PMax), você usa custom labels para criar **listing groups** — fatias de campanhas com bids diferentes.

Exemplo:
```
Campanha: "Shopping - Alta Margem"
├─ Listing Group: custom_label_0 = "High Margin" → Bid R$ 2,50
├─ Listing Group: custom_label_0 = "Low Margin" → Bid R$ 0,50
└─ Listing Group: custom_label_0 = (outra qualquer) → Bid R$ 1,20

Resultado: Produtos de alta margem recebem mais cliques.
```

---

## Automação: Como preencher para 1.000 produtos

Preencher custom labels na mão é impossível.

**Solução**: Automação.

### **Opção 1: Planilha + Nuvemshop**

Na Nuvemshop, se você tem os dados de custo/margem na plataforma, pode exportar e criar regras.

**Passos**:
1. Exporte catálogo (CSV)
2. Crie coluna nova: `custom_label_0` = IF(margem > 50, "High", "Low")
3. Importe novamente

Mas é chato de manter atualizado.

### **Opção 2: Ferramenta de feed (automático)**

Com o FeedFlow, você configura regras uma vez:
```
Se margem > 50% → custom_label_0 = "High Margin"
Se data_publi < 30 dias → custom_label_4 = "New Collection"
Se estoque < 10 → custom_label_3 = "Low Stock"
```

E elas rodam automaticamente toda vez que o feed sincroniza.

Resultado: Custom labels sempre atualizados, sem trabalho manual.

---

## Erros comuns

### **Erro 1: Usar valores inconsistentes**

```
Produto A: custom_label_0 = "alta margem"
Produto B: custom_label_0 = "High Margin"
Produto C: custom_label_0 = "Margem Alta"
```

Google não entende — trata como 3 valores diferentes.

**Correto**: Valores exatos e consistentes (`High Margin`, `Medium Margin`, `Low Margin`).

---

### **Erro 2: Colocar tudo no custom_label_0**

```
custom_label_0: "High Margin Summer Top 20%"
```

Impossível usar depois — não consegue filtrar por "High Margin" sozinho.

**Correto**: 1 dimensão por label.

---

### **Erro 3: Esquecer de atualizar**

Produto entra em estoque baixo, mas você não atualiza `custom_label_3`.

Resultado: bid continua baixo mesmo com urgência.

**Correto**: Automação que atualiza em tempo real.

---

## Checklist: está usando custom labels?

- [ ] Definiu valores exatos para cada label (e documentou)
- [ ] Preencheu pelo menos custom_label_0 (margem) ou custom_label_2 (performance)
- [ ] Usa valores consistentes (sem variações de grafia)
- [ ] Tem automação para manter atualizado
- [ ] Criou regras de bid no Google Shopping baseado nos labels
- [ ] Testou Performance Max com asset groups por label

---

## Conclusão

Custom labels parecem detalhe, mas são o segredo para campaigns avançadas no Google Shopping. Eles viram filtros automáticos — você marca uma vez, e Google otimiza para você.

Se sua loja tem margens diferentes, sazonalidade, ou produtos com performance variada — custom labels precisam estar aí.

[Custom labels automáticos baseados em regras no FeedFlow — configure uma vez, deixa rodar. Teste grátis por 14 dias.](https://feed-flow.app/auth/signup)
