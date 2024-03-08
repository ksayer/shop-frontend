import { IGroup } from '@/api/catalog/catalog';
import { ALL_GROUPS } from '@/features/constants/urls';

interface FilterData {
  ids?: number[];
  groupSlagArray?: string[];
  group_title: string;
}

interface IHelperDictionary {
  [key: string]: {
    [group_title: string]: FilterData;
  };
}

interface IResult {
  [key: string]: FilterData[];
}

export const collapseFilters = (groups: IGroup[], groupSlug: string) => {
  const helperDictionary: IHelperDictionary = {
    power: {},
    beam: {},
    protection: {},
    beam_angle: {},
    color_temperature: {},
    dimming: {},
  };
  groups.forEach(group => {
    if (!groupSlug || group.slug === groupSlug || groupSlug == ALL_GROUPS) {
      for (const [key, value] of Object.entries(group.filters)) {
        for (const attrGroup of value) {
          if (!helperDictionary[key][attrGroup['group_title']]) {
            helperDictionary[key][attrGroup['group_title']] = {
              ids: [attrGroup['ids']],
              group_title: attrGroup['group_title'],
              groupSlagArray: [group['slug']],
            };
          } else {
            helperDictionary[key][attrGroup['group_title']]['ids']?.push(
              ...attrGroup['ids'].filter(
                (id: number) =>
                  !helperDictionary[key][attrGroup['group_title']]['ids']?.includes(id),
              ),
            );
            helperDictionary[key][attrGroup['group_title']]['groupSlagArray']?.push(group['slug']);
          }
        }
      }
    }
  });
  const result: IResult = {
    power: [],
    beam: [],
    protection: [],
    beam_angle: [],
    color_temperature: [],
    dimming: [],
  };
  for (const [key, value] of Object.entries(helperDictionary)) {
    for (const [_, inner_value] of Object.entries(value)) {
      result[key].push(inner_value);
    }
  }
  return result;
};
