import React from 'react';
import styles from './Adress.module.css';
import LocationIcon from '../../../public/image/location.svg';
import MailIcon from '../../../public/image/mail.svg';

const Adress = () => {
  return (
    <div className={styles.row}>
      <div className={`${styles.flex} container`}>
        <div className={styles.adress}>
          <LocationIcon />
          <span>г.Москва, ул.Шарикоподшипниковская, д.1</span>
        </div>
        <div className={styles.email}>
          <MailIcon />
          <a
            href="mailto:info@gidmash.ru"
            title="Написать письмо"
            rel="nofollow"
            className={styles.mailLink}
          >
            <span>info@gidmash.ru</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Adress;
