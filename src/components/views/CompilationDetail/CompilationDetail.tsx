'use client';
import React from 'react';
import { CompilationBreadCrumbs } from '@/components/views/CompilationDetail/CompilationBreadCrumbs';
import {Preview} from "@/components/views/CompilationDetail/Preview";

interface ICompoenentDetail {
  slug: string;
}

export function CompilationDetail({ slug }: ICompoenentDetail) {
  return (
    <>
      <CompilationBreadCrumbs />
      <Preview />
      <div>hello</div>
    </>
  );
}
