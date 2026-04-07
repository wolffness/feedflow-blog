---
title: "Como Criar Feed Google Shopping em Planilha (e Por Que Isso Custa R$196k/Ano)"
description: "Passo a passo para criar um feed Google Shopping em planilha, fazer upload no Merchant Center — e o cálculo real de quanto isso custa comparado a um feed manager."
pubDatetime: 2026-04-02T10:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - google-shopping
  - automacao-de-feeds
  - custo-operacional
author: "FeedFlow"
---

Criar um feed Google Shopping em planilha é possível. O Google Merchant Center aceita arquivos CSV ou TSV diretamente. E para lojas com até 50 produtos e catálogo estável, é uma opção válida.

O problema aparece na segunda semana — quando você precisa atualizar preços, ajustar estoque e fazer upload de novo. E na terceira. E na quarta.

Este artigo explica como criar o feed em planilha do zero, como fazer o upload no Google Merchant Center, e calcula com precisão quanto esse processo custa quando a loja começa a crescer.

## Como criar um feed de produtos no Merchant Center usando planilha

O Google Merchant Center aceita feeds nos formatos Google Sheets, CSV, TSV e XML. Para criar um feed em planilha, você precisa montar uma tabela com os campos obrigatórios para cada produto.

### Campos obrigatórios (cada produto precisa de todos eles)

- **id** — identificador único do produto (SKU da sua loja)
- **title** — nome do produto (até 150 caracteres)
- **description** — descrição do item (até 5.000 caracteres)
- **link** — URL do produto na sua loja (deve abrir direto na página do produto)
- **image_link** — URL da imagem principal
- **availability** — `in stock` ou `out of stock`
- **price** — preço no formato `149.90 BRL`
- **google_product_category** — categoria do Google Shopping (número ou texto)

### Campos recomendados para moda e e-commerce

- `brand` — marca do produto
- `gtin` — código de barras (EAN/UPC)
- `color` — cor
- `size` — tamanho
- `product_type` — categoria da sua loja (hierarquia: "Roupas > Camisetas > Básicas")
- `sale_price` — preço promocional, se houver

### Como fazer upload do feed no Google Merchant Center

1. Acesse **Google Merchant Center → Produtos → Feeds**
2. Clique em **"+"** para adicionar um novo feed
3. Selecione o país e idioma (Brasil, Português)
4. Escolha o método: **Google Planilhas** (recomendado) ou **Upload de arquivo**
5. Se for Google Planilhas: conecte a planilha e configure a frequência de atualização
6. Se for CSV/TSV: faça upload do arquivo ou configure uma URL de fetch agendado
7. Clique em **Salvar** e aguarde o Merchant Center processar (pode levar até 24h)

O Merchant Center vai validar cada produto e mostrar erros de aprovação. Campos ausentes, preços inconsistentes com o site e imagens com problemas são as causas mais comuns de reprovação.

### Configurar atualização agendada (importante)

Se você subiu um arquivo estático, os dados vão envelhecer. Configure o Merchant Center para buscar o arquivo periodicamente via URL (o que exige hospedar o arquivo em algum servidor) ou use Google Planilhas — neste caso, o Merchant Center pode puxar os dados atualizados automaticamente uma vez por dia.

---

## O problema: planilha manual = 16 horas de trabalho por mês

Para lojas com 100+ produtos e catálogo dinâmico (preços mudam, estoque varia), manter um feed em planilha vira uma tarefa recorrente pesada:

**Tempo semanal típico:**
- Exportar dados da Nuvemshop: 30 min
- Abrir, revisar e organizar planilha: 1h
- Atualizar preços e estoque: 1h30
- Corrigir erros de formatação: 45 min
- Exportar e fazer upload no Merchant Center: 15 min

**Total: 4 horas por semana — 16 horas por mês**

---

## Quanto custa manter o feed na planilha (cálculo real)

### Custo de mão de obra

Para um analista que recebe R$ 3.500/mês (R$ 21,88/hora):
- **16h/mês × R$ 21,88 = R$ 350/mês em salário**
- Ao ano: **R$ 4.200**

