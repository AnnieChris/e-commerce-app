import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Chat from './Chat';
import ContactMap from './ContactMap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can replace this with your form submission logic
    };

    return (
        <Container className="px-4 my-5 bg-white text-white rounded-3 py-5">
            <Row className="justify-content-md-center">
                <Col md={7} className='me-5 my-2'>
                <h3 className="text-dark text-center">Contact</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='border border-secondary'
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className='mb-3'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='border border-secondary'
                            />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                placeholder="Enter your message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className='border border-secondary'
                            />
                        </Form.Group>

                        <div className="text-center my-5">
                            <Button variant="dark" type="submit" className='mt-5 px-5 '>Submit </Button>
                        </div>
                    </Form>
                </Col>
                {/* <Col>
                    <Chat />
                </Col> */}
                <Col>
                    <ContactMap />
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
