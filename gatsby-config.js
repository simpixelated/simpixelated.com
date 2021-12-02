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
    siteTitleAlt: `Software Engineer Jordan Kohl`,
    // Can be used for e.g. JSONLD
    siteHeadline: `JavaScript software development tips, strategies for salary negotiation, and other helpful advice for navigating software as a career.`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://simpixelated.com`,
    // Used for SEO
    siteDescription: `JavaScript software development tips, strategies for salary negotiation, and other helpful advice for navigating software as a career.`,
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://simpixelated.com`,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-react-social-cards`,
      options: {
        query: `
          {
            allPost {
              nodes {
                slug,
                title,
                timeToRead,
                date,
              }
            }
          }
        `,
        queryToPages: result => {
          return result.data.allPost.nodes.map(post => {
            const slugWithoutSlashes = post.slug.replace(/\//g, "")
            return {
              slug: `/${slugWithoutSlashes}`,
              pageContext: post,
            }
          })
        },
        component: require.resolve("./src/components/social-card.js"),
        imageFolder: "static/banners",
      },
    },
  ],
  flags: {
    FAST_DEV: true,
  },
}
