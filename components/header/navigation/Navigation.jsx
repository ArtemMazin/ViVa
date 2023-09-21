import React from 'react';
import { row, list, item } from './navigation.module.css';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className={row}>
      <ul className={`${list} container`}>
        <li>
          <Link
            href='/'
            className={item}>
            Главная
          </Link>
        </li>
        <li>
          <Link
            href='/goods'
            className={item}>
            Товары
          </Link>
        </li>
        <li>
          <Link
            href='/delivery'
            className={item}>
            Доставка и оплата
          </Link>
        </li>
        <li>
          <Link
            href='/catalog'
            className={item}>
            Каталог
          </Link>
        </li>
        <li>
          <Link
            href='/contacts'
            className={item}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
