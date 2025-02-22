import { describe, expect, it } from 'vitest'

import { zeroPad2, zeroPad3 } from './utils'

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
