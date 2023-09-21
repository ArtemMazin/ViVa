import React from 'react';
import { header } from './header.module.css';
import Adress from './adress/Adress';
import Content from './content/Content';

const Header = () => {
  return (
    <header className={header}>
      <Adress />
      <Content />
    </header>
  );
};

export default Header;
