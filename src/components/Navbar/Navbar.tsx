import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const AppNavbar: React.FC = () => {
  const handleLanguageToggle = () => {
    console.log('Language toggle clicked');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#about">O Meu Portfólio</Navbar.Brand>
        {/* perhaps swap this to i18n later */}
        <Button variant="outline-light" size="sm" onClick={handleLanguageToggle} className="ms-auto me-2 d-lg-none">
           EN 
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">Sobre Mim</Nav.Link>
            <Nav.Link href="#certificates">Certificados</Nav.Link>
            <Nav.Link href="#experience">Tecnologias</Nav.Link> 
            <Nav.Link href="#grades">Notas</Nav.Link> 
            {/* <Nav.Link href="#faq">FAQ</Nav.Link> */}{/* Removed FAQ for now */ } 
          </Nav>
          {/* Language Toggle for larger screens */}
          <Button variant="outline-light" size="sm" onClick={handleLanguageToggle} className="d-none d-lg-inline-block">
             EN 
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
