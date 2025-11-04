import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Container, Row, Col, Image, Button, Form, Alert } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const { cart, addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  const inWishlist = wishlist.some(item => item.id === product.id);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 2000); // message disappears after 2 seconds
  };

  const handleCartClick = () => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      addToCart({ ...product, quantity: existingItem.quantity + quantity });
    } else {
      addToCart({ ...product, quantity });
    }
    showMessage(`${product.title} added to cart!`);
  };

  const handleWishlistClick = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      showMessage(`${product.title} removed from wishlist!`);
    } else {
      addToWishlist(product);
      showMessage(`${product.title} added to wishlist!`);
    }
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={6} className="text-center">
          <Image src={product.image} alt={product.title} fluid />
        </Col>

        <Col md={6}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>Total: ${(product.price * quantity).toFixed(2)}</h4>

          <Form.Group controlId="quantity" className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              style={{ width: "100px" }}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleCartClick} className="me-2">
            Add to Cart
          </Button>

          <Button
            variant={inWishlist ? "danger" : "outline-secondary"}
            onClick={handleWishlistClick}
          >
            {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </Button>

          {message && (
            <Alert variant="success" className="mt-3">
              {message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
