module.exports = {
  siteMetadata: {
    title: "demo",
    description: `Gatsby theme divramod demo site. Built by Arvid Petermann (@divramod)`,
    links: [
      { label: 'cv', path: '/cv'},
      { label: 'blog', path: '/blog'},
    ]
  },
  pathPrefix: "/gatsby-theme-ts-mdx",
  plugins: [
    {
      resolve: "@divramod/gatsby-theme-ts-mdx",
    },
  ],
};
