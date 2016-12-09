---
permalink: /client/
title: "Client"
---

[![CircleCI](https://circleci.com/gh/redhat-ipaas/ipaas-client.svg?style=svg)](https://circleci.com/gh/redhat-ipaas/ipaas-client)

The front end application for Red Hat iPaaS. For the middle tier API that this client communicates with, please see [this](https://github.com/redhat-ipaas/ipaas-api-java) repo.

Included in this stack are the following technologies:

>- Language: [TypeScript][] (JavaScript with @Types)
- Framework: [Angular 2][]
- Module Bundler: [Webpack][]
- Design Patterns: [PatternFly][]
- Data Visualization: [C3][], [D3][]
- Testing: [Jasmine][] (BDD Unit Test Framework), [Karma][] (Unit Test Runner)
, [Protractor][] (E2E Framework), [Istanbul][] (Code Coverage)
- Linting: [TsLint][] (Linting for TypeScript)
- Logging: [js-Logger][] (JavaScript Logger)
- Code Analysis: [Codelyzer][] (TsLint rules for static code analysis of Angular 2 TypeScript projects)

### Quick Start
**Make sure you have node version >= 6.x.x and NPM version >= 3.x.x**

> Clone/download the repo start editing `app.component.ts` inside [`/src/app/`](/src/app/app.component.ts)

```
# clone our repo
git clone https://github.com/redhat-ipaas/ipaas-client.git

# change directory to iPaaS
cd ipaas-client

# install the repo with npm
npm install

# start the server
npm start
```

Go to [http://0.0.0.0:9000](http://0.0.0.0:9000) or [http://localhost:9000](http://localhost:9000) in your browser.

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running](#running)
    * [Testing](#testing)
    * [Configuring](#configuring)
* [Contributing](#contributing)
* [Resources](#resources)


# Getting Started
## Dependencies
What you need to run this app:

- `node` and `npm` (`brew install node` for OS X users)
- Ensure you're running the latest versions Node `v6.x.x`+ and NPM `3.x.x`+

## Installing
* `fork` the ipaas repo
* `clone` your fork
* `npm install` to install all dependencies
* `npm start` to start the dev server

## Running
After you have installed all dependencies you can now run the app. Run `npm start` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:9000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:9000/`).

### Development
```bash
$ npm start
```

### Production
```
$ npm run build:prod
$ npm run server:prod
```

For a list of common commands, see [here](https://github.com/redhat-ipaas/ipaas-client/blob/master/docs/commands.md).

## Testing

### Run Tests
```
npm run test
```

### Watch and Run Tests
```
npm run watch:test
```

For a list of common commands, see [here](https://github.com/redhat-ipaas/ipaas-client/blob/master/docs/commands.md).

## Configuring
Configuration files live in `/config`. Configuration files are currently available for Webpack, Karma, and Protractor.

# Contributing
Pull requests are always welcome. Please read through our [Contribution](https://github.com/redhat-ipaas/ipaas-client/blob/master/docs/contributing.md) guidelines in the `/docs` directory.


## Resources
- [angular-patternfly][]
- [angular2-template-loader][]
- [c3][]
- [d3][]
- [ng-bootstrap][]
- [PatternFly][]
- [PatternFly GH][]
- [patternfly-demo-app][]
- [patternfly-demo-app Demo][]
- [sass-loader][]
- [webpack][]
- [webpack-toolkit][]

[Angular]: https://angular.io/
[Angular 2]: https://angular.io/
[angular-patternfly]: https://github.com/patternfly/angular-patternfly
[angular2-template-loader]: https://github.com/TheLarkInn/angular2-template-loader
[c3]: http://c3js.org/
[Codelyzer]: https://github.com/mgechev/codelyzer
[d3]: https://d3js.org/
[Istanbul]: https://github.com/gotwarlost/istanbul
[Jasmine]: http://jasmine.github.io/
[js-Logger]: https://github.com/jonnyreeves/js-logger
[Karma]: https://karma-runner.github.io/1.0/index.html
[ng-bootstrap]: https://github.com/ng-bootstrap/ng-bootstrap
[PatternFly]: https://www.patternfly.org/
[PatternFly GH]: https://github.com/patternfly/
[patternfly-demo-app]: https://github.com/patternfly/patternfly-demo-app
[patternfly-demo-app Demo]: https://rawgit.com/patternfly/patternfly-demo-app/master/dist/index.html
[Protractor]: http://www.protractortest.org/
[sass-loader]: https://github.com/jtangelder/sass-loader
[TsLint]: https://github.com/palantir/tslint
[TypeScript]: http://www.typescriptlang.org
[Webpack]: http://webpack.github.io/
[webpack]: https://github.com/webpack/webpack
[webpack-toolkit]: https://github.com/AngularClass/webpack-toolkit

