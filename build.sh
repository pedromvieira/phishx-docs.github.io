#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# copy
rm -rf ../phishx-docs.github.io-temp/
mkdir -p ../phishx-docs.github.io-temp/
cp -R docs/.vuepress/dist/ ../phishx-docs.github.io-temp/

# pre commit
git add .
git commit -m 'pre-deploy'
git push https://phishx-docs@github.com/phishx-docs/phishx-docs.github.io.git master
git push