import React from 'react';
import { slideList, item, slideImage, likeImage } from './slides-list.module.css';
import Image from 'next/image';
import { sliderImages } from '@/utils/constants';

const SlidesList = ({ slideNumber, items }) => {
  return (
    <div
      className={slideList}
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {sliderImages.map(({ img }) => (
        <div
          className={item}
          key={img}>
          <Image
            src={img}
            fill
            sizes='(max-width: 1269px) 50vw, 22.5vw'
            alt=''
            priority={true}
            className={slideImage}
          />
          <div className={likeImage}></div>
        </div>
      ))}
    </div>
  );
};

export default SlidesList;
