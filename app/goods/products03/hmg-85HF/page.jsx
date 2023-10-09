import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import { flex, table, cell, image, section, scroll } from './hmg85HF.module.css';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink='Подшипники HMG-85HF'
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          { href: 'https://vi-va.vercel.app/goods/products03', name: 'Металлические самосмазывающиеся подшипники' },
        ]}
      />
      <section className={flex}>
        <Image
          src='/image/pages/hmg85HF/hmg85HF.jpg'
          width={600}
          height={450}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw'
          priority={true}
          alt='Подшипники HMG-85HF'
          className={image}
        />
        <div>
          <Htag tag='h1'>HMG-85HF</Htag>
          <Htag
            tag='h2'
            border='left'>
            Описание
          </Htag>
          <Ptag tag='p'>
            Основа из сплава Fe-Cu обеспечивает механическую прочность подшипников. Дисперсные твердые смазочные
            материалы могут образовывать смазочную пленку во время работы, а содержащееся внутри масло снижает
            коэффициент трения. Рекомендуется использовать в условиях низкой нагрузки и средней и высокой скорости.
            HMG85HFH — это термообработанный материал, который повышает ударопрочность подшипников и подходит для
            использования в условиях средних и высоких нагрузок, а также в запыленной среде с ударной нагрузкой и
            предельной нагрузкой.
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
            1. Твердые смазочные материалы, диспергированные в порошке сплава для создания смазочной пленки, улучшающей
            коэффициенты трения и износостойкости.
          </Ptag>
          <Ptag tag='p'>2. Масляные поры, правильно выровненные поры удерживают масло внутри материала.</Ptag>
          <Ptag tag='p'>3. Сплав Fe-Cu обеспечивает механическую прочность и теплопроводность.</Ptag>
        </div>

        <Image
          src='/image/pages/hmg85HF/hmg85HFstructure.png'
          width={300}
          height={240}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw'
          priority={true}
          alt='Структура материала HMG-85HF'
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
                  colSpan='3'
                  className={cell}>
                  Тип материала
                </td>
                <td className={cell}>Единицы</td>
                <td className={cell}>HMG85HHFL</td>
                <td className={cell}>HMG85HHFH</td>
              </tr>
              <tr>
                <td
                  colSpan='3'
                  className={cell}>
                  Прочность на сжатие
                </td>
                <td className={cell}>МПа</td>
                <td className={cell}>≥420</td>
                <td className={cell}>≥550</td>
              </tr>
              <tr>
                <td
                  colSpan='3'
                  className={cell}>
                  Твердость поверхности
                </td>
                <td className={cell}>----</td>
                <td className={cell}>≥50 HRB</td>
                <td className={cell}>≥75 HRB</td>
              </tr>
              <tr>
                <td
                  colSpan='3'
                  className={cell}>
                  Плотность
                </td>
                <td className={cell}>
                  г/см<sup>3</sup>
                </td>
                <td className={cell}>6-6.5</td>
                <td className={cell}>6-6.5</td>
              </tr>
              <tr>
                <td
                  colSpan='3'
                  className={cell}>
                  Масляная пропитка
                </td>
                <td className={cell}>vol%</td>
                <td className={cell}>16-20%</td>
                <td className={cell}>16-20%</td>
              </tr>
              <tr>
                <td
                  rowSpan='2'
                  className={cell}>
                  Макс. нагрузка
                </td>
                <td
                  colSpan='2'
                  className={cell}>
                  Статический
                </td>
                <td
                  rowSpan='2'
                  className={cell}>
                  МПа
                </td>
                <td className={cell}>50</td>
                <td className={cell}>150</td>
              </tr>
              <tr>
                <td
                  colSpan='2'
                  className={cell}>
                  Динамический
                </td>
                <td className={cell}>30</td>
                <td className={cell}>75</td>
              </tr>
              <tr>
                <td
                  rowSpan='2'
                  className={cell}>
                  Макс. скорость
                </td>
                <td
                  colSpan='2'
                  className={cell}>
                  Сухой режим
                </td>
                <td
                  rowSpan='2'
                  className={cell}>
                  м/с
                </td>
                <td className={cell}>0.5</td>
                <td className={cell}>0.5</td>
              </tr>
              <tr>
                <td
                  colSpan='2'
                  className={cell}>
                  Со смазкой
                </td>
                <td className={cell}>&gt;1.5</td>
                <td className={cell}>&gt;1.0</td>
              </tr>
              <tr>
                <td
                  colSpan='2'
                  rowSpan='2'
                  className={cell}>
                  Макс. PV
                </td>
                <td className={cell}>Сухой режим</td>
                <td
                  rowSpan='2'
                  className={cell}>
                  Н/мм<sup>2</sup>*м/с
                </td>
                <td className={cell}>1.5</td>
                <td className={cell}>1.5</td>
              </tr>
              <tr>
                <td className={cell}>Со смазкой</td>
                <td className={cell}>2.5</td>
                <td className={cell}>2.5</td>
              </tr>
              <tr>
                <td
                  colSpan='3'
                  className={cell}>
                  Диапазон рабочих температур
                </td>
                <td className={cell}>℃</td>
                <td className={cell}>-40~+120</td>
                <td className={cell}>-40~+120</td>
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
          Высокопроизводительный подшипник из сплава Fe-Cu подходит для применения в условиях высоких нагрузок и низких
          скоростей, включая стрелы экскаваторов, проушины штоков гидроцилиндров, роботов, машины для литья пластмасс
          под давлением, машины для литья под давлением и другие машины для обработки металла.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
