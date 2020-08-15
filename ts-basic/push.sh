#! /bin/bash

git add .
git status
git status
read -p "Commit description: " desc
git commit -am "$desc"
git push
clear
