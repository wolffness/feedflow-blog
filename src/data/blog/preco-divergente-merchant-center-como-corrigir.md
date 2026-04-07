---
title: "Preço Divergente no Google Merchant Center: Como Identificar e Corrigir Antes da Suspensão"
description: "Preço no feed diferente do site? Saiba como identificar divergências, os riscos de suspensão e como atualizar feeds automaticamente."
pubDatetime: 2026-04-04T10:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/7752894/pexels-photo-7752894.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - troubleshooting
  - merchant-center
  - nuvemshop
  - feed-de-produtos
author: "FeedFlow"
---

## O Problema Silencioso que Causa Suspensão de Conta

Você está em uma reunião com a gestora de tráfego. O Google Ads está performando bem. Conversões subindo. E de repente: **"Sua conta foi suspensa por política de preços divergentes"**.

Não é raríssimo. A divergência de preço entre o que você anunciou no Google Merchant Center e o que realmente está no site é uma das três razões mais comuns de rejeição de produtos e suspensão de contas — junto com problemas de landing page e fotos de má qualidade.

Mas aqui está o incômodo: você **não fez nada errado**. Sua loja estava com os preços corretos. Seu feed também. O que aconteceu?

Provavelmente uma dessas situações:

- Uma **promoção terminou às 23h59**, mas seu feed só atualiza de manhã cedo
- O **site usa microdata dinâmico** (JavaScript renderizado) e o feed pull estático
- Há **cache de preço defasado** entre sua plataforma e o feed
- O **Google indexou o antigo** antes de você atualizar

Este artigo é para **coordenadores de e-commerce e gestoras de tráfego** que não querem acordar com uma suspensão de conta. Vamos entender por que acontece, como diagnosticar em 5 minutos e como prevenir — de verdade.

## Por Que Acontece a Divergência de Preço?

### Microdata vs. Feed: Duas Fontes de Verdade

Quando você cria um anúncio no Google Shopping, o Google faz duas coisas:

1. **Rastreia seu site** e lê o microdata (JSON-LD ou structured data) que você colocou nas páginas
2. **Consome seu feed XML** de produtos (aquele arquivo que você atualiza no Merchant Center)

Se esses dois valores não batem **em tempo de verificação**, o Google marca como divergência.

O problema é que muitas vezes:
- O site usa **preço dinâmico** com JavaScript (aplicando desconto na hora)
- O feed é **atualizado em lote**, uma ou duas vezes por dia
- Há defasagem de minutos a horas entre o momento que o cliente vê o preço no site e o que o Google lê

**Exemplo real:** Em uma loja Nuvemshop, uma promoção estava ativa no site (exibindo R$ 89,90). Mas o feed ainda tinha R$ 149,90 de uma alimentação feita 8 horas antes. Um cliente viu R$ 89,90 no Google Shopping, clicou, chegou no site com R$ 89,90 — até aqui tudo bem. Mas o Google Merchant Center recebeu uma reclamação de outro cliente que viu a página com R$ 149,90 no cache quando o feed foi indexado. Resultado: produto suspenso.

### Cache de Preço Defasado

Sua plataforma (Nuvemshop, Tray, VTEX, qualquer uma) tem um cache interno. O feed puxa dados desse cache. Se o cache não se invalida quando o preço muda, você fica com histórico defasado.

Adicione a isso:
- **Cache do Cloudflare** no seu site
- **Cache do navegador** do cliente
- **Bot crawl delay** do Google (pode levar 24-48h para reindexar)

E você tem uma tempestade perfeita de defasagem.

### Promoções que Acabaram mas Ficaram no Feed

Este é o cenário mais comum em sazonalidades:

- **Black Friday encerra às 23h59**
- Seu feed estava configurado para atualizar "diariamente às 7 da manhã"
- Às 23h59, o site volta para o preço normal (R$ 299)
- Até às 7 da manhã, o feed ainda diz R$ 199 (preço da Black Friday)
- **8 horas de divergência**

