export const is128Bit = (value: bigint): boolean => {
  return value >= BigInt(0) && value <= BigInt('0xffffffffffffffffffffffffffffffff')
}

/**
 * Convert 128bit value to int8 array in little-endian bit order.
 *
 * The array is ordered with the least significant bits first:
 * - bytes[0]  = bits [1:0]   (least significant 2 bits)
 * - bytes[63] = bits [127:126] (most significant 2 bits)
 *
 * This is the inverse of {@link from2bitArrayTo128bit}.
 *
 * @param value 128bit value
 * @returns Uint8Array with 64 elements, each holding a 2-bit value (0-3)
 */
export const from128bitTo2bitArray = (value: bigint): Uint8Array => {
  const mask = BigInt(0b11) // 2 bits (0b00, 0b01, 0b10, 0b11)
  const bytes = new Uint8Array(64)
  for (let i = 0; i < 64; i++) {
    const bit = BigInt(i) * BigInt(2)
    const value_ = (value >> bit) & mask
    bytes[i] = Number(value_)
  }
  return bytes
}

/**
 * Convert 2bit array to 128bit value
 * @param array Uint8Array with 64 elements (2 bits each)
 * @returns bigint representing the 128-bit value
 * @throws Error if the array length is not 64 or if any element is not in the range of 0-3
 */
export const from2bitArrayTo128bit = (array: Uint8Array): bigint => {
  validate2bitArray(array)
  let value = BigInt(0)
  for (let i = 0; i < array.length; i++) {
    const bit = array[i]
    const addBit = BigInt(bit) << BigInt(i * 2) // shift the value to the left by 2 bits for each iteration
    // add the bit
    value |= BigInt(addBit) // bitwise OR to combine the bits
  }
  return value
}

const validate2bitArray = (array: Uint8Array) => {
  if (array.length !== 64) {
    throw new Error('Array length must be 64')
  }

  for (const bit of array) {
    validate2bitValue(bit)
  }
}

const validate2bitValue = (bit: number) => {
  if (bit < 0 || bit > 3) {
    throw new Error(`Invalid bit value: ${bit}`)
  }
}
