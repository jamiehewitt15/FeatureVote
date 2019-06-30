

module.exports = {
  
  siteMetadata: {
    title: `AJ1`,
  },
  plugins: [
    
    
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-antd',
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },
    
  ],
}