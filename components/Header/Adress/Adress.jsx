import React from 'react';
import styles from './Adress.module.css';

const Adress = () => {
  return (
    <div className={styles.row}>
      <div className={`${styles.flex} container`}>
        <div className={styles.adress}>
          <div className={styles.locationImage}></div>
          <span>г.Москва, ул.Шарикоподшипниковская, д.1</span>
        </div>
        <div className={styles.email}>
          <div className={styles.mailImage}></div>
          <a
            href='mailto:info@gidmash.ru'
            title='Написать письмо'
            rel='nofollow'
            className={styles.mailLink}>
            <span>info@gidmash.ru</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Adress;
