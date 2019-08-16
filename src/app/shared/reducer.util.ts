export function removed<T> (element: T, array: T[]): T[] {
  let index = array.indexOf (element);
  return <T[]> [ ...array.slice (0, index), ...array.slice (index + 1)];
} // removed

export function pushed<T> (element: T, array: T[]): T[] {
  if (!array) { array = []; }
  return <T[]> [ ...array, element ];
} // pushed

export function pushedMany<T> (elements: T[], array: T[]): T[] {
  if (!array) { array = []; }
  return <T[]> [ ...array, ...elements ];
} // pushedMany

export function unshifted<T> (element: T, array: T[]): T[] {
  if (!array) { array = []; }
  return <T[]> [ element, ...array ];
} // unshifted