import React from 'react';
import styles from './Features.module.css';
import { Properties } from '@/components/pages/ProductDetail/Modification/Features/Properties';
import { Docs } from '@/components/pages/ProductDetail/Modification/Features/Docs';

export function Features() {
  return (
    <>
      <Properties />
      <Docs />
    </>
  );
}