Para uma founder que administra isso diretamente (R$ 7.000/mês):
- **16h/mês × R$ 43,75 = R$ 700/mês**
- Ao ano: **R$ 8.400**

### Custo de erros de digitação

Pesquisas de mercado indicam 1 erro a cada 200 linhas de planilha. Para uma loja com 1.000 SKUs:
- ~5 erros por atualização
- Cada erro custando 5 vendas × R$ 150 (ticket médio)
- **R$ 3.750 em vendas perdidas por mês**
- Ao ano: **R$ 45.000**

### Custo de desatualização

Planilha atualizada segunda. Produto vendeu na quinta. Anúncio ainda aparece "em estoque". Cliente clica, chega na loja, descobre que acabou. Abandona.

Para 1.000 cliques no Google Shopping por mês com 2% de taxa de rejeição por desatualização:
- 20 vendas não realizadas × R$ 150 = **R$ 3.000/mês**
- Ao ano: **R$ 36.000**

### Custo no Google Shopping

Feed com dados inconsistentes prejudica o Quality Score. O Merchant Center reduz impressões de feeds com erros frequentes. Para uma loja investindo R$ 50k/mês em Google Shopping:
- CTR saudável: 3%
- CTR com feed desatualizado: 1,8%
- **Receita perdida: R$ 10.000/mês**
- Ao ano: **R$ 120.000**

### Total anual (planilha manual)

- Salário: R$ 4.200
- Erros de digitação: R$ 45.000
- Desatualização: R$ 36.000
- Impacto em Google Shopping: R$ 120.000
- **Total: R$ 205.200/ano**

---

## Feed manager automatizado: o que muda

Com um feed manager conectado à Nuvemshop, você não monta planilha — a ferramenta lê os dados da loja diretamente via API e gera o feed para cada plataforma automaticamente.

**Setup inicial:** 15 minutos
1. Conectar a conta Nuvemshop (1 clique)
2. Configurar os feeds (Google Shopping, Meta Ads, Pinterest)
3. Copiar a URL do feed para o Google Merchant Center
4. Configurar atualização automática (a cada hora ou em tempo real)

**Depois disso:**
- Preços atualizam automaticamente quando mudam na loja
- Estoque sincroniza sem intervenção
- Produtos novos entram no feed automaticamente
- Campos formatados conforme requisitos de cada plataforma
- Erros de compliance detectados antes do upload

**Tempo mensal: 10 minutos** (revisar relatórios, nada mais)

---

## Comparação: planilha vs feed manager

**Planilha manual:**
- Setup: 1h
- Manutenção mensal: 16h
- Frequência de atualização: 1x/semana (máximo)
- Risco de erro: alto
- Custo anual: R$ 205.200

**Feed manager (FeedFlow):**
- Setup: 15 min
- Manutenção mensal: 10 min
- Frequência de atualização: automática, até 1x/hora
- Risco de erro: próximo de zero
- Custo anual: R$ 1.068 (R$ 89/mês)

**Economia: R$ 204.132/ano**

---

## Quando a planilha ainda faz sentido

- Loja com menos de 50 produtos
- Catálogo estável (sem mudanças frequentes de preço ou estoque)
- Sem budget para ferramentas
- Teste inicial antes de escalar campanhas

Para esses casos, criar o feed em planilha e fazer upload no Merchant Center é válido. Siga o tutorial no início deste artigo e configure atualização via Google Planilhas — é de graça e funciona.

## Quando migrar para feed manager

- Mais de 100 produtos
- Preços ou estoque mudam com frequência
- Você gasta mais de 4h/semana gerenciando dados de feed
- Quer distribiuir para mais de um canal (Google + Meta + Pinterest)
- Já teve problemas com produtos reprovados no Merchant Center

A migração leva 15 minutos e o impacto nos feeds começa imediatamente.

[Crie seu primeiro feed automatizado grátis por 14 dias](https://feed-flow.app/auth/signup)
