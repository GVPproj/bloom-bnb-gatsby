import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../components/Seo"

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
          <p>
            The price is $230.00 per night with a 2 night minimum stay (3 nights
            on long weekends). A $75.00 cleaning fee is added to your total.
          </p>
        </article>
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
        <div>
          <StaticImage
            src="../assets/images/suite-photos/suite3.jpg"
            alt="Exterior photo of beautiful suite"
            className="img-hero"
          />
        </div>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo />
