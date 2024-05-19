import React from 'react';
import cn from 'classnames';
import styles from './Ptag.module.css';

type PtagProps = {
  children: React.ReactNode;
  margin?: 'bottom';
  className?: string;
};

const Ptag = ({ children, className, margin }: PtagProps) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.marginDown]: margin === 'bottom',
      })}
    >
      {children}
    </p>
  );
};

export default Ptag;
