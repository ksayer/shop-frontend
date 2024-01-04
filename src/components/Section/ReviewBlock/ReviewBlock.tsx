import React from 'react';
import styles from './ReviewBlock.module.css';
import {Section} from "@/components/Section";
import {IReview, Review} from "@/components/Section/ReviewBlock/Review";

interface IReviewBlock {
  title: string;
  cards: IReview[]
}

export function ReviewBlock({title, cards}: IReviewBlock) {
  return (
    <Section>
      <div className={`${styles.wrapper} flex-gap-title`}>
        <div className={styles.header}>
          <h2 className={'section__title'}>
            {title}
          </h2>
        </div>
        <div className={`${styles.body} flex-gap`}>
          {cards.map(data => <Review key={data.id} imageUrl={data.imageUrl} link={data.link} title={data.title} subtitle={data.subtitle} text={data.text}/>)}
        </div>
      </div>
    </Section>
  );
}