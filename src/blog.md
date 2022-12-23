---
title: Blog
layout: base.html
---

<ul>
  {% for post in collections.posts | reverse %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a><br />
    <span>{{ post.data.date }}</span> - {% include "tag-list.html" %}
  </li>
  {% endfor %}
</ul>
