---
title: Custom date formatting in Eleventy.js
date: 2023-02-09
tags:
  - Eleventy
  - JavaScript
  - development
---

Eleventy is really flexible about content dates and makes it easy to customize how they are displayed on your website. With a simple [filter](https://www.11ty.dev/docs/filters/), you can change the default date output to anything you like. You can use any method or library, but I chose [luxon](https://moment.github.io/luxon/). This is what my date filter looks like now (which is identical to the suggestion from [11ty Rocks!](https://11ty.rocks/eleventyjs/dates/)):

```js
eleventyConfig.addFilter("postDate", dateObj => {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
})
```

Then you just apply it with a filter in your templates like this:

{% raw %}

```jinja2
{{ date | postDate }}
```

{% endraw %}

This works as long as the format of all the dates in your collection are the same. However in my case, I had a mix of formats in my frontmatter. Some were in quotes like ”2020-01-01” but I was transitioning to not using quotes. I also tried to use `Last Modified` , which “automatically resolves to the file’s last modified date”. This resulted in three different date formats that I had to identify and parse differently. With luxon, this requires using an entirely different method. I ended up with a filter like this:

```js
eleventyConfig.addFilter("postDate", date => {
  if (date && typeof date.getMonth === "function") {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED)
  }
  if (typeof date === "object") {
    return DateTime.fromObject(date).toLocaleString(DateTime.DATE_MED)
  }
  return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)
})
```

This works, but is obviously fairly complicated. So I bit the bullet and updated the format of the dates in ever single one of my blog posts to be consistent so I could get back to a single line filter. Keep this in mind when you’re setting dates for the items in your Eleventy collections.
