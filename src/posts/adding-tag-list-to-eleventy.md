---
title: Adding tag list with post count to Eleventy.js
date: 2023-02-02
tags:
  - Eleventy
  - JavaScript
  - development
---

If you tag your blog posts, it's nice to be able to list them all along with a count of posts for each. You can see an example of this on my [tags page](/tag). This is not built into Eleventy.js, but it's pretty simple to add. One way to do it is to add a custom collection to your [config](https://www.11ty.dev/docs/config/#using-the-configuration-api). Since tags are just attributes of an item in any collection, you can loop through your posts and pull out the unique tags. Since I don't use tags on anything except blog posts, I just use `collections.getAll` to get all posts. To get the post count I use the API method: [collections.getFilteredByTag](<https://www.11ty.dev/docs/collections/#getfilteredbytag(-tagname-)>). I'm not worried about optimizing since this all happens during the build and deploy.

Here's what the code looks like:

```js
eleventyConfig.addCollection("tagList", collections => {
  const tags = collections
    .getAll()
    .reduce((tags, item) => tags.concat(item.data.tags), [])
    .filter(tag => !!tag && !["posts", "all"].includes(tag))
    .sort()
  return Array.from(new Set(tags)).map(tag => ({
    title: tag,
    count: collections.getFilteredByTag(tag).length,
  }))
})
```

One caveat: you'll notice the `filter` for the "posts" and "all" tags. That's because "posts" is how I define my blog posts collection and "all" is automatically added to every item in a collection. I don't want those to show up on my tag list page, so I exclude them from the returned array. I was able to figure this out thanks to all the replies to [this GitHub issue](https://github.com/11ty/eleventy/issues/927).

The `tagList` collection is an array of objects that look like this:

```js
;[{ title: "Eleventy", count: 3 }]
```

Now you can reference this collection in any template. Here's what my tag list page looks like:
{% raw %}

```jinja2
<ul>
  {% for tag in collections.tagList %}
  <li>
    <a href="/tag/{{ tag.title | slug }}/">{{ tag.title }} ({{ tag.count }})</a>
  </li>
  {% endfor %}
</ul>
```

{% endraw %}

That's it! Just point the link to your [post by tag page](/adding-posts-by-tag-to-eleventy-js/) and it will all work together. Thanks for reading! DM me on [Twitter](https://twitter.com/simpixelated) with any Eleventy.js questions, or just show me what you've built.
