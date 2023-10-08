import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.css';

const CardList = ({ array }) => {
  return (
    <ul className={styles.images}>
      {array.map(({ name, img, href }) => {
        return (
          <Card
            href={href}
            img={img}
            name={name}
            key={name}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
