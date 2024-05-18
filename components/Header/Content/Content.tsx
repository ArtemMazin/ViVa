import React, { Suspense } from 'react';
import styles from './Content.module.css';
import Search from '@/components/Search/Search';
import MailLink from '@/components/Links/Mail/MailLink';
import Logo from '@/components/Logo/Logo';
import TelLink from '@/components/Links/Tel/TelLink';
import { Menu } from 'lucide-react';

const Content = ({ toggleHideMenu, isMenuOpen }) => {
  return (
    <div className={`${styles.container} container`}>
      <Logo src="/image/logo-black.svg" />
      <Suspense>
        <Search />
      </Suspense>
      <div className={styles.right_box}>
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

        <button className={styles.button} onClick={toggleHideMenu}>
          <Menu
            size={32}
            className={`${styles.icon} ${isMenuOpen ? styles.active : ''}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Content;
