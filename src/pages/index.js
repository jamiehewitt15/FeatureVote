import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  
  return (

        <div>
          <h1>
            Here is a list of pages created on this site
          </h1>
          <h4>Pages:</h4>
          {data.allPagesJson.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.page_url}>
                <h3                >
                  {node.page_name}{" "} 
                </h3>
                
              </Link> 
            </div>
          ))}
        </div>

    )
  }
  

export const query = graphql`
query 
{
    allPagesJson {
      edges {
        node {
            page_url
            page_name
          
        }
      }
    } 
    
  }
`