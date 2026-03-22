export const calcRemainingUntil = (targetTimeMs: number, nowMs = Date.now()) => {
  return Math.max(0, (targetTimeMs - nowMs) / 1000)
}

export const formatAlarmTarget = (targetTimeMs: number) => {
  return new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date(targetTimeMs))
}
