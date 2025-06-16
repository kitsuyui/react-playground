// Based on the colormap viridis from the colormap package (CC0)
// https://github.com/BIDS/colormap/blob/master/colormaps.py
export const COLORS = [
  '#440154',
  '#30678d',
  '#35b778',
  '#fde724',
] as const


/**
 * Convert value to color
 * @param value 0-7
 * @returns color string
 */
export const valueToColor = (value: number): string => {
  return COLORS[value]
}
