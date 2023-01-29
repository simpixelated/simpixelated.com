---
title: Adding dynamic read time to Eleventy.js
date: 2023-01-29
tags:
  - JavaScript
  - Eleventy
---

Prior to converting my blog to Eleventy.js, I was using the awesome [Gatsby Starter: Minimal Blog](https://github.com/LekoArts/gatsby-starter-minimal-blog) theme by LekoArts, which dynamically calculated the reading time for each post. This is a fairly common feature that you see on many websites (and you can still see at the top of this page), which I think was popularized by Medium. When I converted this blog from Gatsby, I had to recreate the functionality in Eleventy.

Conceptually, this is how to calculate read time:

- count the number of words
- divide it by an average words per minute

Simple! To add this to Eleventy, you have to wrap the logic in a [filter](https://www.11ty.dev/docs/filters/) that you can add to your [Eleventy config](https://www.11ty.dev/docs/config/#using-the-configuration-api). Since you'll be passing the entire content of your post to the filter, you'll need to strip out the HTML content first. Once you have the plain text, you can split it into words and calculate the read time by dividing by an average words per minute. It should look something like this:

```js
eleventyConfig.addFilter("timeToRead", (content) => {
  // inspired by
  const getPlainText = content => {
    const html = content.templateContent || content
    if (typeof html !== "string") {
      throw new Error("Time-to-read's input must be a string or template")
    }

    // Remove html
    const htmlTags = String.raw`<\/?[a-z0-9]+\b[^>]*>`
    //Regex = '<!--' + the minimal amount of 0 or more characters + '-->'
    const htmlComments = String.raw`<!--[^]*?-->`
    // Regex = htmlTags or htmlComments
    return html.replace(
      new RegExp(String.raw`${htmlTags}|${htmlComments}`, "gi"),
      ""
    )
  }
  const rawText = getPlainText(content)
  const wpm = 265
  const words = rawText.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}
```

You can use it a Nunjucks template like this:
{% raw %}

```jinja2
{{ content | timeToRead }} min read
```

{% endraw %}

I chose 265 words per minute based on [Medium's WPM](https://help.medium.com/hc/en-us/articles/214991667-Read-time). If you want to add a lot more customization, including internationalization, checkout [this Eleventy plugin by JKC-Codes](https://github.com/JKC-Codes/eleventy-plugin-time-to-read). I "borrowed" a lot of the code above from their GitHub repo as well as [this tutorial by Michael Burrows](https://dev.to/michaelburrows/calculate-the-estimated-reading-time-of-an-article-using-javascript-2k9l).

Message me on [Twitter](https://twitter.com/simpixelated) if you have any questions about customizing Eleventy.js or just want to show off what you've built!
