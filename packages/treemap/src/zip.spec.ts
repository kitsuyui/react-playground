import { describe, expect, it } from 'vitest'

import { zip } from './zip'

describe('zip', () => {
  it('should zip two arrays', () => {
    const a = [1, 2, 3]
    const b = ['a', 'b', 'c']
    const result = zip(a, b)
    expect(result).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ])
  })

  it('should handle arrays of different lengths', () => {
    const a = [1, 2]
    const b = ['a', 'b', 'c']
    const result = zip(a, b)
    expect(result).toEqual([
      [1, 'a'],
      [2, 'b'],
    ])
  })

  it('should return an empty array if both arrays are empty', () => {
    const a: number[] = []
    const b: string[] = []
    const result = zip(a, b)
    expect(result).toEqual([])
  })
})
