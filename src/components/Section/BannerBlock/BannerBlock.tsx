import React from 'react';
import {Section} from "@/components/Section";
import {Banner, IBanner} from "@/components/Section/BannerBlock/Banner";

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

export function BannerBlock() {
  return (
    <Section>
      {banners.map(data => (
        <Banner
          key={data.id}
          imageUrl={data.imageUrl}
          title={data.title}
          text={data.text}
          imageSecond={data.imageSecond}
          button={data.button}
        />
      ))}
    </Section>
  );
}
