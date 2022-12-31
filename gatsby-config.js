/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  // pathPrefix: "/bloom-bnb-gatsby",
  siteMetadata: {
    title: "Bloom Organic B&B",
    description: "An organic Bed and Breakfast located on Salt Spring Island",
    author: "grahamvanpelt.dev",
    image: `/favicon.ico`,
    siteUrl: `https://www.bloomorganicbandb.com`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `suite-photos`,
        path: `${__dirname}/src/assets/images/suite-photos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonial-images`,
        path: `${__dirname}/src/assets/images/testimonial-images`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // ssr: true,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
  ],
}
