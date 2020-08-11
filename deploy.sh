#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# copy
rm -rf ../phishx-docs.github.io-temp/
mkdir -p ../phishx-docs.github.io-temp/
cp -R docs/.vuepress/dist/ ../phishx-docs.github.io-temp/

# publish
git add .
git commit -m 'pre-deploy'
git push -u origin master


git checkout gh-pages
git add build/.
git commit -m 'deploy'
git push -u origin gh-pages

# go back
git checkout master