import React from "react"
import Layout from "../components/Layout"
import testimonialsData from "../assets/data/testmionialsData.js"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Testimonials = () => {
  console.log(testimonialsData[0])

  function TestimonialCard() {
    return (
      <Testimonial>
        <Title>{testimonialsData[0].title}</Title>
        <BodyText>{testimonialsData[0]["body-text"]}</BodyText>
        <Author>{testimonialsData[0]["guest-name"]}</Author>
      </Testimonial>
    )
  }

  return (
    <Layout>
      <main>
        <TestimonialCard />
      </main>
    </Layout>
  )
}

const Testimonial = styled.article`
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
