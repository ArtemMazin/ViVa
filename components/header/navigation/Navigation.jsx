'use client';

import React, { useState } from 'react';
import { row, list, item, active, link, relative } from './navigation.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';
import SideMenu from '../side-menu/SideMenu';
import useScreenWidth from '@/hooks/useScreenWidth';

const Navigation = () => {
  const [showGoodsSideMenu, setShowGoodsSideMenu] = useState(false);
  const [showContactsSideMenu, setShowContactsSideMenu] = useState(false);
  const pathname = usePathname();

  const onMouseEnterHandler = (href) => {
    href === '/goods' && setShowGoodsSideMenu(true);
    href === '/contacts' && setShowContactsSideMenu(true);
  };

  const onMouseLeaveHandler = () => {
    setShowGoodsSideMenu(false);
    setShowContactsSideMenu(false);
  };

  const { device } = useScreenWidth();

  return (
    <nav className={row}>
      <ul className={`${list} container`}>
        {navLinks.map(({ href, name }) => {
          const isActive = pathname === href;
          return (
            <li
              key={name}
              className={`${device === 'pc' && relative} ${item}`}
              onMouseEnter={() => onMouseEnterHandler(href)}
              onMouseLeave={onMouseLeaveHandler}>
              <Link
                className={link}
                href={href}>
                <span className={`${isActive && active}`}>{name}</span>
              </Link>
              <SideMenu
                showGoodsSideMenu={showGoodsSideMenu}
                showContactsSideMenu={showContactsSideMenu}
                href={href}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
