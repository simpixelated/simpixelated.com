---
title: Home
layout: base.html
---

# Hi, I'm Jordan! <span role="img" aria-label="waving hello">👋</span>

I'm a developer currently living in the Pacific Northwest, specializing in JavaScript, HTML, and CSS. I currently work for [Segment](https://segment.com). I'm passionate about React.js, improving software development, fair compensation, and building an equitable space in tech. You can read some of my opinions below.

[TODO: social links]

## Latest Posts

<ul>
  {% for post in collections.posts | reverse | limit(5) %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a> <span>{{ post.data.date }}</span></li>
  {% endfor %}
</ul>

[See all posts](/blog)

[TODO: bottom]
