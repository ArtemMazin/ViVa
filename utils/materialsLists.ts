import { TCard } from './types';

const materialsList01: TCard[] = [
  {
    name: 'Подшипники HMG-50',
    img: '/image/metalopolimernye_samosmazivayushiesya/hmg-50.jpg',
    href: '/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-50',
    maxLoad: 250, // Статический режим
    maxSpeed: 2, // Сухой режим
    frictionCoefficient: [0.03, 0.2],
    temperatureRange: [-195, 280],
    selfLubricating: true,
    maxPV: 3.6, // Кратковременная эксплуатация
    thermalConductivity: 42,
    materialType: 'металлополимерный',
  },
  {
    name: 'Подшипники HMG-11',
    img: '/image/metalopolimernye_samosmazivayushiesya/hmg-11.jpg',
    href: '/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-11',
    maxLoad: 250, // Статический режим
    maxSpeed: 2, // Сухой режим
    frictionCoefficient: [0.03, 0.2],
    temperatureRange: [-195, 280],
    selfLubricating: true,
    maxPV: 3.6, // Кратковременная эксплуатация
    thermalConductivity: 60,
    materialType: 'металлополимерный',
  },
  {
    name: 'Подшипники HMG-FR',
    img: '/image/metalopolimernye_samosmazivayushiesya/hmg-fr.jpg',
    href: '/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-fr',
    maxLoad: 80, // При комнатной температуре
    maxSpeed: 1, // Сухой ход
    frictionCoefficient: [0.03, 0.2],
    temperatureRange: [-195, 260],
    selfLubricating: true,
    maxPV: 1.8, // Предполагаемое значение, так как точное не указано
    materialType: 'металлополимерный',
  },
];

const materialsList02: TCard[] = [
  {
    name: 'Подшипники HMG-20',
    img: '/image/metalopolimernye/hmg-20.jpg',
    href: '/podshipniki/metalopolimernye/hmg-20',
    maxLoad: 250, // Статический режим
    maxSpeed: 2, // Сухой режим
    frictionCoefficient: [0.05, 0.2],
    temperatureRange: [-40, 110],
    selfLubricating: false, // Требуется смазка
    maxPV: 3, // Режим со смазкой
    thermalConductivity: 50,
    materialType: 'металлополимерный',
  },
  {
    name: 'Подшипники HMG-22',
    img: '/image/metalopolimernye/hmg-22.jpg',
    href: '/podshipniki/metalopolimernye/hmg-22',
    maxLoad: 250, // Статический режим
    maxSpeed: 2, // Со смазкой
    frictionCoefficient: [0.03, 0.2],
    temperatureRange: [-50, 130],
    selfLubricating: false, // Требуется смазка
    maxPV: 3.6, // Режим со смазкой
    thermalConductivity: 50,
    materialType: 'металлополимерный',
  },
  {
    name: 'Подшипники HMG-80',
    img: '/image/metalopolimernye/hmg-80.jpg',
    href: '/podshipniki/metalopolimernye/hmg-80',
    maxLoad: 250, // Статический режим
    maxSpeed: 2, // Сухой режим
    frictionCoefficient: [0.08, 0.15],
    temperatureRange: [-150, 250],
    selfLubricating: false, // Предполагается, что может работать без смазки
    maxPV: 3.6, // Кратковременная эксплуатация без смазки
    thermalConductivity: 50,
    materialType: 'металлополимерный',
  },
];

