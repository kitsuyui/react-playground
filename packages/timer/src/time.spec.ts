import { describe, expect, test, } from 'vitest'

import { calcTimeDiff, calcRemaining } from './time'


describe('calcRemaining', () => {
  test('returns elapsed time in seconds', () => {
    const targetDate = new Date()
    expect(calcRemaining(targetDate)).toBeCloseTo(0, 2)
  })
})

describe('calcTimeDiff', () => {
  test('returns time difference in seconds', () => {
    const startTime = new Date('2021-01-01T00:00:00Z')
    const endTime = new Date('2021-01-01T00:00:01Z')
    expect(calcTimeDiff(startTime, endTime)).toBe(1)
  })

  test('returns negative value if end time is before start time', () => {
    const startTime = new Date('2021-01-01T00:00:01Z')
    const endTime = new Date('2021-01-01T00:00:00Z')
    expect(calcTimeDiff(startTime, endTime)).toBe(-1)
  })
})
