import styles from './catalog.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: 'Каталог подшипников',
  description: 'Каталог подшипников ООО "ВиВа Групп"',
};

export default function Catalog() {
  return (
    <main className={`container ${styles.catalog}`}>
      <BreadCrumbs
        currentLink="Каталог"
        links={[{ href: process.env.URL, name: 'Главнaя' }]}
      />

      <Htag tag="h1" border="left" className={styles.main_title}>
        Каталог подшипников скольжения
      </Htag>
      <Ptag tag="p">
        Наша компания предлагает как стандартные повсеместно используемые
        подшипники скольжения: цилиндрические втулки, фланцевые втулки,
        аксиальные (упорные) кольца, ленту и т.д., так и специальные детали
        согласно чертежам и техническим условиям потребителей.
      </Ptag>
      <Ptag tag="p">
        Ознакомиться с каталогами размеров конкретных материалов подшипников Вы
        можете здесь:
      </Ptag>
      <a
        href={'/download/catalog.pdf'}
        download={true}
        className={styles.downloadLink}
      >
        Скачать полный каталог подшипников скольжения (pdf 4.2 Mb)
      </a>
      <Ptag tag="p">
        Подшипники скольжения имеют широчайший спектр применения: от пищевой,
        химической промышленности и медицинского оборудования, до автомобилей,
        летательных аппаратов и судостроения. В зависимости от сферы
        использования, материал, из которого выполнены подшипники должен
        обладать определенными свойствами и техническими характекристиками.
      </Ptag>
    </main>
  );
}
