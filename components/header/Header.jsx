'use client';

import React from 'react';
import { header, logo, headerMobile } from './header.module.css';
import Adress from './adress/Adress';
import Content from './content/Content';
import Navigation from './navigation/Navigation';
import HideMenu from './hide-menu/HideMenu';
import useScreenWidth from '@/hooks/useScreenWidth';
import Image from 'next/image';

const Header = () => {
  const { device } = useScreenWidth();

  return (
    <>
      {device === 'pc' || device === 'notebook' ? (
        <header className={header}>
          <Adress />
          <Content />
          <Navigation />
        </header>
      ) : (
        <header className={headerMobile}>
          <Image
            src='/image/logo.png'
            width={100}
            height={40}
            priority={true}
            alt='Товарный знак HMG'
            className={logo}></Image>
          <HideMenu />
        </header>
      )}
    </>
  );
};

export default Header;
