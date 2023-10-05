import Image from 'next/image';
import React from 'react';
import { flex, title, subtitle, text, table, cell, image, section, scroll } from './hmg11.module.css';

const hmg11 = () => {
  return (
    <main className={`${section} container`}>
      <section className={flex}>
        <Image
          src='/image/pages/hmg11/hmg11.jpg'
          width={600}
          height={450}
          alt='Подшипники HMG-11'
          className={image}
          priority={true}
        />
        <div>
          <h1 className={title}>HMG-11</h1>
          <h2 className={subtitle}>Описание</h2>
          <p className={text}>
            Материал имеет те же характеристики, что и стандартные полимерные композитные подшипники со стальной опорой.
            Кроме того, бронзовая задняя часть обеспечивает лучшую коррозионную стойкость и теплопроводность. Поэтому
            его легче собирать и он имеет лучшую магнитную устойчивость.
          </p>
        </div>
      </section>
      <section className={flex}>
        <div>
          <h2 className={subtitle}>Структура</h2>
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
          alt='Структура материала HMG-11'
        />
      </section>
      <section>
        <h2 className={subtitle}>Технические данные</h2>
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
        <h2 className={subtitle}>Типичные области применения</h2>
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
