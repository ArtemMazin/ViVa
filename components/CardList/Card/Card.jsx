import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Htag from '../../Htag/Htag';
import styles from './Card.module.css';

const Card = ({ href, img, name }) => {
  return (
    <Link
      className={styles.link}
      href={href}>
      <Image
        src={img}
        fill
        sizes='(max-width: 730px) 60vw, (max-width: 1280px) 70vw, 100vw'
        alt={name}
        priority={true}
        className={styles.image}
      />
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <Htag tag='h3'>{name}</Htag>
          <Image
            src='/image/logo-card.svg'
            width={100}
            height={40}
            priority={true}
            alt='Товарный знак HMG'
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
