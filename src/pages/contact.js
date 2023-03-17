import React from "react"
import Layout from "../components/Layout"
import { FaAirbnb, FaFacebookF, FaPinterestP } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../components/Seo"

const Contact = () => {
  return (
    <Layout>
      <main>
        <section className="contact-section">
          <p>
            <span>Bloom Organic B&B</span>
            <br />
            <br />
            <div className="link-buttons lb-contact">
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
            <br />
            <br />
            <strong>Phone: 250-537-0754</strong> <br />
            <br />
            175 North View Place <br />
            Salt Spring Island, BC <br />
            Canada V8K 1A9
          </p>
          <div className="contact-icons">
            <a
              aria-label="Airbnb Link"
              href="https://www.airbnb.ca/rooms/472025?source_impression_id=p3_1676132789_1dYlOGGTYHTUPEnL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaAirbnb className="contact-icon" size={32} />
            </a>
            <a
              aria-label="Facebook Link"
              href="http://www.facebook.com/bloomorganic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="contact-icon" size={32} />
            </a>
            <a
              aria-label="Pinterest Link"
              href="http://pinterest.com/bluehorsebc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterestP className="contact-icon" size={32} />
            </a>
          </div>
        </section>
        <div className="contact-images">
          <StaticImage
            className="contact-img"
            src="../assets/images/Screen-Shot-2021-04-05-at-4.39.14-PM.png"
            alt="SSI Map"
          />
          <StaticImage
            className="contact-img fennel"
            src="../assets/images/fennel-clean.jpg"
            alt="Drawing of blossoming fennel"
          />
        </div>
      </main>
    </Layout>
  )
}

export default Contact

export const Head = () => <Seo />
