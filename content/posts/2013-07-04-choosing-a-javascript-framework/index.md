---
title: "Choosing a JavaScript Framework"
date: "2013-07-04"
tags:
 - JavaScript
 - Backbone.js
 - Angular
---

I've been trying to convert [IPOFest](https://github.com/simpixelated/ipofest) (a pet project started by [Kyle](http://www.aquaether.com/) and I) from all PHP to JavaScript that interfaces with a PHP API. At work we use Backbone.js and since I had never used it before, I practiced on IPOFest. First I started with Backbone and Knockout.js, with Knockback.js as a bridge. I didn't go too far down that path, but it did feel a bit awkward and the Knockback documentation didn't help very much. At work we use Handlebars for templates, so I started changing over to that.

To throw another wrench in the process, I've started to get a little annoyed by Backbone. The more I play with it, the more problems I run into and the more "boilerplate" code I have to write to setup views properly. Part of the problem is that I'm hacking on someone else's code. The other part of the problem is that I've only been using Backbone for about a month. But I can already see the need for another library like Marionette.js just to make Backbone usable.

I've always had my eye on Angular.js and Ember.js, but I never quite understood the difference between them and Backbone. I'm starting to understand. I found some good Quora Q&A covering this exact topic. It seems as though the majority of developers (on Quora) see Backbone as second-class citizen, only to be used if you absolutely have to. I understand now that Backbone is very "barebones" and doesn't enforce a "right" way to do things. It also doesn't force a particular templating library on to you. This is both a good and bad thing.

Ember forces Handlebars, which we already use with Backbone anyway. Angular uses declarative bindings in the HTML, similar to Knockout, so it doesn't require a template. Some people, especially the contributes to Ember, think this is inefficient, since you have to essentially poll for changes and constantly parse the DOM, instead of just loading a string template. At the start of an app, I'm not sure there's a performance difference either way. But as you continue to add cruft, I can see how it might slow things down. But I feel like there are ways to optimize at that point that wouldn't require switching frameworks.

For right now, I'm thinking about trying out Ember, Angular, or both on IPOFest in separate branches and see which one I like better. Ultimately, that's all that matters. Every framework is going to have drawbacks, but if you want to develop something, you have to go with what you know and like.
