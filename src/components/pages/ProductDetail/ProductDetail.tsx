'use client';
import React from 'react';
import styles from './ProductDetail.module.css';
import { FormConsult } from '@/components/CMS/FormConsult';
import { IReviewBlock, ReviewBlock } from '@/components/CMS/ReviewBlock';
import { BreadCrumbs } from '@/components/pages/ProductDetail/BradCrumbs';
import { InfoBlock } from '@/components/pages/ProductDetail/InfoBlock';
import { Features } from '@/components/pages/ProductDetail/Features';
import { Gallery } from '@/components/pages/ProductDetail/Gallery';
import { ModificationList } from '@/components/pages/ProductDetail/ModificationList';
import { Modification } from '@/components/pages/ProductDetail/Modification';

const breadCrumbs = [
  { title: 'Интерьерные', url: '/catalog' },
  { title: 'Встраиваемые', url: '/contacts' },
];

const card = {
  price: 8910,
  discountedPrice: 7490,
  text: 'Серия встраиваемых светильников Gira для основного и дополнительного освещения. Комбинация нескольких источников света с помощью декоративных рамок применяется в помещениях с высокими потолками. <br><br> Поворотная конструкция светильника позволяет создать акцент на отдельных предметах интерьера.<br>Кроме представленных классических белого и чёрного цветов, корпус светильника и декоративные рамки возможно окрасить в любой другой цвет по палитре RAL.<br>Регулировка яркости светового потока производится при помощи механического диммера RLC (TRIAC) или',
  title: 'Gira',
  image: {
    absolute_url:
      'https://ledmonster.ru/media/filer_public/81/38/81382f69-c2c3-48d6-b58b-98f05deca9f9/fog-twm-1.png',
    id: 123,
    width: 1260,
    height: 746,
    optimized: false,
  },
};

const features = [
  {
    id: 1,
    title: 'Поворотный',
    description:
      'Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока. Легко изменяется направление светового потока.',
    image: {
      absolute_url:
        'https://ledmonster.ru/media/filer_public/22/31/22317790-b95d-4ca9-86ff-b3dd2e49a972/gira_noframe_white_rot2_desk.png',
      id: 123,
      width: 1080,
      height: 540,
      optimized: false,
    },
  },
  {
    id: 2,
    title: 'Минимальная глубина встраивания',
    description:
      'Минимальная глубина встраивания светильника всего 55мм. Блок питания расположен за потолком.',
    image: {
      absolute_url:
        'https://ledmonster.ru/media/filer_public/4f/eb/4feb1bc0-f8f2-4b36-9009-3d798dd9941d/gira_noframe_white_split_desk.jpeg',
      id: 123,
      width: 1080,
      height: 540,
      optimized: false,
    },
  },
  {
    id: 3,
    title: 'Диммируется',
    description:
      'Диммируется механическим диммером RLC(TRIAC). Надежный блок питания исключает пульсацию света.',
    image: {
      absolute_url:
        'https://ledmonster.ru/media/filer_public/fb/9b/fb9bbafd-d2c4-4323-8388-dc4b0bfba4c1/gira_noframe_white_dim_desk.jpeg',
      id: 123,
      width: 1080,
      height: 540,
      optimized: false,
    },
  },
];

const interiors = [
  {
    absolute_url:
      'https://ledmonster.ru/media/filer_public/df/2d/df2d0a6c-8e84-4230-ac71-a995a509e564/2022_gira_3in1_desk.jpg',
    id: 123,
    width: 1800,
    height: 765,
    optimized: false,
  },
  {
    absolute_url:
      'https://ledmonster.ru/media/filer_public/c2/ab/c2ab33f6-ca37-48d7-a2f9-d0aa4d7f6fbc/2022_gira_1_desk.jpg',
    id: 222,
    width: 1800,
    height: 765,
    optimized: false,
  },
  {
    absolute_url:
      'https://ledmonster.ru/media/filer_public/1a/67/1a6740bb-9fbe-494e-9602-9d91b8aa4d11/2022_gira_2_desk.jpg',
    id: 121,
    width: 1800,
    height: 765,
    optimized: false,
  },
  {
    absolute_url:
      'https://ledmonster.ru/media/filer_public/0c/b8/0cb87961-686f-4852-bad8-f4ca55317bdd/2022_gira_33__desk.jpg',
    id: 321,
    width: 1800,
    height: 765,
    optimized: false,
  },
];

