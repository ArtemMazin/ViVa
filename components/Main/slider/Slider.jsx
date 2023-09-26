'use client';

import React, { useEffect, useState } from 'react';
import { slider } from './slider.module.css';
import SlidesList from './slidesList/SlidesList';
import { sliderImages } from '@/utils/constants';
import Dots from './dots/Dots';

const Slider = () => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setItems(sliderImages);
  }, []);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]);

  return (
    <section>
      <div
        className={slider}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
        <SlidesList
          slideNumber={slide}
          items={items}
        />
        <Dots
          slidesCount={items.length}
          goToSlide={goToSlide}
          slideNumber={slide}
        />
      </div>
    </section>
  );
};

export default Slider;
