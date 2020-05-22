#! /bin/bash
myrepo="biggus"
git checkout $myrepo
echo Enter a one word \(and one word only pls - you can use underscores \if you want \): 
read varcommit
git add --all
git commit -m\"$varcommit\"