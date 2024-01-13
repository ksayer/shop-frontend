import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';

type StringNumber = string | number;

interface Value {
  id: StringNumber;
  title: StringNumber;
}

interface IFilterStore {
  filters: {
    [v: StringNumber]: Value;
  };
  updateFilter: ({ variable, value }: { variable: StringNumber; value: Value }) => void;
}

export const useFilterStore = create<IFilterStore>()(
  devtools(
    immer(set => ({
      filters: {},
      updateFilter: ({ variable, value }) =>
        set(state => {
          if (value.id === state.filters[variable]?.id) {
            delete state.filters[variable];
          } else {
            state.filters[variable] = value;
          }
        }),
    })),
  ),
);
