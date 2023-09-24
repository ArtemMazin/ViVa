import Link from 'next/link';
import React from 'react';
import { side, link, active, item } from './links.module.css';
import Image from 'next/image';

const Links = ({ array, isActive }) => {
  return (
    <ul className={`${side} ${isActive ? active : ''} `}>
      {array.map(({ name, href, img }) => {
        return (
          <li
            key={name}
            className={item}>
            <Link
              href={href}
              className={link}>
              {name}
            </Link>
            {img && (
              <Image
                src={img}
                width={80}
                height={70}
                priority={true}
                alt={name}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
