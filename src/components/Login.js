import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate input on change
    if (name === 'email') {
      setValidated({ ...validated, email: validateEmail(value) });
    } else if (name === 'password') {
      setValidated({ ...validated, password: validatePassword(value) });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    return email.includes('@');
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false || !validated.email || !validated.password) {
      e.stopPropagation();
    } else {
      console.log(formData); // Perform login action here
    }
    setValidated({
      email: true,
      password: true,
    });
  };

  return (
    <Container className="px-4 my-5 bg-white text-white rounded-3 py-5 w-50">
      <Row className="justify-content-center mt-2">
        <Col md={8}>
          <h3 className="text-dark text-center">Sign In</h3>
          <Form noValidate validated={validated.email && validated.password} onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-secondary"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-secondary"
                  required
                />
                <Button variant="outline-secondary" onClick={handleTogglePassword}>
                  {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                </Button>
                <Form.Control.Feedback type="invalid">
                  Password must be at least 6 characters.
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <div className="mb-3 mt-3 d-flex justify-content-end">
              <Link to="/e-commerce-app/forgotpassword">Forgot password?</Link>
            </div>

            <div className="text-center">
              <Button variant="dark" className="px-5 py-2 mt-4" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
