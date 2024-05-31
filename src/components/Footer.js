import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark ">
      <Container>
        <Row>
          <Col>
            <p className="mb-0 text-white">© 2024 <Link to="/e-commerce-app" className='text-white text-decoration-none'>ANN COLLECTION</Link></p>
          </Col>
          <Col className="text-end text-white">
            <a className='text-white text-decoration-none' href="#">Privacy Policy</a> | 
            <a className='text-white text-decoration-none' href="#">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
