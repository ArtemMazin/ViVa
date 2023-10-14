import React from 'react';
import Card from './Card/Card';
import styles from './CardList.module.css';

const CardList = ({ array }) => {
  return (
    <ul className={styles.images}>
      {array.map(({ name, img, href }) => {
        return (
          <li
            key={name}
            className={styles.item}>
            <Card
              href={href}
              img={img}
              name={name}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
