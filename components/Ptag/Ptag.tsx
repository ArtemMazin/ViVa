import React from 'react';
import styles from './Ptag.module.css';

type PtagProps = {
  children: React.ReactNode;
};

const Ptag = ({ children }: PtagProps) => {
  return <p className={styles.p}>{children}</p>;
};

export default Ptag;
