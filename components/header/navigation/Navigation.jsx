'use client';

import React from 'react';
import { row, list, item, active } from './navigation.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import navLinks from '@/utils/constants';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={row}>
      <ul className={`${list} container`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={isActive ? `${item} ${active}` : `${item}`}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
