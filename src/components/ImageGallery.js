import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "@browniebroke/gatsby-image-gallery"

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    query ImagesForGallery {
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
  `)

  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  let sortedImages = images.sort(
    (a, b) =>
      a.full.images.fallback.src.charAt(a.full.images.fallback.src.length - 5) -
      b.full.images.fallback.src.charAt(a.full.images.fallback.src.length - 5)
  )

  return <Gallery rowMargin={-11} mdColWidth={33} images={sortedImages} />
}

export default ImageGallery
