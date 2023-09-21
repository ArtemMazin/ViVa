import React from 'react';
import { header } from './header.module.css';
import Adress from './adress/Adress';
import Content from './content/Content';
import Navigation from './navigation/Navigation';

const Header = () => {
  return (
    <header className={header}>
      <Adress />
      <Content />
      <Navigation />
    </header>
  );
};

export default Header;
