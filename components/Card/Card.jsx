import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Htag from '../Htag/Htag';
import styles from './Card.module.css';

const Card = ({ href, img, name }) => {
  return (
    <Link
      className={styles.link}
      href={href}>
      <Image
        src={img}
        fill
        sizes='(max-width: 520px) 30vw, (max-width: 768px) 50vw, 100vw'
        alt={name}
        priority={true}
        className={styles.image}
      />
      <div className={styles.materialNameContainer}>
        <Htag tag='h3'>{name}</Htag>
      </div>
    </Link>
  );
};

export default Card;
