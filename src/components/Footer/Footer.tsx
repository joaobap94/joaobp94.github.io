import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { EnvelopeFill, TelephoneFill, Linkedin, Github } from 'react-bootstrap-icons';
import './Footer.scss'; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="gy-3 align-items-center"> 
          {/* Column 1: Contact Info */}
          <Col md={6} lg={4} className="text-center text-md-start">
            <h5>Contato</h5>
            <Nav className="flex-column">
              <Nav.Link 
                href="mailto:joao.batista.wk@gmail.com" 
                className="text-light p-0 mb-1 d-inline-flex align-items-center"
              >
                <EnvelopeFill className="me-2" /> joao.batista.wk@gmail.com
              </Nav.Link>
              <Nav.Link 
                href="tel:+351962042822" 
                className="text-light p-0 mb-1 d-inline-flex align-items-center"
              >
                <TelephoneFill className="me-2" /> +351 962042822
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={6} lg={4} className="text-center">
            <h5>Redes</h5>
            <Nav className="justify-content-center justify-content-md-center">
              <Nav.Link href="https://www.linkedin.com/in/jo%C3%A3o-batista-2a7002136" target="_blank" rel="noopener noreferrer" className="text-light p-1 fs-4">
                <Linkedin />
              </Nav.Link>
              <Nav.Link href="https://github.com/joaobap94/" target="_blank" rel="noopener noreferrer" className="text-light p-1 fs-4">
                <Github />
              </Nav.Link>
            </Nav>
          </Col>

          <Col lg={4} className="text-center text-lg-end">
            <small>
              &copy; {currentYear} João Batista. Todos os direitos reservados.
              <br />
              Este portfólio foi construído com React.
              <Nav.Link href="/old-project/index.html" target="_blank">Clicar aqui para portfólio legacy de 2016</Nav.Link>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
