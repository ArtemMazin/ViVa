import Link from 'next/link';
import React from 'react';
import styles from './BreadCrumbs.module.css';
import cn from 'classnames';

// Определение типов для пропсов компонента BreadCrumbs
type BreadCrumbsProps = {
  currentLink: string;
  links: {
    name: string;
    href: string;
  }[];
  className?: string;
};

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({
  currentLink,
  links,
  className,
}) => {
  return (
    <ul className={cn(styles.crumbs, className)}>
      {links.map(link => (
        <li key={link.name}>
          <Link href={link.href} title={link.name} className={styles.crumb}>
            {link.name}
          </Link>
        </li>
      ))}
      <li>{currentLink}</li>
    </ul>
  );
};

export default BreadCrumbs;
