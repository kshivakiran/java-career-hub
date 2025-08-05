import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container fluid>
        <Navbar.Brand className="fw-bold">
          <i className="fas fa-coffee text-success me-2"></i>
          Java Career Hub
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <span className="text-muted">Welcome to your Java career journey!</span>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;