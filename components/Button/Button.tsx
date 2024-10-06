import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

// Определение типов пропсов для компонента Button
type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  size?: 's' | 'm' | 'l';
  isDisable?: boolean;
  fixed?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  size = 's',
  isDisable,
  fixed,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(styles.button, className, {
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
