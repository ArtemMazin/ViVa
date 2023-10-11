'use client';

import React from 'react';
import { hideWrapper, hideActive, list, item, active, link, head, overflowWrapper, logo } from './hideMenu.module.css';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Search from '@/components/Search/Search';

const HideMenu = ({ toggleHideMenu, isMenuOpen }) => {
  const pathname = usePathname();

  return (
    <div className={`${hideWrapper} ${isMenuOpen && hideActive}`}>
      <div className={overflowWrapper}>
        <div className={head}>
          <Image
            src='/image/logo-black.svg'
            width={80}
            height={32}
            priority={true}
            alt='Товарный знак HMG'
            className={logo}
          />
          <Search callback={toggleHideMenu} />
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
    </div>
  );
};

export default HideMenu;
