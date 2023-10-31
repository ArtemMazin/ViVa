import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';
import SideMenu from '../SideMenu/SideMenu';
import { useResize } from '@/hooks/useResize';

const Navigation = () => {
  const [showGoodsSideMenu, setShowGoodsSideMenu] = useState(false);
  const pathname = usePathname();
  const { isScreenXl } = useResize();

  const onMouseEnterHandler = href => {
    isScreenXl && href === '/goods' && setShowGoodsSideMenu(true);
  };

  const onMouseLeaveHandler = () => {
    setShowGoodsSideMenu(false);
  };

  return (
    <nav className={styles.row}>
      <ul className={`${styles.list} container`}>
        {navLinks.map(({ href, name }) => {
          const isActive = pathname === href;
          return (
            <li
              key={name}
              className={styles.item}
              onMouseEnter={() => onMouseEnterHandler(href)}
              onMouseLeave={onMouseLeaveHandler}
            >
              <Link className={styles.link} href={href}>
                <span className={`${isActive && styles.active}`}>{name}</span>
              </Link>
              <SideMenu showGoodsSideMenu={showGoodsSideMenu} href={href} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
