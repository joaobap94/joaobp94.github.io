import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './AboutMe.scss';

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="my-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>{t('about_me.title')}</h2>
            <p className="lead">
              {t('about_me.text')}
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image 
              src="img/mainfb.jpg"
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
