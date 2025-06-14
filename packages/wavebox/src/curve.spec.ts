import { describe, expect, it } from 'vitest'

import { curve } from './curve'

describe('curve', () => {
  it('should return the correct value for a sine wave', () => {
    const minValue = 0
    const maxValue = 10
    const cycle = 100
    const result = curve(minValue, maxValue, cycle, 0)
    expect(result).toBeCloseTo(5, 5) // At t=0, the sine wave should be at its midpoint
    const result2 = curve(minValue, maxValue, cycle, cycle / 4)
    expect(result2).toBeCloseTo(10, 5) // At t=cycle/4, the sine wave should be at its maximum
    const result3 = curve(minValue, maxValue, cycle, cycle / 2)
    expect(result3).toBeCloseTo(5, 5) // At t=cycle/2, the sine wave should be at its midpoint again
    const result3b = curve(minValue, maxValue, cycle, (3 * cycle) / 4)
    expect(result3b).toBeCloseTo(0, 5) // At t=3*cycle/4, the sine wave should be at its minimum
    const result4 = curve(minValue, maxValue, cycle, cycle)
    expect(result4).toBeCloseTo(5, 5) // At t=cycle, the sine wave should be at its midpoint again
  })
})
