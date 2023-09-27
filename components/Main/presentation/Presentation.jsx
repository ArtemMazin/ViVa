import React from 'react';
import {
  presentation,
  title,
  text,
  images,
  item,
  image,
  materialNameContainer,
  materialName,
} from './presentation.module.css';
import { presentationImage } from '@/utils/constants';
import Image from 'next/image';

const Presentation = () => {
  return (
    <section className={`${presentation} container`}>
      <h2 className={`container ${title}`}>НАША ПРОДУКЦИЯ</h2>
      <p className={`container ${text}`}>HMG/ВТУЛКИ/ШАЙБЫ/ЛЕНТА</p>
      <ul className={images}>
        {presentationImage.map(({ name, img }) => {
          return (
            <li
              key={name}
              className={item}
              as={'image'}>
              <Image
                src={img}
                fill
                sizes='(max-width: 1269px) 50vw, 22.5vw'
                alt={name}
                className={image}
                priority={true}
              />
              <div className={materialNameContainer}>
                <h2 className={materialName}>{name}</h2>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Presentation;
