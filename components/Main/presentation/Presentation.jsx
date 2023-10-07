import React from 'react';
import { presentation, images, item, image, materialNameContainer, link } from './presentation.module.css';
import { presentationImage } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import Htag from '@/components/Htag/Htag';

const Presentation = () => {
  return (
    <section className={`${presentation} container`}>
      <Htag tag='h1underline'>НАША ПРОДУКЦИЯ</Htag>
      <Htag tag='h2'>HMG/ВТУЛКИ/ШАЙБЫ/ЛЕНТА</Htag>
      <ul className={images}>
        {presentationImage.map(({ name, img, href }) => {
          return (
            <li
              key={name}
              className={item}>
              <Link
                className={link}
                href={href}>
                <Image
                  src={img}
                  fill
                  sizes='(max-width: 520px) 30vw, (max-width: 768px) 50vw, 100vw'
                  alt={name}
                  priority={true}
                  className={image}
                />
                <div className={materialNameContainer}>
                  <Htag tag='h3'>{name}</Htag>
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
