import React, { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import styles from './MobileHeader.module.css';
import Search from '@/components/Search/Search';
import Logo from '@/components/Logo/Logo';
import IconOpen from '../../../public/image/burger-open.svg';
import IconClose from '../../../public/image/burger-close.svg';
import SearchBar from '@/components/Search/Search';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={styles.mobile}>
      <div className={styles.container}>
        <Logo src="/image/logo-black.svg" />

        <SearchBar />

        <button className={styles.button} onClick={toggleHideMenu}>
          {isMenuOpen ? (
            <IconClose className={styles.button_close} />
          ) : (
            <IconOpen className={styles.button_open} />
          )}
        </button>
      </div>
      <MobileMenu toggleHideMenu={toggleHideMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default MobileHeader;
