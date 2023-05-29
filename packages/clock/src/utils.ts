/**
 * Pad a number with zeros to a given length
 * @param num {number}
 * @param length {number}
 * @returns {string} zero padded number
 * @example
 * zeroPad(1, 2) // '01'
 * zeroPad(1, 3) // '001'
 */
const zeroPad = (num: number, length: number) => {
  return String(num).padStart(length, '0')
}

/**
 * Pad a number with zeros to a length of 2
 * @param num {number}
 * @returns {string} zero padded number
 * @example
 * zeroPad2(1) // '01'
 * zeroPad2(10) // '10'
 */
export const zeroPad2 = (num: number) => {
  return zeroPad(num, 2)
}

/**
 * Pad a number with zeros to a length of 3
 * @param num {number}
 * @returns {string} zero padded number
 * @example
 * zeroPad3(1) // '001'
 * zeroPad3(10) // '010'
 * zeroPad3(100) // '100'
 */
export const zeroPad3 = (num: number) => {
  return zeroPad(num, 3)
}
