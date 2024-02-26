import Link from 'next/link';
import React from 'react';
import styles from './BreadCrumbs.module.css';
import cn from 'classnames';

type BreadCrumbsProps = {
  currentLink: string;
  links: {
    name: string;
    href: string;
  }[];
  className?: string;
};

const BreadCrumbs = ({ currentLink, links, className }: BreadCrumbsProps) => {
  return (
    <ul className={cn(styles.crumbs, className)}>
      {links.map(link => {
        return (
          <li key={link.name}>
            <Link href={link.href} title={link.name} className={styles.crumb}>
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
