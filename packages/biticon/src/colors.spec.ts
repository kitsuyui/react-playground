import { describe, expect, it } from 'vitest'

import { COLORS, valueToColor } from './colors'

describe('valueToColor', () => {
  it.each([
    [0, '#440154'],
    [1, '#30678d'],
    [2, '#35b778'],
    [3, '#fde724'],
  ])('maps 2-bit value %i to %s', (value, color) => {
    expect(valueToColor(value)).toBe(color)
  })

  it('has one palette entry for each 2-bit value', () => {
    expect(COLORS).toHaveLength(4)
  })
})
