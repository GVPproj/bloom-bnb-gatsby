import React from "react"
import Layout from "../components/Layout"
import * as styles from "../assets/css/404.module.css"

const Error = () => {
  return (
    <Layout>
      <main className={styles.page}>
        <h1>404</h1>
        <p>Page not found.</p>
      </main>
    </Layout>
  )
}

export default Error
