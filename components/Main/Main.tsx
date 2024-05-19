import React from 'react';
import Slider from './Slider/Slider';
import Presentation from './Presentation/Presentation';
import TabSwitchSlider from '../TabSwitchSlider/TabSwitchSlider';
import styles from './Main.module.css';
import Htag from '../Htag/Htag';
import Description from './Description/Description';

const Main = () => {
  return (
    <div className={styles.main}>
      <Slider />
      <Description />
      <TabSwitchSlider />
      <Presentation />
    </div>
  );
};

export default Main;
