import React from 'react';
import { useResize } from '@/hooks/useResize';

function withScreen({ ScreenSmComponent, ScreenLgComponent }) {
  return function WithScreenComponent(props) {
    const { isScreenSm, isScreenLg } = useResize();

    return (
      <>
        {isScreenSm && ScreenSmComponent && <ScreenSmComponent {...props} />}
        {isScreenLg && ScreenLgComponent && <ScreenLgComponent {...props} />}
      </>
    );
  };
}

export default withScreen;
