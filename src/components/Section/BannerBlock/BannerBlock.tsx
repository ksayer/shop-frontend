import React from 'react';
import {Section} from "@/components/Section";
import {Banner, IBanner} from "@/components/Section/BannerBlock/Banner";
import styles from './BannerBlock.module.css';


interface IBannerBlock {
  order?: number;
  title?: string;
  avoidMobileImage?: boolean;
  small?: boolean;
  banners?: IBanner[];
}


export function BannerBlock({order, title, banners, avoidMobileImage = false, small = false}: IBannerBlock) {
  return (
    <Section>
      <div className={`${styles.wrapper} flex-gap-title`}>
        {title &&
          <div className={styles.header}>
            <h2 className={'section__title'}>
              {title}
            </h2>
          </div>
        }
        <div className={`${styles.banners} flex-gap`}>
          {banners?.map((data, index) => (
            <Banner
              key={data.id}
              imageUrl={data.imageUrl}
              preTitle={data.preTitle}
              title={data.title}
              text={data.text}
              imageSecond={data.imageSecond}
              button={data.button}
              avoidMobileImage={avoidMobileImage}
              small={small}
              priority={order === 0 && (index === 0 || index === 1)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
