import React from 'react';
import { presentation, title, text, images, item } from './presentation.module.css';
import { presentationImage } from '@/utils/constants';
import Image from 'next/image';

const Presentation = () => {
  return (
    <section className={presentation}>
      <h2 className={`container ${title}`}>Metal-polymer self-lubricating bearings</h2>
      <p className={`container ${text}`}>
        Two-layer metal-polymer self-lubricating bearing consists of metal backing with PTFE compounded on the surface.
        It is lighter and has better mechanical and load performance. The thicker PTFE layer can improve the
        installation flexibility and can also match wider designed tolerance range. In addition, the wear resistance and
        noise absorbing feature is improved while more variable torque range could be fitted.
      </p>
      <ul className={images}>
        {presentationImage.map(({ name, img }) => {
          return (
            <li
              key={name}
              className={item}>
              <Image
                src={img}
                fill
                sizes='(max-width: 1269px) 50vw, 22.5vw'
                alt={name}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Presentation;
