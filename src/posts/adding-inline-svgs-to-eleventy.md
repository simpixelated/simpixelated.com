---
title: Adding inline SVGs to Eleventy.js
date: 2024-03-03
tags:
  - Eleventy
  - JavaScript
  - development
---

### Why inline SVGs?

On the [homepage](/) of this webite, I use SVG icons for the links to my other profiles: GitHub, LinkedIn, Flickr, and Twitter. Why not use GIFs, PNGs, or JPEGs for those? Because SVGs are light in size, easy to style with CSS, and can be included as code. If you inline SVGs as code within your HTML, then browsers don't need to download a separate asset, and you don't have to store these images somewhere separate from your code. There are downsides with inlined SVGs though:

- can't cache the SVG files separate from your code
- lots of extra code (that's mostly unreadable)
- if you need to change it later, you have to push a new changeset

If you're willing to live with the downsides, then keep reading! This is something that’s really easy to do in React. While not 100% supported right out of the box, it was relatively simple to enable in Eleventy. I just had to install the [Eleventy Image plugin](https://www.11ty.dev/docs/plugins/image/) and add a filter to my [config](https://www.11ty.dev/docs/config/):

```js
const Image = require("@11ty/eleventy-img")
module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("svgIcon", async filename => {
    const metadata = await Image(`./src/_includes/assets/${filename}`, {
      formats: ["svg"],
      dryRun: true,
    })
    return metadata.svg[0].buffer.toString()
  })
  return config
}
```

With that in place, I could inline an SVG file anywhere I needed it in my templates using Nunjucks, like so:

{% raw %}

```jinja2
{% svgIcon 'url-to-svg.svg' %}
```

{% endraw %}

A similar filter could be created for whichever templating language you’re using. Thanks for the inspiration from:

- [Inlining SVGs in Eleventy](https://medium.com/@brettdewoody/inlining-svgs-in-eleventy-cffb1114e7b)
- [Manage your SVG files with Eleventy’s Render plugin](https://chriskirknielsen.com/blog/manage-your-svg-files-with-eleventys-render-plugin/)
