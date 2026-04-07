---
title: Produtos Reprovados no Google Shopping - 15 Motivos e Como Corrigir
description: Guia prático dos 15 erros mais comuns que causam reprovação no Google Merchant Center. Aprenda a identificar, corrigir e prevenir cada um deles.
pubDatetime: 2026-04-05T14:00:00Z
featured: false
draft: false
ogImage: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
tags:
  - google-shopping
  - merchant-center
  - feed-de-produtos
  - troubleshooting
author: "FeedFlow"
---

## Por que produtos ficam reprovados no Google Shopping

Você publica um produto novo no Google Shopping e três dias depois descobre que ele está "Reprovado". Sem cliques. Sem conversões. E a pior parte: a mensagem do Google é sempre vaga: "não segue as políticas de dados".

Isso não é falha sua. O Google Merchant Center não foi feito para dar diagnósticos claros. Mas nós rastreamos padrões em centenas de lojas Nuvemshop e identificamos os 15 erros reais. A maioria é fácil de corrigir. Alguns levam 30 segundos.

Vamos ao que importa.

## Os 15 erros mais comuns (ordenados por impacto)

### **1. Preço zero ou preço ausente**

**Causa**: Produto cadastrado sem preço na Nuvemshop, ou sincronizado com estoque = 0 e a loja deixa preço em branco.

**Como aparece**: Erro direto no Merchant Center: "Preço obrigatório ausente" ou "Preço baixo demais".

**Correção**: 
1. Volte para a Nuvemshop 
2. Edite o produto 
3. Certifique-se de que `price` tem um valor numérico > 0
4. Se é um produto com múltiplos preços (por tamanho/cor), adicione pelo menos um preço padrão

**Impacto no ROAS**: Alto. Produto não aparece em nenhuma busca. -100% de impressões.

---

### **2. Título genérico ou muito curto**

**Causa**: Título cadastrado na Nuvemshop sem estrutura. Exemplos: "Camiseta", "Produto", "Item".

**Como aparece**: Produto é aprovado, mas tem CTR baixíssimo. Aparece em buscas, mas ninguém clica.

**Correção**: Reescreva o título seguindo: Marca + Tipo + Características principais. Para uma camiseta: "Aramis Camiseta de Algodão Gola V Preta Tamanho M" em vez de "Camiseta".

**Impacto no ROAS**: Médio-Alto. Produto aparece, mas CTR cai 40-60%. Você paga igual, mas vende menos.

---

### **3. GTIN (EAN) inválido ou mal formatado**

**Causa**: Você copiou um GTIN incorreto, ou um produto de marca própria tem um código que não corresponde a nada. O Google tenta validar e rejeita.

**Como aparece**: "Identificador inválido". Produto reprovado ou sinalizado.

**Correção**:
- Se o GTIN está certo, deixe como está (o Google eventualmente aprova)
- Se é incerteza, use `identifier_exists: false` no feed — isso diz ao Google "não temos GTIN confiável para este"
- Para produtos nacionais ou de marca própria: sempre use `identifier_exists: false`

**Impacto no ROAS**: Alto. Reprovação = zero impressões.

---

### **4. Imagem com marca d'água ou logo grande**

**Causa**: Foto do produto tem watermark da fotógrafa ou logo grande da loja sobreposto.

**Como aparece**: "Imagem não segue políticas" ou simplesmente reprovado. O Google quer foto do produto, não marketing.

**Correção**: Remova watermarks. A foto deve mostrar APENAS o produto, fundo branco ou neutro.

**Impacto no ROAS**: Alto. Sem imagem aprovada, produto não aparece.

---

### **5. Produto anunciado como em estoque mas fora de estoque**

**Causa**: Seu feed de estoque não sincroniza em tempo real. Você anuncia "em estoque", o cliente compra, mas o produto não está mais na Nuvemshop.

**Como aparece**: "Divergência de disponibilidade" ou suspensão da conta por "enganação de preço/estoque".

**Correção**: Configure sincronização em tempo real entre Nuvemshop e Google Merchant Center. Se não tiver feed automático, atualize o status diariamente.

**Impacto no ROAS**: Crítico. Pode suspender sua conta inteira.

---

### **6. Título ou descrição EM MAIÚSCULAS**

**Causa**: Você digitou o texto todo em caps lock, pensando que ficaria mais chamativo.

**Como aparece**: "Não segue políticas de data" ou reprovação silenciosa. O Google detecta e penaliza.

**Correção**: Reescreva usando capitalização normal. "CAMISETA PRETA BRANCA VERMELHA" vira "Camiseta Preta, Branca e Vermelha".

**Impacto no ROAS**: Médio. Reprovação ou visibilidade muito reduzida.

---

### **7. Link de produto quebrado ou com redirecionamento errado**

**Causa**: O link no feed aponta para uma página que não existe, ou redireciona para outra (tipo um encurtador que expirou).

**Como aparece**: Erro de rastreamento no Merchant Center: "Página não encontrada" ou "Redirecionamento excessivo".

**Correção**: Verifique se o link é exato e direto. Exemplo: `https://loja.com.br/produto-nome` — sem UTM, sem encurtador, sem redirecionamento duplo.

**Impacto no ROAS**: Médio. Produto pode ser aprovado mas clientes veem erro 404.

---

### **8. Site sem SSL (HTTP em vez de HTTPS)**

**Causa**: Sua loja não tem certificado SSL configurado. Protocolo de segurança ausente.

**Como aparece**: "Site não seguro" no Merchant Center. Reprovação automática.

**Correção**: Configure HTTPS. Na Nuvemshop, isso é padrão, mas se você usa domínio customizado, verifique certificado com seu registrador.

