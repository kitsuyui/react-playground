export const calcTimeDiff = (startTime: Date, endTime: Date) => {
  return (endTime.getTime() - startTime.getTime()) / 1000
}

export const calcRemaining = (targetDate: Date, now: Date = new Date()) => {
  return calcTimeDiff(now, targetDate)
}
