import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import ImageGallery from "../components/ImageGallery"

const Suite = () => {
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
          <ImageGallery />
        </div>
      </main>
    </Layout>
  )
}

export default Suite
