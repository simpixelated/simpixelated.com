---
date: 2021-01-20
title: "Converting From WordPress To Gatsby.js"
tags:
  - JavaScript
  - development
  - Gatsby.js
  - WordPress
---

If you're a software developer like me, you know you _should_ have a portfolio of side projects, but you probably don't have the time or energy. If you have a personal website, with a blog, you're passing up an opportunity to double up on marketing yourself. Not only can you use your blog to promote your thoughts and ideas, by making it open source and maintaining the code yourself, you now have a major portfolio piece to show off as well. That was my goal and the reason I've been attempting to convert this blog from WordPress to something JavaScripty for at least five years.

In my opinion, its only within the last few years that tools like Gatsby.js and Next.js have progressed to the point where they can be a drop-in replacement for WordPress. The combination of React, Markdown, and Webpack make it good enough to compete, if you're willing to get your hands a little dirty. But once you've done the work to convert, it's almost less work than keeping WordPress up to date, secure, and performing well. The benefits of switching to a static export are many, including the ability to host your blog for free!

Early last year, the hosting service I used for over a decade, [Lithium Hosting](https://lithiumhosting.com/billing/aff.php?aff=213) (referral link), finally bumped my monthly subscription from $10 to $15 a month. Obviously I’m not complaining about a $5 increase after all these years, but it gave me the final bit of motivation I needed to finish building an [open-sourced](https://github.com/simpixelated/simpixelated.com), JavaScript-based, static exportable version of my website.

I've attempted to rebuild my blog with both Next.js and Gatsby.js; as of today, I don't think you can go wrong with either choice. If your website is mostly just a blog, I've found Gatsby to be a bit quicker setup, with an ecosystem of plugins for accomplishing all the common tasks. However if you really need to customize your setup, especially when it comes to routing or whatever, then Next.js might be a better fit. I went with Gatsby.js and so far I've been very happy.

My main goals for the conversion were:

- local content management (no more security risk from a publicly accessible admin)
- write blog posts in Markdown, with version control
- 100% static export able to be hosted for free on Netlify (or GitHub pages)
- massively improve page speed performance

Here are the main tools that I used to convert from WordPress to Gatsby.js:

- [Gatsby.js](https://www.gatsbyjs.com/docs/) (obviously)
- [GitHub](https://github.com/simpixelated/simpixelated.com) (for hosting the code)
- [Netlify](https://docs.netlify.com/#get-started) (for hosting the static export)
- [wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown)
- [@lekoarts/gatsby-theme-minimal-blog](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog)
- [Theme UI](https://theme-ui.com/home) and [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors) (for customizing lekoarts theme)
- [new-gatsby-post-cli](https://github.com/luftywiranda13/new-gatsby-post-cli) (for scaffolding new blog posts)

The general process of converting was:

1. Setup blog in Gatsby, by modifying [an existing theme](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog)
1. Export my posts from WordPress (using the tool within the admin)
1. Convert my posts from WordPress HTML to Markdown using [this tool](https://github.com/lonekorean/wordpress-export-to-markdown)
1. Manually cleanup anything broken during the conversion

By switching from WordPress to Gatsby.js, my PageSpeed Insights score went from 50 to [about 80](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsimpixelated.com%2F). My Web Page Performance test scores went from [three Fs](https://webpagetest.org/result/200813_Z5_44a758e1f23a43624841b0d687f06c09/) to [all As](https://webpagetest.org/result/210120_Di6V_b2767bdf7f5f5bdf683d2ab4270c2deb/).

In the end, I'm extremely happy with the change. I probably spent way too much time tweaking the link colors (still don't love them). However the ability to write posts with Markdown, in VS Code, and push changes via GitHub, is in a word: awesome! I don't really miss any of the headaches of WordPress and it's nice being able to save $15/month.

Send me a message on [Twitter](https://twitter.com/simpixelated) if you have any comments/questions about setting up a blog with Gatsby.js.
