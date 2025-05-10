import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { certificateData, Certificate } from '../../data/certificate-data';
import './Certificates.scss';
import { useTranslation } from 'react-i18next';

const Certificates: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="certificates" className="py-5">
      <Container>
        <h2 className="text-start mb-4">{t('certificates_section.title')}</h2>
        <p className="text-start mb-5">{t('certificates_section.subtitle')}</p>
        
        <Row xs={1} sm={2} md={3} lg={4} className="g-3 justify-content-center">
          {certificateData.map((cert: Certificate) => (
            <a  key={cert.id}
                href={cert.href} 
                target="_blank" 
                rel="noopener noreferrer" 
            >
              <Col className="d-flex justify-content-center h-100 mb-3"> 
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
