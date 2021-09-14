import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/portofolio.module.css'
import {GatsbyImage} from "gatsby-plugin-image"

export default function index({data}) {
    console.log(data);
    const allProject = data.projects.nodes ; 
    const contact = data.contact.siteMetadata.contact ;
    return (
        <Layout>
            <div className={styles.portofolio}>
                <h1>Portofolio</h1>
                <p>these are the websites were created by me</p>
                <div className={styles.projects}>
                    {allProject.map(project => (
                      <Link to={`/projects/${project.frontmatter.slug}`} key={project.id} className={styles.cardProject}>
                              <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt={project.frontmatter.stack}/>
                              <h3>{project.frontmatter.title}</h3>
                              <p>{project.frontmatter.stack}</p>
                            </Link>
                    ))}
                </div>
                <p>Do you like my projects ? Email me for order your website : {contact}</p>
            </div>
        </Layout>
    )
}
// export graphql 
export const projects = graphql`
query allProjects {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData(width:300, formats: AUTO, placeholder: BLURRED)
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
  
`