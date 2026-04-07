---
title: Performance Max com Feed de Produtos - Como Otimizar para Resultados
description: Guia prático sobre como otimizar seu feed para Performance Max. Dependências, asset groups, custom labels e estrutura de catálogo que a IA precisa.
pubDatetime: 2026-04-07T17:30:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - performance-max
  - google-shopping
  - feed-otimizacao
  - configuracao-campanha
author: "FeedFlow"
---

## Performance Max depende 100% da qualidade do feed

Você cria uma campanha Performance Max (PMax), coloca R$ 5.000 em budget, e fica esperando a IA do Google fazer mágica.

Nada acontece. CPC sai caro, conversões não vêm.

Você culpa o Google, culpa a IA... mas o problema é outro: seu feed é ruim.

Performance Max é diferente de Google Shopping tradicional. No Shopping, você controla bids, exclusões, estrutura. No PMax, você dá um catálogo e a IA escolhe.

**Se o catálogo é fraco**, a IA não tem sinais para otimizar.

Vamos descobrir o que Performance Max precisa.

---

## Como Performance Max funciona (resumido)

1. Você dá um orçamento (ex: R$ 5.000/mês)
2. Você dá um catálogo de produtos
3. Google IA vê seu catálogo e pensa: "Quais produtos devem aparecer em cada contexto?"
4. IA cria anúncios dinâmicos baseado no catálogo
5. IA distribui orçamento entre os melhores produtos
6. Você otimiza = seus objetivos (compras, valor de compra, etc.)

**O problema**: Se catálogo não tem sinais claros (títulos genéricos, sem margem indicada, sem categoria correta), a IA não consegue otimizar.

---

## Sinais que Performance Max precisa do feed

### **1. Títulos descritivos e estruturados**

PMax precisa entender cada produto.

**Ruim**:
- Camiseta
- Produto
- Item

Google IA não consegue criar um anúncio bom com "Camiseta". Não tem contexto.

**Bom**:
- Aramis Camiseta Premium Algodão Gola V Preta Tamanho M
- Hering Calça Jeans Slim Azul Escuro Tamanho 36

IA consegue entender: marca, tipo, material, características. Cria anúncios melhores.

---

### **2. Custom labels com sinais de performance**

Se você marca os top sellers, IA prioriza eles.

```xml
<item>
  <id>CAMISETA-001</id>
  <title>Aramis Camiseta Preta</title>
  <price>89.90</price>
  <custom_label_2>Top 20%</custom_label_2>
</item>

<item>
  <id>VESTIDO-FESTA-001</id>
  <title>Vestido de Festa Azul</title>
  <price>250.00</price>
  <custom_label_2>Bottom 50%</custom_label_2>
</item>
```

IA vê: "Camiseta é top seller". Dedica mais budget para ela.

---

### **3. Margens claras (custom_label_0)**

Performance Max quer maximizar valor, não volume.

Se você marca margem:

```xml
<custom_label_0>High Margin</custom_label_0>  (margem > 50%)
<custom_label_0>Low Margin</custom_label_0>   (margem < 30%)
```

IA entende: "Produtos de alta margem valem mais para o negócio". Investe mais neles.

---

### **4. Categorização correta**

Se categoria está errada, IA mostra o produto em contextos errados.

**Exemplo ruim**:
- Camiseta categorizada como "Eletrônicos"
- IA tenta vender roupa em campanha de eletrônicos
- CTR baixo, conversão 0
- IA pausa esse produto

**Exemplo bom**:
- Camiseta em "Apparel & Accessories > Clothing > Shirts & Tops"
- IA mostra em contexto certo (buscas de roupa, campanhas relevantes)
- CTR bom, conversão vem
- IA investe mais nele

---

### **5. Imagens de qualidade**

Performance Max cria anúncios dinâmicos com imagens do catálogo.

Imagens ruins = anúncios ruins.

**Critérios**:
- Mínimo 250x250px (quanto maior, melhor)
- Sem watermark
- Fundo branco ou neutro (em moda é padrão)
- Sem overlay de texto ou logo grande

Se imagem for ruim, PMax pula o produto.

---

## Estrutura de Asset Group com custom labels

Em Performance Max, você cria **asset groups** — agrupamentos de produtos com o mesmo "tema".

Exemplo:
```
Asset Group 1: "Camisetas - Top Sellers"
├─ Produtos com custom_label_2 = "Top 20%"
├─ Produtos com categoria = "Shirts & Tops"
└─ Produtos com margem > 50%

Asset Group 2: "Camisetas - Flash Sale"
├─ Produtos com custom_label_4 = "Flash Sale"
├─ Desconto > 20%
└─ Estoque < 50 unidades

Asset Group 3: "Novas Coleções"
├─ Produtos com custom_label_4 = "New Collection"
└─ Data de publi < 30 dias
```

**Por que funciona**: Cada asset group é otimizado independentemente. Google descobre qual audience responde melhor a qual asset group.

---

## Listing groups: filtros automáticos por label

Dentro de um Asset Group, você usa **listing groups** para controlar quais produtos rodam.

No Google Ads, você cria filtros:

```
Listing Group: "High Margin Items"
├─ Filtro: custom_label_0 = "High Margin"
├─ Bid adjustment: +30%
└─ Capping: máx R$ 3,00 por clique

Listing Group: "Low Margin Items"
├─ Filtro: custom_label_0 = "Low Margin"
├─ Bid adjustment: -20%
└─ Sem capping (mais conservador)
```

