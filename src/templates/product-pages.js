import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Card, Typography, PageHeader} from "antd";
import layout from "../components/layout";

const { Title } = Typography;

export default ({ data }) => {
 
  return (
    <Layout>
      <div>
        
        {data.allPagesJson.edges.map(({ node }) => (
            <div key={node.id}>
              
                <img src={node.image_url}></img>
                <Title>How do you think {node.page_name} could be improved?</Title>
                You can find out more about {node.page_name} here: 
                <a href={node.website_url}> {node.page_name} Website</a>
                
              </div>
          ))}
          
          <h3>Here are some suggestions from other users:</h3>
            {data.allCardsJson.edges.map(({ node }) => (
            <Card key={node.id}>
                <p>{node.card_text} - Score <b>{node.card_score}</b></p>
            </Card>
          ))}
           
      </div>
    </Layout>
  )
}

export const query = graphql`
query($page_url: String!) {
  allPagesJson(filter: { page_url: { eq: $page_url } }) {
    edges{
      node{
        image_url
        page_name
        website_url
      }
    }
  }

allCardsJson( filter: {page_url_card: { eq: $page_url }, card_text: { ne: ""}}
              sort: {fields:[card_score] order: DESC} 
              )
              {
                edges{
                  node{
                    card_text
                    card_score
                        }
                      }
}
}
`


