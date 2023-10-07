import Link from 'next/link';
import { catalog, downloadLink, breadСrumbs, breadСrumbs__link } from './catalog.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';

export const metadata = {
  title: 'Каталог подшипников',
  description: 'Каталог подшипников ООО "ВиВа Групп"',
};

export default function Catalog() {
  return (
    <main className={`container ${catalog}`}>
      <ul className={breadСrumbs}>
        <li>
          <Link
            href='https://vi-va.vercel.app/'
            title='Главнaя'
            className={breadСrumbs__link}>
            Главнaя
          </Link>
        </li>
        <li>Каталог</li>
      </ul>
      <Htag tag='h1underline'>Каталог подшипников скольжения</Htag>
      <Ptag tag='p'>
        Наша компания предлагает как стандартные повсеместно используемые подшипники скольжения: цилиндрические втулки,
        фланцевые втулки, аксиальные (упорные) кольца, ленту и т.д., так и специальные детали согласно чертежам и
        техническим условиям потребителей.
      </Ptag>
      <a
        href={'/download/catalog.pdf'}
        download={true}
        className={downloadLink}>
        Скачать полный каталог подшипников скольжения (pdf 4.2 Mb)
      </a>
      <Ptag tag='p'>
        Подшипники скольжения имеют широчайший спектр применения: от пищевой, химической промышленности и медицинского
        оборудования, до автомобилей, летательных аппаратов и судостроения. В зависимости от сферы использования,
        материал, из которого выполнены подшипники должен обладать определенными свойствами и техническими
        характекристиками.
      </Ptag>
      <Ptag tag='p'>Ознакомиться с каталогами размеров конкретных материалов подшипников Вы можете здесь:</Ptag>
    </main>
  );
}
