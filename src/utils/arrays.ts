interface GenericObject {
  [key: string]: any;
}

export const getUniqueObjectsArray = <T extends GenericObject>(
  array: T[],
  property: keyof T,
): T[] => {
  return array.filter((item, index, array) => {
    return array.findIndex(inner_item => item[property] === inner_item[property]) === index;
  });
};
