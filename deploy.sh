#!/usr/bin/env sh

# abort on errors
set -e

# commit
git checkout gh-pages
cp -R ../phishx-docs.github.io-temp/ ./
git add .
git commit -m 'deploy'
git push https://phishx-docs@github.com/phishx-docs/phishx-docs.github.io.git gh-pages

# go back
git checkout master