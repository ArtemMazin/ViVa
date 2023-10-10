'use client';

import React, { useState } from 'react';
import {
  header,
  head,
  headerMobile,
  buttonHamburger,
  buttonHamburgerClose,
  contacts,
  tel,
  telImage,
  contactTel,
  contactMail,
  mailImage,
  mailLink,
} from './header.module.css';
import Adress from './adress/Adress';
import Content from './content/Content';
import Navigation from './navigation/Navigation';
import HideMenu from './hide-menu/HideMenu';
import useScreenWidth from '@/hooks/useScreenWidth';
import Image from 'next/image';
import Link from 'next/link';

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
              src='/image/logo-black.svg'
              width={80}
              height={32}
              priority={true}
              alt='Товарный знак HMG'></Image>
            <div className={contacts}>
              <div className={contactTel}>
                <div className={telImage}></div>
                <a
                  href='tel:+74959260774'
                  title='Позвонить'
                  rel='nofollow'
                  className={tel}>
                  +7 (495) 926-07-74
                </a>
              </div>

              <div className={contactMail}>
                <div className={mailImage}></div>
                <a
                  href='mailto:info@gidmash.ru'
                  title='Написать письмо'
                  rel='nofollow'
                  className={mailLink}>
                  <span>info@gidmash.ru</span>
                </a>
              </div>
            </div>
            {isMenuOpen ? (
              <button
                className={buttonHamburgerClose}
                onClick={toggleHideMenu}
              />
            ) : (
              <button
                className={buttonHamburger}
                onClick={toggleHideMenu}
              />
            )}
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
