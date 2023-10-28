import Htag from '@/components/Htag/Htag';
import styles from './hmg200C.module.css';
import React from 'react';

const Table = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Сводная таблица технических данных материала HMG-200C
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td rowSpan="2" style={{ width: '16%' }} className={styles.cell}>
            Макс. нагрузка
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            Статический режим
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            <span style={{ width: '16%' }}>
              250 Н/мм<sup>2</sup>
            </span>
          </td>
          <td rowSpan="6" className={styles.cell}>
            &nbsp;
          </td>
          <td style={{ width: '24%' }} className={styles.cell}>
            Коэффициент температурного расширения
          </td>
          <td colSpan="2" style={{ width: '24%' }} className={styles.cell}>
            1.1*10<sup>-5 </sup>℃
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>Динамический режим</td>
          <td className={styles.cell}>
            <span style={{ width: '16%' }}>
              100 Н/мм<sup>2</sup>
            </span>
          </td>
          <td className={styles.cell}>Диапазон рабочих температур</td>
          <td colSpan="2" className={styles.cell}>
            -400℃~+120℃
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>Макс. скорость</td>
          <td className={styles.cell}>Со смазкой</td>
          <td className={styles.cell}>10 м/с</td>
          <td className={styles.cell}>Коэффициент трения</td>
          <td className={styles.cell}>Со смазкой</td>
          <td className={styles.cell}>0.1~0.25</td>
        </tr>
        <tr>
          <td className={styles.cell}>Макс. PV</td>
          <td className={styles.cell}>Со смазкой</td>
          <td className={styles.cell}>
            1.5 Н/мм<sup>2</sup>*м/с
          </td>
          <td rowSpan="2" className={styles.cell}>
            Прочность соединения сплавов
          </td>
          <td className={styles.cell}>Шероховатость</td>
          <td className={styles.cell}>Ra＜0.8</td>
        </tr>
        <tr>
          <td className={styles.cell}>Плотность</td>
          <td colSpan="2" className={styles.cell}>
            7.8 г/мм<sup>3</sup>
          </td>
          <td className={styles.cell}>Твердость</td>
          <td className={styles.cell}>HRC 58-62</td>
        </tr>
        <tr>
          <td className={styles.cell}>Твердость</td>
          <td colSpan="2" className={styles.cell}>
            HB ≥40
          </td>
          <td colSpan="3" className={styles.cell}>
            Рекомендуется добавление консистентной смазки каждые 8 часов.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
