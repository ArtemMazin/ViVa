import React from 'react';
import styles from './MobileMenu.module.css';
import Navigation from './Navigation/Navigation';
import Logo from '@/components/Logo/Logo';

interface MobileMenuProps {
  toggleHideMenu: () => void;
  isMenuOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  toggleHideMenu,
  isMenuOpen,
}) => {
  return (
    <div className={`${styles.wrapper} ${isMenuOpen && styles.visible}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Logo src="/image/logo-black.svg" />
        </div>
        <Navigation toggleHideMenu={toggleHideMenu} />
      </div>
    </div>
  );
};

export default MobileMenu;
