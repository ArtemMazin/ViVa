import React from 'react';
import Card from './Card/Card';
import styles from './CardList.module.css';
import { TCard } from '@/utils/types';

type CardListProps = {
  array: Partial<TCard>[];
};

const CardList: React.FC<CardListProps> = ({ array }) => {
  return (
    <ul className={styles.images}>
      {array.map(({ name, img, href }) => (
        <li key={name} className={styles.item}>
          <Card href={href} img={img} name={name} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
