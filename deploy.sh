#!/usr/bin/env sh

# abort on errors
set -e

# commit
git checkout gh-pages
cp -R ../phishx-docs.github.io-temp/ ./
git add build/.
git commit -m 'deploy'
git push -u origin gh-pages

# go back
git checkout master