import Link from 'next/link';
import React from 'react';
import { side, link, active, item } from './links.module.css';

const Links = ({ array, isActive }) => {
  return (
    <ul className={`${side} ${isActive ? active : ''} `}>
      {array.map(({ name, href }) => {
        return (
          <li
            key={name}
            className={item}>
            <Link
              href={href}
              className={link}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
