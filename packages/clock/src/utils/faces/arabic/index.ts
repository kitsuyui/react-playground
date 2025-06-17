/**
 * Converts a number to clock face format.
 * The common clock face starts at 0 o'clock, and its display is 12.
 * @param num
 * @returns
 */
export const face = (num: number): string => {
  if (num === 0) {
    return '12'
  }
  return `${num}`
}
