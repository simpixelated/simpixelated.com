---
date: 2024-03-13
title: "Group posts by year in Eleventy.js"
tags:
  - Eleventy
  - JavaScript
  - development
---

I tend to sporadically publish blog posts. I'll do a burst of content for a few months, then kind of sputter out for awhile (sometimes years). Because of this inconsistent schedule, it makes more sense to group my blog posts by year. That makes it more obvious that two consecutive blog posts might be separated by a long break. It also just feels like a more natural grouping.

There are probably many different ways to accomplish this, but the way that worked for me was creating a custom collection in Eleventy:

```jsx
eleventyConfig.addCollection("postsByYear", collection => {
  const posts = collection.getFilteredByTag("posts").reverse()
  const years = posts.map(post => post.date.getFullYear())
  const uniqueYears = [...new Set(years)]
  const postsByYear = uniqueYears.reduce((prev, year) => {
    const filteredPosts = posts.filter(post => post.date.getFullYear() === year)
    return [...prev, [year, filteredPosts]]
  }, [])
  return postsByYear
})
```

Then it gets used on my blog page like so:

{% raw %}

```jinja2
{% for year, posts in collections.postsByYear %}
<h4>{{ year }}</h4>
<ul>
  {% for post in posts %}
  {% set tags = post.data.tags | exclude('posts') %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a><br />
    <small class="post-meta"><time>{{ post.data.date | postDate }}</time>{% if tags | length %} - {% include "tag-list.njk" %}{% endif %}</small>
  </li>
  {% endfor %}
</ul>
{% endfor %}
```

{% endraw %}

That’s it! Note: the `exclude('posts')` bit prevents "posts" from showing in the tag list for every post (since all posts have this tag, in addition to whatever custom tags you've added).

### Alternatives Considered

While I wanted to accomplish this with just Nunjucks filters, I couldn’t figure out how to sort the years correctly. No matter what I did, it wanted to go in descending order. I haven’t looked at it since I first tried this last year. Perhaps it was a bug? But more likely it was my inability to understand the manual. I’ll include what I tried here in case someone else runs into a similar problem:

First I added a custom attribute ([computed data](https://www.11ty.dev/docs/data-computed/)) to my posts like:

```jsx
module.exports = {
  eleventyComputed: {
    year: data => new Date(data.date).getFullYear(),
  },
}
```

Then I used it in the templates like so:

{% raw %}

```jinja2
{% for year, posts in collections.posts | groupby("data.year") %}
<h4>{{ year }}</h4>
<ul>
  {% for post in posts | reverse %}
  {% set tags = post.data.tags | exclude('posts') %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }} {{ post.data.year }}</a><br />
    <small class="post-meta"><time>{{ post.data.date | postDate }}</time>{% if tags | length %} - {% include "tag-list.html" %}{% endif %}</small>
  </li>
  {% endfor %}
</ul>
{% endfor %}
```

{% endraw %}

However this didn’t work. It kept showing the blogs in descending order. Eventually I gave up and just used the custom collection at the start of this post.

### Other Posts That Inspired Me

- [Group posts by year in Eleventy](https://darekkay.com/blog/eleventy-group-posts-by-year/)
- [How do you list all posts grouped by year? 11ty/eleventy#1284 (comment)](https://github.com/11ty/eleventy/issues/1284#issuecomment-1026679407)

### Leave a comment

Have thoughts? Suggestions? Leave a comment on the [Reddit post](https://www.reddit.com/r/eleventy/comments/1bds2q2/group_posts_by_year_in_eleventyjs_short_tutorial/).
