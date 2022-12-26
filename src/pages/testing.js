import React from "react"
import { graphql } from "gatsby"
import FetchData from "../examples/testStaticQuery"

// PAGES QUERY

const testing = ({ data }) => {
  const author = data.site.siteMetadata.author
  return (
    <div>
      <p>Author: {author}</p>
      <FetchData />
    </div>
  )
}
export const data = graphql`
  {
    site {
      siteMetadata {
        author
        complexData {
          age
          name
        }
        person {
          age
          name
        }
        description
        simpleData
        title
      }
    }
  }
`

export default testing
