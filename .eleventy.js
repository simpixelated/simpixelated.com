const config = require("./package.json")
const { DateTime } = require("luxon")
const Image = require("@11ty/eleventy-img")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

// inspired by https://github.com/11ty/eleventy/issues/927#issuecomment-627703544
const getAllTags = collections => {
  const tags = collections
    .getAll()
    .reduce((tags, item) => tags.concat(item.data.tags), [])
    .filter(tag => !!tag && !["posts", "all"].includes(tag))
    .sort()
  return Array.from(new Set(tags)).map(tag => ({
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
  // css loading
  eleventyConfig.setBrowserSyncConfig({
    files: "./dist/css/**/*.css",
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

  // custom collections
  eleventyConfig.addCollection("tagList", getAllTags)
  // thanks to https://github.com/11ty/eleventy/issues/1284#issuecomment-1026679407
  eleventyConfig.addCollection("postsByYear", collection => {
    const posts = collection.getFilteredByTag("posts").reverse()
    const years = posts.map(post => post.date.getFullYear())
    const uniqueYears = [...new Set(years)]
    const postsByYear = uniqueYears.reduce((prev, year) => {
      const filteredPosts = posts.filter(
        post => post.date.getFullYear() === year
      )
      return [...prev, [year, filteredPosts]]
    }, [])
    return postsByYear
  })

  // template helpers (shortcodes and filters)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)
  eleventyConfig.addShortcode("version", () => config.version)
  eleventyConfig.addFilter("limit", (array, limit) => array.slice(0, limit))
  eleventyConfig.addFilter("timeToRead", getReadTime)
  eleventyConfig.addFilter("postDate", date => {
    if (date && typeof date.getMonth === "function") {
      return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED)
    }
    if (typeof date === "object") {
      return DateTime.fromObject(date).toLocaleString(DateTime.DATE_MED)
    }
    return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)
  })
  eleventyConfig.addFilter("exclude", (collection, stringToFilter) => {
    if (!stringToFilter) {
      return collection
    }
    return (collection ?? []).filter(item => item !== stringToFilter)
  })

  eleventyConfig.addPlugin(syntaxHighlight)

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  }
}
