import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { certificateData, Certificate } from '../../data/certificate-data';
import './Certificates.scss';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-5">
      <Container>
        <h2 className="text-start mb-4">Certificados</h2>
        <p className="text-start mb-5">Microsoft certified em algumas áreas</p>
        
        <Row xs={1} sm={2} md={3} lg={4} className="g-3 justify-content-center">
          {certificateData.map((cert: Certificate) => (
            <a 
                href={cert.href} 
                target="_blank" 
                rel="noopener noreferrer" 
            >
              <Col key={cert.id} className="d-flex justify-content-center h-100 mb-3"> 
                  <div className="certificate-item">
                      <img 
                        src={cert.imgSrc} 
                        alt={cert.alt} 
                        className="certificate-image" 
                      />
                      <p className="certificate-title">{cert.title}</p>
                  </div>
              </Col>
            </a>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
