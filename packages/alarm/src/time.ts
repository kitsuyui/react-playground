export const calcRemainingUntil = (targetTimeMs: number, nowMs: number) => {
  return Math.max(0, (targetTimeMs - nowMs) / 1000)
}

export const calcRemainingDuration = (
  targetMonotonicMs: number,
  nowMonotonicMs: number
) => {
  return Math.max(0, (targetMonotonicMs - nowMonotonicMs) / 1000)
}

export const formatAlarmTarget = (targetTimeMs: number, timezone?: string): string => {
  const timeZone = timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone,
  }).format(new Date(targetTimeMs))
}
