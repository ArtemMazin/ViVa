import React from 'react';
import { dot, selected } from './Dot.module.css';

const Dot = ({ goToSlide, slideNumber, number }) => {
  return (
    <div
      className={`${dot} ${slideNumber === number && selected}`}
      onClick={() => goToSlide(number)}
    />
  );
};

export default Dot;
