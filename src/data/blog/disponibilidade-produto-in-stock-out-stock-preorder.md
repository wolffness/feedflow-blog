---
title: "Disponibilidade de Produto: in_stock vs out_of_stock vs Preorder em Feed"
description: "Availability campo crítico: valores aceitos Google/Meta, backorder vs preorder, estoque em tempo real, sincronização."
pubDatetime: 2026-04-02T12:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/34698792/pexels-photo-34698792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - feed
  - disponibilidade
  - estoque
  - em-estoque
  - pre-venda
author: "FeedFlow"
---

## O Campo de Disponibilidade Que Ninguém Lê Mas Todo Mundo Deveria

Seu produto tem estoque. Você coloca no feed: `availability = "in stock"`.

Mas você não sincroniza. 3 dias depois, estoque acaba. Ninguém atualiza o feed.

Resultado: anúncio Google Shopping ainda mostra "Compre agora", usuário clica, chega ao site, produto está fora de estoque. Conversão perdida.

Este é o campo mais ignorado e mais crítico de todos. Este artigo explica os valores corretos, quando usar cada um, e como sincronizar corretamente.

---

## Os Valores Aceitos: Google + Meta + TikTok

### Padrão (Obrigatório)

**in stock**
- Produto disponível para compra imediatamente
- Exemplo: camiseta em estoque, pronta para enviar
- Google aceita: SIM
- Meta aceita: SIM
- TikTok aceita: SIM

**out of stock**
- Produto não está disponível
- Exemplo: camiseta azul tamanho P esgotou
- Google aceita: SIM (pausa anúncio automaticamente)
- Meta aceita: SIM (pausa anúncio automaticamente)
- TikTok aceita: SIM

### Extensões (Opcionais, Mas Úteis)

**backorder**
- Produto fora de estoque, mas cliente pode encomendar (entrega em X dias)
- Exemplo: camiseta volta a chegar em 10 dias, aceita pré-encomenda
- Google aceita: SIM (mostra "Pré-encomenda")
- Meta aceita: SIM
- TikTok aceita: NÃO (rejeita como "out of stock")

**preorder**
- Produto AINDA NÃO foi lançado, mas aceita reserva
- Exemplo: camiseta nova lança em 30 dias, pode reservar agora
- Google aceita: SIM (mostra "Pré-encomenda")
- Meta aceita: SIM
- TikTok aceita: NÃO (rejeita)

---

## Quando Usar Cada Um (Decisão Rápida)

### in stock
```
✓ Produto em estoque agora
✓ Pronto para enviar em até 3 dias úteis
✓ Cliente compra → você envia imediatamente
✗ Não use para: backorder, preorder, disponível em 2 semanas
```

### out of stock
```
✓ Produto esgotado (0 unidades)
✓ Cliente não pode comprar agora
✓ Você NÃO sabe quando volta
✗ Não use para: quando sabe que volta em X dias (use backorder)
```

### backorder
```
✓ Produto fora de estoque AGORA
✓ Volta a chegar em X dias (5-15 dias típico)
✓ Cliente pode encomendar, entrega com atraso conhecido
✗ Não use para: produto que nunca volta ou lança novo
```

### preorder
```
✓ Produto NÃO EXISTE ainda (em desenvolvimento)
✓ Lança em X dias (15+)
✓ Cliente pode reservar antes do lançamento
✓ Exemplo: Nike lança novo modelo em 30 dias, aceita reserva agora
✗ Não use para: produto que você tem em estoque
```

---

## Problema #1: Síncronização Fora de Sincronismo

Você atualiza estoque no Nuvemshop a cada hora. Seu feed atualiza a cada 4 horas.

**Exemplo timeline:**
```
10:00 - Estoque: 5 unidades (em stock)
10:45 - Vende 5 unidades (agora 0)
10:50 - Feed ainda mostra "in stock" (não atualizou)
11:00 - Usuária clica em anúncio (mostra in stock)
11:05 - Chega no site, descobre que está out of stock
11:10 - Abandon, conversão 0
```

**Solução:** Sincronização **contínua** (a cada 15-30 min), não batch 4h.

