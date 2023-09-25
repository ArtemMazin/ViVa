import React from 'react';
import { slider, image, presentation } from './main.module.css';

const Main = () => {
  return (
    <>
      <section className={slider}>
        <div className={image}></div>
      </section>
      <section className={presentation}>
        <h2 className='container'>Metal-polymer self-lubricating bearings</h2>
        <p className='container'>
          Two-layer metal-polymer self-lubricating bearing consists of metal backing with PTFE compounded on the
          surface. It is lighter and has better mechanical and load performance. The thicker PTFE layer can improve the
          installation flexibility and can also match wider designed tolerance range. In addition, the wear resistance
          and noise absorbing feature is improved while more variable torque range could be fitted.
        </p>
      </section>
      <section></section>
    </>
  );
};

export default Main;
