---
title: Frete no Google Merchant Center para Lojas Brasileiras - Como Configurar
description: Guia completo sobre configuração de frete no Google Merchant Center. Particularidades do Brasil, tabelas de frete, divergência de custo e sincronização.
pubDatetime: 2026-04-07T18:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/5912324/pexels-photo-5912324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - google-shopping
  - frete
  - merchant-center
  - nuvemshop
  - configuracao
author: "FeedFlow"
---

## Frete no Brasil = problema número 1 de suspensão no Google Shopping

Você está com a conta suspensa no Google Merchant Center e a mensagem diz: "Divergência de custo de frete".

Ou produto está reprovado por: "Frete não pode ser calculado".

No Brasil isso é frequente. Muito frequente.

Por quê? Porque nosso frete é complexo. Por CEP, tabelas de Correios, transportadoras, frete grátis condicional, etc.

Google não entende essa complexidade. Espera um padrão: frete fixo ou calculado claramente.

Este guia derruba mitos e mostra a verdade sobre frete no GMC.

---

## O dilema brasileiro: frete é dinâmico, Google quer fixo

**Problema**: 
- Sua loja tem frete dinâmico (calcula por CEP)
- Google Shopping espera um valor fixo ou uma tabela clara
- Cliente compra, vê frete de R$ 5 no Google Shopping, mas o carrinho mostra R$ 15
- Culpado: divergência de frete
- Resultado: suspensão da conta

**Por quê Google é rigoroso**: Razão anti-fraude. Gostaria de evitar anúncio que promete frete baixo mas cobra alto no checkout.

---

## As 3 formas de configurar frete no Google Shopping

### **Opção 1: Tabela de frete fixa no Merchant Center**

Você define uma tabela com destinos (regiões, estados) e preços fixos.

**Como fazer**:
1. No Merchant Center, vá a **Configuração > Envio**
2. Crie uma tabela: "Frete Brasil - Tabela Fixa"
3. Defina:
   - Peso mínimo/máximo
   - Destinos (país/estado/CEP)
   - Preço de frete
4. Aplique à conta

**Exemplo**:
```
Destino: Brasil (SP, RJ, MG, ES)
Peso: Até 5kg
Frete: R$ 15

Destino: Brasil (Norte/Nordeste)
Peso: Até 5kg
Frete: R$ 25

Destino: Brasil (Sul)
Peso: Até 5kg
Frete: R$ 20
```

**Impacto**: Simples, mas impreciso. Se frete real é R$ 15 em SP mas tabela diz R$ 20, divergência.

---

### **Opção 2: Atributo `shipping` no feed**

Você adiciona o preço de frete direto no XML de cada produto.

**Como fazer**:

```xml
<item>
  <id>CAMISETA-001</id>
  <title>Aramis Camiseta Preta</title>
  <price>89.90</price>
  <g:shipping>
    <g:country>BR</g:country>
    <g:price>15.00</g:price>
  </g:shipping>
</item>
```

**Variações por destino**:
```xml
<g:shipping>
  <g:country>BR</g:country>
  <g:region>SP</g:region>
  <g:price>12.00</g:price>
</g:shipping>

<g:shipping>
  <g:country>BR</g:country>
  <g:region>BA</g:region>
  <g:price>25.00</g:price>
</g:shipping>
```

**Impacto**: Preciso. Cada produto pode ter frete diferente por região. Melhor para lojas que têm dados reais de frete.

---

### **Opção 3: Transportadora integrada (melhor opção)**

Google conecta diretamente com a transportadora (Correios, Sedex, etc.) e calcula frete em tempo real.

Disponível para:
- **Correios** (integração oficial no Brasil)
- **Sedex** (Correios expedido)
- **Algumas transportadoras privadas** (não todas, ainda limitado no Brasil)

**Como fazer**:
1. No Merchant Center, vá a **Envio > Conectar transportadora**
2. Escolha "Correios" ou outra disponível
3. Google pedirá credenciais de API dos Correios
4. Configure peso dos produtos no Merchant Center ou no feed
5. Google calcula automaticamente baseado no CEP do cliente

**Impacto**: Mais preciso. Google calcula frete real em tempo real. Sem divergência.

---

## Qual método usar em cada caso

| Tipo de Loja | Método Recomendado | Motivo |
|--------------|-------------------|--------|
| < 100 produtos, frete fixo | Tabela no Merchant Center | Simples, direto |
| 100-500 produtos, frete variável por região | Atributo `shipping` no feed | Controle fino |
| > 500 produtos, frete dinâmico por CEP | Integração Correios + weight | Mais preciso, menos suspensões |
| Multicanal (Google + Meta), frete variável | Atributo `shipping` + automação | Reutiliza em todos os canais |

---

## Particularidades de frete grátis

Você tem promoção: "Frete grátis acima de R$ 100".

Google permite isso, mas você PRECISA ser explícito.

**Duas formas**:

### **Forma 1: Condicional no feed**

```xml
<g:shipping>
  <g:country>BR</g:country>
  <g:price>0.00</g:price>
  <g:shipping_label>frete_gratis_acima_100</g:shipping_label>
</g:shipping>

<!-- Apenas para produto com preço > 100 -->
<item>
  <id>CAMISETA-PREMIUM</id>
  <price>150.00</price>
  <g:shipping>
    <g:country>BR</g:country>
    <g:price>0.00</g:price>
  </g:shipping>
</item>
```

