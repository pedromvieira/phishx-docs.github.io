#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# copy
rm -rf build/
mkdir -p build/
cp -R docs/.vuepress/dist/ build/

# publish
git checkout gh-pages
git add build/.
git commit -m 'deploy'
git push -u origin gh-pages

# go back
git checkout master