Custom labels **viram filtros automáticos** — sem eles, você não consegue segmentar.

---

## Performance Max vs. Google Shopping: o que muda

| Aspecto | Google Shopping | Performance Max |
|--------|-----------------|-----------------|
| Controle | Total (bids manuais) | Automático (IA otimiza) |
| Estrutura | Campanha + Listing Groups | Asset Groups |
| Filtragem | Por categoria, preço, marca | Pelos dados do feed (custom labels, título, etc.) |
| Budget | Distribuído manualmente | Distribuído por IA |
| Catálogo grande | Difícil gerenciar 5.000+ produtos | Fácil (IA foca nos bons) |

**Quando usar cada um**:
- **Shopping**: Catálogo pequeno (<500 produtos), controle fino necessário, ROI previsível
- **Performance Max**: Catálogo grande (>1.000 produtos), quer automação, ROAS mais alto

---

## Checklist: seu feed está pronto para Performance Max?

- [ ] Títulos estruturados (Marca + Tipo + Caracterísitcas)? Mínimo 10 caracteres, máximo 150
- [ ] Categorias corretas (google_product_category)? Usando taxonomia oficial do Google
- [ ] Custom labels? Pelo menos custom_label_0 (margem) ou custom_label_2 (performance)
- [ ] Imagens de qualidade? Sem watermark, mínimo 250x250px
- [ ] Descrições descritivas? Mínimo 10 caracteres
- [ ] Preços visíveis e lógicos? > 0, sem preço zero
- [ ] Margem mapeada? Se tiver dados de custo, adicione custom_label_0
- [ ] Top sellers identificados? Se tiver histórico de vendas, marque custom_label_2
- [ ] Atributos básicos? Color, size, gender (se aplicável)
- [ ] Feed sincronizado? Dados estão sempre atualizados

Se respondeu "não" em qualquer um: corrija antes de rodar PMax.

---

## Erros comuns em Performance Max

### **Erro 1: Rodar PMax com feed ruim**

"Vou testar PMax com meu catálogo atual e ver se funciona."

Seu catálogo atual tem títulos genéricos, sem custom labels, sem margem mapeada.

Resultado: PMax não consegue otimizar. IA trata todos os produtos igual. ROAS baixo. Você pausa a campanha.

**Correto**: Limpe o feed primeiro, depois teste PMax.

---

### **Erro 2: Não usar custom labels**

"Vou rodar PMax sem custom labels — deixa a IA descobrir sozinha."

A IA consegue descobrir, mas fica cega. Sem sinais de "este é um top seller", não consegue priorizar.

Resultado: Budget distribuído aleatoriamente entre todos os produtos.

**Correto**: Mesmo que seja só margem (custom_label_0) e performance (custom_label_2).

---

### **Erro 3: Mudar feed frequentemente**

"Vou testar 3 versões de títulos ao mesmo tempo."

Google IA precisa de dados consistentes para aprender. Mudar feed a cada semana quebra o aprendizado.

**Correto**: Escolha uma versão, roda por 30 dias, depois otimiza.

---

### **Erro 4: Budget muito baixo**

"Vou rodar PMax com R$ 500/mês para testar."

Performance Max precisa de budget mínimo (Google sugere R$ 3.000+/mês) para IA ter espaço de aprendizado.

Com R$ 500/mês, IA não consegue testar variações suficientes.

**Correto**: Mínimo R$ 2.000-3.000/mês se tá testando.

---

## Passo a passo: Otimizar feed para Performance Max

### **Semana 1: Auditoria**

1. Pegue amostra de 50 produtos
2. Verifique títulos: são descritivos?
3. Verifique categorias: estão corretas?
4. Verifique imagens: são de qualidade?
5. Verifique custom labels: existem?

### **Semana 2: Corrigir**

1. Reescreva 50 títulos estruturados
2. Mapeia categorias corretas
3. Valida imagens
4. Adiciona custom_label_0 (margem) e custom_label_2 (performance) via planilha ou automação

### **Semana 3: Rollout**

1. Depois que 50 estão ótimos, expande para 500
2. Usa automação (se possível) para aplicar padrão ao resto

### **Semana 4: Testar PMax**

1. Publica 500 produtos otimizados
2. Cria 3-4 asset groups por tema
3. Roda PMax com budget inicial (R$ 2.000-3.000/mês)
4. Deixa rodar 30 dias para IA aprender

### **Após 30 dias: Otimizar**

1. Vê qual asset group tem melhor ROAS
2. Aumenta budget no melhor
3. Adiciona mais produtos ao asset group melhor
4. Pausa ou reduz o pior

---

## Ferramentas para preparar feed

Se tem 1.000+ produtos, preparar manualmente é impossível.

**Opções**:

1. **Planilha + script** (técnico): CSV + Python/Node = custom labels automáticos
2. **Google Sheets add-on** (fácil): Extensão que gera custom labels por fórmula
3. **FeedFlow** (automático): Configure regras ("se margem > 50%, adicione 'High Margin'") e deixa rodar

---

## Conclusão

Performance Max é "IA à solta", mas só funciona se catálogo é bom.

Prepare o feed:
- Títulos estruturados
- Categorias corretas
- Custom labels de margem e performance
- Imagens de qualidade

Depois teste PMax — ROAS vai subir.

[Feed otimizado para Performance Max com o FeedFlow — deixe a IA focar em resultados, não em dados ruins. Teste grátis por 14 dias.](https://feed-flow.app/auth/signup)
