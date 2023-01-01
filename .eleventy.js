const config = require("./package.json")

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
  eleventyConfig.addPassthroughCopy("./src/css")
  eleventyConfig.addWatchTarget("./src/css/")
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)
  eleventyConfig.addShortcode("version", () => config.version)
  eleventyConfig.addFilter("limit", (array, limit) => array.slice(0, limit))
  eleventyConfig.addFilter("timeToRead", getReadTime)
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