Google Scanner passa no meio da noite (Google roda bots 24/7), vê R$ 199 no feed. Seu site já está mostrando R$ 299 de verdade. **Flagged como divergência.**

## Como Diagnosticar em 5 Minutos

Se você suspeita que tem divergência, o Google Merchant Center oferece ferramentas explícitas (e gratuitas) para diagnosticar.

### Passo 1: Acesse o Diagnóstico do GMC

1. Abra **Google Merchant Center** → sua conta
2. Vá para **Produtos** → **Diagnósticos**
3. Procure pela seção **Preço divergente** ou **Price mismatch**

Você verá uma lista de produtos com divergência flagged. O Google mostra:
- O preço que está no **feed**
- O preço que o **Google encontrou no site**
- A **data/hora da divergência**
- O status (rejeição iminente? Já suspenso?)

### Passo 2: Clique no Produto Específico

Ao clicar em um produto com divergência:

- Você vê o **link do produto**
- O **preço no feed**
- O **preço detectado no site** (quando Google fez o crawl)
- Um botão **"Visitar URL"** para abrir a página agora

Aqui vem a sacada: **abra a página agora**. Se o preço que você vê em tempo real é diferente do que o Google encontrou, a defasagem foi culpada. Se o preço é igual ao antigo, significa seu site ou feed está desatualizado de verdade.

### Passo 3: Verifique o Feed Diretamente

Vá para **Merchant Center** → **Feeds** → seu feed principal.

Clique em **"Processar histórico"** ou **"Histórico de processamento"**.

Você verá:
- **Última atualização do feed** (data/hora)
- **Quantidade de produtos processados**
- **Erros e avisos**

Compare essa hora com a hora que o Google detectou a divergência. Se há gaps, você achou o culpado.

### Passo 4: Use o Validador de Feed

Ainda no Merchant Center:
1. Vá para **Feeds** → **Validar feed**
2. Cole a URL do seu feed XML ou upload do arquivo
3. O Google validará a estrutura, campos obrigatórios, preços

Isso não vai dizer se há divergência (o diagnóstico já faz isso), mas vai confirmar se o feed está bem formado.

## O Risco Real: Quando Vai de Aviço para Suspensão

O Google não suspende sua conta da noite para o dia por *uma* divergência isolada.

Mas aqui está a progressão:

1. **Primeira divergência:** Produto marcado em "Aviso". Google pode reprovar o anúncio, mas não suspende conta.
2. **Segunda/terceira divergência em 30 dias:** "Política violada". Produto rejeitado no Ads.
3. **Mais de 10% dos produtos com divergência:** **Sua conta inteira pode ser suspensa.**

E quando a conta é suspensa por preço divergente, o processo de reabilitação é manual. Você precisa:
- Submeter um formulário de apelação
- Explicar o que corrigiu
- Aguardar resposta do Google (3-7 dias)
- Torcer para eles reabilitarem

Perdemos dias de vendas no Google Shopping. E em sazonalidade (Black Friday, Natal), suspensão de conta é **morte comercial**.

## Como Prevenir: A Solução de Atualização Automática

Existem três caminhos:

### 1. Feed com Atualização em Tempo Real (a menos comum)

Se você é VTEX ou Shopify com plugins premium, pode gerar um feed que atualiza a cada 30 minutos ou até a cada mudança de preço.

**Vantagem:** Máxima precisão  
**Desvantagem:** Requer infraestrutura avançada; nem todas as plataformas suportam

### 2. Feed com Atualização Horária (o equilíbrio)

Mais seguro:
- Atualizar feed a cada **1 hora** em vez de diariamente
- Validar que microdata do site está sincronizado com feed

Em Nuvemshop (que usa Nexo SDK), isso é simples:
- Configure seu feed integrado ou vía ferramentas como Plugi, Feedgen, ou **FeedFlow**
- Defina "Atualizar a cada 60 minutos"
- O feed passa a puxar preços do seu banco de dados em tempo quase-real

