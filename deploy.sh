# !/bin/bash

cd dist
echo 'swaggyiroh.com' >> CNAME
git add .

cd ..
git commit -m "deploy"

git push --force origin `git subtree split --prefix=dist main`:gh-pages


