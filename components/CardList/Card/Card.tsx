import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Htag from '../../Htag/Htag';
import styles from './Card.module.css';
import { TCard } from '@/utils/types';

const Card: React.FC<Partial<TCard>> = ({ href, img, name }) => {
  return (
    <Link className={styles.link} href={href}>
      <div className={styles.imageWrapper}>
        <Image
          src={img}
          fill
          sizes="(max-width: 730px) 100vw, (max-width: 1280px) 70vw, 100vw"
          alt={name}
          className={styles.image}
        />
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <Htag tag="h3" className={styles.card_title}>
            {name}
          </Htag>
          <Image
            src="/image/logo-card.svg"
            width={100}
            height={40}
            alt="Товарный знак HMG"
            className={styles.logo}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
