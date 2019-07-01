

module.exports = {
  
  siteMetadata: {
    title: `AJ1`,
  },
  plugins: [
    
    'gatsby-plugin-antd',
    `gatsby-transformer-json`,
    {
      
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },
    
  ],
}