**Impacto no ROAS**: Crítico. Reprovação total.

---

### **9. Frete incorreto ou divergente**

**Causa**: O feed informa frete de R$ 10, mas o carrinho da loja mostra R$ 15. Ou o feed não informa frete e o Merchant Center não consegue calcular.

**Como aparece**: "Divergência de custo de frete" — reprovação no Brasil é frequente por isso.

**Correção**: 
- Sincronize as tabelas de frete entre Nuvemshop e Merchant Center
- Se usa tabela fixa, deixe explícita no feed com o atributo `shipping`
- Se é dinâmico (por CEP), configure no Merchant Center, não no feed

**Impacto no ROAS**: Alto. Principal motivo de suspensão no Brasil.

---

### **10. Categoria errada ou muito genérica**

**Causa**: Você adicionou uma camiseta sob "Eletrônicos" ou deixou em branco. Ou mapeou para categoria que não existe na taxonomia do Google.

**Como aparece**: Produto aparece em buscas erradas ou não aparece em nenhuma.

**Correção**: Use `google_product_category` correto. Para camiseta: `Apparel & Accessories > Clothing > Shirts & Tops`. Cheque a [taxonomia oficial do Google](https://support.google.com/merchants/answer/6324436).

**Impacto no ROAS**: Médio-Alto. Aparece em contexto errado, CTR baixo, ROAS cai.

---

### **11. Descrição muito curta ou vazia**

**Causa**: Campo description deixado em branco ou com apenas uma palavra.

**Como aparece**: Produto é aprovado, mas sem contexto. Google não consegue entender melhor do que é.

**Correção**: Escreva 2-3 frases. Exemplo: "Camiseta de algodão 100% pré-encolhida. Gola redonda, manga curta. Disponível em 5 cores".

**Impacto no ROAS**: Médio. Qualidade do produto aparenta inferior, CTR reduzido.

---

### **12. Faltam atributos obrigatórios (cor, tamanho, gênero)**

**Causa**: Para produtos com variantes (moda), você não preencheu cor, tamanho ou gênero. Ou preencheu em um mas não em outro.

**Como aparece**: Reprovação para vestuário: "Atributo obrigatório ausente".

**Correção**: Todo item (cada variante) precisa ter:
- `color`: exato (não "Multi-colored", use valores específicos)
- `size`: unidade clara (não "Único", use XS/S/M/L ou números)
- `gender`: Male, Female ou Unisex

**Impacto no ROAS**: Alto. Sem variantes, não vende.

---

### **13. Caracteres especiais quebrados (acentuação)**

**Causa**: Feed salvo em encoding errado (Latin-1 em vez de UTF-8). Acentos viram ????? ou caracteres estranhos.

**Como aparece**: Título fica "Camiseta Pr???a" no Merchant Center. Google identifica como dado ruim.

**Correção**: Certifique-se de que seu feed XML está em UTF-8. Se gera manualmente, use editor que suporte UTF-8.

**Impacto no ROAS**: Médio. Aparência unprofessional reduz cliques.

---

### **14. Preço promo expirado**

**Causa**: Você configurou um preço de promoção com data de fim, mas o feed continua enviando esse preço mesmo após a data.

**Como aparece**: "Preço promocional expirado" — Google detecta que a promo deveria ter terminado.

**Correção**: Se usa promoção, certifique-se de que a data de fim está configurada e que o feed atualiza automaticamente após expiração.

**Impacto no ROAS**: Médio. Produto pode ser suspenso por "enganação".

---

### **15. Item_group_id inconsistente ou duplicado**

**Causa**: Variantes do mesmo produto têm item_group_id diferente, ou dois produtos diferentes compartilham o mesmo ID.

**Como aparece**: "Item_group_id inválido" ou variantes não aparecem agrupadas no Shopping.

**Correção**: Todos os itens de uma mesma variante (camiseta preta/azul/vermelha) compartilham o MESMO `item_group_id`. Cada variante tem um `id` único.

**Impacto no ROAS**: Alto. Variantes não aparecem agrupadas, experiência ruim, CTR baixo.

---

## Como prevenir esses 15 erros

Se você está validando um catálogo novo ou checando um existente:

1. **Preço**: Verifique se todos têm valor > 0
2. **Título**: Reescreva com estrutura Marca + Tipo + Características
3. **GTIN**: Se sem GTIN, use `identifier_exists: false`
4. **Imagens**: Sem watermark, fundo branco, mínimo 250x250
5. **Estoque**: Sincronização em tempo real
6. **Capitalização**: Sem CAPS LOCK
7. **Links**: Sem erros 404, sem redirecionamentos
8. **SSL**: Certifique HTTPS ativo
9. **Frete**: Sincronizado com tabelas da loja
10. **Categoria**: Mapeado para taxonomia correta
11. **Descrição**: Pelo menos 20 palavras
12. **Atributos**: Cor, tamanho, gênero preenchidos em variantes
13. **Encoding**: UTF-8
14. **Promoção**: Data de fim configurada
15. **Item_group_id**: Consistente por variante

[Teste seu feed gratuitamente com o FeedFlow](https://feed-flow.app/auth/signup) — identificamos esses 15 erros automaticamente e corrigimos 10 deles sem você tocar.

## Conclusão

Produtos reprovados matam seu ROAS. Cada um é uma oportunidade perdida. A maioria desses 15 erros são rápidos de corrigir — alguns levam menos de 5 minutos por produto. A chave é achá-los antes de publicar.

Se sua loja tem centenas ou milhares de produtos, achá-los na mão é impossível. Por isso ferramentas de validação existem.

[O FeedFlow previne 10 desses 15 erros automaticamente — teste grátis por 14 dias](https://feed-flow.app/auth/signup)
