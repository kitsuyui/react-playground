/**
 * Generates a sine wave curve value based on the given parameters.
 */
export const curve = (
  minValue: number,
  maxValue: number,
  cycle: number,
  tick: number
): number => {
  if (cycle <= 0) {
    throw new RangeError(`cycle must be a positive number, got ${cycle}`)
  }
  const amplitude = (maxValue - minValue) / 2
  return Math.sin(2 * Math.PI * tick / cycle) * amplitude + amplitude + minValue
}
