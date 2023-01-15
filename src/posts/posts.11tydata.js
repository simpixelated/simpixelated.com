module.exports = {
  eleventyComputed: {
    socialImage: data => {
      return `${data.site.url}/static/banners/${data.title
        .replaceAll(" ", "-")
        .toLowerCase()}-social-card.png`
    },
  },
}
