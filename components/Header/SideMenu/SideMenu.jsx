import React from 'react';
import { presentationImage } from '@/utils/constants';
import styles from './SideMenu.module.css';
import Link from 'next/link';

const SideMenu = ({ showGoodsSideMenu, href }) => {
  return (
    <>
      {href === '/goods' && (
        <ul className={`${styles.side} ${showGoodsSideMenu && styles.active} `}>
          {presentationImage.map(({ name, href }) => {
            return (
              <li
                key={name}
                className={styles.item}>
                <Link
                  href={href}
                  className={styles.link}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SideMenu;
