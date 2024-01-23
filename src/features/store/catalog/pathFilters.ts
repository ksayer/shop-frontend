import { createStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
type StringNumber = string | number;

interface Value {
  id: StringNumber;
  title: StringNumber;
}

interface IPathFilterStore {
  groupSlug: string;
  categorySlug: string;
  filters: {
    [v: StringNumber]: Value;
  };
}

export interface PathFilterState extends IPathFilterStore {
  updateGroupSlug: (groupSlug: string) => void;
  updateCategorySlug: (categorySlug: string) => void;
  updateFilter: ({ slug, value }: { slug: StringNumber; value: Value }) => void;
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
        updateFilter: ({ slug, value }) =>
          set(state => {
            if (value.id === state.filters[slug]?.id) {
              delete state.filters[slug];
            } else {
              state.filters[slug] = value;
            }
          }),
      })),
    ),
  );
};
