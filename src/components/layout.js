import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Card, PageHeader } from 'antd';

const back = <Link></Link>

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
      <div style={{ background: "#F7F9FD" }}>
       <PageHeader onBack={() => window.history.back()} title={data.site.siteMetadata.title} subTitle="Suggest and vote on new features" /> 
      
          <Card style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            {children}
          </Card>
          
          
    </div>
    )
  }

