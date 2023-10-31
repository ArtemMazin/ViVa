import { useState, useEffect } from 'react';
import { SCREEN_MD, SCREEN_XL } from '../utils/constants';

export const useResize = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.screen.width);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width < SCREEN_MD,
    isScreenLg: width >= SCREEN_MD,
    isScreenXl: width >= SCREEN_XL,
  };
};
