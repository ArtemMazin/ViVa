'use client';

import { useEffect } from 'react';
import styles from './Popup.module.css';
import { X } from 'lucide-react';
import cn from 'classnames';

// создаем отдельный компонент `Popup` для обертки любых попапов
const Popup = ({ isOpen, onClose, children, style = '' }) => {
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

  // создаем обработчик оверлея
  const handleOverlay = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // внутри верстка обертки любого попапа с классом `popup` и добавлением `popup_opened`.
  return (
    <div
      className={`${styles.popup} ${isOpen ? styles.opened : ''}`}
      onClick={handleOverlay}
    >
      {/* добавляем контейнер для контента попапа с возможностью изменения типа, чтобы ImagePopup можно было сделать с другими размерами */}
      <div
        className={cn(styles.container, {
          [styles.form]: style === 'form',
        })}
      >
        {children}
        <button className={styles.button} type="button" onClick={onClose}>
          <X size={32} />
        </button>
      </div>
    </div>
  );
};

export default Popup;
