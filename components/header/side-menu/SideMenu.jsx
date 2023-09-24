import React from 'react';
import { contactsLinks, goodsLinks } from '@/utils/constants';
import Links from './links/Links';

const SideMenu = ({ showGoodsSideMenu, showContactsSideMenu, href }) => {
  return (
    <>
      {href === '/goods' && (
        <Links
          array={goodsLinks}
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
