import React from 'react';
import styles from './Htag.module.css';
import cn from 'classnames';

// Определение типов пропсов для компонента Htag
type HtagProps = {
  tag: 'h1' | 'h2' | 'h3';
  border?: 'left' | 'down';
  children: React.ReactNode;
  className?: string;
};

const Htag: React.FC<HtagProps> = ({
  tag,
  border,
  children,
  className,
  ...props
}) => {
  // Общие классы для всех заголовков
  const commonClasses = cn(className, {
    [styles.borderLeft]: border === 'left',
    [styles.borderDown]: border === 'down',
  });

  // Рендеринг соответствующего заголовка в зависимости от пропса tag
  switch (tag) {
    case 'h1':
      return (
        <h1 className={cn(styles.h1, commonClasses)} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return <h2 className={cn(styles.h2, commonClasses)}>{children}</h2>;
    case 'h3':
      return <h3 className={cn(styles.h3, commonClasses)}>{children}</h3>;
    default:
      return null;
  }
};

export default Htag;
