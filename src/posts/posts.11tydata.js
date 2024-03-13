// no arrow function because it breaks "this"
// https://www.11ty.dev/docs/languages/javascript/#warning-about-arrow-functions
module.exports = function () {
  const settings = {
    layout: "post",
    permalink: "/{{ title | slugify }}/",
    tags: "posts",
    eleventyComputed: {
      socialImage: function (data) {
        return `${data.site.url}/static/banners/${this.slugify(
          data.title
        )}-social-card.png`
      },
      year: data => new Date(data.date).getFullYear(),
    },
  }

  if (process.env.NODE_ENV == "social") {
    settings.layout = "post-social"
  }

  return settings
}
