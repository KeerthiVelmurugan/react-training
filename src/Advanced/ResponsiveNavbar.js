// Install Bootstrap in your React project
// npm install bootstrap

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button, Offcanvas, Card } from 'react-bootstrap';

const ResponsiveNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Your Logo/Brand</Navbar.Brand>
          <Button variant="outline-light" onClick={handleOffcanvas}>
            ☰
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul className="list-unstyled">
              <li>
                <a href="#home" onClick={handleOffcanvas}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleOffcanvas}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={handleOffcanvas}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleOffcanvas}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Rest of your content */}
      <Container fluid className="mt-3">
        <h1>Your Content Goes Here</h1>
        <Card >
        <Button>check</Button>
        </Card>
      </Container>
    </>
  );
};

export default ResponsiveNavbar;
