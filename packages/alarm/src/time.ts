export const calcRemainingUntil = (targetTimeMs: number, nowMs: number) => {
  return Math.max(0, (targetTimeMs - nowMs) / 1000)
}

export const calcRemainingDuration = (
  targetMonotonicMs: number,
  nowMonotonicMs: number
) => {
  return Math.max(0, (targetMonotonicMs - nowMonotonicMs) / 1000)
}

export const formatAlarmTarget = (targetTimeMs: number) => {
  return new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date(targetTimeMs))
}
