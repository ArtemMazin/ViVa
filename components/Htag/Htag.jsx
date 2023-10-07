import React from 'react';
import styles from './Htag.module.css';
import cn from 'classnames';

const Htag = ({ tag, children }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;

    case 'h1underline':
      return <h1 className={cn(styles.h1, styles.underline)}>{children}</h1>;

    case 'h2':
      return <h2 className={styles.h2}>{children}</h2>;

    case 'h2border':
      return <h2 className={cn(styles.h2, styles.border)}>{children}</h2>;

    case 'h3':
      return <h3 className={styles.h3}>{children}</h3>;

    default:
      return <></>;
  }
};

export default Htag;
