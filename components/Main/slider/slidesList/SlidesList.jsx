import React from 'react';
import { slideList, item, slideImage } from './slides-list.module.css';

const SlidesList = ({ slideNumber, items }) => {
  return (
    <div
      className={slideList}
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {items.map((slide, index) => (
        <div
          className={item}
          key={index}>
          <div
            style={{ background: `url(/image/${slide.img}) no-repeat center/cover` }}
            className={slideImage}
          />
        </div>
      ))}
    </div>
  );
};

export default SlidesList;