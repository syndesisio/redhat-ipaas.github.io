# Copy static site
CWD=`pwd`

# Clone Pages repository
cd /tmp
git clone git@github.com:redhat-ipaas/redhat-ipaas.github.io.git build

# cd build && git checkout -b YOUR_BRANCH origin/YOUR_BRANCH # If not using master

# Trigger Middleman rebuild
cd $CWD
bundle exec middleman contentful --rebuild

# Push newly built repository
cp -r $CWD/build/* /tmp/build

cd /tmp/build

git config --global user.email "$GH_EMAIL" > /dev/null 2>&1
git config --global user.name "$GH_NAME" > /dev/null 2>&1

git init

git add .
git commit -m "Automated Rebuild"
git push -f origin "$remote"
