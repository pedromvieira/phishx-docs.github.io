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
git push -u origin master

# commit
git checkout gh-pages
cp -R ../phishx-docs.github.io-temp/ ./
git add build/.
git commit -m 'deploy'
git push -u origin gh-pages

# go back
git checkout master