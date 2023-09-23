import React from 'react';
import { triangle, active } from './triangle.module.css';

const Triangle = ({ href, onClickGoodsHandler, onClickContactsHandler, showGoodsSideMenu, showContactsSideMenu }) => {
  return (
    <>
      {href === '/goods' && (
        <div
          className={`${triangle} ${showGoodsSideMenu && active}`}
          onClick={onClickGoodsHandler}></div>
      )}
      {href === '/contacts' && (
        <div
          className={`${triangle} ${showContactsSideMenu && active}`}
          onClick={onClickContactsHandler}></div>
      )}
    </>
  );
};

export default Triangle;
