import React from 'react';
import { triangle } from './triangle.module.css';

const Triangle = ({ href, onClickGoodsHandler, onClickContactsHandler }) => {
  return (
    <>
      {href === '/goods' && (
        <div
          className={triangle}
          onClick={onClickGoodsHandler}></div>
      )}
      {href === '/contacts' && (
        <div
          className={triangle}
          onClick={onClickContactsHandler}></div>
      )}
    </>
  );
};

export default Triangle;
