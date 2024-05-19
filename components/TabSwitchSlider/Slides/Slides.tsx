import React from 'react';
import styles from './Slides.module.css';
import { tabSwitchSlides } from '@/utils/tabSwitchSlides';
import Image from 'next/image';
import Ptag from '@/components/Ptag/Ptag';
import Htag from '@/components/Htag/Htag';

function Slides({ tabActive }: { tabActive: string }) {
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
                <Htag tag="h2">{item.name}</Htag>
                <Ptag>{item.description}</Ptag>
                <ul className={styles.places}>
                  {item.places.map(string => (
                    <li key={string}>
                      <Ptag>{string}</Ptag>
                    </li>
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
