import React from 'react';
import { contactsLinks, goodsLinks } from '@/utils/constants';
import Links from './links/Links';

const SideMenu = ({ showGoodsSideMenu, showContactsSideMenu, href }) => {
  return (
    <>
      {showGoodsSideMenu && href === '/goods' && <Links array={goodsLinks} />}
      {showContactsSideMenu && href === '/contacts' && <Links array={contactsLinks} />}
    </>
  );
};

export default SideMenu;
