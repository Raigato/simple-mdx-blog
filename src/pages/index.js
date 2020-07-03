import React from "react"
import { Container, FeaturedImage, Content, Card } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeaturedImage />
      <Content>
        <Card
          date="July 3, 2020"
          title="Lorem ipsum dolor sit amet."
          excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic excepturi, veritatis quam labore fuga nihil nisi optio in earum repudiandae quibusdam mollitia vel ea quasi ipsa eum saepe dolorum, quod voluptatum iste illo ab. Illum asperiores vero dolorum deserunt ipsam, alias soluta molestias repellendus adipisci fugit unde maiores ad nostrum quod eveniet numquam distinctio esse? Voluptates error odit id."
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
