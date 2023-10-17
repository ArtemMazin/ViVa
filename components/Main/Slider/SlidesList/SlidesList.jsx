import React from 'react';
import { slideList, item, slideImage, likeImage } from './SlidesList.module.css';
import Image from 'next/image';
import { sliderImages } from '@/utils/constants';

const SlidesList = ({ slideNumber }) => {
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
            sizes='(max-width: 520px) 60vw, (max-width: 920px) 75vw, 100vw'
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
