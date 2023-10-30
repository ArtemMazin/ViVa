'use client';

import React from 'react';
import styles from './Header.module.css';
import Adress from './Adress/Adress';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';
import MobileHeader from './MobileHeader/MobileHeader';
import { Suspense } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import { useResize } from '@/hooks/useResize';

function FakeHeader() {
  return (
    <>
      <Adress />
    </>
  );
}

const Header = () => {
  const { isScreenMd } = useResize();

  return (
    <Suspense fallback={<FakeHeader />}>
      {isScreenMd ? (
        <MobileHeader />
      ) : (
        <header className={styles.wrapper}>
          <Adress />
          <Content />
          <Navigation />
        </header>
      )}
      <ContactUs />
    </Suspense>
  );
};

export default Header;
