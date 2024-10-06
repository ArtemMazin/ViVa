import React from 'react';
import Image from 'next/image';
import styles from './Tabs.module.css';
import { tabSwitchSlides } from '@/utils/tabSwitchSlides';

interface TabProps {
  tabActive: string;
  toggleTab: (tabName: string) => void;
}

const Tabs: React.FC<TabProps> = ({ tabActive, toggleTab }) => {
  return (
    <ul className={`${styles.tabs} container`}>
      {tabSwitchSlides.map(item => (
        <li key={item.name}>
          <div className={styles.tab} onMouseEnter={() => toggleTab(item.name)}>
            <div className={styles.icon_container}>
              <Image
                src={item.icon}
                alt={item.name}
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
                priority={true}
              />
            </div>
            <div className={styles.tab_name_container}>
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
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
