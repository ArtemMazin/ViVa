'use client';

import React from 'react';
import MobileHeader from './MobileHeader/MobileHeader';
import { Suspense } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import DesktopHeader from './DesktopHeader/DesktopHeader';
import withScreen from '../HOCs/withScreen';

function FakeHeader() {
  return <></>;
}

const CustomHeader = withScreen({
  ScreenSmComponent: () => <MobileHeader />,
  ScreenMdComponent: () => <MobileHeader />,
  ScreenLgComponent: () => <DesktopHeader />,
  ScreenXlComponent: () => <DesktopHeader />,
  ScreenXxlComponent: () => <DesktopHeader />,
});

const Header = () => {
  return (
    <Suspense fallback={<FakeHeader />}>
      <CustomHeader />
      <ContactUs />
    </Suspense>
  );
};

export default Header;
