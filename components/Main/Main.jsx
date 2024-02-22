import React from 'react';
import Slider from './Slider/Slider';
import Presentation from './Presentation/Presentation';
import TabSwitchSlider from '../TabSwitchSlider/TabSwitchSlider';

const Main = () => {
  return (
    <>
      <Slider />
      <TabSwitchSlider />
      <Presentation />
    </>
  );
};

export default Main;
