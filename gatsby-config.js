/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `simpixelated.com`,
    // Default title of the page
    siteTitleAlt: `Front End Developer Jordan Kohl`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Thoughts on urbanism, software engineering, management, and life by Jordan Kohl.`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://simpixelated.com`,
    // Used for SEO
    siteDescription: `Thoughts on urbanism, software engineering, management, and life by Jordan Kohl.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@simpixelated`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        showLineNumbers: false,
        formatString: "YYYY-MM-DD",
        feedTitle: "simpixelated.com",
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/simpixelated`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/jordankohl/`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
