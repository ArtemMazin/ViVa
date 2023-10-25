import React from 'react';
import styles from './Content.module.css';
import Search from '@/components/Search/Search';

import Logo from '@/components/Logo/Logo';
import TelLink from '@/components/Links/Tel/TelLink';

const Content = () => {
  return (
    <div className={`${styles.flex} container`}>
      <Logo src="/image/logo-black.svg" />

      <Search />

      <div className={styles.contacts}>
        <span>Отдел продаж:</span>
        <TelLink color="black" />
      </div>
    </div>
  );
};

export default Content;
