import Htag from '@/components/Htag/Htag';
import styles from './hmg20.module.css';
import React from 'react';

const Table = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Сводная таблица технических данных материала HMG-20
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td rowSpan="3" style={{ width: '16%' }} className={styles.cell}>
            <span style={{ width: '33%' }}>Макс. нагрузка</span>
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            <span style={{ width: '33%' }}>Статический режим</span>
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            <span>
              250 Н/мм<sup>2</sup>
            </span>
          </td>
          <td rowSpan="5" className={styles.cell}>
            &nbsp;
          </td>
          <td colSpan="2" style={{ width: '24%' }} className={styles.cell}>
            <span style={{ width: '33%' }}>Диапазон рабочих температур</span>
          </td>
          <td style={{ width: '24%' }} className={styles.cell}>
            <span>-40℃~+110℃</span>
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>
            <span style={{ width: '33%' }}>Низкоскоростной режим</span>
          </td>
          <td className={styles.cell}>
            <span>
              140 Н/мм<sup>2</sup>
            </span>
          </td>
          <td rowSpan="2" className={styles.cell}>
            <span style={{ width: '33%' }}>Макс. скорость</span>
          </td>
          <td className={styles.cell}>
            <span style={{ width: '33%' }}>Сухой рехим</span>
          </td>
          <td className={styles.cell}>
            <span>2м/с</span>
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>
            <span style={{ width: '33%' }}>
              Вращательно - колебательный режим
            </span>
          </td>
          <td className={styles.cell}>
            <span>70 Н/мм²</span>
          </td>
          <td className={styles.cell}>
            <span style={{ width: '33%' }}>Непрерывная смазка</span>
          </td>
          <td className={styles.cell}>
            <span>&gt;2м/с</span>
          </td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.cell}>
            <span style={{ width: '33%' }}>Макс. PV Режим со смазкой</span>
          </td>
          <td className={styles.cell}>
            <span>
              3 Н/мм<sup>2</sup>*м/с
            </span>
          </td>
          <td colSpan="2" className={styles.cell}>
            <span style={{ width: '33%' }}>Теплопроводность</span>
          </td>
          <td className={styles.cell}>
            <span>
              50 Вт(м*К)<sup>-1</sup>
            </span>
          </td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.cell}>
            <span style={{ width: '33%' }}>
              Коэффициент температурного расширения
            </span>
          </td>
          <td className={styles.cell}>
            <span>
              11*10<sup>-6</sup>*К<sup>-1</sup>
            </span>
          </td>
          <td colSpan="2" className={styles.cell}>
            <span style={{ width: '33%' }}>Коэффициент трения</span>
          </td>
          <td className={styles.cell}>
            <span>0,05~0,20</span>
          </td>
        </tr>
        <tr>
          <td colSpan="7" className={styles.cell}>
            <span style={{ width: '33%' }}>
              Перед сборкой подшипника масляные кармашки должны быть заполнены
              смазкой.
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
