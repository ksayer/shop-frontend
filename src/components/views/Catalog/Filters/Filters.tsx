'use client';
import React, { useMemo, useRef, useState } from 'react';
import styles from './Filters.module.css';
import { Filter } from '@/components/icons/Filter';
import { OptionList } from '@/components/views/Catalog/Filters/OptionList';
import { useClickOutside } from '@/hooks/useClickOutside';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';
import { IGroup } from '@/api/catalog/catalog';
import { collapseFilters } from '@/components/views/Catalog/Filters/collapseFilters';
import { FilterType } from '@/api/catalog/models';

interface IFilterComponent {
  groups: IGroup[];
}

export function Filters({ groups }: IFilterComponent) {
  const groupSlug = usePathFiltersContext(state => state?.groupSlug);
  const initFilters = useMemo(() => collapseFilters(groups, groupSlug), [groups, groupSlug]);
  const { filters, updateFilter } = usePathFiltersContext(state => state);
  const [isOpened, setIsOpened] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const activeSelectorsRef = useRef<HTMLDivElement>(null);
  const height = (listRef.current?.scrollHeight || 0) + 45;
  useClickOutside({ isOpened: isOpened, ref: wrapperRef, setIsOpened: setIsOpened });
  return (
    <div ref={wrapperRef} className={styles.container}>
      <div
        className={`${styles.wrapper} ${isOpened && styles['wrapper--opened']}`}
        style={isOpened ? { height: `${height}px` } : { height: '45px' }}
      >
        <div
          onClick={(e: React.MouseEvent) => {
            !activeSelectorsRef.current?.contains(e.target as HTMLButtonElement) &&
              setIsOpened(!isOpened);
          }}
          className={`${styles.control}`}
        >
          <span className={`${styles.title}`}>Фильтры</span>
          <div ref={activeSelectorsRef} className={`${styles['active-selectors']}`}>
            {Object.keys(filters).map((key: string) => (
              <button
                key={key}
                className={`filter-item ${styles['active-selectors__btn']}`}
                onClick={() => {
                  setTimeout(
                    () =>
                      updateFilter({
                        filter: key as FilterType,
                        name: filters[key]?.name,
                      }),
                    1,
                  );
                }}
              >
                {filters[key].name}
              </button>
            ))}
          </div>
          <span className={`${styles.icon}`}>
            <Filter />
          </span>
        </div>
        <div ref={listRef} className={styles['list-wrapper']}>
          <OptionList filters={initFilters} />
        </div>
      </div>
    </div>
  );
}
