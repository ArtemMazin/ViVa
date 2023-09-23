import Link from 'next/link';
import React from 'react';
import { side, link } from './links.module.css';

const Links = ({ array }) => {
  return (
    <ul className={side}>
      {array.map(({ name, href }) => {
        return (
          <li key={name}>
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
