import React from 'react';
import Image from 'next/image';
import styles from './Tabs.module.css';
import { tabSwitchSlides } from '@/utils/tabSwitchSlides';

function Tabs({ tabActive, toggleTab }) {
  return (
    <ul className={`${styles.tabs} container`}>
      {tabSwitchSlides.map(item => (
        <li key={item.name}>
          <div className={styles.tab} onMouseEnter={() => toggleTab(item.name)}>
            <Image
              src={item.icon}
              alt={item.name}
              width={75}
              height={60}
              priority={true}
            />
            <span
              className={`${styles.tab_name} ${
                tabActive === item.name && styles.tab_name_active
              }`}
            >
              {item.name}
            </span>
            <div className={styles.line}></div>
            <div
              className={`${styles.circle} ${
                tabActive === item.name && styles.circle_active
              }`}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
