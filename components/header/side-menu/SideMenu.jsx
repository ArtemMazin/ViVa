import React from 'react';
import { side } from './sideMenu.module.css';

const SideMenu = ({ showGoodsSideMenu, showContactsSideMenu, href }) => {
  return (
    <>
      {showGoodsSideMenu && href === '/goods' && (
        <ul className={side}>
          <li>Втулки</li>
          <li>Шайбы</li>
          <li>Лента</li>
        </ul>
      )}
      {showContactsSideMenu && href === '/contacts' && (
        <ul className={side}>
          <li>Офис</li>
          <li>Склад</li>
        </ul>
      )}
    </>
  );
};

export default SideMenu;
