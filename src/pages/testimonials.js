import React from "react"
import Layout from "../components/Layout"
import testimonialsData from "../assets/data/testmionialsData.js"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
  console.log(imageData)

  function TestimonialCard(props) {
    return (
      <Testimonial>
        <GatsbyImage
          image={getImage(imageData.allFile.edges[props.id].node)}
          alt={testimonialsData[props.id].title}
        />
        <BodyText>{testimonialsData[props.id]["body-text"]}</BodyText>
        <Author>{testimonialsData[props.id]["guest-name"]}</Author>
      </Testimonial>
    )
  }

  return (
    <Layout>
      <Cards>
        {testimonialsData.map((t, idx) => {
          return <TestimonialCard key={t} id={idx} />
        })}
      </Cards>
    </Layout>
  )
}

// Styled Components

const Cards = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content max-content;
`

const Testimonial = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  margin: 1em;
  background: papayawhip;

  @media (min-width: 768px) {
    background: mediumseagreen;
  }
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const BodyText = styled.p`
  color: peachpuff;
`
const Author = styled.p`
  color: skyblue;
`

export default Testimonials
