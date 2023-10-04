'use client';

import React, { useState } from 'react';
import { buttonHamburger, buttonHamburgerClose } from './hideMenu.module.css';

const HideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {!isMenuOpen ? (
        <button
          className={buttonHamburger}
          onClick={toggleHideMenu}
          tabIndex={1}
        />
      ) : (
        <button
          className={buttonHamburgerClose}
          onClick={toggleHideMenu}
          tabIndex={1}
        />
      )}
    </>
  );
};

export default HideMenu;
