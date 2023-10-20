'use client';

import React from 'react';
import styles from './Header.module.css';
import Adress from './Adress/Adress';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';
import useScreenWidth from '@/hooks/useScreenWidth';
import MobileHeader from './MobileHeader/MobileHeader';
import { Suspense } from 'react';

function FakeHeader() {
  return (
    <>
      <Adress />
    </>
  );
}

const Header = () => {
  const { device } = useScreenWidth();

  return (
    <Suspense fallback={<FakeHeader />}>
      {device === 'pc' || device === 'notebook' ? (
        <header className={styles.wrapper}>
          <Adress />
          <Content />
          <Navigation />
        </header>
      ) : (
        <MobileHeader />
      )}
    </Suspense>
  );
};

export default Header;
