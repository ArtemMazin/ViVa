import React from 'react';
import { presentationImage } from '@/utils/constants';
import Links from './links/Links';

const SideMenu = ({ showGoodsSideMenu, href }) => {
  return (
    <>
      {href === '/goods' && (
        <Links
          array={presentationImage}
          isActive={showGoodsSideMenu}
        />
      )}
    </>
  );
};

export default SideMenu;
