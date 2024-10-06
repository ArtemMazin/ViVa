import React from 'react';
import { products } from '@/utils/products';
import styles from './SideMenu.module.css';
import Link from 'next/link';

interface SideMenuProps {
  showPodshipnikiSideMenu: boolean;
  href: string;
}

const SideMenu: React.FC<SideMenuProps> = ({
  showPodshipnikiSideMenu,
  href,
}) => {
  if (href !== '/podshipniki') return null;

  return (
    <ul
      className={`${styles.side} ${showPodshipnikiSideMenu && styles.active}`}
    >
      {products.map(({ name, href }) => (
        <li key={name} className={styles.item}>
          <Link href={href} className={styles.link}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
