import React from 'react';
import styles from './Ptag.module.css';

const Ptag = ({ tag, children }) => {
  switch (tag) {
    case 'p':
      return <p className={styles.p}>{children}</p>;

    default:
      return <></>;
  }
};

export default Ptag;
