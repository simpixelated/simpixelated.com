This is a work in progress rebuild of my blog at simpixelated.com. I am in the process of converting it from Wordpress to a JavaScript based static site generator using React.js, Next.js, and Markdown.

### History

Looked at a bunch of different options. Started with Gatsby, switched to Next.js, looked into using WP REST API, currently landing on static export with no API. Was not able to get static export working. I think it's a pipe dream without manually creating the html files first. Next.js static export is fairly limited that way, because it doesn't really support dynamic pages out of the box.

Performance:
- improve on https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsimpixelated.com
- 57 (mobile) / 81 (desktop)

References:
- https://github.com/jxson/front-matter
- https://github.com/fridays/next-routes
- https://expressjs.com/en/guide/routing.html
- https://medium.com/@antonioval/making-array-iteration-easy-when-using-async-await-6315c3225838
- https://github.com/jaketrent/daily-bread/blob/master/server/repo.js
- https://jaketrent.com/post/serve-markdown-nextjs-server/
- https://github.com/elmasse/nextein
- https://github.com/tscanlin/next-blog
- https://github.com/probablyup/markdown-to-jsx
- https://timber.io/blog/building-a-blog-with-next-js/
- https://github.com/expressjs/serve-favicon

### ROADMAP

- [x] create dynamic slug to .md file route
- [x] display all posts on homepage
- [x] insert slug into exported .md
- [x] link to each post by slug
- [x] fetch single post by slug
- [x] sort by date
- [x] filter drafts
- [x] dynamic <title>
- [x] display date next to blog post title
- [ ] figure out how to export static from markdown -- would likely require [dynamically creating pages](https://github.com/zeit/next.js/blob/canary/examples/with-static-export/next.config.js)
- [ ] pick specific posts to save
- [ ] filter requests for files with extensions
- [ ] recreate styles from existing WP template
- ~~enable search~~
- [ ] build contact page / form
- [ ] build resume page
- [ ] Typescript
- [ ] tslint
- [ ] unit tests
- [ ] publish baseline similar to next-blog
- [ ] fork/push/PR wordpress-to-markdown changes
- [ ] resume (e.g. http://davidtheclark.github.io/resume/)
- [ ] [deploy to GitHub pages](https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages)