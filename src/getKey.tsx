export function getKey<
  O extends {},
  K extends keyof O,
  R extends UnionToTuple<K> extends [K] ? K : unknown
>(oneProperty: O): R {
  const keyList = Object.keys(oneProperty);
  return (keyList.length === 1 ? keyList[0] : undefined) as unknown as R;
}

/**
 * @see https://git.io/Jyvga
 */
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

/**
 * @see https://git.io/Jyv2R
 */
type UnionToTuple<T> = UnionToIntersection<
  T extends any ? (t: T) => T : never
> extends (_: any) => infer W
  ? [...UnionToTuple<Exclude<T, W>>, W]
  : [];
