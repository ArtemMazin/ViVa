const REG_EXP_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

const REG_EXP_NAME = /^[А-ЯA-Zё\s-]+$/imu;

const REG_EXP_TEL = /^[\d\+][\d\(\)\ -]{8,14}\d$/;

const messages = {
  INPUT_EMAIL: 'Неверный формат почты',
  INPUT_TEL: 'Некорректный номер',
  INPUT_NAME:
    'Имя может содержать только латиницу, кириллицу, пробел или дефис',
};

const navLinks = [
  { name: 'Главная', href: '/' },
  { name: 'О компании', href: '/about' },
  { name: 'Подшипники', href: '/podshipniki' },
  { name: 'Подбор подшипников', href: '/filters' },
  { name: 'Доставка', href: '/delivery' },
  { name: 'Каталог', href: '/catalog' },
  { name: 'Контакты', href: '/contacts' },
];

const sliderImages = [
  { img: '/image/slider01.png', name: 'Подшипники скольжения HMG-800/815' },
  { img: '/image/slider02.png', name: 'Подшипники скольжения HMG-TEX' },
  { img: '/image/slider03.png', name: 'Подшипники скольжения HMG-650' },
];

export {
  navLinks,
  sliderImages,
  REG_EXP_EMAIL,
  REG_EXP_NAME,
  REG_EXP_TEL,
  messages,
};
