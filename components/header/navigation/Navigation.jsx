'use client';

import React, { useState } from 'react';
import { row, list, item, active, side } from './navigation.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import navLinks from '@/utils/constants';

const Navigation = () => {
  const [showGoodsSideMenu, setShowGoodsSideMenu] = useState(false);
  const [showContactsSideMenu, setShowContactsSideMenu] = useState(false);
  const pathname = usePathname();

  const onMouseEnterHandler = (e) => {
    e.target.pathname === '/goods' && setShowGoodsSideMenu(true);
    e.target.pathname === '/contacts' && setShowContactsSideMenu(true);
  };

  const onMouseLeaveHandler = () => {
    setShowGoodsSideMenu(false);
    setShowContactsSideMenu(false);
  };

  return (
    <nav className={row}>
      <ul className={`${list} container`}>
        {navLinks.map(({ href, name }) => {
          const isActive = pathname === href;
          return (
            <li key={name}>
              <Link
                href={href}
                className={isActive ? `${item} ${active}` : `${item}`}
                onMouseEnter={onMouseEnterHandler}>
                {name}
                {showGoodsSideMenu && href === '/goods' && (
                  <ul
                    className={side}
                    onMouseLeave={onMouseLeaveHandler}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>
                )}
                {showContactsSideMenu && href === '/contacts' && (
                  <ul
                    className={side}
                    onMouseLeave={onMouseLeaveHandler}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
