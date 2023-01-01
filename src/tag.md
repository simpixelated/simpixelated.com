---
title: Tags
layout: base.html
---

<p><a href="/blog">View all posts</a></p>
<ul>
  {% for tag in collections.tagList %}
  <li>
    <a href="/tag/{{ tag.title | slug }}/">{{ tag.title }} ({{ tag.count }})</a>
  </li>
  {% endfor %}
</ul>
