module.exports = () => {
  const settings = {
    layout: "post",
    permalink: "/{{ title | slugify }}/",
    tags: "posts",
    eleventyComputed: {
      socialImage: data =>
        `${data.site.url}/static/banners/${data.permalink}-social-card.png`,
    },
  }

  if (process.env.NODE_ENV == "social") {
    settings.layout = "post-social"
  }

  return settings
}