Para Google Shopping, ideal:
- Sincronização cada 1-2 horas (não crítico)
- Qualquer delay é tolerado

Para TikTok Shop, ideal:
- Sincronização cada 30 min (muito crítico)
- Delay >1h causa muita frustração

---

## Problema #2: Confundir "in stock" com "in warehouse"

Você tem 100 camisetas no seu warehouse. Coloca `availability = "in stock"`.

Mas sua política de envio é: "vendido hoje, envia em 3 dias".

**Diferença:**
- **in stock**: disponível para compra agora, entrega em até 3 dias (padrão)
- **available**: produto existe em warehouse, mas entrega em 10 dias (preorder)

Google aceita "in stock" com entrega até 5 dias úteis. Se você vende hoje e envia em 15 dias, mude para "backorder".

**Regra:** Se entrega > 5 dias úteis, use "backorder", não "in stock".

---

## Problema #3: Não Sincronizar Quando Estoque Acaba

Maior culpado de conversão perdida.

**Cenário real:**
```
Produto: Camiseta Azul P
Estoque real: 1 unidade
Feed: in stock (correto, por agora)
Dia 1: vende 1 unidade (agora 0)
Ninguém atualiza feed
Dia 2-7: ainda mostra "in stock"
Dia 2-7: 30 usuários clicam, chegam no site, fora de estoque
Dia 2-7: 30 conversões perdidas
```

**Solução:** Sincronização automática sempre que estoque muda.

Nuvemshop → FeedFlow → Google Shopping (em tempo real, não 4h depois).

---

## Caso Real: Loja Que Perdeu 40% de Conversão Por Availability Desincronizado

Uma loja em Brasília, vendendo roupas femininas.

**Setup original:**
- 500 produtos
- Feed atualizado a cada 4 horas (padrão Nuvemshop)
- Availability sempre "in stock" (nunca atualizava)

**O problema:**
- 150 dos 500 produtos mudavam estoque (saiam/entravam) diariamente
- Feed desincronizado: produtos fora de estoque ainda mostravam "in stock"
- Resultado: 40% dos cliques eram em produtos indisponíveis

**Impacto:**
- Cliques em "in stock" que abriam página "out of stock": 40%
- Taxa de conversão: 2% de clique → 1% de clique (metade)
- ROAS caía 40-50%

**Descoberta:**
- Gerente de loja vê: muitos clientes reclamam "produto fora de estoque"
- Analisa Google Merchant Center: descobre que 150 produtos estão com "availability" errada
- Implementa sincronização cada 1 hora (não 4h)

**Depois:**
- Availability sincronizado: produtos fora de estoque desaparecem de anúncios em até 1h
- Cliques em produtos realmente disponíveis: +40%
- Conversão por clique: volta a 2%
- ROAS: volta ao normal, sobe 30-50%

---

## Checklist de Implementação: Availability Correto

```
☐ Campo "availability" preenchido em 100% dos produtos
☐ Valores: só "in stock" ou "out of stock" (não genéricos)
☐ Se backorder: produto volta em X dias? Pode usar "backorder"
☐ Se preorder: produto não existe ainda? Pode usar "preorder"
☐ Sincronização: verificar frequência (meta: a cada 1-2h, não 4h)
☐ Teste: dar baixa em 1 produto → confirma que "in stock" muda para "out of stock" em <1h
☐ Monitorar: "out of stock" em Merchant Center aumentando? Estoque está acabando
☐ Google Merchant Center: 0 avisos sobre "availability inválido"
```

---

## Próximos Passos: Auditar Seu Feed

1. Exporte feed do Nuvemshop
2. Procure todos os valores únicos em "availability"
   - Deve ter: "in stock" e "out of stock" apenas
   - Não deve ter: "available", "limited", "coming soon"
3. Padronize: todos para "in stock" ou "out of stock"
4. Configurar sincronização automática (meta: a cada 1-2 horas)
5. Re-upload
6. Monitorar em Merchant Center: 0 erros de availability

[Configure sincronização automática de estoque com FeedFlow](https://feed-flow.app/auth/signup)
