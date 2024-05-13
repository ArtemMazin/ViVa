import React from 'react';
import Slider from './Slider/Slider';
import Presentation from './Presentation/Presentation';
import TabSwitchSlider from '../TabSwitchSlider/TabSwitchSlider';
import styles from './Main.module.css';
import Htag from '../Htag/Htag';

const Main = () => {
  return (
    <div className={styles.main}>
      <Htag tag="h1" border="left" className={styles.main__title}>
        ПОДШИПНИКИ СКОЛЬЖЕНИЯ HMG
      </Htag>
      <Slider />
      <TabSwitchSlider />
      <Presentation />
    </div>
  );
};

export default Main;
