import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Gallery from "@browniebroke/gatsby-image-gallery"

const Orchard = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  //   let sortedImages = images.sort(
  //     (a, b) =>
  //       a.full.images.fallback.src.charAt(a.full.images.fallback.src.length - 5) -
  //       b.full.images.fallback.src.charAt(a.full.images.fallback.src.length - 5)
  //   )

  return (
    <Layout>
      <main className="suite-page">
        <article>
          <p>The Orchard Suite has a private entrance and accommodates two.</p>
          <p>
            There is a queen-sized bed and a sitting area opening up to a garden
            and private patio.
          </p>
        </article>
        <a href="https://www.airbnb.ca/rooms/595036280889281279?preview_for_ml=true&source_impression_id=p3_1648773096_3d7QSntBFe%2BNLDKy">
          <button>Book on AirBnB</button>
        </a>
        <div className="img-gallery">
          <Gallery images={images} rowMargin={-11} mdColWidth={33} />
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query OrchardPics {
    allFile {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 300
              height: 300
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default Orchard
