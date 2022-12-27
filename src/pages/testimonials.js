import React from "react"
import Layout from "../components/Layout"
import testimonialsData from "../assets/data/testmionialsData.js"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo"

const Testimonials = () => {
  const imageData = useStaticQuery(graphql`
    query TestimonialPics {
      allFile(skip: 9) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 500, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  function TestimonialCard(props) {
    return (
      <Testimonial>
        <GatsbyImage
          image={getImage(imageData.allFile.edges[props.id].node)}
          alt={testimonialsData[props.id].title}
        />
        <BodyText>{testimonialsData[props.id]["body-text"]}</BodyText>
        <Author>
          <em>{testimonialsData[props.id]["guest-name"]}</em>
        </Author>
      </Testimonial>
    )
  }

  return (
    <Layout>
      <Cards>
        {testimonialsData.map((t, idx) => {
          return <TestimonialCard key={t.id} id={idx} />
        })}
      </Cards>
    </Layout>
  )
}

// Styled Components

const Cards = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  gap: 2em;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Testimonial = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  background: hsl(126, 17%, 89%);
  border-radius: 0.5em;

  @media (min-width: 768px) {
    /* background: mediumseagreen; */
  }
`

const BodyText = styled.p`
  color: hsl(126, 17%, 39%);
  margin-top: 1.5em;
`
const Author = styled.p`
  color: hsl(126, 17%, 39%);
  margin-top: auto;
`

export default Testimonials

export const Head = () => <SEO />
