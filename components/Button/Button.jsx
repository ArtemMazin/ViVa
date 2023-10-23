import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

const Button = ({ type, size = 's', isDisable, children, ...props }) => {
  return (
    <button
      type={type}
      className={cn(styles.button, {
        [styles.disable]: isDisable,
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
