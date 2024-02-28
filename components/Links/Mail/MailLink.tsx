import React from 'react';
import { Mail } from 'lucide-react';
import cn from 'classnames';
import styles from './MailLink.module.css';

type MailLinkProps = {
  color?: 'white' | 'black';
};

const MailLink = ({ color = 'white' }: MailLinkProps) => {
  return (
    <a
      href="mailto:info@gidmash.ru"
      title="Написать письмо"
      rel="nofollow"
      className={cn(styles.mailLink, {
        [styles.white]: color === 'white',
        [styles.black]: color === 'black',
      })}
    >
      <Mail size={16} className={styles.mailIcon} />
      <span>info@gidmash.ru</span>
    </a>
  );
};

export default MailLink;
