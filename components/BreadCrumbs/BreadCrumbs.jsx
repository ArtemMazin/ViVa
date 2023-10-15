import Link from 'next/link';
import React from 'react';
import styles from './BreadCrumbs.module.css';

const BreadCrumbs = ({ currentLink, links }) => {
  return (
    <ul className={`${styles.crumbs} container`}>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              title={link.name}
              className={styles.crumb}>
              {link.name}
            </Link>
          </li>
        );
      })}
      <li>{currentLink}</li>
    </ul>
  );
};

export default BreadCrumbs;
