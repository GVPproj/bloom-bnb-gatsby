import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Gallery from "@browniebroke/gatsby-image-gallery"
import { Seo } from "../components/Seo"

const Orchard = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  let sortedImages = images.sort(
    (a, b) =>
      a.full.images.fallback.src.charAt(a.full.images.fallback.src.length - 5) -
      b.full.images.fallback.src.charAt(a.full.images.fallback.src.length - 5)
  )

  return (
    <Layout>
      <main className="suite-page">
        <article>
          <p>The Orchard Suite has a private entrance and accommodates two.</p>
          <p>
            There is a queen-sized bed and a sitting area opening up to a garden
            and private patio.
          </p>
          <p>
            The price is $230.00 per night with a 2 night minimum stay (3 nights
            on long weekends). A $75.00 cleaning fee is added to your total.
          </p>
          <div className="link-buttons">
            <a
              href="https://www.airbnb.ca/rooms/472025?source_impression_id=p3_1676132789_1dYlOGGTYHTUPEnL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Book on AirBnB</button>
            </a>
            <a
              href="mailto:bloom@saltspring.com?subject=Booking through the Bloom Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Book via Email</button>
            </a>
          </div>
        </article>
        <div className="img-gallery">
          <Gallery
            images={sortedImages}
            rowMargin={-11}
            colWidth={50}
            mdColWidth={33}
          />
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query OrchardPics {
    allFile(limit: 9) {
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

export const Head = () => <Seo />
