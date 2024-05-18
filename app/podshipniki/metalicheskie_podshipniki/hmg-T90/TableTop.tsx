import Htag from '@/components/Htag/Htag';
import styles from './hmgT90.module.css';
import React from 'react';

const TableTop = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Химический состав материала HMG-T90
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td className={styles.cell}>Тип</td>
          <td className={styles.cell}>Cu %</td>
          <td className={styles.cell}>Sn %</td>
          <td className={styles.cell}>P %</td>
          <td className={styles.cell}>Pb %</td>
          <td className={styles.cell}>Zn %</td>
        </tr>
        <tr>
          <td className={styles.cell}>HMG-T90</td>
          <td className={styles.cell}>91.3</td>
          <td className={styles.cell}>8.5</td>
          <td className={styles.cell}>0.2</td>
          <td className={styles.cell}>/</td>
          <td className={styles.cell}>/</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableTop;
