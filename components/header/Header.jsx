'use client';

import React, { useState } from 'react';
import { header, head, headerMobile, buttonHamburger } from './header.module.css';
import Adress from './adress/Adress';
import Content from './content/Content';
import Navigation from './navigation/Navigation';
import HideMenu from './hide-menu/HideMenu';
import useScreenWidth from '@/hooks/useScreenWidth';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { device } = useScreenWidth();

  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

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
          <div className={head}>
            <Image
              src='/image/logo.png'
              width={80}
              height={32}
              priority={true}
              alt='Товарный знак HMG'></Image>

            <button
              className={buttonHamburger}
              onClick={toggleHideMenu}
            />
          </div>
          <HideMenu
            toggleHideMenu={toggleHideMenu}
            isMenuOpen={isMenuOpen}
          />
        </header>
      )}
    </>
  );
};

export default Header;
