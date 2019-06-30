import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Button, PageHeader } from 'antd';

  export default ({ children }) => {
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )
    return (
      <div >
       <PageHeader onBack={() => null} title={data.site.siteMetadata.title} subTitle="Suggest and vote on new features" /> 
      
          <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            {children}
          </div>
          
    </div>
    )
  }

