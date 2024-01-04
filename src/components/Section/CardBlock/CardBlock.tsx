import React from 'react';
import {Section} from "@/components/Section";
import styles from './CardBlock.module.css';
import {Card, ICard} from "./Card";


interface ICardBlock {
  title: string;
  linkText: string;
  link: string;
  arrow?: boolean;
  cards: ICard[];
}

export function CardBlock({title, linkText, link, arrow, cards}: ICardBlock) {
  return (
    <Section>
      <div className={`${styles.wrapper} flex-gap-title`}>
        <div className={styles.header}>
          <h2 className={'section__title'}>
            {title}
          </h2>
          <a className={styles.catalog} href={link}>{linkText}</a>
        </div>
        <div className={`${styles.body} flex-gap`}>
          {cards.map(data => <Card key={data.id} imageUrl={data.imageUrl} title={data.title} text={data.text} arrow={arrow}/>)}
        </div>
      </div>
    </Section>
  );
}
