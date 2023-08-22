import type { GatsbyConfig } from "gatsby";

import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV}` });

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: `Ternär Music Technology`,
    siteUrl: `https://www.ternar.tech/`,
    description: `Software Instruments and Effects straight from Europe's heart of electronic music, Berlin.`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/dynamic`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gumroad-images`,
        path: `${__dirname}/src/images/dynamic/gumroad`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bandcamp-images`,
        path: `${__dirname}/src/images/dynamic/bandcamp`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sound`,
        path: `${__dirname}/src/sound/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
        // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
        fastHash: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `314278890`,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
  ],
};

export default gatsbyConfig;
