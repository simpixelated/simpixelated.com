---
title: Hiding drafts and future posts in Eleventy.js
date: 2023-03-07
draft: true
tags:
  - Eleventy
  - JavaScript
  - development
---

Now that I'm publishing on a regular schedule, I need a way to create draft posts that can be merged into my main branch without showing up on my production website, as well as scheduling posts to be published at a future date. Thankfully, after a little searching, I discovered that the official docs have a [quick tip](https://www.11ty.dev/docs/quicktips/draft-posts/) on doing just that. Or at least there's example code for how to handle drafts and a hint that a similar technique could be used for scheduling. So I cobbled them together, following the advice on future posts from [this tutorial](https://saneef.com/tutorials/hiding-posts-with-future-dates-in-eleventy/).

The basics of how this works is split into two parts:

- setting `permalink` to **false** so the post doesn't get output at build time
- setting `eleventyExcludeFromCollections` to **true** so the post doesn't show up in your array of posts

To figure out if a post is a draft or future post, I created a helper method: `shouldHide`, which checks if `draft` is true in the item "data cascade" (e.g. frontmatter) or if the `date` (also from the data cascade) is set for a time in the future.

However you probably still want to see your draft and future posts while developing locally (while in `serve` or `watch` mode), so the 11ty docs wisely suggest wrapping this in a check for just that. This works by adding a hook on `eleventy.before` that sets a new environment variable: `BUILD_DRAFTS`.

The result is that drafts and future posts show up while serving your files, but not when doing a production build. Here's all of the code to handle this, that now lives in my config:

```js
const shouldHide = ({ date, draft }) => {
  if (process.env.BUILD_DRAFTS) {
    return false
  }
  const isDraft = draft
  const isPageFromFuture = date && date.getTime() > Date.now()
  return isDraft || isPageFromFuture
}

// When `permalink` is false, the file is not written to disk
eleventyConfig.addGlobalData("eleventyComputed.permalink", function () {
  return data => {
    // Always skip during non-watch/serve builds
    if (shouldHide(data)) {
      return false
    }

    return data.permalink
  }
})

// When `eleventyExcludeFromCollections` is true, the file is not included in any collections
eleventyConfig.addGlobalData(
  "eleventyComputed.eleventyExcludeFromCollections",
  function () {
    return data => {
      // Always exclude from non-watch/serve builds
      if (shouldHide(data)) {
        return true
      }

      return data.eleventyExcludeFromCollections
    }
  }
)

eleventyConfig.on("eleventy.before", ({ runMode }) => {
  // Set the environment variable
  if (runMode === "serve" || runMode === "watch") {
    process.env.BUILD_DRAFTS = true
  }
})
```
