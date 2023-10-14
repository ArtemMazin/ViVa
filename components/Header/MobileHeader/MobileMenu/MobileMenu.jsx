import React from 'react';
import styles from './MobileMenu.module.css';
import Image from 'next/image';
import Search from '@/components/Search/Search';
import Navigation from './Navigation/Navigation';

const MobileMenu = ({ toggleHideMenu, isMenuOpen }) => {
  return (
    <div className={`${styles.wrapper} ${isMenuOpen && styles.visible}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            src='/image/logo-black.svg'
            width={80}
            height={32}
            priority={true}
            alt='Товарный знак HMG'
            className={styles.logo}
          />
          <Search callback={toggleHideMenu} />
        </div>
        <Navigation toggleHideMenu={toggleHideMenu} />
      </div>
    </div>
  );
};

export default MobileMenu;
