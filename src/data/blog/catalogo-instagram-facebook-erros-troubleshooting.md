---
title: "Catálogo do Facebook/Instagram com Erros: 10 Problemas Comuns e Como Corrigir"
description: "Catálogo rejeitado no Meta Ads? Veja os 10 erros mais comuns no Commerce Manager e como resolver cada um."
pubDatetime: 2026-04-04T14:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/7793650/pexels-photo-7793650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - troubleshooting
  - meta-ads
  - nuvemshop
  - feed-de-produtos
author: "FeedFlow"
---

## Por que seu catálogo do Facebook/Instagram está sendo rejeitado

Você sincronizou seu catálogo Nuvemshop com o Commerce Manager do Meta (Facebook/Instagram), clicou em "Publicar" e recebeu o dreaded aviso vermelho: **"Catálogo com erros — 237 produtos rejeitados"**.

Agora você está no Commerce Manager, vendo uma lista infinita de erros genéricos. "Image not compliant"... "Product title missing"... "Content ID mismatch"...

Você não sabe por onde começar.

Este guia mapeia os **10 erros mais comuns** que fazem catálogos Facebook/Instagram serem rejeitados, identifica exatamente por que acontecem, e mostra a solução prática para cada um. Vamos lá.

## Erro 1: Pixel Content IDs não batem com os IDs do feed

**O Problema:**
Você está rastreando conversões via Pixel do Facebook e enviando `content_id` para o Meta (o identificador único do produto). Mas o `content_id` enviado pelo Pixel é diferente do ID que está no seu feed (ou seja, o ID do produto na Nuvemshop).

Resultado: Meta não consegue correlacionar a conversão com o produto correto no seu catálogo. Anúncios dinâmicos falham porque o sistema pensa que está conversão ocorreu em um produto diferente.

**Diagnóstico:**
- Seu Pixel está enviando `content_id: "123456"`
- Seu feed tem o mesmo produto com ID `"prod_123456"` ou `"nuvemshop_123456"`
- Meta não encontra correspondência → rejeita

Isto é especialmente comum se você mudou de sistema ou está usando um produto ID que não é nativo da Nuvemshop.

**Solução:**
1. No seu código de rastreamento do Pixel (geralmente no GTM ou no tema Nuvemshop), certifique-se de que está enviando o **exato mesmo ID** que aparece no feed
2. Se o feed usa SKU em vez de ID do produto, altere o Pixel para enviar SKU também
3. No FeedFlow (ou na configuração de exportação), garanta que o campo `id` do feed é **idêntico** ao `content_id` do Pixel
4. Teste: publique um produto novo, dispare uma conversão de teste no Pixel, e verifique no Commerce Manager se a correlação funcionou

## Erro 2: Descrição em ALL CAPS ou com formatação agressiva

**O Problema:**
Meta tem políticas sobre como o texto pode ser formatado nos anúncios. Se sua descrição de produto estiver **totalmente em MAIÚSCULAS**, com múltiplos `!!!` ou `***`, o sistema marca como não-compliant.

Exemplo de título rejeitado:
```
CAMISETA PREMIUM 100% ALGODÃO!!! SUPER OFERTA - APROVEITA AGORA!!!
```

Meta não é contra entusiasmo, mas quer readabilidade. Descrições em CAPS completo reduzem taxa de clique e o algoritmo penaliza isto.

**Diagnóstico:**
Na Nuvemshop, veja como você digitou o título. Se mais de 70% está em MAIÚSCULAS, vai ser rejeitado.

**Solução:**
1. Na Nuvemshop, reescreva títulos em case title (apenas primeira letra maiúscula): `"Camiseta Premium 100% Algodão - Super Oferta"`
2. Se isso for impraticável para centenas de produtos, use o **Title Builder do FeedFlow** para aplicar uma regra que transforma em lowercase automaticamente, depois aplica case title
3. Limite `!` a no máximo 1 por título. Nada de múltiplos símbolos.

## Erro 3: Imagens com overlay de texto ou watermark

