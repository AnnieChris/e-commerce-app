import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { FaSignInAlt, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

const Header = () => {
  const { user, signOut } = useContext(AuthContext);
  const { cart, clearCart } = useContext(CartContext);
  const { wishlist, clearWishlist } = useContext(WishlistContext);

  const handleSignOut = () => {
    signOut();
    clearCart();
    clearWishlist();
  };

  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/e-commerce-app">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/cart">
              <Badge bg="secondary" className="me-2">
                <FaShoppingCart /> {cart.length}
              </Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/wishlist">
              <Badge bg="secondary" className="me-3">
                <FaHeart /> {wishlist.length}
              </Badge>
            </Nav.Link>

            {user ? (
              <>
                <span className="me-2">Welcome, {user.email}</span>
                <Button variant="outline-danger" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button as={Link} to="/signin" variant="outline-primary">
                <FaUser className="me-1" /> Sign In
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
