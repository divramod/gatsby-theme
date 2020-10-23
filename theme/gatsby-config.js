/**
 * Plugin `gatsby-source-filesystem` will automatically source files from "src/pages"
 * Plugin `gatsby-plugin-page-creator` will automatically create pages from files in "src/pages"
 */
function GatsbyConfig(options) {
  const { syntaxHighlight = true } = options;
  return {
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "posts",
          path: "src/posts",
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: "src/images",
        },
      },
      {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: "src/posts",
        },
      },
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          extensions: [".mdx", ".md"],
          remarkPlugins: [
            require("remark-slug"),
            require("remark-emoji"),
          ],
          defaultLayouts: {
            default: require.resolve("./src/templates/Page.tsx"),
            posts: require.resolve("./src/templates/Post.tsx"),
          },
          gatsbyRemarkPlugins: [
            `gatsby-remark-graphviz`,
            `gatsby-remark-embed-video`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 786,
                backgroundColor: `#ffffff`,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.5rem`,
              },
            },
            `gatsby-remark-autolink-headers`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-smartypants`,
            "gatsby-remark-prismjs",
          ],
        },
      },
      "gatsby-plugin-theme-ui",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
    ],
  };
}
module.exports = GatsbyConfig;
