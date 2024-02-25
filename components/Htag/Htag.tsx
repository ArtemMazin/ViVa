import React from 'react';
import styles from './Htag.module.css';
import cn from 'classnames';

type HtagProps = {
  tag: 'h1' | 'h2' | 'h3';
  border?: 'left' | 'down';
  children: React.ReactNode;
  className?: string;
};

const Htag = ({ tag, border, children, className, ...props }: HtagProps) => {
  switch (tag) {
    case 'h1':
      return (
        <h1
          className={cn(styles.h1, className, {
            [styles.borderLeft]: border === 'left',
            [styles.borderDown]: border === 'down',
          })}
          {...props}
        >
          {children}
        </h1>
      );

    case 'h2':
      return (
        <h2
          className={cn(styles.h2, className, {
            [styles.borderLeft]: border === 'left',
            [styles.borderDown]: border === 'down',
          })}
        >
          {children}
        </h2>
      );

    case 'h3':
      return (
        <h3
          className={cn(styles.h3, className, {
            [styles.borderLeft]: border === 'left',
            [styles.borderDown]: border === 'down',
          })}
        >
          {children}
        </h3>
      );

    default:
      return <></>;
  }
};

export default Htag;
