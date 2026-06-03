import { getMonotonicNowMs } from './clock'

export const calcTimeDiff = (startTimeMs: number, endTimeMs: number) => {
  return (endTimeMs - startTimeMs) / 1000
}

export const calcElapsedTime = (
  startTimeMs: number,
  nowMs = getMonotonicNowMs()
) => {
  return calcTimeDiff(startTimeMs, nowMs)
}
