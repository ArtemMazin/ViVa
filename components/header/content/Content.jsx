import React from 'react';
import { flex, logo, contacts, tel } from './content.module.css';
import Image from 'next/image';
import Search from '@/components/Search/Search';

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
      <Search />
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
