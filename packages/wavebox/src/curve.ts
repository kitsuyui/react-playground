/**
 * Generates a sine wave curve value based on the given parameters.
 */
export const curve = (
  minValue: number,
  maxValue: number,
  cycle: number,
  tick: number
): number => {
  const amplitude = (maxValue - minValue) / 2
  return Math.sin(2 * Math.PI * tick / cycle) * amplitude + amplitude + minValue
}
