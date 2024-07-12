export const timeLabelString = (total: number): string => {
  const hours = Math.floor(total / 3600)
  const remaining = total - hours * 3600
  const minutes = Math.floor(remaining / 60)
  const seconds = (remaining % 60) | 0
  const milliseconds = ((remaining % 1) * 1000) | 0
  const hoursString = String(hours).padStart(2, '0')
  const minutesString = String(minutes).padStart(2, '0')
  const secondsString = String(seconds).padStart(2, '0')
  const millisecondsString = String(milliseconds).padStart(3, '0')
  return `${hoursString}:${minutesString}:${secondsString}.${millisecondsString}`
}
