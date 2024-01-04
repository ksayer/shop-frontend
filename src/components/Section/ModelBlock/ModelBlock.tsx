import React from 'react';
import {Section} from "@/components/Section";
import styles from './ModelBlock.module.css';
import {IModel, Model} from "@/components/Section/ModelBlock/Model";


const models: IModel[] = [
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


export function ModelBlock() {
  return (
    <Section>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Новые серии светильников
          </h2>
          <a className={styles.catalog} href="#">Все серии</a>
        </div>
        <div className={styles.body}>
          {models.map(data => <Model key={data.id} imageUrl={data.imageUrl} title={data.title} text={data.text}/>)}
        </div>
      </div>
    </Section>
  );
}
