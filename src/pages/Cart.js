import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";

const Cart = () => {
  const { cart, removeFromCart, addToCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <Container className="my-4 text-center">
        <h2>Your cart is empty!</h2>
        <Link to="/e-commerce-app" className="btn btn-primary mt-3">Go Shopping</Link>
      </Container>
    );
  }

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  const handleQuantityChange = (item, qty) => {
    if (qty < 1) return;
    // Update cart with new quantity
    addToCart({ ...item, quantity: qty });
  };

  return (
    <Container className="my-4">
      <h2>Your Cart</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>
                <Row className="align-items-center">
                  <Link to={`/product/${item.id}`} className="text-decoration-none">
                    <Col md={3}>
                      <img src={item.image} alt={item.title} width="60" />
                    </Col>
                    <Col md={9}>{item.title}</Col>
                  </Link>
                </Row>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <Form.Control
                  type="number"
                  value={item.quantity || 1}
                  min="1"
                  style={{ width: "80px" }}
                  onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                />
              </td>
              <td>${((item.price) * (item.quantity || 1)).toFixed(2)}</td>
              <td>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4>Total: ${totalPrice.toFixed(2)}</h4>

      <Row className="mt-3">
        <Col>
          <Button variant="secondary" onClick={clearCart} className="me-2">
            Clear Cart
          </Button>
          <Button variant="primary" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
