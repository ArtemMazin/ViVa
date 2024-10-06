import React from 'react';
import cn from 'classnames';
import styles from './Ptag.module.css';

// Определение типов пропсов для компонента Ptag
type PtagProps = {
  children: React.ReactNode;
  margin?: 'bottom';
  className?: string;
};

const Ptag: React.FC<PtagProps> = ({ children, className, margin }) => {
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
