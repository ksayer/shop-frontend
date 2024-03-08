import React from 'react';
import { Search as SearchIcon } from '@/components/icons/Search';

interface ISearch {
  svgClass: string;
  btnClass: string;
}

export function Search({ svgClass, btnClass }: ISearch) {
  return (
    <button className={btnClass}>
      <SearchIcon className={svgClass} />
    </button>
  );
}
