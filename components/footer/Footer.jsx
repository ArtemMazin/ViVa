import React from 'react';
import { footer, logo, mapContainer } from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={mapContainer}>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A778ecc0b2189d3f08dc38c79e91971f31d7cbf00bd0f8e98abad39ff995a7272&amp;source=constructor'
          width='100%'
          height='240'
          frameBorder='0'
          title='Встроенные Яндекс Карты'></iframe>
      </div>
      <div className='container'>
        <Image
          src='/image/logo.png'
          width={100}
          height={40}
          priority={true}
          alt='Товарный знак HMG'
          className={logo}></Image>
      </div>
    </footer>
  );
};

export default Footer;
