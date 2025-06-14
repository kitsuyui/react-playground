import { applySBox } from '@kitsuyui/cipher/RijndaelSBox'
import { xorShuffle } from '@kitsuyui/cipher/xorShuffle'
import { bigint128bitToUint8Array, uint8ArrayToBigint128bit } from '@kitsuyui/cipher/utils'

const applyMultipleTimes = (input: Uint8Array, times: number): Uint8Array => {
  let output = input;
  for (let i = 0; i < times; i++) {
    output = xorShuffle(output);
    output = applySBox(output);
    output = xorShuffle(output);
  }
  return output;
}

export const applySBox128bitBigintTo128bitBigint = (input: bigint): bigint => {
  const inputArray = bigint128bitToUint8Array(input)
  const outputArray = applyMultipleTimes(inputArray, 16)
  return uint8ArrayToBigint128bit(outputArray)
}
