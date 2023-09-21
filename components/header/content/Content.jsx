import React from 'react';
import { flex, inputContainer, input, search, logo, tel, text } from './main.module.css';
import Image from 'next/image';

const Content = () => {
  return (
    <div className={`${flex} container`}>
      <Image
        src='/image/logo.gif'
        width={100}
        height={40}
        alt='Товарный знак HMG'
        className={logo}></Image>
      <div className={inputContainer}>
        <input
          type='text'
          placeholder='Поиск'
          className={input}
        />
        <div className={search}></div>
      </div>
      <div>
        <p className={tel}>(495)926-07-74</p>
        <p className={text}>Консультант</p>
      </div>
    </div>
  );
};

export default Content;
