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
  link,
} from './presentation.module.css';
import { presentationImage } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

const Presentation = () => {
  return (
    <section className={`${presentation} container`}>
      <h2 className={`container ${title}`}>НАША ПРОДУКЦИЯ</h2>
      <p className={`container ${text}`}>HMG/ВТУЛКИ/ШАЙБЫ/ЛЕНТА</p>
      <ul className={images}>
        {presentationImage.map(({ name, img, href }) => {
          return (
            <li
              key={name}
              className={item}
              as={'image'}>
              <Link
                className={link}
                href={href}>
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
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Presentation;
