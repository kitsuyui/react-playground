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

type MetronomeEventHandler = (event: CustomEvent) => void
type MetronomeBeatHandler = (event: CustomEvent<{ beat: number }>) => void

const resolveHandler = <T,>(handler: T | undefined, fallback: T): T => {
  return handler ?? fallback
}

const resolveInitialTempo = (tempo?: number) => {
  return tempo ?? 120
}

const resolveMetronomeRefreshInterval = (refreshInterval?: number) => {
  return refreshInterval ?? 10
}

const getActiveMetronomeInterval = (
  running: boolean,
  refreshInterval: number
) => {
  return running ? refreshInterval : null
}

const emitMetronomeBeat = (
  onBeat: MetronomeBeatHandler,
  beatNumber: number
) => {
  onBeat(
    new CustomEvent('beat', {
      detail: { beat: beatNumber },
    })
  )
}

const createMetronomeTick = (props: {
  runningRef: React.MutableRefObject<boolean>
  nextBeatAtMsRef: React.MutableRefObject<number | null>
  tempoRef: React.MutableRefObject<number>
  beatRef: React.MutableRefObject<number>
  setBeat: React.Dispatch<React.SetStateAction<number>>
  setLastBeatAtMs: React.Dispatch<React.SetStateAction<number | null>>
  setNextBeatAtMs: React.Dispatch<React.SetStateAction<number | null>>
  emitBeat: (beatNumber: number) => void
}) => {
  return () => {
    const snapshot = getMetronomeTickSnapshot(props.runningRef, props.nextBeatAtMsRef)
    if (!snapshot) return
    const intervalMs = calcBeatIntervalMs(props.tempoRef.current)
    const elapsedBeatCount = calculateElapsedBeatCount(
      snapshot.currentNowMs,
      snapshot.nextBeatAtMs,
      intervalMs
    )
    const nextBeat = props.beatRef.current + elapsedBeatCount
    emitElapsedBeats(props.beatRef.current, elapsedBeatCount, props.emitBeat)
    updateMetronomeBeatState(props, nextBeat, elapsedBeatCount, intervalMs, snapshot.nextBeatAtMs)
  }
}

const getMetronomeTickSnapshot = (
  runningRef: React.MutableRefObject<boolean>,
  nextBeatAtMsRef: React.MutableRefObject<number | null>
) => {
  if (!runningRef.current || nextBeatAtMsRef.current === null) return null
  const currentNowMs = Date.now()
  if (currentNowMs < nextBeatAtMsRef.current) return null
  return { currentNowMs, nextBeatAtMs: nextBeatAtMsRef.current }
}

const calculateElapsedBeatCount = (
  currentNowMs: number,
  nextBeatAtMs: number,
  intervalMs: number
) => {
  return Math.floor((currentNowMs - nextBeatAtMs) / intervalMs) + 1
}

const emitElapsedBeats = (
  currentBeat: number,
  elapsedBeatCount: number,
  emitBeat: (beatNumber: number) => void
) => {
  for (let offset = 1; offset <= elapsedBeatCount; offset += 1) {
    emitBeat(currentBeat + offset)
  }
}

const updateMetronomeBeatState = (
  props: {
    beatRef: React.MutableRefObject<number>
    nextBeatAtMsRef: React.MutableRefObject<number | null>
    setBeat: React.Dispatch<React.SetStateAction<number>>
    setLastBeatAtMs: React.Dispatch<React.SetStateAction<number | null>>
    setNextBeatAtMs: React.Dispatch<React.SetStateAction<number | null>>
  },
  nextBeat: number,
  elapsedBeatCount: number,
  intervalMs: number,
  nextBeatAtMs: number
) => {
  props.beatRef.current = nextBeat
  props.setBeat(nextBeat)
  props.setLastBeatAtMs(nextBeatAtMs + (elapsedBeatCount - 1) * intervalMs)
  props.nextBeatAtMsRef.current = nextBeatAtMs + elapsedBeatCount * intervalMs
  props.setNextBeatAtMs(props.nextBeatAtMsRef.current)
}

const createMetronomeStart = (props: {
  runningRef: React.MutableRefObject<boolean>
  beatRef: React.MutableRefObject<number>
  nextBeatAtMsRef: React.MutableRefObject<number | null>
  tempoRef: React.MutableRefObject<number>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setBeat: React.Dispatch<React.SetStateAction<number>>
  setLastBeatAtMs: React.Dispatch<React.SetStateAction<number | null>>
  setNextBeatAtMs: React.Dispatch<React.SetStateAction<number | null>>
  emitBeat: (beatNumber: number) => void
  onStart: MetronomeEventHandler
}) => {
  return () => {
    if (props.runningRef.current) return
    const currentNowMs = Date.now()
    const nextBeat = props.beatRef.current + 1
    const intervalMs = calcBeatIntervalMs(props.tempoRef.current)
    props.runningRef.current = true
    props.beatRef.current = nextBeat
    props.nextBeatAtMsRef.current = currentNowMs + intervalMs
    props.setRunning(true)
    props.setBeat(nextBeat)
    props.setLastBeatAtMs(currentNowMs)
    props.setNextBeatAtMs(props.nextBeatAtMsRef.current)
    props.emitBeat(nextBeat)
    props.onStart(new CustomEvent('start', {}))
  }
}

