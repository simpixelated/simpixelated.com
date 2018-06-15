---
title: "What I've Been Working On (Ionic and Angular Resources)"
date: "29/09/2015"
slug: "what-ive-been-working-on-ionic-and-angular-resources"
---

As you can see by my stale timeline, I haven't updated this blog in awhile. I've been busy building the [HomDNA app](https://homdna.com) for iOS and Android using Cordova, Ionic, and Angular. Here's what I've learned (more detailed posts to come):

### AngularJS Architecture

*   <span class="s1">[modular file organization](https://medium.com/opinionated-angularjs/scalable-code-organization-in-angularjs-9f01b594bf06)</span>
*   <span class="s1">[writing regular functions, then applying Angular DI at end of file](https://github.com/toddmotto/angularjs-styleguide#modules)</span>

### AngularJS Plugins

*   <span class="s1">[using ui-router for authorization](http://www.frederiknakstad.com/2014/02/09/ui-router-in-angular-client-side-auth/)</span>
*   <span class="s1">modal service with $ionicModal</span>
*   <span class="s1">[logging Angular code with loggly](https://github.com/ajbrown/angular-loggly-logger)</span>
*   <span class="s1">creating lodash / underscore mixins</span>
*   <span class="s1">[using ChartJS in Angular](http://jtblin.github.io/angular-chart.js/)</span>
*   [preloading images](https://github.com/andrewmcgivery/ionic-ion-imageCacheFactory)
*   [local storage Angular service](http://learn.ionicframework.com/formulas/localstorage/)
*   URL shortening with [YOURLS](https://github.com/YOURLS/YOURLS)
*   customizing $http interceptors

    *   changing JSON from snake_case to camelCase and back

### <span class="s1">AngularJS Optimizations</span>

*   <span class="s1">[ng-repeat track by](http://www.bennadel.com/blog/2556-using-track-by-with-ngrepeat-in-angularjs-1-2.htm)</span>
*   <span class="s1">[one-time binding](http://blog.thoughtram.io/angularjs/2014/10/14/exploring-angular-1.3-one-time-bindings.html)</span>
*   <span class="s1">[Batarang to find expensive functions](https://github.com/angular/batarang)</span>
*   <span class="s1">reducing scope/watchers</span>
*   <span class="s1">reducing orphaned objects and DOM nodes</span>
*   <span class="s1">reducing number of DOM nodes</span>
*   <span class="s1">[utilizing templateCache](https://github.com/miickel/gulp-angular-templatecache)</span>
*   [caching API responses](https://github.com/jmdobry/angular-cache)
*   <span class="s1">running functions in a controller and assigning result to scope instead of assigning functions directly</span>
*   <span class="s1">[disabling logging on production](https://gist.github.com/darlanalves/8994894)</span>

### AngularJS Unit Testing

*   <span class="s1">[Angular $q promises in Jasmine](http://entwicklertagebuch.com/blog/2013/10/how-to-handle-angularjs-promises-in-jasmine-unit-tests/)</span>
*   [testing directives via their controllers](http://daginge.com/technology/2014/03/03/testing-angular-directive-controllers-with-jasmine-and-karma/)
*   [testing directive controllers with controllerAs and bindToController](http://www.syntaxsuccess.com/viewarticle/unit-testing-bindtocontroller-and-controlleras)
*   <span class="s1">[Jasmine spies](http://jasmine.github.io/2.0/introduction.html#section-Spies)</span>
*   <span class="s1">[code coverage](https://github.com/karma-runner/karma-coverage) and </span>[thresholds on push](https://github.com/lithiumtech/karma-threshold-reporter)
*   <span class="s1">using Jasmine + Karma + Gulp</span>
*   <span class="s1">speeding up unit tests with PhantomJS2</span>

### Cordova Plugins

*   [sending SMS messages](https://github.com/cordova-sms/cordova-sms-plugin)
*   <span class="s1">[displaying Cordova version in your app](https://github.com/whiteoctober/cordova-plugin-app-version)</span>
*   <span class="s1">displaying environment (dev/staging/production)</span>

### Build Process with Gulp

*   [creating documentation from JSDoc comments](https://github.com/jsBoot/gulp-jsdoc)
*   <span class="s1">Sass</span>
*   [automatic linting with ESLint](http://eslint.org/)
*   <span class="s1">[yargs and environment variables](https://github.com/bcoe/yargs)</span>
*   <span class="s1">live reload</span>
*   <span class="s1">minify, uglify, concat with [usemin](https://github.com/zont/gulp-usemin) and ngAnnotate</span>
*   <span class="s1">[generate TODO list in markdown from comments](https://github.com/pgilad/gulp-todo)</span>