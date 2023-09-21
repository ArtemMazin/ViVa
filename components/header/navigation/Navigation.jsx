import React from 'react';
import { row, list, item } from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={row}>
      <ul className={`${list} container`}>
        <li className={item}>Главная</li>
        <li className={item}>Товары</li>
        <li className={item}>Доставка и оплата</li>
        <li className={item}>Каталог</li>
        <li className={item}>Контакты</li>
      </ul>
    </nav>
  );
};

export default Navigation;
