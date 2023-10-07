import Image from 'next/image';
import React from 'react';
import { flex, text, table, cell, image, section, scroll } from './hmg11.module.css';
import Htag from '@/components/Htag/Htag';

const hmg11 = () => {
  return (
    <main className={`${section} container`}>
      <section className={flex}>
        <Image
          src='/image/pages/hmg11/hmg11.jpg'
          width={600}
          height={450}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw'
          priority={true}
          alt='Подшипники HMG-11'
          className={image}
        />
        <div>
          <Htag tag='h1'>HMG-11</Htag>
          <Htag tag='h2'>Описание</Htag>
          <p className={text}>
            Материал имеет те же характеристики, что и стандартные полимерные композитные подшипники со стальной опорой.
            Кроме того, бронзовая задняя часть обеспечивает лучшую коррозионную стойкость и теплопроводность. Поэтому
            его легче собирать и он имеет лучшую магнитную устойчивость.
          </p>
        </div>
      </section>
      <section className={flex}>
        <div>
          <Htag tag='h2'>Структура</Htag>
          <p className={text}>
            1. Толщина смеси ПТФЭ/волокна 0,01–0,03 мм обеспечивает превосходную первоначальную переносимую пленку,
            которая эффективно покрывает сопрягаемые поверхности подшипникового узла, обеспечивая самосмазывающиеся
            свойства.
          </p>
          <p className={text}>
            2. Толщина порошка спеченной бронзы 0,20-0,35 мм обеспечивает прочное механическое соединение и отличную
            теплопроводность.
          </p>
          <p className={text}>3. Бронзовая основа обеспечивает механическую прочность и корозионную стойкость.</p>
        </div>

        <Image
          src='/image/pages/hmg11/hmg11structure.png'
          width={300}
          height={240}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 30vw, (max-width: 1096px) 10vw, 35vw'
          priority={true}
          alt='Структура материала HMG-11'
        />
      </section>
      <section>
        <Htag tag='h2'>Технические данные</Htag>
        <div className={scroll}>
          <table className={table}>
            <tbody>
              <tr>
                <td
                  rowSpan='3'
                  style={{ width: '16%' }}
                  className={cell}>
                  <span style={{ width: '33%' }}>Макс. нагрузка</span>
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  <span style={{ width: '33%' }}>Статический режим</span>
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  250 Н/мм<sup>2</sup>
                </td>
                <td
                  rowSpan='6'
                  className={cell}>
                  &nbsp;
                </td>
                <td
                  colSpan='2'
                  style={{ width: '28%' }}
                  className={cell}>
                  <span style={{ width: '33%' }}>Коэффициент трения</span>
                </td>
                <td
                  style={{ width: '20%' }}
                  className={cell}>
                  0.03~0.20
                </td>
              </tr>
              <tr>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Низкоскоростной режим</span>
                </td>
                <td className={cell}>
                  140 Н/мм<sup>2</sup>
                </td>
                <td
                  rowSpan='2'
                  className={cell}>
                  Макс.<span style={{ fontSize: '12pt' }}>скорость</span>
                </td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Сухой рехим</span>
                </td>
                <td className={cell}>2 м/с</td>
              </tr>
              <tr>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Вращательно - колебательный режим</span>
                </td>
                <td className={cell}>
                  60 Н/мм<sup>2</sup>
                </td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Гидродинамический режим</span>
                </td>
                <td className={cell}>&gt;2 м/с</td>
              </tr>
              <tr>
                <td
                  rowSpan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Макс. PV Сухой режим</span>
                </td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Кратковременная эксплуатация</span>
                </td>
                <td className={cell}>
                  3.6 Н/мм<sup>2</sup>*м/с
                </td>
                <td
                  colSpan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Теплопроводность</span>
                </td>
                <td className={cell}>
                  60 Вт(м*K)<sup>-1</sup>
                </td>
              </tr>
              <tr>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Непрерывная работа</span>
                </td>
                <td className={cell}>
                  1.8 Н/мм<sup>2</sup>*м/с
                </td>
                <td
                  colSpan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Коэффициент температурного расширения</span>
                </td>
                <td className={cell}>
                  11*10<sup>-6</sup>*K<sup>-1</sup>
                </td>
              </tr>
              <tr>
                <td
                  colSpan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Диапазон рабочих температур</span>
                </td>
                <td className={cell}>-195℃～+280℃</td>
                <td
                  colSpan='2'
                  className={cell}>
                  &nbsp;
                </td>
                <td className={cell}>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <Htag tag='h2'>Типичные области применения</Htag>
        <p className={text}>
          Материал подходит для изготовления дверных петель, петель капота, петель багажника, стеклоочистителей, сцепных
          устройств прицепа, подъемных машин, морских лебедок, судовых цепей, рукавов вала плотины, печей, текстильных
          машин, металлургического оборудования и проушин для штоков цилиндров.
        </p>
      </section>
    </main>
  );
};

export default hmg11;
