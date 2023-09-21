import React from 'react';
import { row, adress, email, mailImage, locationImage, flex } from './adress.module.css';

const Adress = () => {
  return (
    <div className={row}>
      <div className={`${flex} container`}>
        <div className={adress}>
          <div className={locationImage}></div>
          <p>г.Москва, ул.Шарикоподшипниковская, д.1</p>
        </div>
        <div className={email}>
          <div className={mailImage}></div>
          <p>info@gidmash.ru</p>
        </div>
      </div>
    </div>
  );
};

export default Adress;
