import {BannerBlock} from "@/components/Section/BannerBlock";
import {CardBlock} from "@/components/Section/CardBlock";
import {FormConsult} from "@/components/Section/FormConsult";
import {IBanner} from "@/components/Section/BannerBlock/Banner";
import {FormCatalog} from "@/components/Section/FormCatalog";

const banners: IBanner[] = [
  {
    id: 1,
    imageUrl:
      'https://ledmonster.ru/media/filer_public/5f/81/5f81c9f6-b3cc-4e4f-8b01-ca32e8dad114/ny-3-main-1.jpg',
    text: 'Поздравляем вас с Новым годом и Рождеством!<br>\nПусть он подарит много идей и творческого вдохновения!<br>\nОт всей души желаем успеха, здоровья и счастья вам и вашим близким!<br>\nПусть все задуманное обязательно сбудется!<br>',
    title: 'Уважаемые партнеры и дорогие друзья!\n',
    imageSecond: true,
  },
  {
    id: 2,
    imageUrl:
      'https://ledmonster.ru/media/filer_public/17/50/175027ea-692a-41cd-bcf6-1982f2e762ad/ny-2-desk.jpg',
    text:
      '<b>Москва "ARTPLAY"</b> <br>\n' +
      'С 30 декабря по 3 января — выходные дни.<br>\n' +
      '4, 5, 6 января шоурум работает с 10 до 19 часов.<br>\n' +
      '7 января — выходной день.<br>\n' +
      'С 8 января шоурум начинает работать в обычном режиме с 10 до 19 часов.<br> <br><br> <b>Санкт-Петербург ТЦ "Василеостровский"</b><br>\n' +
      '31 декабря с 10 до 16 часов.<br>\n' +
      '6 января с 10 до 18 часов.<br>\n' +
      '1, 2, 7 января — выходные дни.<br>\n' +
      'В остальные дни шоурум работает в обычном режиме с 10 до 20 часов.\n',
    title: 'Режим работы в новогодние праздники',
    imageSecond: true,
  },
  {
    id: 3,
    imageUrl:
      'https://ledmonster.ru/media/filer_public/cf/0e/cf0e7454-f193-4063-a93d-82030cce186b/1680796871-12de6cc29e70551ffa8ad5855c5736a6.jpeg',
    text: 'Этот удобный и инновационный конструктор позволит вам создавать неповторимые сценарии освещения. Благодаря магнитному основанию светильников, вы сможете легко перемещать их по всей длине системы без лишних усилий.<br><br>Каждый светильник в системе Universe оснащен уникальной оптикой, которая обеспечивает равномерный и комфортный свет в помещении. Создавайте свой собственный дизайн освещения и наслаждайтесь уютной атмосферой!',
    title: 'Магнитная система Universe\n',
    imageSecond: false,
    button: {
      text: 'Подробнее',
      url: 'urlbutton',
    },
  },
  {
    id: 4,
    imageUrl:
      'https://ledmonster.ru/media/filer_public/d2/df/d2dfc5f2-6c48-4757-a87c-d6ee66fa78dc/showroommain.png',
    text: 'Наши интерактивные пространства позволят вам оценить все особенности света, такие как оттенок, интенсивность, возможности диммирования и создания световых сценариев. Вы получите реальные впечатления и научитесь правильно выбирать светильники для создания идеального освещения в вашем пространстве.',
    title: 'Лаборатории света Ledmonster',
    imageSecond: true,
    button: {
      text: 'Адреса',
      url: 'urlbutton',
    },
  },
];

