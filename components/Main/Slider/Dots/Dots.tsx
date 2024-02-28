import React from 'react';
import Dot from './Dot/Dot';
import styles from './Dots.module.css';

type DotsProps = {
  slidesCount: number;
  goToSlide: (slideNumber: number) => void;
  slideNumber: number;
};

const Dots = ({ slidesCount, goToSlide, slideNumber }: DotsProps) => {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(
        <Dot
          key={`dot-${i}`}
          number={i}
          goToSlide={goToSlide}
          slideNumber={slideNumber}
        />,
      );
    }

    return dots;
  };

  return (
    <div className={styles.dotsWrapper}>
      <div className={styles.dots}>{renderDots()}</div>
    </div>
  );
};

export default Dots;
