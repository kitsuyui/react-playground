import { expect, describe, it } from 'vitest'

import {
  from128bitTo2bitArray,
  from2bitArrayTo128bit,
  is128Bit,
} from './bits'

describe('from128bitTo2bitArray', () => {
  it('should convert 128-bit bigint to Uint8Array', () => {
    const input = BigInt('0xfedcba9876543210fedcba9876543210')
    expect(input.toString(2).length).toBe(128)
    expect(is128Bit(input)).toBe(true)
    const output = from128bitTo2bitArray(input)
    expect(output.length).toBe(64)
    for (let i = 0; i < output.length; i++) {
      expect(output[i]).satisfies((value: number) => value >= 0 && value <= 3)
    }
  })
  it('is inversible to from2bitArrayTo128bit', () => {
    const input = BigInt('0xfedcba9876543210fedcba9876543210')
    expect(input.toString(2).length).toBe(128)
    expect(is128Bit(input)).toBe(true)
    const array = from128bitTo2bitArray(input)
    const output = from2bitArrayTo128bit(array)
    expect(output).toBe(input)

    // random test
    const iterations = 100
    for (let i = 0; i < iterations; i++) {
      const randomBigInt = BigInt(
        Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
      )
      const random128Bit = randomBigInt & BigInt('0xffffffffffffffffffffffffffffffff')
      const randomArray = from128bitTo2bitArray(random128Bit)
      const convertedBack = from2bitArrayTo128bit(randomArray)
      expect(convertedBack).toBe(random128Bit)
    }
  })
})

describe('is128Bit', () => {
  it('should return true for valid 128-bit bigint', () => {
    const input = BigInt('0xffffffffffffffffffffffffffffffff')
    expect(input.toString(2).length).toBe(128)
    expect(is128Bit(input)).toBe(true)
    expect(is128Bit(input + BigInt(1))).toBe(false)
  })

  it('should return false for negative bigint', () => {
    const input = BigInt('-1')
    expect(is128Bit(input)).toBe(false)
  })
})
