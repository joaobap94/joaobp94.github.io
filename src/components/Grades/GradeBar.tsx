import React, { useState, useEffect } from 'react';
import './GradeBar.scss';

interface GradeBarProps {
  title: string;
  percentage: number;
  grade: number;
  category: string;
}

const categoryColorMap: { [key: string]: string } = {
  redes: '#0056b3',
  sql: '#0a6e38',
  web: '#2c2c44',
  multimedia: '#1a1a1a',
  java: '#b54800',
  gest: '#6a0dad',
  microsoft: '#1a2530',
  default: '#6c757d'
};

const GradeBar: React.FC<GradeBarProps> = ({ title, percentage, grade, category }) => {
  const [currentWidth, setCurrentWidth] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWidth(percentage);
    }, 10);

    return () => clearTimeout(timer);
  }, [percentage]);

  const backgroundColor = categoryColorMap[category] || categoryColorMap.default;

  const barStyle = {
    width: `${currentWidth}%`,
    backgroundColor: backgroundColor,
  };

  return (
    <div className={`gradebar clearfix ${category}`}>
      <div className="gradebar-title">
        <span>{title}</span>
      </div>
      <div className="gradebar-bar" style={barStyle}></div>
      <div className={`grade-bar-percent ${grade === 20 ? 'full-grade' : ''}`}>
        {grade}
      </div>
    </div>
  );
};

export default GradeBar; 