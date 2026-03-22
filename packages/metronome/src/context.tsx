import React from 'react'
import { useInterval } from 'react-use'

import { calcBeatIntervalMs } from './time'

export interface MetronomeValue {
  tempo: number
  running: boolean
  beat: number
  lastBeatAtMs: number | null
}

export interface MetronomeActions {
  start(): void
  stop(): void
  toggle(): void
  reset(): void
  setTempo(value: number): void
  incrementTempo(value: number): void
}

export type MetronomeContextValue = MetronomeValue & MetronomeActions

export const MetronomeContext = React.createContext<MetronomeContextValue>({
  tempo: 120,
  running: false,
  beat: 0,
  lastBeatAtMs: null,
  start: () => { /* do nothing */ },
  stop: () => { /* do nothing */ },
  toggle: () => { /* do nothing */ },
  reset: () => { /* do nothing */ },
  setTempo: (_value: number) => { /* do nothing */ },
  incrementTempo: (_value: number) => { /* do nothing */ },
})

export interface MetronomeContextProviderProps {
  refreshInterval?: number
  initialTempo?: number
  children: React.ReactNode
  onBeat?(event: CustomEvent<{ beat: number }>): void
  onStart?(event: CustomEvent): void
  onStop?(event: CustomEvent): void
  onReset?(event: CustomEvent): void
}

export const MetronomeContextProvider: React.FC<MetronomeContextProviderProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const emptyFn = (_event: CustomEvent) => { /* do nothing */ }
  const onBeat = props.onBeat ?? emptyFn
  const onStart = props.onStart ?? emptyFn
  const onStop = props.onStop ?? emptyFn
  const onReset = props.onReset ?? emptyFn
  const [tempo, setTempo] = React.useState(props.initialTempo ?? 120)
  const [running, setRunning] = React.useState(false)
  const [beat, setBeat] = React.useState(0)
  const [lastBeatAtMs, setLastBeatAtMs] = React.useState<number | null>(null)
  const [nextBeatAtMs, setNextBeatAtMs] = React.useState<number | null>(null)
  const tempoRef = React.useRef(tempo)
  const runningRef = React.useRef(running)
  const beatRef = React.useRef(beat)
  const nextBeatAtMsRef = React.useRef<number | null>(nextBeatAtMs)
  const refreshInterval = props.refreshInterval ?? 10

  const emitBeat = (beatNumber: number) => {
    onBeat(new CustomEvent('beat', {
      detail: { beat: beatNumber },
    }))
  }

  const tick = () => {
    if (!runningRef.current || nextBeatAtMsRef.current === null) {
      return
    }
    const currentNowMs = Date.now()
    if (currentNowMs < nextBeatAtMsRef.current) {
      return
    }
    const intervalMs = calcBeatIntervalMs(tempoRef.current)
    const elapsedBeatCount = Math.floor((currentNowMs - nextBeatAtMsRef.current) / intervalMs) + 1
    const nextBeat = beatRef.current + elapsedBeatCount
    for (let offset = 1; offset <= elapsedBeatCount; offset += 1) {
      emitBeat(beatRef.current + offset)
    }
    beatRef.current = nextBeat
    setBeat(nextBeat)
    setLastBeatAtMs(nextBeatAtMsRef.current + (elapsedBeatCount - 1) * intervalMs)
    nextBeatAtMsRef.current = nextBeatAtMsRef.current + elapsedBeatCount * intervalMs
    setNextBeatAtMs(nextBeatAtMsRef.current)
  }

  useInterval(() => {
    tick()
  }, running ? refreshInterval : null)

  const start = () => {
    if (runningRef.current) {
      return
    }
    const currentNowMs = Date.now()
    const nextBeat = beatRef.current + 1
    const intervalMs = calcBeatIntervalMs(tempoRef.current)
    runningRef.current = true
    beatRef.current = nextBeat
    nextBeatAtMsRef.current = currentNowMs + intervalMs
    setRunning(true)
    setBeat(nextBeat)
    setLastBeatAtMs(currentNowMs)
    setNextBeatAtMs(nextBeatAtMsRef.current)
    emitBeat(nextBeat)
    onStart(new CustomEvent('start', {}))
  }

  const stop = () => {
    if (!runningRef.current) {
      return
    }
    runningRef.current = false
    nextBeatAtMsRef.current = null
    setRunning(false)
    setNextBeatAtMs(null)
    onStop(new CustomEvent('stop', {}))
  }

  const toggle = () => {
    if (running) {
      stop()
    } else {
      start()
    }
  }

  const reset = () => {
    runningRef.current = false
    beatRef.current = 0
    nextBeatAtMsRef.current = null
    setRunning(false)
    setBeat(0)
    setLastBeatAtMs(null)
    setNextBeatAtMs(null)
    onReset(new CustomEvent('reset', {}))
  }

  return (
    <MetronomeContext.Provider
      value={{
        tempo,
        running,
        beat,
        lastBeatAtMs,
        start,
        stop,
        toggle,
        reset,
        setTempo(value: number) {
          const nextTempo = Math.max(1, value)
          tempoRef.current = nextTempo
          setTempo(nextTempo)
        },
        incrementTempo(value: number) {
          setTempo((current) => {
            const nextTempo = Math.max(1, current + value)
            tempoRef.current = nextTempo
            return nextTempo
          })
        },
      }}
    >
      {children}
    </MetronomeContext.Provider>
  )
}
