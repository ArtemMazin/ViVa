'use client';

import { useEffect, useState } from 'react';

const useScreenWidth = () => {
  const [device, setDevice] = useState('');

  useEffect(() => {
    const screenWidth = window.screen.width;

    if (screenWidth >= 1280) {
      setDevice('pc');
    } else if (screenWidth >= 980 && screenWidth < 1280) {
      setDevice('notebook');
    } else if (screenWidth >= 768 && screenWidth < 980) {
      setDevice('table');
    } else {
      setDevice('mobile');
    }
  }, [device]);
  return { device };
};
export default useScreenWidth;
