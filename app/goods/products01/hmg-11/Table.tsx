import Htag from '@/components/Htag/Htag';
import styles from './hmg11.module.css';
import React from 'react';

const Table = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Сводная таблица технических данных материала HMG-11
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td rowSpan={3} style={{ width: '16%' }} className={styles.cell}>
            <span style={{ width: '33%' }}>Макс. нагрузка</span>
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            <span style={{ width: '33%' }}>Статический режим</span>
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            250 Н/мм<sup>2</sup>
          </td>
          <td rowSpan={6} className={styles.cell}>
            &nbsp;
          </td>
          <td colSpan={2} style={{ width: '28%' }} className={styles.cell}>
            <span style={{ width: '33%' }}>Коэффициент трения</span>
          </td>
          <td style={{ width: '20%' }} className={styles.cell}>
            0.03~0.20
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>
            <span style={{ width: '33%' }}>Низкоскоростной режим</span>
          </td>
          <td className={styles.cell}>
            140 Н/мм<sup>2</sup>
          </td>
          <td rowSpan={2} className={styles.cell}>
            Макс.<span style={{ fontSize: '12pt' }}>скорость</span>
          </td>
          <td className={styles.cell}>
            <span style={{ width: '33%' }}>Сухой рехим</span>
          </td>
          <td className={styles.cell}>2 м/с</td>
        </tr>
        <tr>
          <td className={styles.cell}>
            <span style={{ width: '33%' }}>
              Вращательно - колебательный режим
            </span>
          </td>
          <td className={styles.cell}>
            60 Н/мм<sup>2</sup>
          </td>
          <td className={styles.cell}>
            <span style={{ width: '33%' }}>Гидродинамический режим</span>
          </td>
          <td className={styles.cell}>&gt;2 м/с</td>
        </tr>
        <tr>
          <td rowSpan={2} className={styles.cell}>
            <span style={{ width: '33%' }}>Макс. PV Сухой режим</span>
          </td>
          <td className={styles.cell}>
            <span style={{ width: '33%' }}>Кратковременная эксплуатация</span>
          </td>
          <td className={styles.cell}>
            3.6 Н/мм<sup>2</sup>*м/с
          </td>
          <td colSpan={2} className={styles.cell}>
            <span style={{ width: '33%' }}>Теплопроводность</span>
          </td>
          <td className={styles.cell}>
            60 Вт(м*K)<sup>-1</sup>
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>
            <span style={{ width: '33%' }}>Непрерывная работа</span>
          </td>
          <td className={styles.cell}>
            1.8 Н/мм<sup>2</sup>*м/с
          </td>
          <td colSpan={2} className={styles.cell}>
            <span style={{ width: '33%' }}>
              Коэффициент температурного расширения
            </span>
          </td>
          <td className={styles.cell}>
            11*10<sup>-6</sup>*K<sup>-1</sup>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            <span style={{ width: '33%' }}>Диапазон рабочих температур</span>
          </td>
          <td className={styles.cell}>-195℃～+280℃</td>
          <td colSpan={2} className={styles.cell}>
            &nbsp;
          </td>
          <td className={styles.cell}>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
