import { describe, expect, it } from 'vitest'

import { toLabel, zeroPad2, zeroPad3 } from './utils'

describe('zeroPadNumber2', () => {
  it('should zero pad a number to 2 digits', () => {
    expect(zeroPad2(0)).toEqual('00')
    expect(zeroPad2(1)).toEqual('01')
    expect(zeroPad2(9)).toEqual('09')
    expect(zeroPad2(10)).toEqual('10')
  })
})

describe('zeroPadNumber3', () => {
  it('should zero pad a number to 3 digits', () => {
    expect(zeroPad3(1)).toEqual('001')
    expect(zeroPad3(10)).toEqual('010')
    expect(zeroPad3(100)).toEqual('100')
  })
})

describe('toLabel', () => {
  it('should format time value to mm:ss.mmm', () => {
    expect(toLabel(0)).toBe('00:00.000')
    expect(toLabel(1)).toBe('00:01.000')
    expect(toLabel(59)).toBe('00:59.000')
    expect(toLabel(60)).toBe('01:00.000')
    expect(toLabel(61)).toBe('01:01.000')
    expect(toLabel(3599)).toBe('59:59.000')
  })
})
