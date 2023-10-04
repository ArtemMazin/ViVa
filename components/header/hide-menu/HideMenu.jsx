'use client';

import React, { useState } from 'react';
import {
  buttonHamburger,
  buttonHamburgerClose,
  hideWrapper,
  hideActive,
  list,
  item,
  active,
  link,
} from './hideMenu.module.css';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const HideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {!isMenuOpen ? (
        <button
          className={buttonHamburger}
          onClick={toggleHideMenu}
          tabIndex={1}
        />
      ) : (
        <button
          className={buttonHamburgerClose}
          onClick={toggleHideMenu}
          tabIndex={1}
        />
      )}
      <div className={`${hideWrapper} ${isMenuOpen && hideActive}`}>
        <Image
          src='/image/logo.png'
          width={100}
          height={40}
          priority={true}
          alt='Товарный знак HMG'></Image>
        <nav>
          <ul className={`${list} container`}>
            {navLinks.map(({ href, name }) => {
              const isActive = pathname === href;
              return (
                <li
                  key={name}
                  className={item}>
                  <Link
                    className={`${isActive && active} ${link}`}
                    href={href}
                    onClick={toggleHideMenu}>
                    <span>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HideMenu;
