// applySBox128bitBigintTo128bitBigint
import { expect, describe, it } from 'vitest'
import { applySBox128bitBigintTo128bitBigint } from './bitShuffle'


describe('applySBox128bitBigintTo128bitBigint', () => {
  it('should apply S-Box to a 128-bit bigint', () => {
    const input = BigInt('0x0123456789abcdef0123456789abcdef')
    const expectedOutput = 104690180703241483303067873224999727776n
    const output = applySBox128bitBigintTo128bitBigint(input)
    expect(output).toBe(expectedOutput)
  })

  it('should handle zero input', () => {
    const input = 0n
    const expectedOutput = 284235859428078010657642319148888741333n
    const output = applySBox128bitBigintTo128bitBigint(input)
    expect(output).toBe(expectedOutput)
  })
})
