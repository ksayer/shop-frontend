'use client';
import React, { useMemo, useRef, useState } from 'react';
import styles from './Filters.module.css';
import { Filter } from '@/components/icons/Filter';
import { OptionList } from '@/components/pages/Catalog/Filters/OptionList';
import { useClickOutside } from '@/features/hooks/useClickOutside';
import { usePathFiltersContext } from '@/features/hooks/usePathFiltersContext';
import { IFilter, IGroup } from '@/api/catalog/catalog';

const SHOW_FILTERS = ['power', 'temperature', 'beam', 'beam_angle', 'dimming', 'protection'];

interface IFilterComponent {
  groups: IGroup[];
}

const collapseFilters = (groups: IGroup[], groupSlug: string) => {
  const filters: Record<string, IFilter> = {};
  groups.forEach(group => {
    if (!groupSlug || group.slug === groupSlug) {
      group.filters.forEach(filter => {
        if (!filters[filter.title]) {
          filters[filter.title] = {
            ...filter,
            properties: [{ id: filter.id, title: filter.property, groupSlugArray: [group.slug] }],
          };
        } else {
          const sameProperty = filters[filter.title].properties.find(prop => prop.id == filter.id);
          if (sameProperty) {
            sameProperty.groupSlugArray.push(group.slug);
          } else {
            filters[filter.title].properties.push({
              id: filter.id,
              title: filter.property,
              groupSlugArray: [group.slug],
            });
          }
        }
      });
    }
  });
  return Object.values(filters).filter(filter => SHOW_FILTERS.includes(filter.slug));
};

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
            {Object.keys(filters).map(key => (
              <button
                key={key}
                className={`filter-item ${styles['active-selectors__btn']}`}
                onClick={() =>
                  setTimeout(() => updateFilter({ slug: key, value: { ...filters[key] } }), 1)
                }
              >
                {filters[key].title}
              </button>
            ))}
          </div>
          <span className={`${styles.icon}`}>
            <Filter />
          </span>
        </div>
        <div ref={listRef} className={styles['list-wrapper']}>
          <OptionList items={initFilters} />
        </div>
      </div>
    </div>
  );
}
