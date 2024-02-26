import { useState, useEffect } from 'react';

export const useResize = () => {
  const [isScreenSm, setScreenSm] = useState<boolean>(false);
  const [isScreenLg, setScreenLg] = useState<boolean>(false);
  const [isScreenXl, setScreenXl] = useState<boolean>(false);

  useEffect(() => {
    setScreenSm(window.matchMedia('(max-width: 768px)').matches);
    setScreenLg(window.matchMedia('(min-width: 768px)').matches);
    setScreenXl(window.matchMedia('(min-width: 1200px)').matches);
  }, []);

  return {
    isScreenSm,
    isScreenLg,
    isScreenXl,
  };
};
