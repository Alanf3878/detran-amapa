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
        typeName: "detran",
        fieldName: "detran", 
        url: "https://api.graphcms.com/simple/v1/swapi",
      },
    },
  ],
};
