import { Link , graphql ,useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    const data = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    // console.log(data);
    const {title} = data.site.siteMetadata ;
    return (
        <nav className="container">
            <h1>{title}</h1>
            <div className="navbar">
                <Link to="/" activeClassName="active">Home</Link>
                <Link to="/about" activeClassName="active">About</Link>
                <Link to="/projects" activeClassName="active">Portofolio</Link>
            </div>
        </nav>
    )
}
