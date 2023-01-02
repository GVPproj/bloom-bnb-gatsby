import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo.jsx"

export default function Home() {
  return (
    <Layout>
      <main className="home-page">
        <article>
          <h4>Salt Spring Organic B&B at Blue Horse Gallery</h4>
          <p>
            Freshness, light and elegance created by your hosts, the artists
            Anna Gustafson and Paul Burke. You will feel instantly at home.
          </p>
          <p>
            Just minutes away from kayaking and hiking on invigorating forest
            and ocean shoreline trails – escape into nature.{" "}
          </p>
          <p>
            Relaxing here at Bloom Organic B&B or exploring Salt Spring Island,
            your spirit will be nurtured and refreshed. Bloom has one private
            suite, ‘Orchard’, which is simple, elegant and nourishing.
          </p>
        </article>
        <a href="https://www.airbnb.ca/rooms/595036280889281279?preview_for_ml=true&source_impression_id=p3_1648773096_3d7QSntBFe%2BNLDKy">
          <button>Book on AirBnB</button>
        </a>
        <StaticImage
          src="../assets/images/suite-photos/suite3.jpg"
          alt="Exterior photo of beautiful suite"
          className="img-hero"
        />
      </main>
    </Layout>
  )
}

export const Head = () => <Seo />
