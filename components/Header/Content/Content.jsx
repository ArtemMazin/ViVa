import React from 'react';
import styles from './Content.module.css';
import Search from '@/components/Search/Search';
import MailLink from '@/components/Links/Mail/MailLink';
import Logo from '@/components/Logo/Logo';
import TelLink from '@/components/Links/Tel/TelLink';

const Content = () => {
  return (
    <div className={`${styles.container} container`}>
      <Logo src="/image/logo-black.svg" />

      <Search />
      <div className={styles.row}>
        <span>Офис продаж:</span>
        <div className={styles.adress}>
          <span>г.Москва, ул.Шарикоподшипниковская, д.1</span>
        </div>
      </div>

      <div className={styles.contacts}>
        <TelLink color="black" />
        <MailLink color="black" />
      </div>
    </div>
  );
};

export default Content;
