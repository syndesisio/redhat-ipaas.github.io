# Red Hat iPaaS

The official page for Red Hat iPaaS, with quick links to important places relevant to the project.

Click <a href="https://github.com/redhat-ipaas" target="_blank" rel="nofollow">here</a> for the Red Hat iPaaS GitHub organization.

## UI
- <a href="https://github.com/redhat-ipaas/ipaas-ui" target="_blank" rel="nofollow">GitHub Repository</a>
- <a href="https://ipaas-staging.b6ff.rh-idev.openshiftapps.com/" target="_blank" rel="nofollow">Live Staging</a>

## API
- <a href="https://github.com/redhat-ipaas/ipaas-rest" target="_blank" rel="nofollow">GitHub Repository</a>
- <a href="https://ipaas-staging.b6ff.rh-idev.openshiftapps.com/api/v1" target="_blank" rel="nofollow">Live Staging</a>
- <a href="https://ipaas-staging.b6ff.rh-idev.openshiftapps.com/api/v1/swagger.json" target="_blank" rel="nofollow">Swagger Spec</a>

## Contributing

If you want to contribute to this repository, please fork it first and clone that fork to your computer. Then, to run it you must have Ruby, <a href="http://jekyllrb.com/" target="_blank" rel="nofollow">Jekyll</a>, and <a href="http://bundler.io/" target="_blank" rel="nofollow">Bundler</a> installed. Linux-based distros usually come with Ruby installed already. If not, please use <a href="http://rbenv.org/" target="_blank" rel="nofollow">rbenv</a> or <a href="https://rvm.io/" target="_blank" rel="nofollow">RVM</a> to manage your Ruby installations.

```
gem install jekyll bundler
bundle exec jekyll serve
```

You should be able to see the Red Hat iPaaS website in your browser on `http://localhost:4000`.

### Building & Deploying to GitHub Pages
The build and deploy process is as follows:

1. Developer commits their contributions to the `redhat-ipaas.github.io` repository that they have cloned to their desktop.
2. Developer pushes their changes to the `master` branch.
3. A GitHub hook initiates a call to CircleCI to trigger a build.
4. CircleCI uses the `circle.yml` file to determine how to build the project.
5. In the case of our `circle.yml` file, Yarn installs dependencies and uses Bundler to build the Jekyll website. Finally, it runs the `./scripts/deploy-ghpages.sh` script, which creates a `gh-pages` branch and copies the static files from `master` to it.
6. GitHub serves the `gh-pages` branch's static HTML to the public via <a href="https://redhat-ipaas.github.io/" target="_blank" rel="nofollow">https://redhat-ipaas.github.io/</a>.