const materialsList03: TCard[] = [
  {
    name: 'Подшипники HMG-650',
    img: '/image/metalicheskie_samosmazivayushiesya/hmg-650.jpg',
    href: '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650',
    maxLoad: 100, // Максимальное значение для HMG-650W3
    maxSpeed: 1, // Максимальная скорость в смазанном состоянии
    frictionCoefficient: [0.03, 0.2], // Предполагаемое значение
    temperatureRange: [-40, 400],
    selfLubricating: true,
    maxPV: 3.25, // Максимальное значение PV в смазанном состоянии
    materialType: 'бронза',
    hardness: 250, // Максимальное значение твердости по Бринеллю
  },
  {
    name: 'Подшипники HMG-650GT',
    img: '/image/metalicheskie_samosmazivayushiesya/hmg-650gt.jpg',
    href: '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650gt',
    maxLoad: 250, // Статическая нагрузка
    maxSpeed: 1.0, // Максимальная скорость со смазкой
    frictionCoefficient: [0.03, 0.2],
    temperatureRange: [-100, 300],
    selfLubricating: true,
    maxPV: 3.25,
    thermalConductivity: 60,
    materialType: 'металлический',
    hardness: 210,
  },
  {
    name: 'Подшипники HMG-85HF',
    img: '/image/metalicheskie_samosmazivayushiesya/hmg-85hf.jpg',
    href: '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-85hf',
    maxLoad: 150, // Максимальное статическое значение для HMG85HHFH
    maxSpeed: 1.5, // Максимальное значение со смазкой
    frictionCoefficient: [0.03, 0.2], // Предполагаемое значение
    temperatureRange: [-40, 120],
    selfLubricating: true,
    maxPV: 2.5, // Максимальное значение PV со смазкой
    materialType: 'металлический',
    hardness: 75, // Максимальное значение в HRB
  },
];

const materialsList04: TCard[] = [
  {
    name: 'Подшипники HMG-800/815',
    img: '/image/metalicheskie/hmg-800.jpg',
    href: '/podshipniki/metalicheskie/hmg-800',
    description: null,
    maxLoad: 250, // Статическая нагрузка
    maxSpeed: 2.5, // Максимальная скорость со смазкой
    frictionCoefficient: [0.05, 0.2],
    temperatureRange: [-40, 250],
    selfLubricating: false,
    maxPV: 2.8,
    thermalConductivity: 23,
    materialType: 'металлический',
    hardness: 70, // Минимальная твердость
    tensileStrength: 350,
    elongation: null,
  },
  {
    name: 'Подшипники HMG-090',
    img: '/image/metalicheskie/hmg-090.jpg',
    href: '/podshipniki/metalicheskie/hmg-090',
    description: null,
    maxLoad: 120, // Статическая нагрузка
    maxSpeed: 2,
    frictionCoefficient: [0.08, 0.25],
    temperatureRange: [-100, 200],
    selfLubricating: false,
    maxPV: 2.8,
    thermalConductivity: 58,
    materialType: 'бронза',
    hardness: 110, // Минимальная твердость
    tensileStrength: 450,
    elongation: 40,
  },
  {
    name: 'Подшипники HMG-T90',
    img: '/image/metalicheskie/hmg-t90.jpg',
    href: '/podshipniki/metalicheskie/hmg-t90',
    description: null,
    maxLoad: 120, // Статическая нагрузка
    maxSpeed: 2,
    frictionCoefficient: [0.08, 0.25],
    temperatureRange: [-100, 200],
    selfLubricating: false,
    maxPV: 2.8,
    thermalConductivity: 58,
    materialType: 'бронза',
    hardness: 110, // Минимальная твердость
    tensileStrength: 450,
    elongation: 40,
  },
  {
    name: 'Подшипники HMG-600',
    img: '/image/metalicheskie/hmg-600.jpg',
    href: '/podshipniki/metalicheskie/hmg-600',
    description: null,
    maxLoad: 50, // Для типа 650
    maxSpeed: 1, // Максимальная скорость со смазкой для типа 650
    frictionCoefficient: [null, null], // Данные отсутствуют
    temperatureRange: [-40, 250],
    selfLubricating: false,
    maxPV: 3.25, // Максимальное значение PV со смазкой для типа 650
    thermalConductivity: null,
    materialType: 'бронза',
    hardness: 210, // Минимальная твердость для типа 650
    tensileStrength: 750, // Для типа 650
    elongation: 12, // Для типа 650
  },
];

