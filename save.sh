#! /bin/bash
#! /bin/bash
myrepo="biggus"
git checkout $myrepo
echo Enter a one or two word description of the commit: 
read varcommit
echo $varcommit
git add --all
echo $varcommit
git commit -m \"$varcommit\"