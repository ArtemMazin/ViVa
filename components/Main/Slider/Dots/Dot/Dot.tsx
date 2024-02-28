import React from 'react';
import styles from './Dot.module.css';

type DotProps = {
  number: number;
  goToSlide: (slideNumber: number) => void;
  slideNumber: number;
};

const Dot = ({ goToSlide, slideNumber, number }: DotProps) => {
  return (
    <div
      className={`${styles.dot} ${slideNumber === number && styles.selected}`}
      onClick={() => goToSlide(number)}
    />
  );
};

export default Dot;