**Resultado:** Mesmo que uma promoção mude, a defasagem máxima é 1 hora. Google scans variável, mas você cobre a maioria dos bots.

### 3. Feed Inteligente com Exclusão de Promoções (recomendado)

A abordagem mais robusta:

1. Seu sistema separa **preço base** de **preço com promoção**
2. No feed, você envia o **preço com promoção** + campo `g:expiration_date`
3. Google sabe que "essa promoção vence em 2026-04-07 às 23:59"
4. Quando passa meia-noite, Google remove automaticamente o produto de anúncio (não deixa preso com preço errado)
5. Feed atualiza de manhã com novo preço base
6. Google re-indexa sem divergência

Exemplo XML:
```xml
<item>
  <g:id>produto-123</g:id>
  <g:title>Camiseta Premium</g:title>
  <g:price>89.90 BRL</g:price>
  <g:sale_price>49.90 BRL</g:sale_price>
  <g:sale_price_effective_date>2026-04-05T00:00:00/2026-04-07T23:59:59</g:sale_price_effective_date>
</item>
```

Google respeita a data de validade da promoção. Exatamente no momento que vence, o sistema para de usar `sale_price` e volta ao `price` (mesmo que o feed ainda tenha os dados antigos).

## Checklist de Prevenção

Para nunca mais ter essa dor de cabeça:

- [ ] **Configurar atualização do feed a cada 1-2 horas** (não diária)
- [ ] **Verificar microdata no site** em pelo menos 5 URLs (usar Google Rich Results Test)
- [ ] **Usar campo `g:sale_price_effective_date`** para todas as promoções
- [ ] **Monitorar Diagnósticos do Merchant Center** semanalmente (não esperar aviso)
- [ ] **Testar mudança de preço:** altere preço no site, aguarde 1 hora, verifique se feed atualizou
- [ ] **Comunicar datas de promoção** com antecedência ao time de marketing (Black Friday, Natal, etc.) para sincronizar feed
- [ ] **Usar ferramenta com suporte a atualização automática** (FeedFlow, Plugi, ou integração nativa Nuvemshop)

## Caso Real: A Loja que Quase Perdeu R$ 200 Mil

Uma loja de eletrônicos roupa premium em Nuvemshop estava com essa defasagem exata:

- **Faturamento mensal:** R$ 200 mil (60% via Google Shopping)
- **Situação:** Feed atualizado diariamente às 6 da manhã
- **Problema:** Estações mudam preço às 21h (promoção noturna no site)
- **Resultado:** 18 horas de divergência todo dia

O Google flagged 15% dos produtos como divergência em 3 semanas. Conta foi **suspensa na véspera da Black Friday**.

Quando voltaram a atualizar o feed a cada 2 horas e adicionaram `sale_price_effective_date`, **nenhuma divergência em 90 dias seguintes**. Campanha foi restaurada. Black Friday aconteceu (e foi sucesso).

Esse é o impacto real: decisão de "quando atualizar o feed" virou decisão de "vamos faturar R$ 200 mil este mês ou não".

## A Solução FeedFlow

Se você está em Nuvemshop, tem uma ferramenta desenhada exatamente para isso.

**FeedFlow** gera feeds XML com:
- ✓ Atualização automática a cada 1-2 horas (configurable)
- ✓ Suporte completo a `sale_price_effective_date`
- ✓ Validação de preço vs. site em tempo real
- ✓ Diagnósticos integrados (sem ter que entrar no GMC toda hora)
- ✓ Alertas quando divergência é detectada

Planos:
- **Lite:** R$89/mês (2.500 itens, sincronização a cada 6h)
- **Pro:** R$199/mês (15.000 itens, sincronização a cada 2h)
- **Premium:** R$499/mês (50.000 itens, sincronização a cada 1h)
- **Enterprise:** a partir de R$999/mês (feeds ilimitados, SLA 99.9%)

[Feed atualizado automaticamente — sem divergência de preço](https://feed-flow.app/auth/signup)
