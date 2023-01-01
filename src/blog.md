---
title: Blog
layout: base.html
---

<p><a href="/tag">View all tags</a></p>
<ul>
  {% for post in collections.posts | reverse %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a><br />
    <span>{{ post.data.date }}</span> - {% include "tag-list.html" %}
  </li>
  {% endfor %}
</ul>
