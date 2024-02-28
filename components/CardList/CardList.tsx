import React from 'react';
import Card from './Card/Card';
import styles from './CardList.module.css';
import { TCard } from '@/utils/types';

type CardListProps = {
  array: TCard[];
};

const CardList = ({ array }: CardListProps) => {
  return (
    <ul className={styles.images}>
      {array.map(({ name, img, href }) => {
        return (
          <li key={name} className={styles.item}>
            <Card href={href} img={img} name={name} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
