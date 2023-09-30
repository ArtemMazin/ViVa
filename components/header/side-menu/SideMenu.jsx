import React from 'react';
import { contactsLinks, presentationImage } from '@/utils/constants';
import Links from './links/Links';

const SideMenu = ({ showGoodsSideMenu, showContactsSideMenu, href }) => {
  return (
    <>
      {href === '/goods' && (
        <Links
          array={presentationImage}
          isActive={showGoodsSideMenu}
        />
      )}
      {href === '/contacts' && (
        <Links
          array={contactsLinks}
          isActive={showContactsSideMenu}
        />
      )}
    </>
  );
};

export default SideMenu;