const createMetronomeStop = (props: {
  runningRef: React.MutableRefObject<boolean>
  nextBeatAtMsRef: React.MutableRefObject<number | null>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setNextBeatAtMs: React.Dispatch<React.SetStateAction<number | null>>
  onStop: MetronomeEventHandler
}) => {
  return () => {
    if (!props.runningRef.current) return
    props.runningRef.current = false
    props.nextBeatAtMsRef.current = null
    props.setRunning(false)
    props.setNextBeatAtMs(null)
    props.onStop(new CustomEvent('stop', {}))
  }
}

const createMetronomeToggle = (
  running: boolean,
  stop: () => void,
  start: () => void
) => {
  return () => {
    if (running) {
      stop()
      return
    }
    start()
  }
}

const createMetronomeReset = (props: {
  runningRef: React.MutableRefObject<boolean>
  beatRef: React.MutableRefObject<number>
  nextBeatAtMsRef: React.MutableRefObject<number | null>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setBeat: React.Dispatch<React.SetStateAction<number>>
  setLastBeatAtMs: React.Dispatch<React.SetStateAction<number | null>>
  setNextBeatAtMs: React.Dispatch<React.SetStateAction<number | null>>
  onReset: MetronomeEventHandler
}) => {
  return () => {
    props.runningRef.current = false
    props.beatRef.current = 0
    props.nextBeatAtMsRef.current = null
    props.setRunning(false)
    props.setBeat(0)
    props.setLastBeatAtMs(null)
    props.setNextBeatAtMs(null)
    props.onReset(new CustomEvent('reset', {}))
  }
}

const createSetTempoAction = (
  tempoRef: React.MutableRefObject<number>,
  setTempo: React.Dispatch<React.SetStateAction<number>>
) => {
  return (value: number) => {
    const nextTempo = Math.max(1, value)
    tempoRef.current = nextTempo
    setTempo(nextTempo)
  }
}

const createIncrementTempoAction = (
  tempoRef: React.MutableRefObject<number>,
  setTempo: React.Dispatch<React.SetStateAction<number>>
) => {
  return (value: number) => {
    setTempo((current) => {
      const nextTempo = Math.max(1, current + value)
      tempoRef.current = nextTempo
      return nextTempo
    })
  }
}

export const MetronomeContextProvider: React.FC<MetronomeContextProviderProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const emptyFn = (_event: CustomEvent) => { /* do nothing */ }
  const onBeat = resolveHandler(props.onBeat, emptyFn)
  const onStart = resolveHandler(props.onStart, emptyFn)
  const onStop = resolveHandler(props.onStop, emptyFn)
  const onReset = resolveHandler(props.onReset, emptyFn)
  const [tempo, setTempo] = React.useState(resolveInitialTempo(props.initialTempo))
  const [running, setRunning] = React.useState(false)
  const [beat, setBeat] = React.useState(0)
  const [lastBeatAtMs, setLastBeatAtMs] = React.useState<number | null>(null)
  const [nextBeatAtMs, setNextBeatAtMs] = React.useState<number | null>(null)
  const tempoRef = React.useRef(tempo)
  const runningRef = React.useRef(running)
  const beatRef = React.useRef(beat)
  const nextBeatAtMsRef = React.useRef<number | null>(nextBeatAtMs)
  const refreshInterval = resolveMetronomeRefreshInterval(props.refreshInterval)

  const emitBeat = (beatNumber: number) => emitMetronomeBeat(onBeat, beatNumber)

  const tick = createMetronomeTick({
    runningRef,
    nextBeatAtMsRef,
    tempoRef,
    beatRef,
    setBeat,
    setLastBeatAtMs,
    setNextBeatAtMs,
    emitBeat,
  })

  useInterval(tick, getActiveMetronomeInterval(running, refreshInterval))

  const start = createMetronomeStart({
    runningRef,
    beatRef,
    nextBeatAtMsRef,
    tempoRef,
    setRunning,
    setBeat,
    setLastBeatAtMs,
    setNextBeatAtMs,
    emitBeat,
    onStart,
  })

  const stop = createMetronomeStop({
    runningRef,
    nextBeatAtMsRef,
    setRunning,
    setNextBeatAtMs,
    onStop,
  })

  const toggle = createMetronomeToggle(running, stop, start)
  const reset = createMetronomeReset({
    runningRef,
    beatRef,
    nextBeatAtMsRef,
    setRunning,
    setBeat,
    setLastBeatAtMs,
    setNextBeatAtMs,
    onReset,
  })
  const setTempoAction = createSetTempoAction(tempoRef, setTempo)
  const incrementTempo = createIncrementTempoAction(tempoRef, setTempo)

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
        setTempo: setTempoAction,
        incrementTempo,
      }}
    >
      {children}
    </MetronomeContext.Provider>
  )
}
