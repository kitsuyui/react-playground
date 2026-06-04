import { expect, describe, it } from 'vitest'

import {
  from128bitTo2bitArray,
  from2bitArrayTo128bit,
  is128Bit,
} from './bits'

const MASK_64 = BigInt('0xffffffffffffffff')
const MASK_128 = BigInt('0xffffffffffffffffffffffffffffffff')
const SHIFT_13 = BigInt(13)
const SHIFT_7 = BigInt(7)
const SHIFT_17 = BigInt(17)
const SHIFT_64 = BigInt(64)

const createSeeded128BitSamples = (count: number) => {
  let state = BigInt('0x9e3779b97f4a7c15')

  const next64 = () => {
    state ^= state << SHIFT_13
    state &= MASK_64
    state ^= state >> SHIFT_7
    state &= MASK_64
    state ^= state << SHIFT_17
    state &= MASK_64
    return state
  }

  return Array.from({ length: count }, (_, index) => {
    const value = ((next64() << SHIFT_64) | next64()) & MASK_128
    return [`${index}: 0x${value.toString(16).padStart(32, '0')}`, value] as const
  })
}

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

  it('uses little-endian bit order: bytes[0] holds the least significant 2 bits', () => {
    // 0b01 in the LSB position → bytes[0] == 1
    expect(from128bitTo2bitArray(BigInt(0b01))[0]).toBe(1)
    // 0b10 in the LSB position → bytes[0] == 2
    expect(from128bitTo2bitArray(BigInt(0b10))[0]).toBe(2)
    // 0b11 at bits [127:126] (MSB) → bytes[63] == 3, all others == 0
    const msb = BigInt('0b11') << BigInt(126)
    const arr = from128bitTo2bitArray(msb)
    expect(arr[63]).toBe(3)
    expect(arr[62]).toBe(0)
    expect(arr[0]).toBe(0)
  })

  it('is inversible to from2bitArrayTo128bit', () => {
    const input = BigInt('0xfedcba9876543210fedcba9876543210')
    expect(input.toString(2).length).toBe(128)
    expect(is128Bit(input)).toBe(true)
    const array = from128bitTo2bitArray(input)
    const output = from2bitArrayTo128bit(array)
    expect(output).toBe(input)
  })

  it.each(createSeeded128BitSamples(100))(
    'is inversible for seeded sample %s',
    (_, input) => {
      const array = from128bitTo2bitArray(input)
      const convertedBack = from2bitArrayTo128bit(array)
      expect(convertedBack).toBe(input)
    }
  )
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

describe('from2bitArrayTo128bit', () => {
  it('throws when the array length is invalid', () => {
    expect(() => from2bitArrayTo128bit(new Uint8Array(63))).toThrow(
      'Array length must be 64'
    )
  })

  it('throws when an element is outside the 2-bit range', () => {
    const array = new Uint8Array(64)
    array[0] = 4
    expect(() => from2bitArrayTo128bit(array)).toThrow('Invalid bit value: 4')
  })
})
