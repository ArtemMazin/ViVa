import React from 'react';
import styles from './Slides.module.css';
import { tabSwitchSlides } from '@/utils/tabSwitchSlides';
import Image from 'next/image';

function Slides({ tabActive }) {
  return (
    <ul className={styles.slides}>
      {tabSwitchSlides.map(item => (
        <li key={item.name}>
          <div
            className={`${styles.slide} ${
              tabActive === item.name && styles.slide_active
            } container`}
          >
            <div className={styles.description_background}>
              <div className={styles.description_container}>
                <h2 className={styles.title}>{item.name}</h2>
                <p className={styles.description}>{item.description}</p>
                <ul className={styles.places}>
                  {item.places.map(string => (
                    <li key={string}>{string}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.image_container}>
              <span className={styles.number}>{item.number}</span>
              <Image
                src={item.image}
                alt={item.name}
                sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
                fill
                priority={true}
                className={styles.image}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Slides;
