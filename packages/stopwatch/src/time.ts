export const calcTimeDiff = (startTime: Date, endTime: Date) => {
  return (endTime.getTime() - startTime.getTime()) / 1000
}

export const calcElapsedTime = (startTime: Date) => {
  return calcTimeDiff(startTime, new Date())
}
