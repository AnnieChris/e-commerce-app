import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container className="my-5 bg-white text-white rounded-3 w-50 py-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="text-center text-dark">Forgot Password</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleChange}
                                className='border border-secondary'
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="dark" className="px-4 py-2 mt-5" type="submit">
                                Reset Password
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>

            {/* Modal dialog box */}
            <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Password Reset Link Sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    A password reset link has been sent to <strong>{email}</strong>. Please check your email.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ForgotPassword;
