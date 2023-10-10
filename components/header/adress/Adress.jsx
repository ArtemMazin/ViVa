import React from 'react';
import { row, adress, email, mailImage, locationImage, flex, mailLink } from './adress.module.css';
import Link from 'next/link';

const Adress = () => {
  return (
    <div className={row}>
      <div className={`${flex} container`}>
        <div className={adress}>
          <div className={locationImage}></div>
          <span>г.Москва, ул.Шарикоподшипниковская, д.1</span>
        </div>
        <div className={email}>
          <div className={mailImage}></div>
          <a
            href='mailto:info@gidmash.ru'
            title='Написать письмо'
            rel='nofollow'
            className={mailLink}>
            <span>info@gidmash.ru</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Adress;
