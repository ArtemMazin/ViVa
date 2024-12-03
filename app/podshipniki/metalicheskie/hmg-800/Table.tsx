import Htag from '@/components/Htag/Htag';
import styles from './hmg800-815.module.css';
import React from 'react';

const Table = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Сводная таблица технических данных материала HMG-800
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td rowSpan={2} style={{ width: '16%' }} className={styles.cell}>
            Макс. нагрузка
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            Статический
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            250 Н/мм<sup>2</sup>
          </td>
          <td rowSpan={5} className={styles.cell}>
            &nbsp;
          </td>
          <td style={{ width: '24%' }} className={styles.cell}>
            Твердость сплава
          </td>
          <td style={{ width: '24%' }} className={styles.cell}>
            ＞70HB
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>Динамический</td>
          <td className={styles.cell}>
            <span style={{ width: '16%' }}>
              140 Н/мм<sup>2</sup>
            </span>
          </td>
          <td className={styles.cell}>Диапазон рабочих температур</td>
          <td className={styles.cell}>-40°C~+ 250°C</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Макс. скорость (со смазкой)
          </td>
          <td className={styles.cell}>2.5 м/с</td>
          <td className={styles.cell}>Коэффициент трения</td>
          <td className={styles.cell}>0.05~0.20</td>
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
            23 Вт(м*К)<sup>-1</sup>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Предел прочности
          </td>
          <td className={styles.cell}>
            350 Н/мм<sup>2</sup>
          </td>
          <td className={styles.cell}>Коэффициент температурного расширения</td>
          <td className={styles.cell}>
            14*10<sup>-6</sup>*K<sup>-1</sup>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
