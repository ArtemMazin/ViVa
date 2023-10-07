import Link from 'next/link';
import { catalog, text, breadСrumbs, breadСrumbs__link } from './catalog.module.css';
import Htag from '@/components/Htag/Htag';

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
      <Htag tag='h1'>Каталог подшипников скольжения</Htag>
      <p className={text}>
        Наша компания предлагает как стандартные повсеместно используемые подшипники скольжения: цилиндрические втулки,
        фланцевые втулки, аксиальные (упорные) кольца, ленту и т.д., так и специальные детали согласно чертежам и
        техническим условиям потребителей.
      </p>
      <p className={text}>
        Подшипники скольжения имеют широчайший спектр применения: от пищевой, химической промышленности и медицинского
        оборудования, до автомобилей, летательных аппаратов и судостроения. В зависимости от сферы использования,
        материал, из которого выполнены подшипники должен обладать определенными свойствами и техническими
        характекристиками.
      </p>
      <p className={text}>Ознакомиться с каталогами размеров конкретных материалов подшипников Вы можете здесь:</p>
      <a
        href={'/download/catalog.pdf'}
        download={true}>
        <p>Скачать полный каталог подшипников скольжения (pdf 4.2 Mb)</p>
      </a>
    </main>
  );
}
