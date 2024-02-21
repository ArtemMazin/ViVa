import { navLinks } from '@/utils/constants';
import styles from './Navigation.module.css';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Navigation = ({ toggleHideMenu }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.list}>
        {navLinks.map(({ href, name }) => {
          const isActive = pathname === href;
          return (
            <li key={name} className={styles.item}>
              <Link
                className={`${isActive && styles.active} ${styles.link}`}
                href={href}
                onClick={toggleHideMenu}
              >
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
