---
title: Filtering tags within Eleventy.js collections
date: 2023-02-16
tags:
  - Eleventy
  - JavaScript
  - development
---

When you create a [collection](https://www.11ty.dev/docs/collections/) with Eleventy, you start with a tag. For my blog posts, I chose the tag "posts". The problem with this is that whenever I want to display all the tags for a post, it also includes "posts", which I don't like. This is a bit of code architecture that I didn’t want to expose to my readers.

Probably I could do something globally to alter the tag list in my collection wherever they are used, but I like creating re-usable functions. So instead I created a simple array filter than can be used within a template to exclude any tag. It requires a bit of repetition (wherever post tags are used), but it’s only a few characters and the flexibility means I can filter out other tags (or any string in an array) when needed. Plus the code is really simple. Here's what it looks like in my [config](https://www.11ty.dev/docs/config/).

```js
eleventyConfig.addFilter("exclude", (collection, stringToFilter) => {
  if (!stringToFilter) {
    return collection
  }
  return (collection ?? []).filter(item => item !== stringToFilter)
})
```

Then, here is how it can be used in a template (this is within a `for` loop of posts):

{% raw %}

```jinja2
{% set tags = post.data.tags | exclude('posts') %}
```

{% endraw %}
