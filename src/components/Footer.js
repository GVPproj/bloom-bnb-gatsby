import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <section className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} <strong>Bloom Organic B&B</strong>
            <br />
            Photos:
            <a
              href="https://www.sophiaburke.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Sophia Burke
            </a>
          </p>
          <p>
            Website:
            <a
              href="https://www.grahamvanpelt.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              grahamvanpelt.dev
            </a>
            <br />
            Built with{" "}
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
          </p>
        </section>
      </div>
    </footer>
  )
}

export default Footer