**O Problema:**
Meta quer imagens limpas — produto visível, fundo neutro. Se sua imagem tem texto sobreposto ("PROMOÇÃO", "DESCONTO 50%", marca d'água), o sistema rejeita.

Isto é especialmente comum em lojas que reutilizam fotos do Instagram (que têm stickers, hashtags, etc.) ou de marketplace (que têm badges de promoção).

**Diagnóstico:**
Na Nuvemshop, verifique as imagens principais de seus produtos. Você as editou com Photoshop ou Canva com texto? Se sim, Meta vai rejeitar.

**Solução:**
1. **Imediato:** Use imagens originais do fornecedor, sem edição
2. **Estratégico:** Se precisa mostrar "em promoção", use a sua campanha do Meta para isso (o sistema permite dynamic badges), não a imagem do catálogo
3. **Automático:** Se você está usando o FeedFlow com análise de conformidade, ele **identifica imagens com texto** e avisa antes do feed sair

## Erro 4: Domínio não verificado no Commerce Manager

**O Problema:**
Meta requer que você **prove que é dono do domínio** antes de publicar um catálogo. Se o domínio não está verificado, qualquer produto que linkar para ele é rejeitado.

Isto acontece quando:
- Você acabou de criar a conta no Commerce Manager e não completou a verificação
- Você mudou de domínio (de `loja.com.br` para `minhaloja.com.br`) mas não reverificou
- Você não adicionou o arquivo de verificação Meta no seu hosting

**Diagnóstico:**
No Commerce Manager, vá em **Configurações → Marcas → [Sua Marca]**. Se há um aviso "Domínio não verificado", este é seu erro.

**Solução:**
1. Clique em "Verificar Domínio" no Commerce Manager
2. Meta vai pedir um de três métodos:
   - **DNS TXT record** (mais comum, leva 5-15 min para propagar)
   - **HTML file upload** (coloca um arquivo na raiz do seu domínio)
   - **Google Analytics property** (se você tem GA conectado)
3. Complete um dos três e aguarde confirmação (até 1 hora)
4. Resubmeta seus produtos — erros de domínio desaparecem

## Erro 5: Política de Privacidade inacessível ou incompleta

**O Problema:**
Meta exige que sua loja tenha uma Política de Privacidade **pública e acessível** no site. Se não tem, ou se está em uma página que não indexa (404, sem link, protegida por login), seus produtos são rejeitados.

Isto parece detalhe, mas é compliance. Meta não quer aparecer ligado a lojas que não são transparentes.

**Diagnóstico:**
- Vá para seu site: `seusite.com.br/politica-privacidade` (ou `/privacy`)
- Ela carrega? Está pública? Tem conteúdo real?
- Se tiver 404 ou redirecionamento estranho, é isto.

**Solução:**
1. **Criar página:** Se não tem, crie uma. Pode ser no Astro (se estiver usando site do FeedFlow) ou como página estática na Nuvemshop
2. **Conteúdo mínimo:**
   - O que você coleta (email, telefone, endereço)
   - Por quanto tempo guarda
   - Se compartilha com Meta, Stripe, ou terceiros
   - Direitos do usuário (LGPD: acesso, correção, exclusão)
3. **Link público:** Coloque o link no rodapé do seu site e no Commerce Manager (seção de "Informações da Marca")

## Erro 6: Produtos em categorias proibidas pelo Meta

**O Problema:**
Meta proíbe venda de certos produtos:
- Armas, munição, explosivos
- Drogas (inclusive suplementos não aprovados)
- Documentos falsificados
- Roupa íntima usada
- Órgãos humanos
- Atividades ilegais

Se um produto está categorizado sob estas categorias, é rejeitado automaticamente.

Isto é raro em lojas legítimas, mas acontece quando há **categorização cruzada incorreta**. Exemplo: você vende cuecas (legal), mas alguém categoriza como "roupa íntima para fantasias" e Meta bloqueia como "roupa íntima usada" (não é, mas o texto confunde).

**Diagnóstico:**
No Commerce Manager, vá em **Catálogo → Produtos Rejeitados** e procure por "Violates Facebook commerce policies" ou "Category violation".

**Solução:**
1. Na Nuvemshop, verifique a categoria principal do produto
2. Se a categoria tem keywords suspeitas (mesmo que sejam contexto legítimo), altere para algo mais neutro
3. Use o FeedFlow **Category Mapper** para traduzir categorias Nuvemshop para o Google Product Taxonomy (que é mais preciso)
4. Resubmeta

## Erro 7: Preço sem moeda ou formato incorreto (BRL esperado)

**O Problema:**
Seu feed inclui o preço (R$ 99.90), mas Meta espera formato específico:
- Moeda ISO (BRL, não R$)
- Separador decimal correto (ponto nos EUA, vírgula no Brasil)
- Sem caracteres extras

Se seu feed manda `"preço: R$ 99,90"` em vez de `"99.90"` com moeda ISO, Meta rejeita.

**Diagnóstico:**
No seu XML/CSV do feed, veja a tag de preço. Se parece com isto:
```xml
<price>R$ 99,90</price>
```
É isto. Meta quer:
```xml
<price>99.90</price>
<currency>BRL</currency>
```

**Solução:**
1. **Se você exporta manual:** ajuste o CSV/XML para formato correto
2. **Se usa integração automática (tipo FeedXML ou FeedFlow):** configure a moeda na exportação para BRL e o formato numérico para `99.90` (ponto, não vírgula)
3. **Teste:** publique um produto com preço novo e verifique no Commerce Manager se aparece corretamente

## Erro 8: Link de produto quebrado ou redirecionamento infinito

**O Problema:**
Cada produto no feed tem um URL (`product_url`). Meta clica nele para verificar se o produto realmente existe e se a descrição do catálogo bate com o que está no site.

Se o link está **404**, **redirecionado infinitamente**, ou **protegido por senha**, Meta não consegue validar → rejeita.

Isto é comum quando você:
- Deletou um produto na Nuvemshop mas esqueceu de remover do feed
- Mudou o slug da URL (ex: `/produto-antigo` → `/novo-produto`) mas não manteve redirecionamento
- Tem produto em categoria "draft" que não é indexada publicamente

**Diagnóstico:**
Pegue 3-5 URLs do seu feed, coloque em um navegador. Elas carregam? Ou dão 404? Tem redirecionamento estranho?

**Solução:**
1. **Remover produtos deletados:** na Nuvemshop, verifique quais produtos estão desativados ou deletados e remova do feed antes de exportar
2. **Manter redirecionamentos:** se mudou URL, configure `301 Redirect` da URL antiga para a nova (na Nuvemshop, geralmente é automático, mas verifique)
3. **Publicar categorias:** certifique-se de que os produtos estão em categorias **públicas** e **indexadas** (não em "rascunho" ou "oculto")
4. **Validar URL pattern:** se você usa parâmetros dinâmicos na Nuvemshop (ex: `/?utm_source=meta`), remova antes de enviar para Meta

## Erro 9: Falta de informação obrigatória (título, descrição, preço, imagem)

**O Problema:**
Meta requer que todo produto tenha:
- **Título** (obrigatório, min 5 caracteres)
- **Preço** (obrigatório)
- **Moeda** (obrigatório)
- **Imagem** (obrigatório, min 200x200px)
- **Descrição** (altamente recomendado, min 20 caracteres)
- **URL** (obrigatório)

Se qualquer um desses estiver vazio ou incompleto, o produto é rejeitado.

Isto é comum em produtos criados apressadamente na Nuvemshop, onde o gerente deixou campos em branco.

**Diagnóstico:**
Abra o seu feed (XML ou CSV) e procure por campos vazios:
```xml
<title></title>  <!-- vazio — rejeitado -->
<price></price>  <!-- vazio — rejeitado -->
<image></image>  <!-- vazio — rejeitado -->
```

**Solução:**
1. **Auditoria:** use o FeedFlow **Quality Score** (rodas antes do feed sair) para identificar produtos incompletos
2. **Corrigir na fonte:** volte à Nuvemshop e preencha título, preço e imagem para cada produto
3. **Template padrão:** se tem muitos produtos faltando descrição, crie uma descrição padrão via regra no FeedFlow:
   ```
   Se descrição está vazia → use "{Título} — {Marca}"
   ```
4. **Imagem:** se um produto não tem imagem, use uma imagem placeholder ou remova do feed até ter uma real

## Erro 10: Atributos de variação não mapeados corretamente (cor, tamanho, etc.)

**O Problema:**
Meta espera que cada **variação** de um produto (ex: camiseta em tamanho P, M, G) seja um SKU diferente no feed, ou estejam agrupadas como variações do mesmo produto com atributos explícitos (cor, tamanho).

Se você enviar uma camiseta com tamanho M mas a URL é a mesma que a de tamanho G, Meta não consegue distinguir → rejeita como "duplicate SKU" ou "conflicting attributes".

Isto é comum quando o feed não está estruturado para variações (típico de exportações manuais da Nuvemshop).

**Diagnóstico:**
- Você vende camisetas em P, M, G, GG?
- No feed, cada tamanho tem um SKU único ou está agrupado sob variações?
- Se tem 1 título e 4 URLs diferentes, Meta fica confuso.

**Solução:**
1. **Abordagem 1 — SKU único por variação:** cada tamanho é um produto separado no feed:
   ```xml
   <sku>CAMISETA-P</sku>
   <sku>CAMISETA-M</sku>
   <sku>CAMISETA-G</sku>
   ```
   Meta trata cada um como produto distinto.

2. **Abordagem 2 — Grupo de variações:** todos os tamanhos sob um ID principal com atributos:
   ```xml
   <item_group_id>CAMISETA-001</item_group_id>
   <sku>CAMISETA-001-P</sku>
   <size>P</size>
   
   <item_group_id>CAMISETA-001</item_group_id>
   <sku>CAMISETA-001-M</sku>
   <size>M</size>
   ```

3. **Usando FeedFlow:** o Title Builder já mapeia atributos automaticamente, então as variações aparecem corretamente no feed.

## Diagnóstico Rápido: Os 3 passos para achar o erro

Não sabe por onde começar? Siga isto:

### Passo 1: Verifique o Commerce Manager

1. Acesse **Facebook Business Suite → Commerce Manager**
2. Selecione seu catálogo
3. Vá em **Catálogo → Visão Geral de Dados**
4. Veja a coluna **Problemas** — quantos produtos estão com erro?
5. Clique em **Visualizar Detalhes** para cada erro

### Passo 2: Agrupar erros por tipo

Meta lista erros em padrões. Anote:
- Quantos são `"Image not compliant"` (Erro 3)
- Quantos são `"Product URL is broken"` (Erro 8)
- Quantos são `"Price missing"` (Erro 9)
- etc.

### Passo 3: Corrigir em lote

Trabalhe na raiz, não no sintoma:
- Se 300 produtos têm `"Price missing"` → volte à Nuvemshop, identifique por que (cópia incompleta? categoria específica?)
- Se 50 estão com `"Image not compliant"` → audite as imagens (têm texto? têm watermark?)
- Se 10 estão com `"Domain not verified"` → verifique o domínio uma vez e pronto

## Caso Real: Loja de Moda com 89% de rejeição

Uma loja de moda com 800 SKUs ativou catálogo no Meta em fevereiro de 2026. Resultado inicial: **706 produtos rejeitados** (89% de rejeição).

Investigação rápida revelou:
- 350 produtos com "Image not compliant" (fornecedor enviava imagens com marcas d'água)
- 200 com "Price missing" (categoria "liquidação" tinha preços em branco)
- 80 com "Product title all caps" (nomes em MAIÚSCULAS do antigo sistema)
- 40 com "Domain not verified" (domínio não verificado no Commerce Manager)
- 36 com "URL broken" (mudança recente de slug não foi redirecionada)

**Ação:**
1. Verificou domínio (5 min)
2. Criou redirecionamentos (15 min)
3. Preencheu preços faltando (30 min, via bulk edit Nuvemshop)
4. Reescreveu títulos em case title via regra no FeedFlow (automático)
5. Trocou imagens por versões sem watermark do fornecedor (2 horas)

**Resultado em 24 horas:** taxa de aprovação saltou de **11% → 96%**. Catálogo publicado. Conversões começaram 3 dias depois.

## Prevenção: automação de conformidade

Se você tem muitos produtos (100+), revisar cada erro manualmente é impraticável.

O **FeedFlow oferece conformidade automática** antes do feed sair:
- Identifica imagens com texto e avisa
- Valida preços e moedas
- Detecta títulos em CAPS e oferece transformação
- Verifica se URLs existem (não dão 404)
- Mapeia variações corretamente
- Autentica para Meta automaticamente

Resultado: você vê um relatório de **"89 problemas encontrados, 87 corrigidos automaticamente, 2 requerem ação manual"** antes de publicar.

Um catálogo limpo não é luxo — é competência. Meta premia catálogos bem-estruturados com mais impressões, melhor CTR e menor CPC em Ads dinâmicos. O investimento em conformidade retorna rápido.

[Feed limpo para Meta Ads direto da Nuvemshop](https://feed-flow.app/auth/signup)
