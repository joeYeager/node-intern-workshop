#!/usr/bin/env bash

git checkout master
git pull origin master

for branch in $(git for-each-ref --format='%(refname)' refs/heads/); do
    git checkout $branch
    git pull origin master
    git push origin $branch
done