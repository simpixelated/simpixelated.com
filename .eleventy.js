const package = require("./package.json")
const { DateTime } = require("luxon")
const Image = require("@11ty/eleventy-img")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const pluginRss = require("@11ty/eleventy-plugin-rss")

const config = {
  dir: {
    input: "src",
    output: "dist",
  },
  markdownTemplateEngine: "njk",
  dataTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
}

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
    files: `./${config.dir.output}/css/**/*.css`,
  })

  // js/image loading
  eleventyConfig.addPassthroughCopy(`./${config.dir.input}/global.js`)
  eleventyConfig.addPassthroughCopy(`./${config.dir.input}/static`)
  eleventyConfig.addNunjucksAsyncShortcode("svgIcon", async filename => {
    const metadata = await Image(
      `./${config.dir.input}/_includes/assets/${filename}`,
      {
        formats: ["svg"],
        dryRun: true,
      }
    )
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
  eleventyConfig.addShortcode("version", () => package.version)
  eleventyConfig.addFilter("limit", (array, limit) => array.slice(0, limit))
  eleventyConfig.addFilter("timeToRead", getReadTime)
  eleventyConfig.addFilter("postDate", date =>
    DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED)
  )
  eleventyConfig.addFilter("exclude", (collection, stringToFilter) => {
    if (!stringToFilter) {
      return collection
    }
    return (collection ?? []).filter(item => item !== stringToFilter)
  })

  const shouldHide = ({ date, draft }) => {
    // Always skip during non-watch/serve builds
    if (process.env.BUILD_DRAFTS) {
      return false
    }
    // hide drafts and future posts
    return draft || (date && date.getTime() > Date.now())
  }
  // When `permalink` is false, the file is not written to disk
  eleventyConfig.addGlobalData(
    "eleventyComputed.permalink",
    () => data => shouldHide(data) ? false : data.permalink
  )
  // When `eleventyExcludeFromCollections` is true, the file is not included in any collections
  eleventyConfig.addGlobalData(
    "eleventyComputed.eleventyExcludeFromCollections",
    () => data => shouldHide(data) ? true : data.eleventyExcludeFromCollections
  )
  eleventyConfig.on("eleventy.before", ({ runMode }) => {
    // Set the environment variable
    if (runMode === "serve" || runMode === "watch") {
      process.env.BUILD_DRAFTS = true
    }
  })

  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(pluginRss)

  return config
}