const materialsList05: TCard[] = [
  {
    name: 'Подшипники HMG-EPB',
    img: '/image/nemetalicheskie/hmg-epb.jpg',
    href: '/podshipniki/nemetalicheskie/hmg-epb',
    description:
      'Материал из инженерного пластика с высокой износостойкостью и самосмазывающимися свойствами.',
    maxLoad: 35,
    maxSpeed: null, // Данные отсутствуют
    frictionCoefficient: [0.05, 0.15],
    temperatureRange: [-40, 80],
    selfLubricating: true,
    maxPV: 0.4,
    thermalConductivity: null, // Данные отсутствуют
    materialType: 'полимер',
    hardness: null, // Данные отсутствуют
    tensileStrength: null, // Данные отсутствуют
    elongation: null, // Данные отсутствуют
  },
  {
    name: 'Подшипники HMG-FWB',
    img: '/image/nemetalicheskie/hmg-fwb.jpg',
    href: '/podshipniki/nemetalicheskie/hmg-fwb',
    description:
      'Высокопроизводительный полимерный материал для подшипников с различными характеристиками в зависимости от типа.',
    maxLoad: 240, // Максимальная статическая нагрузка для большинства типов
    maxSpeed: 0.4, // Максимальная скорость для типов CRW и CRP
    frictionCoefficient: [0.02, 0.3], // Общий диапазон для всех типов
    temperatureRange: [-100, 180], // Общий диапазон для большинства типов
    selfLubricating: true,
    maxPV: 2.0, // Максимальное значение для типа CRG
    thermalConductivity: null, // Данные отсутствуют
    materialType: 'полимер',
    hardness: 95, // Твердость по Шору D для большинства типов
    tensileStrength: null, // Данные отсутствуют
    elongation: null, // Данные отсутствуют
  },
];

const materialsList06: TCard[] = [
  {
    name: 'Подшипники HMG-200C',
    img: '/image/stalnye_samosmazivayushiesya/hmg-200c.jpg',
    href: '/podshipniki/stalnye_samosmazivayushiesya/hmg-200c',
    description:
      'Стальные самосмазывающиеся подшипники для различных применений.',
    maxLoad: 250, // Максимальная статическая нагрузка
    maxSpeed: 10, // Максимальная скорость со смазкой
    frictionCoefficient: [0.1, 0.25], // Коэффициент трения со смазкой
    temperatureRange: [-400, 120], // Диапазон рабочих температур
    selfLubricating: true,
    maxPV: 1.5, // Максимальное значение PV со смазкой
    thermalConductivity: 1.1e-5, // Коэффициент температурного расширения
    materialType: 'металлический',
    hardness: 40, // Твердость HB ≥40
    tensileStrength: null, // Данные отсутствуют
    elongation: null, // Данные отсутствуют
  },
  {
    name: 'Подшипники HMG-260',
    img: '/image/stalnye_samosmazivayushiesya/hmg-260.jpg',
    href: '/podshipniki/stalnye_samosmazivayushiesya/hmg-260',
    description:
      'Стальные самосмазывающиеся подшипники с различными характеристиками в зависимости от типа.',
    maxLoad: 300, // Максимальная статическая нагрузка для типов HMG-262 и HMG-265
    maxSpeed: 10, // Максимальная скорость для всех типов
    frictionCoefficient: [0.05, 0.2], // Диапазон коэффициента трения со смазкой
    temperatureRange: [-40, 250], // Диапазон рабочих температур
    selfLubricating: false,
    maxPV: 2.5, // Максимальное значение PV для типа HMG-265
    thermalConductivity: null, // Данные о коэффициенте температурного расширения неполные
    materialType: 'металлический',
    hardness: 550, // Минимальная твердость в HV1
    tensileStrength: null, // Данные отсутствуют
    elongation: null, // Данные отсутствуют
  },
];

const allProducts: TCard[] = materialsList01.concat(
  materialsList02,
  materialsList03,
  materialsList04,
  materialsList05,
  materialsList06,
);

export {
  materialsList01,
  materialsList02,
  materialsList03,
  materialsList04,
  materialsList05,
  materialsList06,
  allProducts,
};
