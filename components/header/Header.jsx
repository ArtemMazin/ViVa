import React from 'react';
import { header } from './header.module.css';
import Adress from './adress/Adress';

const Header = () => {
  return (
    <header className={header}>
      <Adress />
    </header>
  );
};

export default Header;
