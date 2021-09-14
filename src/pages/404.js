import { Link } from "gatsby"
import React from "react"
import * as styles from "../styles/404.module.css"

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h3>404 Error</h3>
      <p>page not found</p>
      <Link to="/">back to home</Link>
    </div>
  )
}
