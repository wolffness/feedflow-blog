---
title: "Google Merchant Center Suspenso: 7 Motivos de 'Declarações Falsas' e Como Resolver"
description: "Conta suspensa por declarações falsas? Veja os 7 motivos reais no Brasil e checklist de compliance para solicitar revisão."
pubDatetime: 2026-04-03T14:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/36697936/pexels-photo-36697936.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - resolucao-problemas
  - merchant-center
  - meta-ads
  - nuvemshop
  - feed-de-produtos
author: "FeedFlow"
---

## Sua Conta foi Suspensa? Entenda o Que Realmente Significa "Declarações Falsas"

Receber um email do Google dizendo que sua conta no Merchant Center foi suspensa por "declarações falsas" é uma das situações mais frustrantes para quem trabalha com e-commerce. A mensagem vaga deixa você completamente no escuro: qual informação está errada? Qual produto foi o problema?

A verdade é que o Google usa esse termo amplo para cobrir diversos cenários onde há **inconsistência entre o que você declara no feed de produtos e o que o cliente realmente encontra no site**. Neste artigo, vamos desvendar os 7 motivos reais de suspensão por "declarações falsas" que ocorrem aqui no Brasil, e você terá um **checklist de compliance completo** para corrigir tudo e solicitar revisão com segurança.

## O Que Exatamente o Google Considera "Declarações Falsas"?

Antes de sairmos caçando culpados, é importante entender que o Google não quer maltratar ninguém. A política existe para proteger os consumidores. Quando a plataforma detecta inconsistências entre o feed e o site real, ela assume que há risco de fraude ou enganação.

No contexto brasileiro, onde a logística é complexa, informações são frequentemente desatualizadas e pequenas lojas operam com recursos limitados, essas "declarações falsas" costumam ser **erros operacionais**, não desonestidade.

Vamos aos 7 motivos mais comuns.

## 1. Preço Divergente Entre Feed e Site

**O cenário:** Seu feed diz R$ 149,90, mas o cliente clica no produto e vê R$ 199,90 no site.

Isso é absolutamente o principal gerador de suspensões. Acontece por:

- Promoção ativa no site que não foi atualizada no feed
- Preço congelado no feed por dias/semanas
- Variações de SKU com preços diferentes, mas o feed traz apenas um
- Cupons automáticos que abaixam o preço na hora da compra
- Integração entre sistema ERP e Nuvemshop descalibrada

**Como corrigir:**
- Verifique se seu sistema de atualização de feed está ativo (geralmente deve rodar 1-2 vezes por dia)
- Teste manualmente: pegue 5 produtos aleatórios do feed, clique no site e compare o preço
- Se usar promoções, garanta que o feed sempre reflete o menor preço disponível (com ou sem cupom)
- Configure alertas: monitore feeds automaticamente para detectar discrepâncias

## 2. Frete Incorreto ou Ausente

**O cenário:** Seu feed diz frete grátis para todo Brasil, mas o site calcula frete por CEP, e em algumas regiões sai caro.

Ou pior: o feed não menciona frete ninguém, gerando surpresa na hora do checkout.

**Como corrigir:**
- Documente sua política de frete de forma clara e acessível (não escondida em rodapé ou popup)
- Se há variação por região, declare isso no feed — use os atributos `shipping` e `shipping_label` (ou equivalentes na sua plataforma)
- Se oferece frete grátis apenas para CEPs específicos, coloque isso de forma visível no site
- Teste: simule compras em 3-4 CEPs diferentes e verifique se a informação é consistente

## 3. Imagens com Marca d'Água ou Sobreposições

**O cenário:** Seus produtos têm logo do fornecedor ou "marca" visível nas imagens do feed, ou há marcas d'água que cobrem partes do produto.

O Google considera isso enganoso porque o cliente espera ver o produto puro, e a marca d'água pode estar encobrindo defeitos ou criando dúvida sobre autenticidade.

**Como corrigir:**
- Revisite cada imagem do feed: todas devem mostrar apenas o produto, sem logos, marcas d'água ou textos sobrepostos
- Se o produto é um original com logo de marca (tipo Adidas, Nike), isso é aceitável — logo é parte do produto
- Remova imagens estilizadas com fundo branco manipulado ou marcas decorativas
- Teste: baixe algumas imagens do feed e veja se parecem genuínas e claras

## 4. Política de Devolução Ausente ou Inacessível

