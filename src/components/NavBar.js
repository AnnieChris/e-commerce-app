import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const cartItems = useSelector(state => state.handleCart || []); // Ensure cartItems is initialized as an array
  console.log(cartItems);

  // Calculate cartItemCount, ensuring each item has a quantity property
  const cartItemCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  console.log(cartItemCount);

  return (
      <Navbar expand="lg" className="bg-white py-3 shadow-sm" sticky="top">
          <Container>
              <Navbar.Brand className='fw-bold fs-4' href="/e-commerce-app">ANN COLLECTION</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav className="mx-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll>
                      <NavLink to="/e-commerce-app" className="text-decoration-none text-secondary p-2">Home</NavLink>
                      <NavLink to="/e-commerce-app/about" className="text-decoration-none text-secondary p-2">About</NavLink>
                      <NavLink to="/e-commerce-app/products" className="text-decoration-none text-secondary p-2">Products</NavLink>
                      <NavLink to="/e-commerce-app/contact" className="text-decoration-none text-secondary p-2">Contact</NavLink>
                  </Nav>
                  <div className='buttons'>
                      <NavLink to='/e-commerce-app/login' className='btn btn-outline-dark'>
                          <FontAwesomeIcon className='fa fa-sign-in me-2' icon={faRightToBracket} />Login
                      </NavLink>
                      <NavLink to='/e-commerce-app/register' className='btn btn-outline-dark ms-2'>
                          <FontAwesomeIcon className='fa fa-sign-in me-2' icon={faUserPlus} />Register
                      </NavLink>
                      <NavLink to='/e-commerce-app/cart' className='btn btn-outline-dark ms-2'>
                          <FontAwesomeIcon className='fa fa-sign-in me-2' icon={faCartShopping} />
                          Cart ({cartItemCount})
                      </NavLink>
                  </div>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}

export default NavBar;
