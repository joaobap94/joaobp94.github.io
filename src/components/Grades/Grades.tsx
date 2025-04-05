import React, { useState, useMemo } from 'react';
import { Container, Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import { gradesData, filterCategories, GradeEntry, FilterCategory } from '../../data/gradesData';
import GradeBar from './GradeBar';
import './Grades.scss';

const Grades: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('*');

  const filteredGrades = useMemo(() => {
    if (activeFilter === '*') {
      return gradesData;
    }
    return gradesData.filter((grade: GradeEntry) => grade.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="grades" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Formação Acadêmica / Notas</h2>
        <p className="text-center mb-4">
          Do ano 2009 até 2012, desenvolvi os meus conhecimentos na área de programação, graças ao curso de Programação de Sistemas Informáticos, na Escola Dr. Ginestal Machado, com uma média de 17 valores.
          Do ano 2012 até 2015, na Escola Superior de Gestão e Tecnologia de Santarém, terminei a licenciatura em Informática com uma média de 15 valores.
        </p>
        <p className="text-center mb-5"> Deixo em baixo algumas das cadeiras relevantes, praticadas nesta licenciatura, tal como as notas.</p>
        
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center mb-4">
          {filterCategories.map((category: FilterCategory) => (
            <Button
              key={category.filter}
              variant={activeFilter === category.filter ? 'primary' : 'secondary'}
              className={`${category.colorClass || ''} mb-1 mb-md-0 me-md-1 filter-button`}
              onClick={() => setActiveFilter(category.filter)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <Row className="g-3">
          {filteredGrades.map((grade: GradeEntry) => (
            <Col key={grade.id} md={6}>
              <GradeBar 
                title={grade.title} 
                percentage={grade.percentage} 
                grade={grade.grade} 
                category={grade.category} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Grades; 