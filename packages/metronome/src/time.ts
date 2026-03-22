export const calcBeatIntervalMs = (tempo: number) => {
  return 60_000 / Math.max(1, tempo)
}
