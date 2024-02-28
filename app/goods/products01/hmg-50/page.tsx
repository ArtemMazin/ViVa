import Image from 'next/image';
import React from 'react';
import styles from './hmg50.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-50"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/goods`, name: 'Товары' },
          {
            href: `${process.env.URL}/goods/products01`,
            name: 'Металлополимерные самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmg50/hmg50.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-50"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-50</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Материал обладает хорошей износостойкостью, низким коэффициентом
            трения, коррозионной стойкостью и высокой химической стойкостью.
            Подходит для применений, где смазка затруднена или недоступна.
            Требования к механической обработке сопрягаемых деталей не являются
            критическими, поэтому материалы такого типа широко используются в
            общей промышленности.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Толщина смеси ПТФЭ/волокна 0,01–0,03 мм обеспечивает превосходную
            первоначальную переносимую пленку, которая эффективно покрывает
            сопрягаемые поверхности подшипникового узла, обеспечивая
            самосмазывающиеся свойства.
          </Ptag>
          <Ptag>
            2. Толщина порошка спеченной бронзы 0,20-0,35 мм обеспечивает
            прочное механическое соединение и отличную теплопроводность.
          </Ptag>
          <Ptag>3. Стальная основа Обеспечивает механическую прочность.</Ptag>
        </div>

        <Image
          src="/image/pages/hmg50/hmg50structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-50"
        />
      </section>
      <section>
        <div className={styles.scroll}>
          <Table />
        </div>
      </section>
      <section>
        <Htag tag="h2" border="left">
          Типичные области применения
        </Htag>
        <Ptag>
          Автомобильные применения включают систему рулевого управления,
          амортизаторы, дверные петли, кресла с наклоном спинки, рамы сидений и
          магнитные клапаны. Он широко используется в общей промышленности,
          например, в шестеренчатых, лопастных, поршневых насосах,
          пневмоцилиндрах и гидравлических цилиндрах. Другие области применения
          включают в себя погрузочно-разгрузочное оборудование, упаковочные
          машины, текстильные машины, лесозаготовительные машины и бытовую
          технику, такую ​​как кондиционеры, машины для фитнеса, стиральные
          машины, холодильники и т. д.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
