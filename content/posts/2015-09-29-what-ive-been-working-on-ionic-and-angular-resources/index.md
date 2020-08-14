---
title: "What I've Been Working On (Ionic and Angular Resources)"
date: "2015-09-29"
---

As you can see by my stale timeline, I haven't updated this blog in awhile. I've been busy building the [HomDNA app](https://homdna.com) for iOS and Android using Cordova, Ionic, and Angular. Here's what I've learned (more detailed posts to come):

### AngularJS Architecture

- [modular file organization](https://medium.com/opinionated-angularjs/scalable-code-organization-in-angularjs-9f01b594bf06)
- [writing regular functions, then applying Angular DI at end of file](https://github.com/toddmotto/angularjs-styleguide#modules)

### AngularJS Plugins

- [using ui-router for authorization](http://www.frederiknakstad.com/2014/02/09/ui-router-in-angular-client-side-auth/)
- modal service with \$ionicModal
- [logging Angular code with loggly](https://github.com/ajbrown/angular-loggly-logger)
- creating lodash / underscore mixins
- [using ChartJS in Angular](http://jtblin.github.io/angular-chart.js/)
- [preloading images](https://github.com/andrewmcgivery/ionic-ion-imageCacheFactory)
- [local storage Angular service](http://learn.ionicframework.com/formulas/localstorage/)
- URL shortening with [YOURLS](https://github.com/YOURLS/YOURLS)
- customizing \$http interceptors
  - changing JSON from snake_case to camelCase and back

### AngularJS Optimizations

- [ng-repeat track by](http://www.bennadel.com/blog/2556-using-track-by-with-ngrepeat-in-angularjs-1-2.htm)
- [one-time binding](http://blog.thoughtram.io/angularjs/2014/10/14/exploring-angular-1.3-one-time-bindings.html)
- [Batarang to find expensive functions](https://github.com/angular/batarang)
- reducing scope/watchers
- reducing orphaned objects and DOM nodes
- reducing number of DOM nodes
- [utilizing templateCache](https://github.com/miickel/gulp-angular-templatecache)
- [caching API responses](https://github.com/jmdobry/angular-cache)
- running functions in a controller and assigning result to scope instead of assigning functions directly
- [disabling logging on production](https://gist.github.com/darlanalves/8994894)

### AngularJS Unit Testing

- [Angular \$q promises in Jasmine](http://entwicklertagebuch.com/blog/2013/10/how-to-handle-angularjs-promises-in-jasmine-unit-tests/)
- [testing directives via their controllers](http://daginge.com/technology/2014/03/03/testing-angular-directive-controllers-with-jasmine-and-karma/)
- [testing directive controllers with controllerAs and bindToController](http://www.syntaxsuccess.com/viewarticle/unit-testing-bindtocontroller-and-controlleras)
- [Jasmine spies](http://jasmine.github.io/2.0/introduction.html#section-Spies)
- [code coverage](https://github.com/karma-runner/karma-coverage) and [thresholds on push](https://github.com/lithiumtech/karma-threshold-reporter)
- using Jasmine + Karma + Gulp
- speeding up unit tests with PhantomJS2

### Cordova Plugins

- [sending SMS messages](https://github.com/cordova-sms/cordova-sms-plugin)
- [displaying Cordova version in your app](https://github.com/whiteoctober/cordova-plugin-app-version)
- displaying environment (dev/staging/production)

### Build Process with Gulp

- [creating documentation from JSDoc comments](https://github.com/jsBoot/gulp-jsdoc)
- Sass
- [automatic linting with ESLint](http://eslint.org/)
- [yargs and environment variables](https://github.com/bcoe/yargs)
- live reload
- minify, uglify, concat with [usemin](https://github.com/zont/gulp-usemin) and ngAnnotate
- [generate TODO list in markdown from comments](https://github.com/pgilad/gulp-todo)
