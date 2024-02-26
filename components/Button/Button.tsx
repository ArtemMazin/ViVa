import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  size?: 's' | 'm' | 'l';
  isDisable?: boolean;
  fixed?: boolean;
  children: React.ReactNode;
  className?: string;
};

const Button = ({
  type,
  size = 's',
  isDisable,
  fixed,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(styles.button, {
        [styles.fixed]: fixed,
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
