import React, { Suspense } from 'react';
import styles from './Content.module.css';
import dynamic from 'next/dynamic';
import Logo from '@/components/Logo/Logo';
import { Menu } from 'lucide-react';

// Динамический импорт компонентов для оптимизации
const Search = dynamic(() => import('@/components/Search/Search'));
const MailLink = dynamic(() => import('@/components/Links/Mail/MailLink'));
const TelLink = dynamic(() => import('@/components/Links/Tel/TelLink'));

interface ContentProps {
  toggleHideMenu: () => void;
  isMenuOpen: boolean;
}

const Content: React.FC<ContentProps> = ({ toggleHideMenu, isMenuOpen }) => {
  return (
    <div className={`${styles.container} container`}>
      <Logo src="/image/logo-black.svg" />
      <Suspense fallback={<div>Загрузка...</div>}>
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
