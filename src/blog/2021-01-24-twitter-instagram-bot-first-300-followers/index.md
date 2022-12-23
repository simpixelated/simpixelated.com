---
date: "2021-09-05"
title: "Getting to 300 Followers with a Twitter Bot"
tags:
  - twitter
  - instagram
  - bot
  - api
  - javascript
  - node.js
---

My LEGO photo bot recently reached 300 followers on [Twitter](https://twitter.com/InspiringMocs) and is nearly there on [Instagram](https://www.instagram.com/inspiringmocs/) in a fraction of the time. On both social networks my bot posts at least daily, a picture of a LEGO MOC ("My Own Creation" in the LEGO world; basically any build that's not officially from the company). These come from my favorites on Flickr.

I don't manually write posts for either of them. I literally copy and paste from a `JSON` document that gets programmatically created at the push of a button. My [bot code](https://github.com/simpixelated/robirb) creates a string of the title, the author, and a URL to the photo, which I then put into [Buffer](http://buffer.com) so they can be scheduled weeks in advance. Here’s all the code if you want to dive-in on your own: https://github.com/simpixelated/robirb. It runs on Node.js and uses the Twitter and Flickr APIs.

In addition to composing the messages to be used for tweets/posts, the bot can also find new people to follow or unfollow. What I've found to be most useful for gaining followers on Twitter however, besides consistently publishing content, is to add people to Twitter lists. I have yet to incorporate it into the bot, but I have a zap on Zapier that automatically finds people tweeting about LEGO MOCs and adds them to a list. If you add enough people to a list, some of them will follow you back.

So far, the above method takes me about 10 minutes every few days (I can only queue up 10 tweets with the free trial of Buffer), but I’ve gone from literally zero to over 300 followers doing just this!

Follow me on [Twitter](https://twitter.com/simpixelated) if you want to hear more on automating Twitter and JavaScript development. Send me a DM of your favorite LEGO set!
