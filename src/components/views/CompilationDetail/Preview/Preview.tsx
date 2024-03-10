import React, {useState} from 'react';
import styles from './Preview.module.css';
import {Content} from "@/components/ui/Content";
import {ThumbSwiper} from "@/components/ui/ThumbSwiper";



const text = 'Магнитная система Track one функциональная и простая в использовании, изготовлена из высокопрочного алюминия. Светильники этой линейки имеют магнитный адаптер, что позволяет легко менять их расположение и световой сценарий.'
const title = 'Система Track one'


export function Preview() {

  return (
    <div className={`container`}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Content title={title} text={text}/>
        </div>
        <div className={styles.view}>
          <ThumbSwiper/>
        </div>
      </div>
    </div>
  );
}
