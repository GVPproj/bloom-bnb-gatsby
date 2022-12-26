/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/bloom-bnb-gatsby",
  siteMetadata: {
    title: "Bloom Organic B&B",
    description: "An organic bed and breakfast on Salt Spring Island",
    author: "grahamvanpelt.dev",
    person: { name: "John", age: 32 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "John", age: 32 },
      { name: "Susan", age: 21 },
      { name: "Brad", age: 50 },
    ],
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
  ],
}
