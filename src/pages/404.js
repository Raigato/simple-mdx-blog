import React from "react"
import { graphql } from "gatsby"
import { Container, Content, FeaturedImage } from "../components"
import { H1 } from "../elements"

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "sad-cat.jpg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const notFound = ({ data }) => {
  const featuredImage = data.imageSharp.fixed

  return (
    <Container>
      <FeaturedImage fixed={featuredImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Uh-oh... What you're looking for couldn't be found
        </H1>
      </Content>
    </Container>
  )
}

export default notFound
