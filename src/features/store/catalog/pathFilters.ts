import { createStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export type FilterType =
  | 'beam'
  | 'power'
  | 'beam_angle'
  | 'color_temperature'
  | 'protection'
  | 'dimming';

export interface IFilter {
  name: string;
  ids?: number[];
}

interface IPathFilterStore {
  groupSlug: string;
  categorySlug: string;
  filters: {
    [key in FilterType as string]: IFilter;
  };
}

export interface PathFilterState extends IPathFilterStore {
  updateGroupSlug: (groupSlug: string) => void;
  updateCategorySlug: (categorySlug: string) => void;
  updateFilter: ({
    filter,
    name,
    ids,
  }: {
    filter: FilterType;
    name: string;
    ids?: number[];
  }) => void;
  resetFilter: () => void;
}

export type PathFilterStore = ReturnType<typeof createPathFilterStore>;

export const createPathFilterStore = (initProps?: Partial<IPathFilterStore>) => {
  const DEFAULT_PROPS: IPathFilterStore = {
    groupSlug: '',
    categorySlug: '',
    filters: {},
  };
  return createStore<PathFilterState>()(
    devtools(
      immer(set => ({
        ...DEFAULT_PROPS,
        ...initProps,
        updateGroupSlug: (groupSlug: string) => {
          set(state => {
            state.groupSlug = groupSlug;
          });
        },
        updateCategorySlug: (categorySlug: string) => {
          set(state => {
            state.categorySlug = categorySlug;
          });
        },
        updateFilter: ({ filter, name, ids = [] }) =>
          set(state => {
            if (state.filters[filter]?.name == name) {
              delete state.filters[filter];
            } else {
              state.filters[filter] = { name: name, ids: ids };
            }
          }),
        resetFilter: () => {
          set(state => {
            state.filters = {};
          });
        },
      })),
    ),
  );
};
