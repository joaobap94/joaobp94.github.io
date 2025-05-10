import React, { useState, useMemo, createRef } from 'react';
import { Container, Button,  Row, Col } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { gradesData, filterCategories, GradeEntry, FilterCategory } from '../../data/gradesData';
import GradeBar from './GradeBar';
import { useTranslation } from 'react-i18next';
import './Grades.scss';

const Grades: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('*');

  const filteredGrades = useMemo(() => {
    if (activeFilter === '*') {
      return gradesData;
    }
    return gradesData.filter((grade: GradeEntry) => grade.category === activeFilter);
  }, [activeFilter]);

  const transitionDuration = 300;

  return (
    <section id="grades" className="py-5">
      <Container>
        <h2 className="text-start mb-4">{t('grades.title')}</h2>
        <p className="text-start mb-4">{t('grades.intro1')}</p>
        <p className="text-start mb-4">{t('grades.intro2')}</p>
        <p className="text-start mb-5">{t('grades.intro3')}</p>
        
        <div className="d-flex flex-row flex-wrap justify-content-center text-center mb-4">
          {filterCategories.map((category: FilterCategory) => {
            const filterKey = `grades_filters.${category.filter === '*' ? 'all' : category.filter}`;
            return (
              <Button
                key={category.filter}
                variant={activeFilter === category.filter ? 'primary' : 'secondary'}
                className={`${category.colorClass || ''} mx-1 mb-2 filter-button`}
                onClick={() => setActiveFilter(category.filter)}
              >
                {t(filterKey, { defaultValue: category.name })}
              </Button>
            );
          })}
        </div>

        <TransitionGroup component={Row} className="g-3">
          {filteredGrades.map((grade: GradeEntry) => {
            const nodeRef = createRef<HTMLDivElement>();
            const subjectTitleKey = `grades_subjects.subject_${grade.id}_title`;
            return (
              <CSSTransition
                key={grade.id}
                nodeRef={nodeRef}
                timeout={transitionDuration}
                classNames="fade"
                mountOnEnter
                unmountOnExit
              >
                <Col md={6} ref={nodeRef}>
                  <GradeBar 
                    title={t(subjectTitleKey, { defaultValue: grade.title })}
                    percentage={grade.percentage} 
                    grade={grade.grade} 
                    category={grade.category} 
                  />
                </Col>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </Container>
    </section>
  );
};

export default Grades; 