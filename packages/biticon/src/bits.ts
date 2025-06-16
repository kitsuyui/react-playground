export const is128Bit = (value: bigint): boolean => {
  return value >= BigInt(0) && value <= BigInt('0xffffffffffffffffffffffffffffffff')
}

/**
 * Convert 128bit value to int8 array
 * @param value 128bit value
 * @returns Uint8Array but each element is 2 bits (0-3) and the array has 64 elements (2 * 64 = 128 bits)
 */
export const from128bitTo2bitArray = (value: bigint): Uint8Array => {
  // FIXME: There might be bugs related to endianness... (first character will be the last in the array)
  const mask = BigInt(0b11) // 2 bits (0b00, 0b01, 0b10, 0b11)
  const bytes = new Uint8Array(64)
  for (let i = 0; i < 64; i++) {
    // take 2 bits from the value
    const bit = BigInt(i) * BigInt(2)
    const value_ = (value >> bit ) & mask  // shift the value to the right by 2 bits for each iteration
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
  if (array.length !== 64) {
    throw new Error('Array length must be 64')
  }
  let value = BigInt(0)
  for (let i = 0; i < array.length; i++) {
    const bit = array[i]
    if (bit < 0 || bit > 3) {
      throw new Error(`Invalid bit value: ${bit}`)
    }
    const addBit = BigInt(bit) << BigInt(i * 2) // shift the value to the left by 2 bits for each iteration
    // add the bit
    value |= BigInt(addBit) // bitwise OR to combine the bits
  }
  return value
}
