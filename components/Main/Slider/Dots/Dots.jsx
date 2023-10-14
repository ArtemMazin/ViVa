import React from 'react';
import Dot from './Dot/Dot';
import { dotsWrapper, dots } from './Dots.module.css';

const Dots = ({ slidesCount, goToSlide, slideNumber }) => {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(
        <Dot
          key={`dot-${i}`}
          number={i}
          goToSlide={goToSlide}
          slideNumber={slideNumber}
        />
      );
    }

    return dots;
  };

  return (
    <div className={dotsWrapper}>
      <div className={dots}>{renderDots()}</div>
    </div>
  );
};

export default Dots;
