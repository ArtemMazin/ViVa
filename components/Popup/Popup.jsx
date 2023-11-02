'use client';

import { createContext, useContext, useEffect } from 'react';
import styles from './Popup.module.css';
import { X } from 'lucide-react';
import cn from 'classnames';

const PopupContext = createContext();

const PopupCompound = ({ isOpen, onClose, style, children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <PopupContext.Provider value={{ isOpen, onClose, handleOverlay, style }}>
      {children}
    </PopupContext.Provider>
  );
};

PopupCompound.Overlay = function Overlay({ children }) {
  const { isOpen, handleOverlay } = useContext(PopupContext);
  return (
    <div
      className={`${styles.popup} ${isOpen ? styles.opened : ''}`}
      onClick={handleOverlay}
    >
      {children}
    </div>
  );
};

PopupCompound.Container = function Container({ children }) {
  const { style } = useContext(PopupContext);
  return (
    <div
      className={cn(styles.container, {
        [styles.form]: style === 'form',
      })}
    >
      {children}
    </div>
  );
};

PopupCompound.ButtonClose = function ButtonClose() {
  const { onClose } = useContext(PopupContext);
  return (
    <button className={styles.button} type="button" onClick={onClose}>
      <X size={32} />
    </button>
  );
};

const Popup = ({ isOpen, onClose, children, style = '' }) => {
  return (
    <PopupCompound isOpen={isOpen} onClose={onClose} style={style}>
      <PopupCompound.Overlay>
        <PopupCompound.Container>
          {children}
          <PopupCompound.ButtonClose />
        </PopupCompound.Container>
      </PopupCompound.Overlay>
    </PopupCompound>
  );
};

export default Popup;
