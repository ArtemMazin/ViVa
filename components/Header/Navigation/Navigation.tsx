import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';
import SideMenu from '../SideMenu/SideMenu';
import { useResize } from '@/hooks/useResize';

const Navigation = () => {
  const [showPodshipnikiSideMenu, setShowPodshipnikiSideMenu] = useState(false);
  const pathname = usePathname();
  const { isScreenXl } = useResize();

  const onMouseEnterHandler = (href: string) => {
    isScreenXl && href === '/podshipniki' && setShowPodshipnikiSideMenu(true);
  };

  const onMouseLeaveHandler = () => {
    setShowPodshipnikiSideMenu(false);
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
              <SideMenu
                showPodshipnikiSideMenu={showPodshipnikiSideMenu}
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
