import React from 'react';
import { useResize } from '@/hooks/useResize';

function withScreen({
  ScreenSmComponent,
  ScreenMdComponent,
  ScreenLgComponent,
  ScreenXlComponent,
  ScreenXxlComponent,
}) {
  return function WithScreenComponent(props) {
    const { isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl } =
      useResize();

    return (
      <>
        {isScreenSm && ScreenSmComponent && <ScreenSmComponent {...props} />}
        {isScreenMd && ScreenMdComponent && <ScreenMdComponent {...props} />}
        {isScreenLg && ScreenLgComponent && <ScreenLgComponent {...props} />}
        {isScreenXl && ScreenXlComponent && <ScreenXlComponent {...props} />}
        {isScreenXxl && ScreenXxlComponent && <ScreenXxlComponent {...props} />}
      </>
    );
  };
}

export default withScreen;
