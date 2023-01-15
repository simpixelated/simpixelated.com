module.exports = {
  eleventyComputed: {
    socialImage: data => {
      return `/static/banners/${data.title
        .replaceAll(" ", "-")
        .toLowerCase()}-social-card.png`
    },
  },
}
