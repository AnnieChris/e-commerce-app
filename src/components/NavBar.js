import React from 'react'
import {Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-white py-3 shadow-sm" sticky="top" >
      <Container>
        <Navbar.Brand className='fw-bold fs-4' href="/ecommerce-app">ANN COLLECTION</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/ecommerce-app">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
          <div className='buttons'>
            <a href='/login' className='btn btn-outline-dark'>
                <FontAwesomeIcon className='fa fa-sign-in me-2' icon={faRightToBracket} />Login
            </a>
            <a href='/register' className='btn btn-outline-dark ms-2'>
                <FontAwesomeIcon className='fa fa-sign-in me-2' icon={faUserPlus} />Register
            </a>
            <a href='/cart' className='btn btn-outline-dark ms-2'>
                <FontAwesomeIcon className='fa fa-sign-in me-2' icon={faCartShopping} />Cart (0)
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
