/**
 * zip two arrays like Python's zip()
 * @param a
 * @param b
 * @returns new array of [a[i], b[i]]
 */
export const zip = <T, S>(a: T[], b: S[]): [T, S][] =>
  Array.from(Array(Math.min(b.length, a.length)), (_, i) => [a[i], b[i]])
