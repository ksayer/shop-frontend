import React from 'react';
import styles from './ReviewBlock.module.css';
import { Section } from '../../../ui/Section';
import { IReview, Review } from '@/components/views/CMS/ReviewBlock/Review';
import { ICard, IContent } from '@/api/cms';

export function ReviewBlock({ title, cards }: IContent) {
  return (
    <Section>
      <div className={`${styles.wrapper} flex-gap-title`}>
        <div className={styles.header}>
          <h2 className={'section__title'}>{title}</h2>
        </div>
        <div className={`${styles.body} flex-gap`}>
          {cards.map(data => (
            <Review key={data.id} {...data} />
          ))}
        </div>
      </div>
    </Section>
  );
}
