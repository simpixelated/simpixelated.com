---
title: "Front-End Engineer / Developer Interview Questions"
date: 2018-06-14
tags:
  - interviewing
---

Throughout my career, I have interviewed lots of front-end developers, possibly in the hundreds. Below are some of my favorite questions to ask and why. Most of these have been taken from [this excellent GitHub repo](https://github.com/h5bp/Front-end-Developer-Interview-Questions). These are pretty basic concepts, but you can adjust your expectations and follow up questions based on the experience you need for the role. These can be all be asked in about 20 minutes (perfect for a phone screen).

### Warm Up

- **Tell me about the last project you worked on.** I have their resume, so I don't need their entire career history. I'd rather hear about what they have been doing most recently.
- **Which part are you most proud of?** This usually gets people to talk about the specific parts they built rather than the overall project. It's also a positive way to start the interview.
- **What would you do differently next time?** Hopefully candidates will have learned something since they started their most recent project and would like to apply that to their next one. I like to hear how pragmatic they can be about choices that may have seemed correct at the time and only look bad in hindsight.

### HTML / CSS

- **What is CSS selector specificity and how does it work?** It is amazing how many senior level front-end engineers cannot answer this correctly. Really I'm just looking for someone to talk about how an ID is more specific than a class, or that the ordering of style definitions matters, or how you can add more selectors to get more specific. I often follow up with a specific example, like if you have two styles that change the color of the text, but one is an ID and one is a class, which one will take precedence? Sometimes this helps people understand the initial question more but sometimes it just proves how much they depend on Twitter Bootstrap to do all the styling for them.
- **What's the difference between display: inline and display: block?** To me this is very basic, but again I'm amazed how many people struggle to define this. If someone can't remember or isn't understanding the question, I usually follow up with an easier question: can you name some HTML tags that are inline by default? If they struggle with that, then I'll ask if they think a `<span>` is inline or block.

### JavaScript

- **Compare and contrast Angular with React.** I will replace React with Vue/Backbone/Ember based on their experience. The goal is to find out how much time they've spent working with multiple libraries and learning the pros/cons and best use cases of each. This is also a good way to find out if someone is too dogmatic about any one particular framework.
- **What is the difference between "==" and "==="?** Few people miss this one. It's pretty basic, but it's always nice to have people mention [type conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) and get a small win, especially if they've been failing the CSS questions.
- **What are the differences between variables created using "var", "let", and "const"?** I usually ask this if I've seen them mention ES6 on their resume. If not I will first ask them if they've used ES6. Even if someone has not used ES6 yet, I would hope they've at least heard of "let" and "const".
- **Describe event bubbling.** Many people get this confused with the [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop), or something else that they struggle to describe. I know React, Angular, and even jQuery to some extent have removed the need to deal with event bubbling and the weird side effects it can cause. But I like when people are at least aware of the concept. If they can talk intelligently about it, they obviously have a decent understanding of the DOM as well.
- **Explain how (the keyword) "this" works in JavaScript.** Most people inherently get this (pun intended) and use it all the time, but it's a difficult concept to verbalize. I think being able to describe programming concepts to other people is just as important as knowing them.

### Testing

- **What tools would you use to test your code's functionality?** Not everyone writes unit tests. But almost everyone says they do. An easy way to see if they are bullshitting is to ask them to name their favorite tools. Hopefully they quickly respond with Mocha, Karma, QUnit, or something similar. If it sounds like they know what they are talking about I might delve deeper and see how passionate they are about TDD or [code coverage](https://confluence.atlassian.com/clover/about-code-coverage-71599496.html).
- **What is the purpose of a code style linting tool?** More recently I have simply asked: "Do you lint?", but the end result is the same. People either use a linting tool and understand it's purpose or they don't. I personally would not want to work with someone who did not use a linting tool on a regular basis, but obviously there are people who do not.

### Performance

- **Explain what a single page app is and how to make one SEO-friendly.** These are great to see how well a person is able to communicate concepts like SPAs and how well they actually understand how they work and what their shortcomings are. Not everyone has done SEO optimization for their job, but I expect every mid to senior level engineer to at least know where to start. I expect them to mention meta tags, server-side rendering, semantic links, etc.
- **Name 3 ways to decrease page load (perceived or actual load time).** This one is kind of a gimme, but it's telling if a person rattles off a bunch or they just barely get to three. Much like SEO, I don't expect everyone to have experience with performance optimization, but they should know the basics. Answers like "compress your images" or "caching" are fine, but I'm hoping a candidate will talk about minifying, gzip, code splitting, or other more advanced techniques.
- **What does CORS stand for and what issue does it address?** Please at least say "Cross Origin" and mention "security" and you'll get a pass. I have definitely heard candidates that say "oh yeah I work with this all the time" but then can't describe why it exists. It's one of those things that they just do, but they don't know why.
- **Describe the difference between a cookie, sessionStorage and localStorage.** Most people struggle with at least one of these. Cookies are a given, but depending on whether your experience is more back-end or more mobile, you may have never worked with session or local storage. But again, I'm hoping senior level candidates are at least aware of them as concepts and can describe what they are at a high level.

Hopefully these are helpful for anyone else who is interviewing front-end candidates or someone who is a front-end candidate. This is not an exhaustive list of everyone question I can or would ask, but it's a good place to start. I will usually follow these up with a coding project and a more culture based interview with the rest of the team.
