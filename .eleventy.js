// FIX for https://github.com/11ty/eleventy-dependency-tree-esm/issues/2
import { createRequire } from "node:module"
const require = createRequire(import.meta.url)
// import packageJSON from "./package.json" assert { type: "json"}
// import site from "./src/_data/site.json" assert { type: "json"}
const packageJSON = require("./package.json")
const site = require("./src/_data/site.json")

import { DateTime } from "luxon"
import Image, { eleventyImageTransformPlugin } from "@11ty/eleventy-img"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import { feedPlugin } from "@11ty/eleventy-plugin-rss"

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
    "",
  )
}
const getReadTime = content => {
  const rawText = getPlainText(content)
  const wpm = 265 // based on medium https://help.medium.com/hc/en-us/articles/214991667-Read-time
  const words = rawText.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}

export default function (eleventyConfig) {
  // css loading
  eleventyConfig.setBrowserSyncConfig({
    files: `./${config.dir.output}/css/**/*.css`,
  })

  // js/image loading
  eleventyConfig.addPassthroughCopy(`./${config.dir.input}/global.js`)
  eleventyConfig.addPassthroughCopy(`./${config.dir.input}/static`)
  // only use for inling svgs
  eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt, sizes) => {
    const metadata = await Image(`./${config.dir.input}/assets/${src}`, {
      outputDir: `./${config.dir.output}/assets/`,
      urlPath: "/assets/",
      formats: ["svg"],
      widths: ["auto"],
      dryRun: src.endsWith(".svg"),
    })

    const imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    }

    if (metadata.svg) {
      return metadata.svg[0].buffer.toString()
    }

    // You bet we throw an error on a missing alt (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes)
  })
  // new recommended image config method
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: "html",

    // optional, output image formats
    formats: ["auto"],

    // optional, output image widths
    // widths: ["auto"],

    // optional, attributes assigned on <img> override these values.
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  })

  // custom collections
  eleventyConfig.addCollection("tagList", getAllTags)

  // template helpers (shortcodes and filters)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)
  eleventyConfig.addShortcode("version", () => packageJSON.version)
  eleventyConfig.addFilter("limit", (array, limit) => array.slice(0, limit))
  eleventyConfig.addFilter("timeToRead", getReadTime)
  eleventyConfig.addFilter("postDate", date =>
    DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED),
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
    () => data => (shouldHide(data) ? false : data.permalink),
  )
  // When `eleventyExcludeFromCollections` is true, the file is not included in any collections
  eleventyConfig.addGlobalData(
    "eleventyComputed.eleventyExcludeFromCollections",
    () => data =>
      shouldHide(data) ? true : data.eleventyExcludeFromCollections,
  )
  eleventyConfig.on("eleventy.before", ({ runMode }) => {
    // Set the environment variable
    if (runMode === "serve" || runMode === "watch") {
      process.env.BUILD_DRAFTS = true
    }
  })

  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/feed.xml",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 10, // 0 means no limit
    },
    metadata: {
      language: "en",
      title: site.name,
      subtitle: site.summary,
      base: site.url,
      author: {
        name: site.author.name,
      },
    },
  })

  return config
}
