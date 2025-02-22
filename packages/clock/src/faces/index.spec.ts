import { expect, test } from 'vitest'
import { face as arabicFace } from './arabic'
import { face as romanFace } from './roman'

import { computeFace } from '.'

test('computeFace returns face', () => {
  expect(computeFace(0, 'roman')).toBe(romanFace(0))
  expect(computeFace(0, 'arabic')).toBe(arabicFace(0))
})
