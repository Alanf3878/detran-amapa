module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "detran",
  },
  plugins: ["gatsby-plugin-styled-components",
            "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "detrandata",
        fieldName: "detrandata", 
        url: "https://api-us-east-1.graphcms.com/v2/ckwdl6iv605hl01z379ev4dyg/master",
      },
    },
  ],
};
