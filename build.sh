#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# copy
rm -rf ../phishx-docs.github.io-temp/
mkdir -p ../phishx-docs.github.io-temp/
cp -R docs/.vuepress/dist/ ../phishx-docs.github.io-temp/