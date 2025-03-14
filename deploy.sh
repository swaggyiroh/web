# !/bin/bash

cd dist
echo 'swaggyiroh.com' >> CNAME

cd ..

git push --force origin `git subtree split --prefix=dist main`:gh-pages


