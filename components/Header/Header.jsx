'use client';

import React from 'react';
import styles from './Header.module.css';
import Adress from './Adress/Adress';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Content />
      <Navigation />
    </header>
  );
};

export default Header;
