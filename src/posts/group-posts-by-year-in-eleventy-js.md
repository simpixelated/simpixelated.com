---
date: 2024-03-13
title: "Group posts by year in Eleventy.js"
tags:
  - Eleventy
  - JavaScript
  - development
---

I tend to sporadically publish blog posts. I'll do a burst of content for a few months, then kind of sputter out for awhile (sometimes years). Because of this inconsistent schedule, it makes more sense to group my blog posts by year. That makes it more obvious that two consecutive blog posts might be separated by a long break.

Since I want the newest content at the top, I want the years reverse chronological order and the posts within each year also in reverse chronological order. From the beginning, I had hoped to accomplish this with just Nunjuck's filters and I thought it would be as simple as this:

{% raw %}

```jinja2
{% for year, posts in collections.posts | groupby("data.year") | reverse %}
```

{% endraw %}

But no matter what, I couldn't make it work. Turns out [Christopher Kirk-Nielsen](https://chriskirknielsen.com/blog/group-posts-by-year-with-nunjucks-in-eleventy/) also ran into and eventually solved this problem:

> The only issue with this approach is that the year keys we get are sorted in ascending order, and throwing in a reverse before grouping does nothing, while adding reverse at the end breaks object entirely — it only works for strings and arrays, and sort doesn’t operate on objects. So while we see posts within each year sorted from newest to oldest thanks to reverse in the second for-loop, the years themselves are sorted from oldest to newest.

It turns out the answer is to use `dictsort` on the `year` object prior to reversing it. The end result is a fairly simple for loop in my Nunjucks template:

{% raw %}

```jinja2
{% for year, posts in collections.posts | groupby("data.year") | dictsort | reverse %}
<h4>{{ year }}</h4>
<ul>
  {% for post in posts | reverse %}
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

Note: there are two uses of `reverse` above: one for the `year` object and one for `posts`. Also, the `exclude('posts')` bit prevents "posts" from showing in the tag list for every post (since all posts have this tag, in addition to whatever custom tags you've added).

The above also depends on a `year` custom attribute in my [computed data](https://www.11ty.dev/docs/data-computed/):

```jsx
module.exports = {
  eleventyComputed: {
    year: data => new Date(data.date).getFullYear(),
  },
}
```

### Alternatives Considered

Prior to discovering the `dictsort` filter, a custom Eleventy collection was how I accomplished this. It's more complex, but still works the same:

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

Then it gets used on my blog page, just like the simpler solution above:

{% raw %}

```jinja2
{% for year, posts in collections.postsByYear %}
```

{% endraw %}

### Other posts that inspired me

- [Group posts by year in Eleventy](https://darekkay.com/blog/eleventy-group-posts-by-year/)
- [How do you list all posts grouped by year? 11ty/eleventy#1284 (comment)](https://github.com/11ty/eleventy/issues/1284#issuecomment-1026679407)
- [Comment by Reddit user five35](https://www.reddit.com/r/eleventy/comments/1bds2q2/comment/kup0d9u/)

### Leave a comment

Have thoughts? Suggestions? Leave a comment on the [Reddit post](https://www.reddit.com/r/eleventy/comments/1bds2q2/group_posts_by_year_in_eleventyjs_short_tutorial/).
