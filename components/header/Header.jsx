'use client';

import React from 'react';
import styles from './Header.module.css';
import Adress from './Adress/Adress';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';
import useScreenWidth from '@/hooks/useScreenWidth';
import MobileHeader from './MobileHeader/MobileHeader';

const Header = () => {
  const { device } = useScreenWidth();

  return (
    <>
      {device === 'pc' || device === 'notebook' ? (
        <header className={styles.wrapper}>
          <Adress />
          <Content />
          <Navigation />
        </header>
      ) : (
        <MobileHeader />
      )}
    </>
  );
};

export default Header;
