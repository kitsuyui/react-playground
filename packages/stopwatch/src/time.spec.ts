import { describe, expect, test } from 'vitest'

import { calcTimeDiff, calcElapsedTime } from './time'

describe('calcElapsedTime', () => {
  test('returns elapsed time in seconds', () => {
    expect(calcElapsedTime(1000, 2500)).toBe(1.5)
  })
})

describe('calcTimeDiff', () => {
  test('returns time difference in seconds', () => {
    expect(calcTimeDiff(1000, 2000)).toBe(1)
  })

  test('returns negative value if end time is before start time', () => {
    expect(calcTimeDiff(2000, 1000)).toBe(-1)
  })
})
