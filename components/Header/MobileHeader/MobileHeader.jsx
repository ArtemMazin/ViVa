import React, { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import styles from './MobileHeader.module.css';
import Image from 'next/image';
import Search from '@/components/Search/Search';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={styles.mobile}>
      <div className={styles.container}>
        <Image
          src='/image/logo-black.svg'
          width={80}
          height={32}
          priority={true}
          alt='Товарный знак HMG'
          className={styles.logo}
        />
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
