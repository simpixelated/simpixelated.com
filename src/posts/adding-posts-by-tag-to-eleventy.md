---
title: Adding posts by tag to Eleventy.js
date: 2023-01-31
tags:
  - Eleventy
  - JavaScript
  - development
---

Showing all the posts for a tag is a fairly common feature of most blogging software and it's fully supported by [Eleventy.js](https://www.11ty.dev/docs) as well. In fact, the main code you need to get it working is available in the docs under: [Quick Tip #004 — Zero Maintenance Tag Pages For Your Blog](https://www.11ty.dev/docs/quicktips/tag-pages/). Here’s what the code looks like for my blog:

{% raw %}
```jinja2
---
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tag/{{ tag | slug }}/
layout: base.html
eleventyComputed:
  title: Posts tagged "{{ tag }}"
---

<header>
  <h2>Tagged “{{ tag }}”</h2>
  <a href="/tag">View all tags</a>
</header>

<ul>
  {% set taglist = collections[ tag ] %} {% for post in taglist | reverse %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a><br />
    <small class="post-meta"><time>{{ post.data.date | postDate }}</time></small>
  </li>
  {% endfor %}
</ul>
```
{% endraw %}

You can see it in action by clicking on any of my post tags, like: [Eleventy](https://simpixelated.com/tag/eleventy/). Or you can view the [source code](https://github.com/simpixelated/simpixelated.com/blob/e4782b06d6157b9f4a0618e6f6c4103f1c0cb569/src/posts-by-tag.html). While I was converting my blog from Gatsby.js, I did run into a couple issues:
1. The dynamic page `title` has to be created with [computed data](https://www.11ty.dev/docs/data-computed/), which I discovered thanks to [this GitHub comment](https://github.com/11ty/eleventy/issues/1239#issuecomment-643080942).
2. The tags are case sensitive; "JavaScript" is different from "javascript". Unfortunately when using `slugify`, this will create a duplicate tag issue, which I figured out thanks to [this GitHub issue](https://github.com/11ty/eleventy/issues/2462). I solved this by making all the tags the same case, but it's something to watch out for.
