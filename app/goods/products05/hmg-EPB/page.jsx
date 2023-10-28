import Image from 'next/image';
import React from 'react';
import styles from './hmgEPB.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-EPB"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/goods`, name: 'Товары' },
          {
            href: `${process.env.URL}/goods/products05`,
            name: 'Неметаллические самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmgEPB/hmgEPB.png"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-EPB"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-EPB</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            HMG-EPB – термопластичный материал с решеткой из волокон,
            заполненной твердыми смазочными материалами. Подшипники показывают
            хорошие защитные характеристики, твердые смазочные материалы снижают
            коэффициент трения и позволяют использовать материал при наличии
            абразивных частиц. Имеет отличную скользящую поверхность. Из
            материала изготавливаются цилиндрические и фланцевые подшипники,
            упорные кольца, лента и специальные изделия по спецификации
            заказчика.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            Пластиковые подшипники HMG-EPB состоят из высокоэффективного
            конструкционного пластика. С помощью специальных добавок достигаются
            хорошая износостойкость и самосмазывающиеся свойства. Эти материалы
            широко используются в автомобильной промышленности, а также в
            условиях высоких скоростей, подводных условий, высоких температур и
            коррозионной стойкости. Приложения для пищевой промышленности,
            соответствующие нормам FDA.
          </Ptag>
        </div>
      </section>

      <section>
        <Htag tag="h2" border="left">
          Типичные области применения
        </Htag>
        <Ptag tag="p">
          Этот тип материалов предназначен для легких применений, сухой работы и
          с требованиями условий химической стойкости. Они широко используются в
          машинах ОА, текстильных машинах, машинах для кузовного ремонта,
          пищевой промышленности, упаковочных машинах и автомобильной
          промышленности.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
