import Image from 'next/image';
import React from 'react';
import { flex, title, subtitle, text, table, cell, image, section, scroll } from './hmg50.module.css';

const hmg50 = () => {
  return (
    <main className={`${section} container`}>
      <section className={flex}>
        <Image
          src='/image/pages/hmg50/hmg50.jpg'
          // fill
          width={600}
          height={450}
          alt='Подшипники HMG-50'
          className={image}
          priority={true}
        />
        <div>
          <h1 className={title}>HMG-50</h1>
          <h2 className={subtitle}>Описание</h2>
          <p className={text}>
            Материал обладает хорошей износостойкостью, низким коэффициентом трения, коррозионной стойкостью и высокой
            химической стойкостью. Подходит для применений, где смазка затруднена или недоступна. Требования к
            механической обработке сопрягаемых деталей не являются критическими, поэтому материалы такого типа широко
            используются в общей промышленности.
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
          <p className={text}>3. Стальная основа Обеспечивает механическую прочность.</p>
        </div>

        <Image
          src='/image/pages/hmg50/hmg50structure.png'
          // fill
          width={300}
          height={240}
          alt='Структура материала HMG-50'
          // className={image}
          priority={true}
        />
      </section>
      <section>
        <h2 className={subtitle}>Технические данные</h2>
        <div className={scroll}>
          <table
            border='1'
            cellpadding='0'
            cellspacing='0'
            width='100%'
            className={table}>
            <tbody>
              <tr>
                <td
                  rowspan='3'
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
                  250 Н/мм²
                </td>
                <td
                  rowspan='6'
                  className={cell}>
                  &nbsp;
                </td>
                <td
                  colspan='2'
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
                <td className={cell}>140 Н/мм²</td>
                <td
                  rowspan='2'
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
                <td className={cell}>60 Н/мм²</td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Гидродинамический режим</span>
                </td>
                <td className={cell}>&gt;2 м/с</td>
              </tr>
              <tr>
                <td
                  rowspan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Макс. PV Сухой режим</span>
                </td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Кратковременная эксплуатация</span>
                </td>
                <td className={cell}>3.6 Н/мм²*м/с</td>
                <td
                  colspan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Теплопроводность</span>
                </td>
                <td className={cell}>
                  42 Вт(м*K)<sup>-1</sup>
                </td>
              </tr>
              <tr>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Непрерывная работа</span>
                </td>
                <td className={cell}>1.8 Н/мм²*м/с</td>
                <td
                  colspan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Коэффициент температурного расширения</span>
                </td>
                <td className={cell}>
                  11*10<sup>-6</sup>*K<sup>-1</sup>
                </td>
              </tr>
              <tr>
                <td
                  colspan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Диапазон рабочих температур</span>
                </td>
                <td className={cell}>-195℃～+280℃</td>
                <td
                  colspan='2'
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
          Автомобильные применения включают систему рулевого управления, амортизаторы, дверные петли, кресла с наклоном
          спинки, рамы сидений и магнитные клапаны. Он широко используется в общей промышленности, например, в
          шестеренчатых, лопастных, поршневых насосах, пневмоцилиндрах и гидравлических цилиндрах. Другие области
          применения включают в себя погрузочно-разгрузочное оборудование, упаковочные машины, текстильные машины,
          лесозаготовительные машины и бытовую технику, такую ​​как кондиционеры, машины для фитнеса, стиральные машины,
          холодильники и т. д.
        </p>
      </section>
    </main>
  );
};

export default hmg50;
