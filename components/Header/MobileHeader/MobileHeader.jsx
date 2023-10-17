import React, { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import styles from './MobileHeader.module.css';
import Search from '@/components/Search/Search';
import Logo from '@/components/Logo/Logo';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={styles.mobile}>
      <div className={styles.container}>
        <Logo src='/image/logo-black.svg' />

        <Search />

        {isMenuOpen ? (
          <button
            className={`${styles.button} ${styles.button_close}`}
            onClick={toggleHideMenu}
          />
        ) : (
          <button
            className={`${styles.button} ${styles.button_open}`}
            onClick={toggleHideMenu}
          />
        )}
      </div>
      <MobileMenu
        toggleHideMenu={toggleHideMenu}
        isMenuOpen={isMenuOpen}
      />
    </header>
  );
};

export default MobileHeader;
