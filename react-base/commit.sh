#! /bin/bash

git status
git add .
git status
read -p "Commit description: " desc
sudo git commit -am "$desc"
git push
