---
title: "window.load"
date: "2010-04-25"
tags:
 - JavaScript
---

I ran into an interesting problem while working on a project for [SiteGoals](http://www.sitegoals.com). We updated the code for an old design, moving it from tables to divs. This was relatively easy, except that the bottom divs needed to stretch to match the height of the tallest column. Sometimes that was the main content div, sometimes that was the sidebar items. I couldn't fake it with a background image because of the quirks of the design and I've never had much luck with any of the pure CSS techniques, so I turned to javascript.

I found a pretty simple script for finding the tallest div and forcing the rest to match. The only problem I started to notice is that on the first load, before the images were cached, it was finding the height of the page BEFORE the images loaded, causing the content to spill over the set height. Since the site is in a CMS (Expression Engine), I couldn't very quick add width and height tags to each image, nor could I expect the client to always do so in the future. So I had to find a way to set the height of the divs AFTER all the images were loaded. I thought this might be a more daunting task than it was. Thanks to [a blog post I found](http://web.enavu.com/daily_tip/daily-tip-difference-between-document-ready-and-window-load-in-jquery/), and with only a quick modification to my script, I was able to adjust the height AFTER the images and now the content no longer busts outside the fixed height of the div. Easy as pie!
