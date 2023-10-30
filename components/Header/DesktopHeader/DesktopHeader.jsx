import React from 'react';
import Adress from '../Adress/Adress';
import Content from '../Content/Content';
import Navigation from '../Navigation/Navigation';
import styles from './DesctopHeader.module.css';

const DesktopHeader = () => {
  return (
    <header className={styles.wrapper}>
      <Adress />
      <Content />
      <Navigation />
    </header>
  );
};

export default DesktopHeader;
