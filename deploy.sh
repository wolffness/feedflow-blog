#!/bin/bash
# Deploy FeedFlow Blog to Cloudflare Pages
cd "$(dirname "$0")"
npm run build && npx wrangler pages deploy dist --project-name feedflow-blog --commit-dirty=true
