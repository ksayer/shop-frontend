import React from 'react';
import styles from './Docs.module.css';
import featureStyles from '@/components/pages/ProductDetail/ModificationList/Modification/Features/Features.module.css';
import { Accordion } from '@/components/Accordion';
import { File } from '@/components/icons/File';

export function Docs() {
  return (
    <div className={`volume ${featureStyles.wrapper}`}>
      <Accordion Header={<h4 className={featureStyles.title}>Документация</h4>}>
        <ul className={styles.links}>
          <a href="#" className={styles.link}>
            <File /> Инструкция.pdf
          </a>
          <a href="#" className={styles.link}>
            <File /> 3D модель.fbx
          </a>
        </ul>
      </Accordion>
    </div>
  );
}
