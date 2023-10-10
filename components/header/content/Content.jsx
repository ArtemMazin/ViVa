import React from 'react';
import { flex, inputContainer, input, search, logo, contacts, tel } from './content.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Content = () => {
  return (
    <div className={`${flex} container`}>
      <Image
        src='/image/logo-black.svg'
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
      <div className={contacts}>
        <span>Отдел продаж:</span>
        <a
          href='tel:+74959260774'
          title='Позвонить'
          rel='nofollow'
          className={tel}>
          +7 (495) 926-07-74
        </a>
      </div>
    </div>
  );
};

export default Content;
