import Htag from '@/components/Htag/Htag';
import styles from './hmgT90.module.css';
import React from 'react';

const TableBottom = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Сводная таблица технических данных материала HMG-T90
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td rowSpan={2} style={{ width: '16%' }} className={styles.cell}>
            Макс. нагрузка
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            Статический режим
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            <span style={{ width: '16%' }}>
              120 Н/мм<sup>2</sup>
            </span>
          </td>
          <td rowSpan={6} className={styles.cell}>
            &nbsp;
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            Удлинение
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            40%
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>Динамический режим</td>
          <td className={styles.cell}>
            <span style={{ width: '16%' }}>
              40 Н/мм<sup>2</sup>
            </span>
          </td>
          <td className={styles.cell}>Диапазон рабочих температур</td>
          <td className={styles.cell}>-100℃~+200℃</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Макс. скорость (со смазкой)
          </td>
          <td className={styles.cell}>2 м/с</td>
          <td className={styles.cell}>Коэффициент трения</td>
          <td className={styles.cell}>0.08~0.25</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Макс. PV
          </td>
          <td className={styles.cell}>
            2.8 Н/мм<sup>2</sup>*м/с
          </td>
          <td className={styles.cell}>Теплопроводность</td>
          <td className={styles.cell}>
            58 Вт(м*K)<sup>-1</sup>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Предел прочности
          </td>
          <td className={styles.cell}>
            450 Н/мм<sup>2</sup>
          </td>
          <td className={styles.cell}>Коэффициент температурного расширения</td>
          <td className={styles.cell}>
            18.5*10<sup>-6</sup>*K<sup>-1</sup>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Твердость сплава
          </td>
          <td className={styles.cell}>HB 110-150</td>
          <td className={styles.cell}>&nbsp;</td>
          <td className={styles.cell}>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableBottom;
