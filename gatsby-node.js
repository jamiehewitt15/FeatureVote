const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
        allPagesJson {
          edges {
            node {   
             page_url
            }
          }
        } 
        
      }
    `
  ).then(result => {    
      result.data.allPagesJson.edges.forEach(({ node }) => {
        createPage({
            path: node.page_url,
            component: path.resolve(`./src/templates/product-pages.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                page_url: node.page_url,
      },
    })
  })
    })
  }