const modifications = [
  {
    id: 1,
    title: 'GIRA',
    link: '/catalog/models/',
    image: {
      absolute_url:
        'https://ledmonster.ru/media/filer_public/67/02/67027e88-38b4-4dc3-bae4-7d3ab4716912/gira-mob.png',
      id: 321,
      width: 260,
      height: 148,
      optimized: false,
    },
    products: [
      {
        color: 'Белый',
        link: '#',
        image: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/67/02/67027e88-38b4-4dc3-bae4-7d3ab4716912/gira-mob.png',
          id: 321,
          width: 260,
          height: 148,
          optimized: false,
        },
        scheme: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/98/c9/98c98ca4-5e0f-4ad9-af97-192ce60ba248/gira-main-1.png',
          id: 321,
          width: 1956,
          height: 1100,
          optimized: false,
        },
        files: [
          { title: 'Инструкция', link: '#' },
          { title: '3D модель', link: '#' },
          { title: 'IES', link: '#' },
        ],
        power: '10.2 Вт',
        beam: '1300 лм',
        color_index: '97+Ra',
        color_temperature: '3000K',
        dimming: 'RLC(TRIAC)',
        beam_angle: '50°',
        protection: 'IP44',
        frame_color: 'Белый',
        price: '7490',
      },
      {
        color: 'Черный',
        link: '#',
        image: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/d2/78/d2786b05-bf21-46c1-8f03-2216d3e10c7c/217_gira_noframe_black_main1-1680x944_mob.png',
          id: 321,
          width: 260,
          height: 148,
          optimized: false,
        },
        scheme: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/f8/5f/f85fb9d1-1fd0-4a6a-90b3-3c4ae34d341e/new_gira_noframe_black_sk.svg',
          id: 321,
          width: 1956,
          height: 1100,
          optimized: false,
        },
        files: [
          { title: 'Инструкция', link: '#' },
          { title: '3D модель', link: '#' },
          { title: 'IES', link: '#' },
        ],
        power: '10.2 Вт',
        beam: '1300 лм',
        color_index: '97+Ra',
        color_temperature: '3000K',
        dimming: 'RLC(TRIAC)',
        beam_angle: '50°',
        protection: 'IP44',
        frame_color: 'Белый',
        price: '7490',
      },
    ],
  },
  {
    id: 2,
    title: 'GIRA FRAME X1',
    link: '/catalog/models/',
    image: {
      absolute_url:
        'https://ledmonster.ru/media/filer_public/7d/ad/7dad9731-e2f2-485a-9f99-2ea51091ac12/218_gira_x1_white_main1-1680x944_mob.png',
      id: 321,
      width: 260,
      height: 148,
      optimized: false,
    },
    products: [
      {
        color: 'Белый',
        link: '#',
        image: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/7d/ad/7dad9731-e2f2-485a-9f99-2ea51091ac12/218_gira_x1_white_main1-1680x944_mob.png',
          id: 321,
          width: 260,
          height: 148,
          optimized: false,
        },
        scheme: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/ef/e6/efe64b0f-b63b-4286-91f2-276018d63b19/new_gira_x1_black_sk.svg',
          id: 321,
          width: 1956,
          height: 1100,
          optimized: false,
        },
        files: [
          { title: 'Инструкция', link: '#' },
          { title: '3D модель', link: '#' },
          { title: 'IES', link: '#' },
        ],
        power: '10.2 Вт',
        beam: '1300 лм',
        color_index: '97+Ra',
        color_temperature: '3000K',
        dimming: 'RLC(TRIAC)',
        beam_angle: '50°',
        protection: 'IP44',
        frame_color: 'Белый',
        price: '8370',
      },
      {
        color: 'Черный',
        link: '#',
        image: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/3f/e8/3fe82b1e-0739-48a6-8c2a-5b792043284a/gira_x1_black_white-1680x944_mob.png',
          id: 321,
          width: 260,
          height: 148,
          optimized: false,
        },
        scheme: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/ef/e6/efe64b0f-b63b-4286-91f2-276018d63b19/new_gira_x1_black_sk.svg',
          id: 321,
          width: 1956,
          height: 1100,
          optimized: false,
        },
        files: [
          { title: 'Инструкция', link: '#' },
          { title: '3D модель', link: '#' },
          { title: 'IES', link: '#' },
        ],
        power: '10.2 Вт',
        beam: '1300 лм',
        color_index: '97+Ra',
        color_temperature: '3000K',
        dimming: 'RLC(TRIAC)',
        beam_angle: '50°',
        protection: 'IP44',
        frame_color: 'Белый',
        price: '8370',
      },
    ],
  },
  {
    id: 3,
    title: 'GIRA FRAME X2',
    link: '/catalog/models/',
    image: {
      absolute_url:
        'https://ledmonster.ru/media/filer_public/7e/dd/7edddecf-b9bc-448a-a142-797fda8c928d/220_gira_x2_white_main-1680x944_mob.png',
      id: 321,
      width: 260,
      height: 148,
      optimized: false,
    },
    products: [
      {
        color: 'Белый',
        link: '#',
        image: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/7e/dd/7edddecf-b9bc-448a-a142-797fda8c928d/220_gira_x2_white_main-1680x944_mob.png',
          id: 321,
          width: 260,
          height: 148,
          optimized: false,
        },
        scheme: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/ba/f0/baf09222-3fa0-4dd1-8cba-90afd11172d9/new_gira_x2_black_sk.svg',
          id: 321,
          width: 1956,
          height: 1100,
          optimized: false,
        },
        files: [
          { title: 'Инструкция', link: '#' },
          { title: '3D модель', link: '#' },
          { title: 'IES', link: '#' },
        ],
        power: '20.4 Вт',
        beam: '2600 лм',
        color_index: '97+Ra',
        color_temperature: '3000K',
        dimming: 'RLC(TRIAC)',
        beam_angle: '50°',
        protection: 'IP44',
        frame_color: 'Белый',
        price: '16300',
      },
      {
        color: 'Черный',
        link: '#',
        image: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/14/aa/14aafa44-7dd7-4593-94bc-72c28437b4fb/gira_x2_black_white-1680x944_mob.png',
          id: 321,
          width: 260,
          height: 148,
          optimized: false,
        },
        scheme: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/ba/f0/baf09222-3fa0-4dd1-8cba-90afd11172d9/new_gira_x2_black_sk.svg',
          id: 321,
          width: 1956,
          height: 1100,
          optimized: false,
        },
        files: [
          { title: 'Инструкция', link: '#' },
          { title: '3D модель', link: '#' },
          { title: 'IES', link: '#' },
        ],
        power: '20.4 Вт',
        beam: '2600 лм',
        color_index: '97+Ra',
        color_temperature: '3000K',
        dimming: 'RLC(TRIAC)',
        beam_angle: '50°',
        protection: 'IP44',
        frame_color: 'Белый',
        price: '16300',
      },
    ],
  },
  {
    id: 4,
    title: 'GIRA MINI',
    link: '/catalog/models/',
    image: {
      absolute_url:
        'https://ledmonster.ru/media/filer_public/8a/eb/8aeb6b9a-30b6-45cb-858b-2dee50cbc1df/gira-mini-mob.png',
      id: 321,
      width: 260,
      height: 148,
      optimized: false,
    },
    products: [
      {
        color: 'Белый',
        link: '#',
        image: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/8a/eb/8aeb6b9a-30b6-45cb-858b-2dee50cbc1df/gira-mini-mob.png',
          id: 321,
          width: 260,
          height: 148,
          optimized: false,
        },
        scheme: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/76/e6/76e65172-1a6c-4a17-81db-e2465eb90826/gira-mini-main-1.png',
          id: 321,
          width: 1956,
          height: 1100,
          optimized: false,
        },
        files: [
          { title: 'Инструкция', link: '#' },
          { title: '3D модель', link: '#' },
          { title: 'IES', link: '#' },
        ],
        power: '3 Вт',
        beam: '292 лм',
        color_index: '90+Ra',
        color_temperature: '3000K',
        dimming: 'Нет',
        beam_angle: '35°',
        protection: 'IP44',
        frame_color: 'Белый',
        price: '3289',
      },
      {
        color: 'Черный',
        link: '#',
        image: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/24/d9/24d95368-2968-4061-9aa8-1a24a64c05f7/giramini_black_main-1680x944_mob.png',
          id: 321,
          width: 260,
          height: 148,
          optimized: false,
        },
        scheme: {
          absolute_url:
            'https://ledmonster.ru/media/filer_public/76/e6/76e65172-1a6c-4a17-81db-e2465eb90826/gira-mini-main-1.png',
          id: 321,
          width: 1956,
          height: 1100,
          optimized: false,
        },
        files: [
          { title: 'Инструкция', link: '#' },
          { title: '3D модель', link: '#' },
          { title: 'IES', link: '#' },
        ],
        power: '3 Вт',
        beam: '292 лм',
        color_index: '90+Ra',
        color_temperature: '3000K',
        dimming: 'Нет',
        beam_angle: '35°',
        protection: 'IP44',
        frame_color: 'Белый',
        price: '3289',
      },
    ],
  },
];

export function ProductDetail({ reviewBlock }: { reviewBlock: IReviewBlock }) {
  return (
    <>
      {/*<BreadCrumbs title={card.title} links={breadCrumbs} />*/}
      <InfoBlock
        image={card.image}
        title={card.title}
        price={card.price}
        discountedPrice={card.discountedPrice}
        text={card.text}
      />
      <Features title={card.title} features={features} />
      <Gallery title={'Решения в интерьере'} images={interiors} />
      {/*<ModificationList modifications={modifications} />*/}
      {/*<Modification*/}
      {/*  key={modifications[0].id}*/}
      {/*  title={modifications[0].title}*/}
      {/*  products={modifications[0].products}*/}
      {/*/>*/}
      {/*<FormConsult />*/}
      {/*<ReviewBlock key={reviewBlock.id} {...reviewBlock} />*/}
    </>
  );
}
