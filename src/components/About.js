import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="px-4 my-5 py-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
        <Image src="https://t3.ftcdn.net/jpg/01/31/06/16/360_F_131061611_laeISLTwEZJUbTv5YFZpCVrMJfOWEuhp.jpg" />
        </Col>
        <Col md={6}>
          <h3 className="text-dark text-center">About Us</h3>          
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About