**O cenário:** Seu site não tem política de devolução clara, ou ela está em um PDF escondido, ou diz algo vago como "devoluções a critério da loja".

**Como corrigir:**
- Crie uma página dedicada para "Política de Devoluções" ou "Garantia"
- Deixe visível e linkável (não em PDF, não em popup que some)
- Especifique: prazo em dias, quem paga frete de retorno, em que estado o produto deve estar
- Exemplo: "Aceitamos devoluções em até 30 dias. O cliente paga frete de retorno. Produto deve estar íntegro e original."
- Coloque o link dessa página no rodapé do site ou na página de termos

## 5. CNPJ ou Informações de Responsável Não Visíveis

**O cenário:** Seu site não deixa claro quem é responsável pela loja. Não há CNPJ, não há razão social, não há endereço de correspondência.

Isso é suspeito para o Google — parece um site fantasma.

**Como corrigir:**
- Coloque suas informações legais em rodapé ou em página "Sobre Nós" ou "Contato"
- Inclua: CNPJ, Razão Social (ou nome completo se PF), endereço de correspondência, email de contato
- Garanta que essas informações batem com o CNPJ registrado no Google Merchant Center
- Teste: procure essas informações no seu site como se fosse um cliente novo — deve ser fácil encontrar

## 6. Domínio Sem Certificado SSL (HTTPS)

**O cenário:** Seu site ainda roda em HTTP, não HTTPS.

Navegadores modernos mostrem um aviso "não seguro", e o Google assume risco de roubo de dados do cliente.

