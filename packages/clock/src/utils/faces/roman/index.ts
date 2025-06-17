
/**
 * Converts a number to clock face format.
 * @param num - The number to convert, typically representing the hour on a clock face.
 * @returns - A string representing the Roman numeral equivalent of the number.
 */
export const face = (num: number): string => {
  switch (num) {
    case 0:
      return 'Ⅻ'
    case 1:
      return 'Ⅰ'
    case 2:
      return 'Ⅱ'
    case 3:
      return 'Ⅲ'
    case 4:
      return 'Ⅳ'
    case 5:
      return 'Ⅴ'
    case 6:
      return 'Ⅵ'
    case 7:
      return 'Ⅶ'
    case 8:
      return 'Ⅷ'
    case 9:
      return 'Ⅸ'
    case 10:
      return 'Ⅹ'
    case 11:
      return 'Ⅺ'
  }
  return `${num}` // unreachable
}
