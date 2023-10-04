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
      <nav className={`${hideWrapper} ${isMenuOpen && hideActive}`}>
        <ul className={`${list} container`}>
          {navLinks.map(({ href, name }) => {
            const isActive = pathname === href;
            return (
              <li
                key={name}
                className={item}>
                <Link
                  className={link}
                  href={href}>
                  <p className={`${isActive ? active : ``}`}>{name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default HideMenu;