**Como corrigir:**
- Se sua loja é em Nuvemshop, ela já vem com HTTPS automático — nada a fazer
- Se é site customizado, contratar SSL é obrigatório (Let's Encrypt é gratuito via cPanel ou similar)
- Teste: acesse seu site no navegador — deve começar com `https://`, não `http://`
- Redirecione todo tráfego HTTP para HTTPS

## 7. Site em Construção ou com Conteúdo Mínimo

**O cenário:** Seu site tem apenas 3 produtos, ou aparenta estar incompleto, ou exibe "em breve" em várias seções.

O Google suspeita de loja falsa ou projeto abandonado.

**Como corrigir:**
- Garanta que o site tem conteúdo real e atualizado
- Se ainda está lançando, crie uma landing page clara explicando o status — não deixe partes em branco
- Mantenha pelo menos 10-20 produtos ativos e com descrições detalhadas
- Atualize regularmente (novos produtos, posts de blog, etc.)

---

## Checklist de Compliance — Item por Item

Use este checklist **antes de publicar ou atualizar seu feed** e **antes de solicitar revisão** após uma suspensão:

### Preço
- [ ] Feed reflete o menor preço disponível no momento?
- [ ] Fiz teste em 5 produtos aleatórios — preços batem?
- [ ] Promoções ativas foram incluídas no feed?
- [ ] Atualização automática do feed está ligada (frequência recomendada: 2x ao dia)?

### Frete
- [ ] Política de frete está visível no site (não escondida)?
- [ ] Se há variação por região, está documentada?
- [ ] Feed menciona condições de frete grátis (se aplicável)?
- [ ] Testei 3 CEPs diferentes — informação consistente?

### Imagens
- [ ] Todas as imagens do feed mostram apenas o produto?
- [ ] Há marca d'água? Se sim, foi removida?
- [ ] Imagens parecem genuínas (não estilizadas ou manipuladas)?
- [ ] Pelo menos 3 imagens por produto (quando possível)?

### Política de Devolução
- [ ] Página dedicada a devoluções existe no site?
- [ ] Está linkável (não em PDF ou popup)?
- [ ] Prazo claro (ex: 30 dias)?
- [ ] Informação sobre frete de retorno?

### Dados Legais
- [ ] CNPJ visível no rodapé ou "Sobre Nós"?
- [ ] Razão social bate com cadastro Google Merchant Center?
- [ ] Endereço de correspondência presente?
- [ ] Email de contato funcional?

### Segurança
- [ ] Site roda em HTTPS (cadeado no navegador)?
- [ ] HTTP redireciona para HTTPS?

### Conteúdo Geral
- [ ] Site tem pelo menos 10 produtos ativos?
- [ ] Descrições de produto são detalhadas (não genéricas)?
- [ ] Rodapé está completo (contato, links importantes)?
- [ ] Sem avisos de "em construção"?

---

## Passo a Passo: Como Solicitar Revisão Após Corrigir Tudo

Depois de completar o checklist acima, você está pronto para solicitar revisão formal.

### Passo 1: Certifique-se de que Tudo está Corrigido

Não solicite revisão apressadamente. Verifique novamente cada ponto do checklist. O Google tem fila de revisões e pode ser lento — você quer usar bem esse tempo.

### Passo 2: Acesse o Google Merchant Center

1. Faça login em [merchantcenter.google.com](https://merchantcenter.google.com)
2. Clique em **Suspensões e Advertências** (ou **Suspended accounts** / **Violations** dependendo da interface)
3. Procure a mensagem de "Declarações Falsas"

### Passo 3: Clique em "Solicitar Revisão"

Na mensagem de suspensão, haverá um botão **"Request review"** ou **"Solicitar revisão"**.

Clique nele.

### Passo 4: Descreva as Correções (em Inglês ou Português)

Escreva de forma clara e profissional:

> "Identificamos os problemas e corrigimos:
> 1. Preços do feed agora são atualizados 2x ao dia via integração automática
> 2. Adicionamos página clara de política de devoluções
> 3. Removemos imagens com marca d'água
> 4. Informações legais (CNPJ, endereço) agora estão no rodapé
> 5. Site roda em HTTPS
>
> Testamos 5+ produtos aleatórios e preços batem com o site. Aguardamos revisão."

**Dica:** Seja breve, mas demonstre que você entendeu o problema.

### Passo 5: Espere a Revisão

O Google geralmente responde em **3-7 dias úteis**. Em caso de resposta negativa (rara depois de verdadeiras correções), você terá opção de solicitar revisão novamente.

---

## Casos Reais: Histórias de Lojas que Passaram Por Isso

### Caso 1: Renata (Founder de Loja de Roupas)

Renata vendia roupas em Nuvemshop e tinha promoção ativa no site (20% off) que não estava no feed. Recebeu suspensão por "preço divergente".

**Solução:** Configurou integração automática do feed para rodar a cada 6 horas. Resultado: revisão aprovada em 5 dias.

### Caso 2: Thiago (Coordenador de Marketplace)

Thiago operava 4 feeds diferentes (Google Shopping, Meta Ads, TikTok, Pinterest) em paralelo. Uma delas (Google) ficou desatualizada por 2 semanas.

**Solução:** Implementou dashboard de monitoramento centralizado com alertas. Agora verifica status de todos os feeds diariamente.

---

## Erros Que Ainda Causam Rejeição Após Revisão

Se sua solicitude de revisão for rejeitada mesmo após corrigir, pode ser:

1. **Testagem insuficiente:** O Google pode verificar novamente e encontrar inconsistências que você perdeu
2. **Histórico de violações:** Se sua conta tem múltiplas violações, revisa pode ser mais rigorosa
3. **Política de devolução ainda fraca:** Escreva de forma mais explícita e legal (não vaga)
4. **Imagens de baixa qualidade:** Até imagens legitimamente do fornecedor podem parecer estranhas se forem de má qualidade

---

## Prevenção: Não Deixe Isso Acontecer de Novo

### Automatize Tudo

- Feed deve atualizar automaticamente (Nuvemshop + integradores como Feedflow têm essa função)
- Preços devem sincronizar em tempo real
- Imagens devem ser validadas antes de ir ao feed

### Revise Regularmente

- Toda semana, pegue 5 produtos aleatórios do feed
- Clique no site e verifique: preço, imagens, descrição, frete
- Anote discrepâncias

### Mantenha Documentação Legal Atualizada

- Política de devoluções
- CNPJ e informações legais
- Termos de uso

---

## Resumo: Os 7 Pontos Críticos

| # | Motivo | Ação Imediata |
|---|--------|---------------|
| 1 | Preço divergente | Automatize feed, teste 5 produtos |
| 2 | Frete incorreto | Documente política, teste 3 CEPs |
| 3 | Imagens com marca | Remova marcas d'água |
| 4 | Política ausente | Crie página dedicada |
| 5 | CNPJ não visível | Coloque no rodapé |
| 6 | Sem HTTPS | Ative SSL no domínio |
| 7 | Site incompleto | Mantenha 10+ produtos |

---

[O FeedFlow inclui checklist de compliance pré-publicação](https://feed-flow.app/auth/signup)
