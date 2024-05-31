import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setMessages([...messages, { id: messages.length, text: input }]);
      setInput('');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Chat with Us</h2>
          <ListGroup>
            {messages.map((message) => (
              <ListGroup.Item key={message.id}>{message.text}</ListGroup.Item>
            ))}
          </ListGroup>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formMessage">
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
