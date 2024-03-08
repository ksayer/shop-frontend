'use client';

import React, { useState } from 'react';
import styles from './TabPanel.module.css';
import Image from 'next/image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transition.css';
import { IBanner, ITab } from '@/api/cms';

type ExtendedTabType = ITab & {
  ref?: React.RefObject<HTMLImageElement>;
};

export function TabPanel({ title, tabs }: IBanner) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  if (!tabs) return;
  const refsTabs: ExtendedTabType[] = tabs.map(tab => ({ ...tab, ref: React.createRef() }));
  return (
    <article className={`${styles.article} flex-gap`}>
      <div className={`${styles['image-wrapper']}`}>
        <TransitionGroup>
          {refsTabs?.map((tab, index) => {
            return (
              index === selectedTabIndex && (
                <CSSTransition nodeRef={tab.ref} key={tab.id} timeout={300} classNames="transition">
                  <Image
                    key={tab.id}
                    ref={tab.ref}
                    src={tab.image.absolute_url}
                    alt={'image'}
                    width={tabs[selectedTabIndex].image.width}
                    height={tabs[selectedTabIndex].image.height}
                    sizes="100vw"
                    className={`${styles.image} ${index === selectedTabIndex && styles.show}`}
                  />
                </CSSTransition>
              )
            );
          })}
        </TransitionGroup>
      </div>
      <div className={`${styles.content} flex-gap`}>
        <h3 className={`${styles.title}`}>{title}</h3>
        <ul className={`flex-gap ${styles.tab__items}`}>
          {tabs?.map((tab, index) => (
            <li
              className={`${styles.item} ${index === selectedTabIndex && styles.active}`}
              key={tab.id}
              onClick={() => setSelectedTabIndex(index)}
            >
              <h4 className={styles.item__title}>{tab.title}</h4>
              <p className={`${styles.item__text} base-text`}>{tab.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
