#!/bin/bash
# Publicar novo artigo no FeedFlow Blog
# Uso: ./publish.sh "Descrição do que mudou"
cd "$(dirname "$0")"
MSG="${1:-Atualização do blog $(date +%Y-%m-%d)}"
git add -A
git commit -m "$MSG"
git push
echo ""
echo "Push feito! Rode ./deploy.sh para publicar no Cloudflare Pages."
echo "Ou aguarde o auto-deploy se o Cloudflare Pages estiver conectado ao repo."
