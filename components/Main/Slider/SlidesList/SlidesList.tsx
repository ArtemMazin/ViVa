import React from 'react';
import styles from './SlidesList.module.css';
import Image from 'next/image';
import { sliderImages } from '@/utils/constants';

const SlidesList = ({ slideNumber }: { slideNumber: number }) => {
  return (
    <div
      className={styles.slideList}
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {sliderImages.map(({ img, name }) => (
        <div className={styles.item} key={img}>
          <Image
            src={img}
            fill
            sizes="(max-width: 520px) 60vw, (max-width: 920px) 75vw, 100vw"
            alt={name}
            priority={true}
            className={styles.slideImage}
          />
        </div>
      ))}
    </div>
  );
};

export default SlidesList;
