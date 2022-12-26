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

## Projects

- [Twitter Flickr Bot](https://github.com/simpixelated/robirb) - Twitter bot that will post photos from Flickr (written in Node.js)
- [My LEGO MOCs on Flickr](https://www.flickr.com/photos/38375540@N08/) - MOC = My Own Creation and LEGO was my pandemic hobby
- [Ghost Inspector WordPress Plugin](https://github.com/ghost-inspector/wordpress-plugin) - displays the status of your QA tests in your admin
- [Ride Safe San Diego](https://simpixelated.github.io/san-diego-downtown-mobility-plan/) - advocacy for improving bicycle safety in the city of San Diego
- [SD Dev List](https://sd-dev-list.netlify.app/) - a list of new developments planned or under construction in downtown San Diego
