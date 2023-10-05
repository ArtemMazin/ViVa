'use client';

import React from 'react';
import { buttonHamburgerClose, hideWrapper, hideActive, list, item, active, link, head } from './hideMenu.module.css';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const HideMenu = ({ toggleHideMenu, isMenuOpen }) => {
  const pathname = usePathname();

  return (
    <div className={`${hideWrapper} ${isMenuOpen && hideActive}`}>
      <div className={head}>
        <Image
          src='/image/logo.png'
          width={80}
          height={32}
          priority={true}
          alt='Товарный знак HMG'></Image>

        <button
          className={buttonHamburgerClose}
          onClick={toggleHideMenu}
        />
      </div>
      <nav>
        <ul className={list}>
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
  );
};

export default HideMenu;
