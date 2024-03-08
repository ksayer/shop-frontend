import React, { useRef, useState } from 'react';
import styles from './Accordion.module.css';

interface IAccordion {
  Header: React.ReactNode;
  children: React.ReactNode;
  titleHeight?: number;
}

export function Accordion({ Header, children, titleHeight = 60 }: IAccordion) {
  const [isOpened, setIsOpened] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const height = (isOpened ? contentRef.current?.scrollHeight || 0 : 0) + titleHeight;

  return (
    <div className={styles.wrapper} style={{ height: height }}>
      <div
        className={`${styles.header} ${isOpened && styles['header--opened']}`}
        onClick={() => setIsOpened(!isOpened)}
      >
        {Header}
      </div>
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
    </div>
  );
}
