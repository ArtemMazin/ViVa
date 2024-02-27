import Htag from '@/components/Htag/Htag';
import styles from './hmg85HF.module.css';
import React from 'react';

const Table = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Сводная таблица технических данных материала HMG-85HF
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td colSpan={3} className={styles.cell}>
            Тип материала
          </td>
          <td className={styles.cell}>Единицы</td>
          <td className={styles.cell}>HMG85HHFL</td>
          <td className={styles.cell}>HMG85HHFH</td>
        </tr>
        <tr>
          <td colSpan={3} className={styles.cell}>
            Прочность на сжатие
          </td>
          <td className={styles.cell}>МПа</td>
          <td className={styles.cell}>≥420</td>
          <td className={styles.cell}>≥550</td>
        </tr>
        <tr>
          <td colSpan={3} className={styles.cell}>
            Твердость поверхности
          </td>
          <td className={styles.cell}>----</td>
          <td className={styles.cell}>≥50 HRB</td>
          <td className={styles.cell}>≥75 HRB</td>
        </tr>
        <tr>
          <td colSpan={3} className={styles.cell}>
            Плотность
          </td>
          <td className={styles.cell}>
            г/см<sup>3</sup>
          </td>
          <td className={styles.cell}>6-6.5</td>
          <td className={styles.cell}>6-6.5</td>
        </tr>
        <tr>
          <td colSpan={3} className={styles.cell}>
            Масляная пропитка
          </td>
          <td className={styles.cell}>vol%</td>
          <td className={styles.cell}>16-20%</td>
          <td className={styles.cell}>16-20%</td>
        </tr>
        <tr>
          <td rowSpan={2} className={styles.cell}>
            Макс. нагрузка
          </td>
          <td colSpan={2} className={styles.cell}>
            Статический
          </td>
          <td rowSpan={2} className={styles.cell}>
            МПа
          </td>
          <td className={styles.cell}>50</td>
          <td className={styles.cell}>150</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Динамический
          </td>
          <td className={styles.cell}>30</td>
          <td className={styles.cell}>75</td>
        </tr>
        <tr>
          <td rowSpan={2} className={styles.cell}>
            Макс. скорость
          </td>
          <td colSpan={2} className={styles.cell}>
            Сухой режим
          </td>
          <td rowSpan={2} className={styles.cell}>
            м/с
          </td>
          <td className={styles.cell}>0.5</td>
          <td className={styles.cell}>0.5</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Со смазкой
          </td>
          <td className={styles.cell}>&gt;1.5</td>
          <td className={styles.cell}>&gt;1.0</td>
        </tr>
        <tr>
          <td colSpan={2} rowSpan={2} className={styles.cell}>
            Макс. PV
          </td>
          <td className={styles.cell}>Сухой режим</td>
          <td rowSpan={2} className={styles.cell}>
            Н/мм<sup>2</sup>*м/с
          </td>
          <td className={styles.cell}>1.5</td>
          <td className={styles.cell}>1.5</td>
        </tr>
        <tr>
          <td className={styles.cell}>Со смазкой</td>
          <td className={styles.cell}>2.5</td>
          <td className={styles.cell}>2.5</td>
        </tr>
        <tr>
          <td colSpan={3} className={styles.cell}>
            Диапазон рабочих температур
          </td>
          <td className={styles.cell}>℃</td>
          <td className={styles.cell}>-40~+120</td>
          <td className={styles.cell}>-40~+120</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
