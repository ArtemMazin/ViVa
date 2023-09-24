import React from 'react';
import { footer, logo } from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={footer}>
      <div className='container'>
        <Image
          src='/image/logo.gif'
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
