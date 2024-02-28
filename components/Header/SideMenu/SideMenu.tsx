import React from 'react';
import { products } from '@/utils/products';
import styles from './SideMenu.module.css';
import Link from 'next/link';

type SideMenuProps = {
  showGoodsSideMenu: boolean;
  href: string;
};

const SideMenu = ({ showGoodsSideMenu, href }: SideMenuProps) => {
  return (
    <>
      {href === '/goods' && (
        <ul className={`${styles.side} ${showGoodsSideMenu && styles.active} `}>
          {products.map(({ name, href }) => {
            return (
              <li key={name} className={styles.item}>
                <Link href={href} className={styles.link}>
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
