import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <Container className="px-4 my-5 bg-white text-white rounded-3 py-5 w-75 ">
      <Row className="justify-content-md-center mt-2">
        <Col md={10}>
        <h3 className='text-dark text-center'>Create New Account</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className='mb-3 border border-secondary'
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className='mb-3 border border-secondary'
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='mb-3 border border-secondary'
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className='border border-secondary'
              />
              <Button variant="outline-secondary" onClick={handleTogglePassword}>
                {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </Button>
              </div>
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <div className="input-group">
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className='border border-secondary'
              />
              <Button variant="outline-secondary" onClick={handleToggleConfirmPassword}>
                {showConfirmPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </Button>
              </div>
            </Form.Group>

            <div className="text-center">
            <Button variant="dark" className="px-5 py-2 mt-4" type="submit">
              Submit
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
