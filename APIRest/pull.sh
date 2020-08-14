#! /bin/bash

git status
git add .
read -p "Commit description: " desc
git commit -am "$desc"
git push
