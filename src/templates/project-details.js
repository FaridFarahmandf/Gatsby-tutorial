import React from 'react'
import Layout from '../components/Layout'
import {GatsbyImage , getImage} from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import * as styles from '../styles/project-details.module.css'
export default function ProjectDetails({data}) {
    const { html } = data.markdownRemark ;
    const {title , stack } = data.markdownRemark.frontmatter ;
    const image = getImage(data.markdownRemark.frontmatter.featuredImg.childImageSharp.gatsbyImageData)
    return (
        <Layout>
            <div className={styles.detailsContainer}>
            <hr/>
            <h3>{title}</h3>
            <h4>{stack}</h4>
            <div>
                <GatsbyImage image={image} alt={title}/>
            </div>
            <div dangerouslySetInnerHTML={{__html:html}} className={styles.htmlPart}/>
            <hr/>
            </div>
        </Layout>
    )
}

//graphql 
export const query = graphql`
query Details($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
        featuredImg {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 1200, formats: AUTO)
          }
        }
      }
    }
  }
  
`
