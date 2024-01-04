import React from 'react';
import styles from './FormHeader.module.css';

interface IFromHeader {
  title: string;
  text: string;
  titleClass?: string
  textClass?: string
  headerClass?: string
}

export function FormHeader({title, text, titleClass, textClass, headerClass}: IFromHeader) {
  return (
    <div className={`${styles.header} ${headerClass}`}>
      <h2 className={`${styles.title} ${titleClass}`}>{title}</h2>
      <div className={`${styles.text} base-text ${textClass}`} dangerouslySetInnerHTML={{__html: text}}></div>
    </div>
  );
}
