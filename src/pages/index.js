import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({data}) {
  console.log(data);
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return (
    <Layout>
      <div className={styles.container}>
      <div className={styles.homeContainer}>
        <h1>Home !</h1>
        <p>this is home page</p>
        <Link to="/projects" className={styles.btn}>My Portfolio Projects</Link>
      </div>
      <GatsbyImage image={image} alt="banner" />
      <div>
      </div>
      </div>
    </Layout>
  )
}
//image graphql
export const query = graphql`
query Banner {
  file(relativePath: {eq: "logo.png"}) {
    childImageSharp {
      gatsbyImageData(width:400,placeholder: BLURRED, formats: AUTO)
    }
  }
}
`
