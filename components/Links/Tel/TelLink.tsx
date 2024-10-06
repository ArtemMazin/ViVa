import React from 'react';
import cn from 'classnames';
import styles from './TelLink.module.css';

interface TelLinkProps {
  color?: 'white' | 'black';
}

const TelLink: React.FC<TelLinkProps> = ({ color = 'white' }) => {
  return (
    <a
      href="tel:+74959260774"
      title="Позвонить"
      rel="nofollow"
      className={cn(styles.tel, {
        [styles.white]: color === 'white',
        [styles.black]: color === 'black',
      })}
    >
      <span> +7 (495) 926-07-74</span>
    </a>
  );
};

export default TelLink;
