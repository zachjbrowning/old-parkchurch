#! /bin/bash
#! /bin/bash
myrepo="biggus"
git checkout $myrepo
echo Enter a one or two word description of the commit \(seperated by inverted commas please\): 
read varcommit
git add --all
git commit -m\"$varcommit\"