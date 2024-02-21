'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={styles.wrapper}>
      <Content toggleHideMenu={toggleHideMenu} isMenuOpen={isMenuOpen} />
      <Navigation />
      <MobileMenu toggleHideMenu={toggleHideMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
