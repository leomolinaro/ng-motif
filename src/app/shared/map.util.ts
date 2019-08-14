export function toStringMap<T> (array: T[], keyGetter: (e: T) => string): { [key in string]: T } {
  const map: { [key in string]: T } = {};
  array.forEach (e => map[keyGetter (e)] = e);
  return map;
} // toStringMap

export function toNumberMap<T> (array: T[], keyGetter: (e: T) => number): { [key in number]: T } {
  const map: { [key in number]: T } = {};
  array.forEach (e => map[keyGetter (e)] = e);
  return map;
} // toNumberMap
