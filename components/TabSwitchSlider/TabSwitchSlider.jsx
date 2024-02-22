'use client';

import React, { useState } from 'react';
import styles from './TabSwitchSlider.module.css';
import { tabSwitchSlides } from '@/utils/tabSwitchSlides';
import Image from 'next/image';

function TabSwitchSlider(props) {
  const [tabActive, setTabActive] = useState(tabSwitchSlides[0].name);

  const toggleTab = tabName => {
    setTabActive(tabName);
  };

  return (
    <nav className="container">
      <ul className={styles.tabs}>
        {tabSwitchSlides.map(item => (
          <li key={item.name}>
            <div
              className={styles.tab}
              onMouseEnter={() => toggleTab(item.name)}
            >
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
              <Image
                src={`${
                  tabActive === item.name
                    ? '/tab-switch-slider/points/point_active.jpg'
                    : '/tab-switch-slider/points/point_hover.jpg'
                }`}
                alt={item.name}
                width={75}
                height={22}
                priority={true}
              />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TabSwitchSlider;
