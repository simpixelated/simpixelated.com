---
title: Home
layout: base.html
---

<section class="hero">
  <h1>Hi, I'm Jordan! <span role="img" aria-label="waving hello">👋</span></h1>
  <p>I'm a JavaScript developer living in the Pacific Northwest. I currently work for <a href="https://twilio.com">Twilio</a>. I'm passionate about remote work, helping people get better at interviewing, and salary negotation. You can read some of my opinions below.</p>
</section>

<ul class="social">
  <li><a href="https://twitter.com/simpixelated">Twitter</a></li>
  <li><a href="https://linkedin.com/in/jordankohl">LinkedIn</a></li>
  <li><a href="https://github.com/simpixelated">GitHub</a></li>
  <li><a href="https://flickr.com/people/38375540@N08/">Flickr</a></li>
</ul>

<section>
  <header>
    <h2>Latest Posts</h2>
    <a href="/blog">See all posts</a>
  </header>

  <ul class="blog-list">
  {% for post in collections.posts | reverse | limit(3) %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a><br />
    <time>{{ post.data.date | postDate }}</time>
  </li>
  {% endfor %}
  </ul>
</section>

## Projects

- [Twitter Flickr Bot](https://github.com/simpixelated/robirb) - Twitter bot that will post photos from Flickr (written in Node.js)
- [My LEGO MOCs on Flickr](https://www.flickr.com/photos/38375540@N08/) - MOC = My Own Creation and LEGO was my pandemic hobby
- [Ghost Inspector WordPress Plugin](https://github.com/ghost-inspector/wordpress-plugin) - displays the status of your QA tests in your admin
- [Ride Safe San Diego](https://simpixelated.github.io/san-diego-downtown-mobility-plan/) - advocacy for improving bicycle safety in the city of San Diego
- [SD Dev List](https://sd-dev-list.netlify.app/) - a list of new developments planned or under construction in downtown San Diego
