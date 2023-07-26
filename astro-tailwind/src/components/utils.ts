type SplitProps<T, K extends (readonly (keyof T)[])[]> = [
  ...{
    [P in keyof K]: P extends `${number}` ? Pick<T, Extract<K[P], readonly (keyof T)[]>[number]> : never;
  },
  Omit<T, K[number][number]>
];

const splitProps = <T extends Record<any, any>, K extends [readonly (keyof T)[], ...(readonly (keyof T)[])[]]>(
  props: T,
  ...keys: K
): SplitProps<T, K> => {
  const otherObject: Record<string, any> = {};
  const objects: Record<string, any>[] = keys.map(() => ({}));

  for (const prop in props) {
    let value = props[prop];
    let blocked = false;
    let objectIndex = 0;
    for (const key of keys) {
      if (key.includes(prop)) {
        blocked = true;
        objects[objectIndex][prop] = value;
      }
      ++objectIndex;
    }

    if (!blocked) {
      otherObject[prop] = value;
    }
  }

  return [...objects, otherObject] as any;
};

export { splitProps };
