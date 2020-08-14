This is a work in progress rebuild of my blog at simpixelated.com. I am in the process of converting it from WordPress to a JavaScript based static site generator using React.js, Gatsby.js, and Markdown.

### History

Like many other developers struggling to find time to work on side projects, I've started but never finished refactoring my blog from WordPress to just about anything else, many times over the years. Here's just a few of the frameworks I've tried out:
- React.js
- Gatsby 1.0
- Next.js 5.0
- headless WordPress with custom static export
- now back to Gatsby 2.24

Goals:
- improve on https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsimpixelated.com: 57 (mobile) / 81 (desktop)
- improve [Webpagetest](https://webpagetest.org/result/200813_Z5_44a758e1f23a43624841b0d687f06c09/):
 - [F security score](https://snyk.io/test/website-scanner/?test=200813_Z5_44a758e1f23a43624841b0d687f06c09&utm_medium=referral&utm_source=webpagetest&utm_campaign=website-scanner)
 - [F cache static assets](https://webpagetest.org/performance_optimization.php?test=200813_Z5_44a758e1f23a43624841b0d687f06c09&run=1#cache_static_content)
- improve [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsimpixelated.com): 48
- static export (no server-side code in production)
- create posts in Markdown
- CI/CD for layout and content changes
- source code + content all in Git
- eliminate hosting fees
- maintain SSL, custom domain

Current Tech Stack:
- gatsby.js
- GitHub
- Netlify
- [wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown)
- [@lekoarts/gatsby-theme-minimal-blog](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog)

### Roadmap

- [ ] update footer:
  - [ ] switch copyright to "Jordan Kohl"
  - [ ] update theme credit
- [ ] update hero:
  - [ ] add social media icon links: Twitter, Flickr, GitHub, LinkedIn
- [ ] add resume to top nav
- [ ] remove about link
- [ ] resume (e.g. http://davidtheclark.github.io/resume/)
- [ ] migrate cover images
- [ ] convert resume to HTML with print formatting for easy PDF export (similar to [David Clark](http://davidtheclark.github.io/resume/))
- [ ] "borrow" some juicy animations from [Bolby theme](https://pxltheme.com/html/bolby/demo/index-3-dark.html), [jnnt.co](http://jntt.co/about.html)
- [ ] "borrow" some color palettes from [DF](http://danielfiller.com/blog/visceral-contextual-transitions/)
- [ ] setup [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md)
- [ ] add contact info (email link, twitter)
- [ ] add a changelog
- [ ] add git commit hook for prettier
- [ ] update license to match package.json
- [ ] display version in footer, link to changelog/source
- [ ] add Google analytics
- [ ] add Ghost Inspector GitHub action
- [ ] add 404 page
- [ ] default to dark theme
