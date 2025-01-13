import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FacebookLoginPage = () => {
  return (
    <div style={{ backgroundColor: '#f0f2f5', height: '100vh' }}>
      <Container fluid className="d-flex justify-content-center align-items-center h-100">
        <Row className="w-100">
          {/* Left Section */}
          <Col md={6} className="text-center d-flex flex-column justify-content-center align-items-center">
            <h1 style={{ color: '#1877f2', fontWeight: 'bold', fontSize: '3rem' }}>facebook</h1>
            <p style={{ fontSize: '1.2rem' }}>
              Connect with friends and the world around you on Facebook.
            </p>
          </Col>

          {/* Right Section */}
          <Col md={6} className="d-flex justify-content-center">
            <div
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                width: '100%',
                maxWidth: '400px',
              }}
            >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email or phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#1877f2' }}>
                  Log In
                </Button>
                <div className="text-center mt-3">
                  <a href="#" style={{ color: '#1877f2', fontSize: '0.9rem' }}>Forgotten password?</a>
                </div>
                <hr />
                <div className="text-center">
                  <Button variant="success" style={{ fontWeight: 'bold' }}>
                    Create New Account
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FacebookLoginPage;
