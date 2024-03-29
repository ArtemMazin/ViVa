import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ message }: { message: string }) => {
  return <span className={styles.message}>{message}</span>;
};

export default Notification;
