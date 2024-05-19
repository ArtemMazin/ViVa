'use client';

import React, { useState } from 'react';
import { tabSwitchSlides } from '@/utils/tabSwitchSlides';
import styles from './TabSwitchSlider.module.css';
import Tabs from './Tabs/Tabs';
import Slides from './Slides/Slides';
import Htag from '../Htag/Htag';

function TabSwitchSlider() {
  const [tabActive, setTabActive] = useState(tabSwitchSlides[0].name);

  const toggleTab = (tabName: string) => {
    setTabActive(tabName);
  };

  return (
    <section className={styles.tabSwitchSlider}>
      <div className={styles.tabSwitchSlider__title}>
        <Htag tag="h2" border="down" className={styles.main_title}>
          ОБЛАСТИ ПРИМЕНЕНИЯ
        </Htag>
        <Htag tag="h3">ВТУЛКИ/ШАЙБЫ/ЛЕНТА</Htag>
      </div>

      <Tabs tabActive={tabActive} toggleTab={toggleTab} />
      <Slides tabActive={tabActive} />
    </section>
  );
}

export default TabSwitchSlider;
