'use client';

import React, { useState } from 'react';
import { tabSwitchSlides } from '@/utils/tabSwitchSlides';
import styles from './TabSwitchSlider.module.css';
import Tabs from './Tabs/Tabs';
import Slides from './Slides/Slides';

function TabSwitchSlider(props) {
  const [tabActive, setTabActive] = useState(tabSwitchSlides[0].name);

  const toggleTab = tabName => {
    setTabActive(tabName);
  };

  return (
    <section className={styles.tabSwitchSlider}>
      <Tabs tabActive={tabActive} toggleTab={toggleTab} />
      <Slides tabActive={tabActive} />
    </section>
  );
}

export default TabSwitchSlider;
