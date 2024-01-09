import React from 'react';
import { Section } from '../../Section';
import styles from './CardBlock.module.css';
import { Card, ICard } from './Card';

export interface ICardBlock {
  title: string;
  link_text: string;
  link: string;
  cards: ICard[];
}

export function CardBlock({ title, link_text, link, cards }: ICardBlock) {
  return (
    <Section>
      <div className={`${styles.wrapper} flex-gap-title`}>
        <div className={styles.header}>
          <h2 className={'section__title'}>{title}</h2>
          <a className={styles.catalog} href={link}>
            {link_text}
          </a>
        </div>
        <div
          className={`${styles.body} flex-gap ${
            cards[0].type === 'publication' && styles.publications
          }`}
        >
          {cards.map(data => (
            <Card key={data.id} {...data} />
          ))}
        </div>
      </div>
    </Section>
  );
}
