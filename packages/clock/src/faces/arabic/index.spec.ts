import { expect, test } from 'vitest'

import { face } from '.'

test('arabic/face returns face', () => {
  expect(face(0)).toBe('12') // clock starts at 12
  expect(face(1)).toBe('1')
  expect(face(2)).toBe('2')
  expect(face(3)).toBe('3')
  expect(face(4)).toBe('4')
  expect(face(5)).toBe('5')
  expect(face(6)).toBe('6')
  expect(face(7)).toBe('7')
  expect(face(8)).toBe('8')
  expect(face(9)).toBe('9')
  expect(face(10)).toBe('10')
  expect(face(11)).toBe('11')
})
