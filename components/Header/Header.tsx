'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';
import MobileMenu from './MobileMenu/MobileMenu';

const Header: React.FC = () => {
  // Состояние для управления открытием/закрытием мобильного меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функция для переключения состояния мобильного меню
  const toggleHideMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className={styles.wrapper}>
      <Content toggleHideMenu={toggleHideMenu} isMenuOpen={isMenuOpen} />
      <Navigation />
      <MobileMenu toggleHideMenu={toggleHideMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