### **Forma 2: Via Merchant Center**

Na tabela de frete, você marca:
```
Peso: 0-999kg
Preço: Grátis (ou R$ 0)
Promoção: Válida apenas para carrinhos > R$ 100
```

**Importante**: Google não consegue validar "acima de X" direto no feed. Você precisa ser honesto — se a promoção não é universal, deixe frete padrão (não grátis) no produto.

---

## Sincronização Nuvemshop ↔ Google Merchant Center

Se usa Nuvemshop, o fluxo é:

```
Nuvemshop (cadastra frete)
  ↓
FeedFlow ou integração (exporta dados)
  ↓
Google Merchant Center (recebe no feed ou tabela)
```

**O problema**: Se o frete mudou na Nuvemshop mas seu feed não sincronizou, divergência.

**Solução**:
1. Verifique frequência de sincronização (FeedFlow: a cada 2-6h, conforme plano)
2. Se usa integração nativa Nuvemshop, sincronização é automática
3. Se usa feed manual, atualize pelo menos diariamente

---

## Erros comuns que causam divergência

### **Erro 1: Frete na tabela do Merchant Center, mas diferente do da loja**

```
Tabela GMC: Frete SP R$ 15
Loja Nuvemshop: Frete SP R$ 20
Feed: Sem informação de frete
```

Resultado: Cliente vê R$ 15 no Google, R$ 20 no carrinho. Suspensão.

**Correto**: Sincronize — tabela = loja, ou use atributo `shipping` com valor real.

---

### **Erro 2: Peso dos produtos não informado**

Você usa integração com Correios, mas não cadastrou peso dos produtos.

Google não consegue calcular.

Resultado: Produto reprovado: "Frete não pode ser calculado".

**Correto**: Cadastre peso (em kg) de cada produto no Merchant Center ou feed.

---

### **Erro 3: Frete grátis universal sem avisar Google**

```xml
<g:shipping>
  <g:country>BR</g:country>
  <g:price>0.00</g:price>
</g:shipping>
```

Isso é legítimo, mas esclareça no título ou descrição: "Frete grátis na loja" para Google entender.

**Correto**: Deixe explícito — no feed ou no painel do GMC.

---

### **Erro 4: Formato de preço quebrado**

```xml
<g:price>15,00</g:price>  ← Errado (vírgula)
```

Google espera ponto:
```xml
<g:price>15.00</g:price>  ← Correto
```

**Correto**: Sempre ponto (.) como separador decimal, mesmo em PT-BR.

---

### **Erro 5: Esquecer moeda**

```xml
<g:price>15</g:price>  ← Incompleto
```

Google não sabe se é R$ 15 ou USD 15.

**Correto**: 
```xml
<g:price currency="BRL">15.00</g:price>
```

---

## Checklist: frete está configurado corretamente?

- [ ] Escolheu um método (tabela, atributo shipping, ou integração Correios)?
- [ ] Frete informado no GMC = frete real na loja?
- [ ] Peso dos produtos está cadastrado (se usa integração Correios)?
- [ ] Frete grátis está explícito (se aplicável)?
- [ ] Formato de preço: ponto (.) e moeda correta (BRL)?
- [ ] Feed sincroniza em tempo real ou diariamente?
- [ ] Testou comprando um produto para validar frete mostrado vs. carrinho?

---

## Teste prático: como validar frete

1. Pegue 3 produtos diferentes
2. No Google Shopping, veja o frete mostrado
3. Simule compra na sua loja (coloca CEP, vê frete no carrinho)
4. Compara:
   - Frete Google = Frete loja? 
   - Se não = configuração errada

**Se valores diferem**:
- Tabela está desatualizada? Atualize
- Feed não sincronizou? Force sincronização
- Integração Correios quebrada? Reconnecte

---

## Impacto de frete errado

| Erro | Impacto | Tempo de Suspensão |
|------|--------|-------------------|
| Divergência pequena (R$ 1-2) | Aviso | Dias |
| Divergência grande (> R$ 5) | Sinalização | Horas |
| Frete 0 sem ser frete grátis | Reprovação | Imediato |
| Frete impossível calcular | Reprovação | Imediato |
| Padrão de divergência | Suspensão | Horas |

Frete é um dos **top 3 motivos de suspensão no Brasil**. Depois de preço divergente e estoque divergente.

---

## Ferramentas para sincronização de frete

### **Se usa Nuvemshop**:

- **FeedFlow**: Sincroniza frete automaticamente do painel Nuvemshop → feed
- **Integração nativa**: Nuvemshop + Google Merchant Center (mas limitada)

### **Se usa outra plataforma**:

- **Atributo `shipping` no feed**: Você exporta frete da sua base → XML → Google
- **Integração Correios**: Google busca frete direto das Correios (mais automático)

---

## Conclusão

Frete é chato, mas é não-negociável no Brasil. Google não brinca com divergência.

**Configuração correta**:
1. Escolha um método (tabela, atributo, ou Correios)
2. Sincronize sempre com a realidade da loja
3. Teste antes de publicar
4. Monitore divergências regularmente

Frete configurado certo = sem suspensões, conversão mais confiável.

[Frete sincronizado automaticamente da Nuvemshop para o feed — sem divergência, sem suspensão. Teste o FeedFlow grátis por 14 dias.](https://feed-flow.app/auth/signup)