const banners2: IBanner[] = [
  {
    id: 1,
    imageUrl:
      'https://ledmonster.ru/media/filer_public/4e/f1/4ef12805-9094-4b12-8fb8-d02df8f27cc1/kontr_postavki.jpg',
    text: 'Надежный и гибкий поставщик светильников на заказ — важный фактор успеха любого проекта. Для реализации самых сложных и нестандартных задач предоставляем производственный потенциал и более 1000 модификаций светильников из нового каталога, которые могут быть специально адаптированы под ваши индивидуальные требования и потребности.',
    title: 'Контрактные поставки\n',
    imageSecond: false,
    button: {
      text: 'Подробнее',
      url: 'urlbutton',
    },
  },
  {
    id: 2,
    imageUrl:
      'https://ledmonster.ru/media/filer_public/7f/44/7f446146-37d0-4a5b-8e24-ff83b1c42815/zemelnyi_unikalnyi.jpg',
    text:
      'Эксклюзивный светильник, созданный по авторскому эскизу из натуральных материалов, может стать уникальным элементом декора, подчеркивающим индивидуальность и стильность интерьера. Такое решение будет эстетично и функционально, обеспечивая оптимальное освещение проекта и создавая уютную атмосферу.',
    title: 'Уникальные решения',
    imageSecond: false,
    button: {
      text: 'Подробнее',
      url: 'urlbutton',
    },
  },
]

const modelCards = [
  {
    id: 1,
    imageUrl: 'https://ledmonster.ru/media/filer_public/17/06/1706d346-1ef8-4db3-b418-887c9614d878/eva_mini_white_model4.png',
    title: 'Серия Eva',
    text: 'Светильник без видимых рамок идеально подходит как для общего освещения, так и для дополнительного.'
  },
  {
    id: 2,
    imageUrl: 'https://ledmonster.ru/media/filer_public/56/b5/56b5e7bd-cb46-4f60-bd33-9b254674716a/spring-podves-white-main.png',
    title: 'Серия Eva',
    text: 'Светильник без видимых рамок идеально подходит как для общего освещения, так и для дополнительного.'
  },
  {
    id: 3,
    imageUrl: 'https://ledmonster.ru/media/filer_public/92/6c/926cc4ab-0716-4875-9b8b-21097b9be861/extra_turn_white_main_desk.png',
    title: 'Серия Eva',
    text: 'Светильник без видимых рамок идеально подходит как для общего освещения, так и для дополнительного.'
  },
  {
    id: 4,
    imageUrl: 'https://ledmonster.ru/media/filer_public/81/38/81382f69-c2c3-48d6-b58b-98f05deca9f9/fog-twm-1.png',
    title: 'Серия Eva',
    text: 'Светильник без видимых рамок идеально подходит как для общего освещения, так и для дополнительного.'
  },
]

const projectCards = [
  {
    id: 1,
    imageUrl: 'https://ledmonster.ru/media/filer_public/14/15/141566e7-7aaf-4026-8ecf-ebc7fdc06c13/smolnii_main.jpg',
    title: 'ЖК Смольный, квартира Артема Тарасова',
    text: 'Петербург, Смольный пр-кт, д. 11'
  },
  {
    id: 2,
    imageUrl: 'https://ledmonster.ru/media/filer_public/91/16/9116bd25-237f-4158-b77e-c6e3ba8b9d82/ma_studio_main.jpg',
    title: 'MA СТУДИЯ',
    text: 'Петербург, ул. Ушинского, 12М'
  },
  {
    id: 3,
    imageUrl: 'https://ledmonster.ru/media/filer_public/ac/f1/acf10492-33a2-4004-b976-fd0839a7df20/moskovsky_eidis_housenik00033.jpg',
    title: 'ЖК Новомосковский',
    text: 'Петербург, Московский пр., 65/А'
  },
  {
    id: 4,
    imageUrl: 'https://ledmonster.ru/media/filer_public/e7/2f/e72f748b-df96-408c-ab6f-19f65630b195/yit_main.jpeg',
    title: 'ЖК Смольный проспект',
    text: 'Петербург, Смольный пр-кт, д. 11,13,15'
  },
]

export default function Home() {
  return (
    <>
      <BannerBlock banners={banners}/>
      <CardBlock title={'Новые серии светильников'} link={'#'} linkText={'Все серии'} cards={modelCards}/>
      <FormConsult/>
      <BannerBlock banners={banners2}/>
      <FormCatalog/>
      <CardBlock title={'Проекты'} link={'#'} linkText={'Все проекты'} arrow={true} cards={projectCards}/>
    </>
  );
}
