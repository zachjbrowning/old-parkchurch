#! /bin/bash
myrepo="biggus"
./save.sh
git checkout master
git pull
git checkout $myrepo
git merge master