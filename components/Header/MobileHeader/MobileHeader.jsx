import React, { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import styles from './MobileHeader.module.css';
import Logo from '@/components/Logo/Logo';
import SearchBar from '@/components/Search/Search';
import { Menu } from 'lucide-react';

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
          <Menu
            size={32}
            className={`${styles.icon} ${isMenuOpen ? styles.active : ''}`}
          />
        </button>
      </div>
      <MobileMenu toggleHideMenu={toggleHideMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default MobileHeader;
