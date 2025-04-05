import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutMe.scss';
const AboutMe: React.FC = () => {
  return (
    <section id="about" className="my-5-adjust">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-start">
            <h2>Sobre mim</h2>
            <p className="lead">
              João Batista, sou de Santarém e nasci em Julho de 1994. Comecei a estudar Informática na Escola Dr. Ginestal Machado, onde frequentei o curso de Programação de Sistemas Informáticos. Depois deste, licenciei-me em Informática, na Escola Superior de Gestão e Tecnologia de Santarém, com 21 anos.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image 
              src="/img/mainfb.jpg" 
              alt="João Batista" 
              roundedCircle
              fluid
              style={{ maxWidth: '300px', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
