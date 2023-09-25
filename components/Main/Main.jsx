import React from 'react';
import { presentation } from './main.module.css';
import Slider from './slider/Slider';
import Presentation from './presentation/Presentation';

const Main = () => {
  return (
    <>
      <Slider />
      <Presentation />
      <section></section>
    </>
  );
};

export default Main;
