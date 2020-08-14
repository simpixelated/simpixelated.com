This is a work in progress rebuild of my blog at simpixelated.com. I am in the process of converting it from WordPress to a JavaScript based static site generator using React.js, Gatsby.js, and Markdown.

### History

Like many other developers struggling to find time to work on side projects, I've started but never finished refactoring my blog from WordPress to just about anything else, many times over the years. Here's just a few of the frameworks I've tried out:

- React.js
- Gatsby 1.0
- Next.js 5.0
- headless WordPress with custom static export
- now back to Gatsby 2.24

Current Tech Stack:

- [Gatsby.js](https://www.gatsbyjs.com/docs/)
- GitHub
- [Netlify](https://docs.netlify.com/#get-started)
- [wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown)
- [@lekoarts/gatsby-theme-minimal-blog](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog)
- [Theme UI](https://theme-ui.com/home)

### Roadmap

- [x] static export - no server-side code in production (Gatsby)
- [x] create posts in Markdown
- [x] CI/CD for layout and content changes (Netlify)
- [x] source code + content all in Git (GitHub)
- [x] add a changelog
- [x] add git commit hook for prettier
- [x] update license to match package.json
- [x] display version in footer, link to changelog/source
- [x] remove about link
- [x] update footer:
  - [x] switch copyright to "Jordan Kohl"
  - [x] update theme credit
- [ ] improve on [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsimpixelated.com): 50
- [ ] improve [Webpagetest](https://webpagetest.org/result/200813_Z5_44a758e1f23a43624841b0d687f06c09/):
  - [ ] [F security score](https://snyk.io/test/website-scanner/?test=200813_Z5_44a758e1f23a43624841b0d687f06c09&utm_medium=referral&utm_source=webpagetest&utm_campaign=website-scanner)
  - [ ] [F cache static assets](https://webpagetest.org/performance_optimization.php?test=200813_Z5_44a758e1f23a43624841b0d687f06c09&run=1#cache_static_content)
- [ ] setup [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md)
- [ ] improve Lighthouse: 48
- [ ] eliminate hosting fees
- [ ] custom domain
- [ ] SSL
- [ ] update hero:
  - [ ] add social media icon links: Twitter, Flickr, GitHub, LinkedIn
- [x] add resume to top nav
- [ ] migrate cover images
- [ ] convert resume to HTML with print formatting for easy PDF export (similar to [David Clark](http://davidtheclark.github.io/resume/))
- [ ] "borrow" some juicy animations from [Bolby theme](https://pxltheme.com/html/bolby/demo/index-3-dark.html), [jnnt.co](http://jntt.co/about.html)
- [ ] "borrow" some color palettes from [DF](http://danielfiller.com/blog/visceral-contextual-transitions/)
- [ ] add Ghost Inspector GitHub action
- [ ] add email link
- [ ] add Google analytics
- [ ] add 404 page
- [ ] default to dark theme

## License

The content of this project itself is licensed under the [Creative Commons Attribution 3.0 Unported license](https://creativecommons.org/licenses/by/3.0/), and the underlying source code used to format and display that content is licensed under the [MIT license](LICENSE.md).
