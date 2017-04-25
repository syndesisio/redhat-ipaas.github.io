# Red Hat iPaaS

The GitHub repository for the Red Hat iPaaS website, where you'll find a User Guide, Developer Guide with documentation, and any relevant information about the project.

## Contributing

If you want to contribute to this repository, please fork it first and clone that fork to your computer. Then, to run it you must have Ruby, <a href="http://jekyllrb.com/" target="_blank" rel="nofollow">Jekyll</a>, and <a href="http://bundler.io/" target="_blank" rel="nofollow">Bundler</a> installed. Linux-based distros usually come with Ruby installed already. If not, please use <a href="http://rbenv.org/" target="_blank" rel="nofollow">rbenv</a> or <a href="https://rvm.io/" target="_blank" rel="nofollow">RVM</a> to manage your Ruby installations.

```
gem install jekyll bundler
bundle exec middleman server
```

You should be able to see the Red Hat iPaaS website in your browser on `http://localhost:4000`.

### Building & Deploying to GitHub Pages
We currently use [middleman-deploy](https://github.com/middleman-contrib/middleman-deploy) to deploy the iPaaS website. The build and deploy process is as follows:

1. Developer commits their contributions to the `redhat-ipaas.github.io` repository that they have cloned to their desktop.
2. `git checkout -b source` to create a `source` branch. We cannot work from the default `master` branch as that is what serves our built files.
3. A GitHub hook initiates a call to <a href="https://circleci.com/gh/redhat-ipaas/redhat-ipaas.github.io" target="_blank" rel="nofollow">CircleCI</a> to trigger a build.
4. CircleCI uses the `circle.yml` file to determine how to build the project.
5. In the case of our `circle.yml` file, <a href="http://bundler.io/" target="_blank" rel="nofollow">Bundler</a> installs dependencies, such as <a href="http://jekyllrb.com/" target="_blank" rel="nofollow">Jekyll</a>, and middleman-deploy. Finally, it runs `bundle exec middleman deploy`, which builds the files from the `source` branch and copies them to the `master` branch.
6. GitHub serves the `master` branch's static HTML to the public via <a href="https://redhat-ipaas.github.io/" target="_blank" rel="nofollow">https://redhat-ipaas.github.io/</a>.
