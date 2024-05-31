// Checkout.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const cartItems = useSelector(state => state.handleCart);
    const navigate = useNavigate();

    const totalAmount = cartItems.reduce((total, item) => total + (item.qty * item.price), 0);

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h2>Checkout</h2>
                    <ul className="list-group">
                        {cartItems.map(item => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>{item.qty} x ${item.price.toFixed(2)}</p>
                                </div>
                                <span>${(item.qty * item.price).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h4>Total: ${totalAmount.toFixed(2)}</h4>
                        <Button variant="primary" onClick={() => navigate('/e-commerce-app/success')}>Confirm Purchase</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;
