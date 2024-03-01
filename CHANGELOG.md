# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

---

## 2.3.2 - 2024-03-01

### Added

- blog post: [How to build "missing middle" in Carmel](src/posts/how-to-build-missing-middle-in-carmel.md)
- [/now page](src/now.md)

### Changed

- dependency updates (added pnpm-lock)
- removed Polywork link from homepage
- updates to about page

## 2.3.1 - 2023-01-31

### Added

- blog post: [Hiding drafts and future posts in Eleventy.js](src/posts/adding-posts-by-tag-to-eleventy.md)

## 2.3.0 - 2023-02-19

### Added

- RSS feed [#142](https://github.com/simpixelated/simpixelated.com/pull/142)
- Polywork icon and link on homepage
- link to RSS feed in header

### Changed

- tweaked homepage "hero" text and styling
- switched all Nunjucks templates from html to njk file extension for improved syntax highlighting

## 2.2.0 - 2023-02-18

### Added

- blog post: [Adding posts by tag to Eleventy.js](src/posts/adding-posts-by-tag-to-eleventy.md)
- blog post: [Adding tag list with post count to Eleventy.js](src/posts/adding-tag-list-to-eleventy.md)
- blog post: [After 14 years I still fail live coding interviews](src/posts/failed-live-coding-interview.md)
- blog post: [Custom date formatting in Eleventy.js](src/posts/custom-date-formatting-in-eleventy.md)
- blog post: [Filtering tags within Eleventy.js collections](src/posts/filtering-tags-within-eleventy-collections.md)
- draft and future posts functionality

### Changed

- updated dependencies (11ty 2.0!)

## 2.1.1 - 2023-01-30

### Changed

- fixed dark mode blockquote styling
- removed parent folder for blog posts
- simplified dates for blog posts

## 2.1.0 - 2023-01-29

### Changed

- fixed broken title on tag pages
- switched to separate script step for compiling Sass
- update `postDate` filter to handle different formats
- changed output folder from "public" to "dist"

### Added

- added blog post: [Adding dynamic read time to Eleventy.js](src/posts/adding-read-time-to-eleventy.md)
- added syntax highlighting with Prism.js

## 2.0.0 - 2023-01-16

### Changed

- converted from Gatsby to Eleventy
- styling tweaks
- organized blog posts by year
- text on home, about

## 1.3.3 - 2022-10-09

### Changed

- added publication and interview to [about](/about)
- updated dependencies (minor)
- upgraded theme to [v5.0.1](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/CHANGELOG.md#501)

## 1.3.0

### Added

- added blog post: 35-interviews-with-0-applications

### Changed

- updated dependencies

### Changed

- fixed [#64](https://github.com/simpixelated/simpixelated.com/issues/64)
- fixed [#65](https://github.com/simpixelated/simpixelated.com/issues/65)
- fixed [#25](https://github.com/simpixelated/simpixelated.com/issues/25)
- updated dependencies

## 1.2.1

### Changed

- updated employer in intro (hero text)
- updated dependencies

### Removed

- Google Analytics

## 1.2.0

### Added

- added [Splitbee](https://splitbee.io/) analytics to replace Google

### Changed

- social share card styling
- fixed a few build warnings

## 1.1.0

### Added

- added dynamic social share cards

### Changed

- updated dependencies (Gatsby v4)
- added backlinks in previous blog posts
- ignored false negatives in Lighthouse CI audit

## 1.0.6 - 2021-10-25

### Added

- blog post on salary negotiation

### Changed

- updated dependencies
- updated resume to latest

## 1.0.5 - 2021-09-02

### Added

- added projects to footer
- added my Polywork timeline to header nav
- added About page

### Changed

- updated dependencies
- changed intro text

## 1.0.4 - 2021-06-08

### Changed

- tweaked anchor styles for improved readability
- updated dependencies (Gatsby v3)
- updated location (moved from SD to PNW)

## 1.0.3 - 2021-01-21

### Added

- og banner image

### Changed

- dependency updates
- updated SEO/OG/Twitter meta tags

## 1.0.2 - 2021-01-20

### Added

- conical URLs [#30](https://github.com/simpixelated/simpixelated.com/pull/30)

### Changed

- dependency updates
- updated README

## 1.0.0 - 2020-08-16

### Added

- deployed to [simpixelated.com](http://simpixelated.com) via Netlify!
- added Google Analytics

## 0.1.0 - 2020-08-14

### Added

- migrated to Gatsby.js with redesigned theme based on [@lekoarts/gatsby-theme-minimal-blog](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog)
