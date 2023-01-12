const sass = require("sass")
const config = require("./package.json")
const { DateTime } = require("luxon")
const Image = require("@11ty/eleventy-img")

// inspired by https://github.com/11ty/eleventy/issues/927#issuecomment-627703544
const getAllTags = collections => {
  const tags = collections
    .getAll()
    .filter(
      item => !!item.data.tags && !["post", "all"].includes(item.data.tags)
    )
    .reduce((tags, item) => tags.concat(item.data.tags), [])
  return Array.from(new Set(tags))
    .sort()
    .map(tag => ({
      title: tag,
      count: collections.getFilteredByTag(tag).length,
    }))
}

// inspired by https://github.com/JKC-Codes/eleventy-plugin-time-to-read
const getPlainText = content => {
  const html = content.templateContent || content
  if (typeof html !== "string") {
    throw new Error("Time-to-read's input must be a string or template")
  }

  // Remove html
  const htmlTags = String.raw`<\/?[a-z0-9]+\b[^>]*>`
  //Regex = '<!--' + the minimal amount of 0 or more characters + '-->'
  const htmlComments = String.raw`<!--[^]*?-->`
  // Regex = htmlTags or htmlComments
  return html.replace(
    new RegExp(String.raw`${htmlTags}|${htmlComments}`, "gi"),
    ""
  )
}
const getReadTime = content => {
  const rawText = getPlainText(content)
  const wpm = 265 // based on medium https://help.medium.com/hc/en-us/articles/214991667-Read-time
  const words = rawText.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}

module.exports = function (eleventyConfig) {
  // Creates the extension for use
}

module.exports = function (eleventyConfig) {
  // css loading
  eleventyConfig.addTemplateFormats("scss")
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css", // optional, default: "html"

    // `compile` is called once per .scss file in the input directory
    compile: async function (inputContent) {
      let result = sass.compileString(inputContent)

      // This is the render function, `data` is the full data cascade
      return async data => {
        return result.css
      }
    },
  })

  // js/image loading
  eleventyConfig.addPassthroughCopy("./src/global.js")
  eleventyConfig.addPassthroughCopy("./src/static")
  eleventyConfig.addNunjucksAsyncShortcode("svgIcon", async filename => {
    const metadata = await Image(`./src/_includes/assets/${filename}`, {
      formats: ["svg"],
      dryRun: true,
    })
    return metadata.svg[0].buffer.toString()
  })

  // template helpers
  eleventyConfig.addCollection("tagList", getAllTags)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)
  eleventyConfig.addShortcode("version", () => config.version)
  eleventyConfig.addFilter("limit", (array, limit) => array.slice(0, limit))
  eleventyConfig.addFilter("timeToRead", getReadTime)
  eleventyConfig.addFilter("postDate", dateString =>
    DateTime.fromISO(dateString).toLocaleString(DateTime.DATE_MED)
  )
  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  }
}
