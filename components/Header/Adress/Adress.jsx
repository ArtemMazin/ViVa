import React from 'react';
import styles from './Adress.module.css';
import { Mail, MapPinned } from 'lucide-react';

const Adress = () => {
  return (
    <div className={styles.row}>
      <div className={`${styles.flex} container`}>
        <div className={styles.adress}>
          <MapPinned size={16} className={styles.location} />
          <span>г.Москва, ул.Шарикоподшипниковская, д.1</span>
        </div>

        <a
          href="mailto:info@gidmash.ru"
          title="Написать письмо"
          rel="nofollow"
          className={styles.mailLink}
        >
          <Mail size={16} className={styles.mailIcon} />
          <span>info@gidmash.ru</span>
        </a>
      </div>
    </div>
  );
};

export default Adress;
