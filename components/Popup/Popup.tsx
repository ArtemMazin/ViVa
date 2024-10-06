'use client';

import React, { useContext, useEffect, createContext } from 'react';
import styles from './Popup.module.css';
import { X } from 'lucide-react';
import cn from 'classnames';

// Интерфейс для контекста попапа
interface PopupContextType {
  isOpen: boolean;
  onClose: () => void;
  handleOverlay: (e: React.MouseEvent<HTMLElement>) => void;
  style?: string;
}

// Создание контекста попапа
const PopupContext = createContext<PopupContextType | undefined>(undefined);

// Интерфейс для пропсов попапа
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  style?: string;
  children: React.ReactNode;
}

// Основной компонент попапа
const PopupCompound: React.FC<PopupProps> & {
  Overlay: React.FC<{ children: React.ReactNode }>;
  Container: React.FC<{ children: React.ReactNode }>;
  ButtonClose: React.FC;
} = ({ isOpen, onClose, style, children }) => {
  // Эффект для закрытия попапа по нажатию Escape
  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  // Обработчик клика по оверлею
  const handleOverlay = (e: React.MouseEvent<HTMLElement>) => {
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

// Компонент оверлея
PopupCompound.Overlay = function Overlay({ children }) {
  const context = useContext(PopupContext);
  if (!context) throw new Error('Overlay must be used within PopupCompound');

  const { isOpen, handleOverlay } = context;
  return (
    <div
      className={`${styles.popup} ${isOpen ? styles.opened : ''}`}
      onClick={handleOverlay}
    >
      {children}
    </div>
  );
};

// Компонент контейнера
PopupCompound.Container = function Container({ children }) {
  const context = useContext(PopupContext);
  if (!context) throw new Error('Container must be used within PopupCompound');

  const { style } = context;
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

// Компонент кнопки закрытия
PopupCompound.ButtonClose = function ButtonClose() {
  const context = useContext(PopupContext);
  if (!context)
    throw new Error('ButtonClose must be used within PopupCompound');

  const { onClose } = context;
  return (
    <button className={styles.button} type="button" onClick={onClose}>
      <X size={32} />
    </button>
  );
};

// Компонент-обертка для удобства использования
const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
  style = '',
}) => {
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
