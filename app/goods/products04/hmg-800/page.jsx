import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import { flex, table, cell, image, section, scroll } from './hmg800-815.module.css';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink='Подшипники HMG-800/815'
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          { href: 'https://vi-va.vercel.app/goods/products03', name: 'Биметаллические подшипники, требующие смазки' },
        ]}
      />
      <section className={flex}>
        <Image
          src='/image/pages/hmg800-815/hmg800-815.jpg'
          width={600}
          height={450}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw'
          priority={true}
          alt='Подшипники HMG-800/815'
          className={image}
        />
        <div>
          <Htag tag='h1'>HMG-800/815</Htag>
          <Htag
            tag='h2'
            border='left'>
            Описание
          </Htag>
          <Ptag tag='p'>
            Бронзово-свинцовый сплав HMG-800 — CuSb10Pb10, также доступен материал с низким содержанием свинца HMG-815
            со сплавом CuSn10Pb5. Эти материалы имеют низкие коэффициенты трения, хорошую износостойкость и подходят для
            условий работы со смазкой. Для улучшения смазывающих свойств в качестве опции могут быть предусмотрены
            масляные канавки.
          </Ptag>
        </div>
      </section>
      <section className={flex}>
        <div>
          <Htag
            tag='h2'
            border='left'>
            Структура
          </Htag>
          <Ptag tag='p'>
            1. Спеченный сплав бронзы и алюминия со свинцом обеспечивает хорошие самосмазывающиеся свойства, хорошую
            усталостную прочность и противозадирные свойства.
          </Ptag>
          <Ptag tag='p'>2. Стальная основа обеспечивает механическую прочность подшипника.</Ptag>
        </div>

        <Image
          src='/image/pages/hmg800-815/hmg800-815structure.png'
          width={300}
          height={240}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw'
          priority={true}
          alt='Структура материала HMG-800/815'
        />
      </section>
      <section>
        <Htag
          tag='h2'
          border='left'>
          Технические данные
        </Htag>
        <div className={scroll}>
          <table className={table}>
            <tbody>
              <tr>
                <td
                  rowSpan='2'
                  style={{ width: '16%' }}
                  className={cell}>
                  Макс. нагрузка
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  Статический
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  250 Н/мм<sup>2</sup>
                </td>
                <td
                  rowSpan='5'
                  className={cell}>
                  &nbsp;
                </td>
                <td
                  style={{ width: '24%' }}
                  className={cell}>
                  Твердость сплава
                </td>
                <td
                  style={{ width: '24%' }}
                  className={cell}>
                  ＞70HB
                </td>
              </tr>
              <tr>
                <td className={cell}>Динамический</td>
                <td className={cell}>
                  <span style={{ width: '16%' }}>
                    140 Н/мм<sup>2</sup>
                  </span>
                </td>
                <td className={cell}>Диапазон рабочих температур</td>
                <td className={cell}>-40°C~+ 250°C</td>
              </tr>
              <tr>
                <td
                  colspan='2'
                  className={cell}>
                  Макс. скорость (со смазкой)
                </td>
                <td className={cell}>2.5 м/с</td>
                <td className={cell}>Коэффициент трения</td>
                <td className={cell}>0.05~0.20</td>
              </tr>
              <tr>
                <td
                  colspan='2'
                  className={cell}>
                  Макс. PV
                </td>
                <td className={cell}>
                  2.8 Н/мм<sup>2</sup>*м/с
                </td>
                <td className={cell}>Теплопроводность</td>
                <td className={cell}>
                  23 Вт(м*К)<sup>-1</sup>
                </td>
              </tr>
              <tr>
                <td
                  colspan='2'
                  className={cell}>
                  Предел прочности
                </td>
                <td className={cell}>
                  350 Н/мм<sup>2</sup>
                </td>
                <td className={cell}>Коэффициент температурного расширения</td>
                <td className={cell}>
                  14*10<sup>-6</sup>*K<sup>-1</sup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <Htag
          tag='h2'
          border='left'>
          Типичные области применения
        </Htag>
        <Ptag tag='p'>
          Эти материалы подходят для использования при средней нагрузке и в условиях средней и низкой скорости. Хорошая
          заливка сплава обеспечивает пылезащиту подшипников. Подшипники можно использовать в запыленной среде и там,
          где существуют защитные оболочки. Типичные области применения включают шатуны, ролики ходовой части, проушины
          штока гидроцилиндра, погрузочно-разгрузочную технику, сельскохозяйственную технику, лесную технику и так
          далее. Эти два материала содержат свинец, использование которого для некоторых специальных деталей ограничено
          в соответствии с соответствующими законами и правилами.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
