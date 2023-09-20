import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div>
        <ul className='flex gap-20'>
          <Link href='/'>Главная</Link>
          <Link href='/bearings'>Подшипники</Link>
          <Link href='/delivery'>Доставка</Link>
          <Link href='/contacts'>Контакты</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
