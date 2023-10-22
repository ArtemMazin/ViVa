import React from 'react';
import styles from './Adress.module.css';
import { MapPinned } from 'lucide-react';
import MailLink from '@/components/Links/Mail/MailLink';

const Adress = () => {
  return (
    <div className={styles.row}>
      <div className={`${styles.flex} container`}>
        <div className={styles.adress}>
          <MapPinned size={16} className={styles.location} />
          <span>г.Москва, ул.Шарикоподшипниковская, д.1</span>
        </div>

        <MailLink color="black" />
      </div>
    </div>
  );
};

export default Adress;
