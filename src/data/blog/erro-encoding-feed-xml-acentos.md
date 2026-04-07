---
title: "Erro de Encoding em Feeds XML: Por Que Acentos Quebram Google Shopping"
description: "Feed XML encoding: UTF-8 vs ISO-8859-1, acentos que não aparecem, caracteres quebrados, como corrigir, audit."
pubDatetime: 2026-04-01T16:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/29396982/pexels-photo-29396982.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - feed
  - xml
  - encoding
  - diagnostico
  - tecnico
author: "FeedFlow"
---

## Por Que Sua Descrição "Camiseta Preta" Aparece Como "Camiseta Pr?ta" no Google

Um problema discreto mata silenciosamente: encoding errado.

Você exporta feed do Nuvemshop. Tudo parece perfeito na sua tela. Upload no Google Merchant Center. Descrições aparecem com "?" no lugar de "ã", "ç", "é".

Resultado: Google vê produto quebrado, reduz visibilidade ou rejeita.

**Causa:** Seu feed foi salvo em ISO-8859-1, Google esperava UTF-8. Ou vice-versa.

Este artigo explica o problema, como diagnosticar em 30 segundos, e como corrigir permanentemente.

---

## O Que é Encoding (Simplicidade Máxima)

Computador entende só números. Caracteres (letras, acentos) são "mapeados" para números via tabelas.

**Tabela ISO-8859-1** (antigo, algumas plataformas):
```
a = 97
ã = 227
ç = 231
```

**Tabela UTF-8** (moderno, Google + Meta + TikTok):
```
a = 97
ã = 11000011 10100011 (2 bytes)
ç = 11000011 10000111 (2 bytes)
```

Se seu feed está em **ISO-8859-1** mas Google espera **UTF-8**, o mapeamento falha:

```
Seu arquivo: ã (226 em ISO)
Google lê: ã é 226?
Google não acha 226 em UTF-8
Google mostra: ?
```

---

## Como Diagnosticar em 30 Segundos

### Método 1: Abrir Arquivo em Editor de Texto

1. Baixe seu feed (XML ou CSV)
2. Abra em editor (Sublime Text, VS Code, Notepad++)
3. Olhe no canto inferior direito
4. Deve dizer: **UTF-8**

Se diz "ISO-8859-1" ou "ANSI" → problema encontrado.

### Método 2: Olhar para o Arquivo (Rápido)

1. Baixe feed
2. Procure por produto que tem acentos (ex: "Açúcar")
3. Se aparece como "A??car" → encoding errado

### Método 3: Checar no Google Merchant Center (Definitivo)

1. Upload feed no Google Merchant Center
2. Vá em "Produtos" → qualquer produto com acentos
3. Se título mostra "?" → encoding errado
4. Google avisa: "Encoding inválido detectado"

---

## As 3 Causas Mais Comuns

### Causa 1: Nuvemshop Exporta em ISO, Google Espera UTF-8

Nuvemshop, por padrão, exporta CSV em ISO-8859-1 (padrão brasileiro antigo).

**Solução:** Converter arquivo antes de upload.

### Causa 2: Plataforma de Upload Força Encoding Diferente

Você salva em UTF-8, mas ferramenta de upload converte para ISO.

**Solução:** Especificar encoding no upload (opção avançada).

### Causa 3: Feed Gerado por Script (API) com Encoding Errado

Você pegou dados de API, gerou XML, mas esqueceu de declarar UTF-8 no header.

**Solução:** Adicionar declaração XML correta.

---

## Como Corrigir (3 Métodos)

### Método 1: Converter Arquivo em Editor (Sublime/VS Code)

1. Abra arquivo em Sublime Text
2. Clique em "Encoding" (canto inferior direito)
3. Selecione "UTF-8"
4. Clique "Save"
5. Pronto

### Método 2: Converter em Linha de Comando (Mac/Linux)

```bash
# Converte ISO-8859-1 para UTF-8
iconv -f ISO-8859-1 -t UTF-8 seu_feed.csv > seu_feed_utf8.csv
```

### Método 3: Converter Online (Windows/Sem Terminal)

1. Acesse https://www.online-convert.com/convert-encoding
2. Upload seu arquivo
3. Selecione: "Convert from ISO-8859-1" → "Convert to UTF-8"
4. Download novo arquivo
5. Upload no Google

---

## Pré-Ventivo: Garantir Encoding Correto Desde o Início

### Se Você Usa Nuvemshop

1. Exporte feed: Nuvemshop → Configurações → Feed
2. Salve em seu computador
3. Abra em Sublime/VS Code
4. Verifique encoding (deve ser UTF-8)
5. Se não, converta (Método 1 acima)

### Se Você Gera Feed por Script/API

Adicione header UTF-8:

**XML:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  ...
</rss>
```

**CSV:**
Primeira linha especifica encoding (BOM):
```
ï»¿id,title,description
001,Camiseta Azul,Descrição com acentos
```

### Se Você Usa FeedFlow

Automático: FeedFlow sempre gera em UTF-8.

---

## Caso Real: Loja Que Perdeu 40% das Impressões Por Encoding

Uma loja em Recife vendendo produtos regionais (nome com acentos: "Açúcar", "Açaí", "Pão").

**Antes (encoding errado):**
- Feed em ISO-8859-1
- Produtos com acentos: "Açúcar" → "A??car", "Açaí" → "Aca?"
- Google rejeitou implicitamente (reduz visibilidade)
- Impressões: 5.000/semana
- Cliques: 50
- CTR: 1%

**Descobriu o erro:**
- Alguém notou descrição no Merchant Center com "?" 
- Diagnosticou: encoding errado
- Converteu feed para UTF-8
- Re-upload

**Depois:**
- Produtos aparecem corretos: "Açúcar", "Açaí" OK
- Google aumentou prioridade (confiança)
- Impressões: 5.000 → 8.000/semana (60% crescimento)
- Cliques: 50 → 120/semana
- CTR: 1% → 1,5%
- Conversão: aumentou 40% (mais cliques = mais conversões)

---

## Checklist: Garantir Encoding Correto

```
☐ Arquivo XML começa com: <?xml version="1.0" encoding="UTF-8"?>
☐ Arquivo CSV tem BOM UTF-8 (ou abra em editor, confirma UTF-8)
☐ Acentos aparecem corretamente no editor
☐ Upload no Google Merchant Center: 0 erros de encoding
☐ Produtos no Merchant Center: todos com acentos intactos (sem ?)
☐ Se esqueceu: converter antes de re-upload (iconv ou online-convert)
```

---

## Próximos Passos: Validação Rápida

1. Exporte seu feed (Nuvemshop)
2. Abra em Sublime Text/VS Code
3. Verifique encoding (canto inferior)
4. Se não UTF-8: converta (método 1 ou 2)
5. Re-upload no Google Merchant Center
6. Monitore: acentos devem aparecer corretos em 30 min

[Gere feed em UTF-8 automaticamente com FeedFlow](https://feed-flow.app/auth/signup)
