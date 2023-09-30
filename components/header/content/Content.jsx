import React from 'react';
import { flex, inputContainer, input, search, logo, tel, text } from './content.module.css';
import Image from 'next/image';

const Content = () => {
  return (
    <div className={`${flex} container`}>
      <Image
        src='/image/logo.png'
        width={100}
        height={40}
        priority={true}
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
        <p className={text}>Отдел продаж:</p>
        <p className={tel}>(495)926-07-74</p>
      </div>
    </div>
  );
};

export default Content;
