import { expect, test } from 'vitest'

import { face } from '.'

test('roman/face returns face', () => {
  expect(face(0)).toBe('Ⅻ')
  expect(face(1)).toBe('Ⅰ')
  expect(face(2)).toBe('Ⅱ')
  expect(face(3)).toBe('Ⅲ')
  expect(face(4)).toBe('Ⅳ')
  expect(face(5)).toBe('Ⅴ')
  expect(face(6)).toBe('Ⅵ')
  expect(face(7)).toBe('Ⅶ')
  expect(face(8)).toBe('Ⅷ')
  expect(face(9)).toBe('Ⅸ')
  expect(face(10)).toBe('Ⅹ')
  expect(face(11)).toBe('Ⅺ')
  expect(face(12)).toBe('12') // invalid
})
