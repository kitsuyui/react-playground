import React from 'react'
import { useInterval } from 'react-use'

import { calcRemaining } from './time'

export interface TimerValue {
  /** Remaining time in seconds. */
  remaining: number
  running: boolean
  vibrationEnabled: boolean
  vibrationSupported: boolean
}

export interface TimerActions {
  start(): void
  stop(): void
  toggle(): void
  reset(): void
  /** Increments the timer value by the given number of seconds. */
  incrementTimerValue(value: number): void
  /** Sets the timer value to the given number of seconds. */
  setTimerValue(value: number): void
  setVibrationEnabled(value: boolean): void
  toggleVibration(): void
}

export type TimerContextValue = TimerValue & TimerActions

const missingProvider = (name: string) => (): never => {
  throw new Error(`${name} must be used within a TimerContextProvider`)
}

// TODO: Support leap second: https://github.com/kitsuyui/react-playground/issues/40
export const TimerContext = React.createContext<TimerContextValue>({
  remaining: 0,
  running: false,
  vibrationEnabled: false,
  vibrationSupported: false,
  start: missingProvider('start'),
  stop: missingProvider('stop'),
  toggle: missingProvider('toggle'),
  reset: missingProvider('reset'),
  incrementTimerValue: missingProvider('incrementTimerValue'),
  setTimerValue: missingProvider('setTimerValue'),
  setVibrationEnabled: missingProvider('setVibrationEnabled'),
  toggleVibration: missingProvider('toggleVibration'),
})

export interface TimerContextProviderProps {
  refreshInterval?: number
  children: React.ReactNode
  defaultVibrationEnabled?: boolean
  vibrationPattern?: number | number[]
  onStart?(event: CustomEvent): void
  onStop?(event: CustomEvent): void
  onComplete?(event: CustomEvent): void
  onReset?(event: CustomEvent): void
}

type TimerEventHandler = (event: CustomEvent) => void

const resolveHandler = <T,>(handler: T | undefined, fallback: T): T => {
  return handler ?? fallback
}

const resolveTimerRefreshInterval = (refreshInterval?: number) => {
  return refreshInterval ?? 10
}

const resolveVibrationPattern = (pattern?: number | number[]) => {
  return pattern ?? [250, 150, 250]
}

const resolveDefaultVibrationEnabled = (enabled?: boolean) => {
  return enabled ?? false
}

const getActiveTimerInterval = (running: boolean, refreshInterval: number) => {
  return running ? refreshInterval : null
}

const getTimerCurrentRemaining = (
  running: boolean,
  targetTimeMs: number | null,
  remaining: number,
  nowMs = Date.now()
) => {
  if (!running || targetTimeMs === null) return remaining
  return Math.max(0, calcRemaining(new Date(targetTimeMs), new Date(nowMs)))
}

const notifyTimerCompletion = (
  vibrationEnabled: boolean,
  vibrationSupported: boolean,
  vibrationPattern: number | number[],
  onComplete: TimerEventHandler
) => {
  if (vibrationEnabled && vibrationSupported) {
    navigator.vibrate(vibrationPattern)
  }
  onComplete(new CustomEvent('complete', {}))
}

const completeTimer = (props: {
  runningRef: React.MutableRefObject<boolean>
  targetTimeMsRef: React.MutableRefObject<number | null>
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setTargetTimeMsState: React.Dispatch<React.SetStateAction<number | null>>
  notifyCompletion: () => void
}) => {
  props.runningRef.current = false
  props.targetTimeMsRef.current = null
  props.setRemaining(0)
  props.setRunning(false)
  props.setTargetTimeMsState(null)
  props.notifyCompletion()
}

const createTimerTick = (props: {
  runningRef: React.MutableRefObject<boolean>
  targetTimeMsRef: React.MutableRefObject<number | null>
  getCurrentRemaining: (nowMs?: number) => number
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setTargetTimeMsState: React.Dispatch<React.SetStateAction<number | null>>
  notifyCompletion: () => void
}) => {
  return () => {
    if (shouldSkipTimerTick(props.runningRef, props.targetTimeMsRef)) return
    const nextRemaining = props.getCurrentRemaining()
    props.setRemaining(nextRemaining)
    handleTimerCompletion(nextRemaining, props)
  }
}

const shouldSkipTimerTick = (
  runningRef: React.MutableRefObject<boolean>,
  targetTimeMsRef: React.MutableRefObject<number | null>
) => {
  return !runningRef.current || targetTimeMsRef.current === null
}

const handleTimerCompletion = (
  nextRemaining: number,
  props: {
    runningRef: React.MutableRefObject<boolean>
    targetTimeMsRef: React.MutableRefObject<number | null>
    setRemaining: React.Dispatch<React.SetStateAction<number>>
    setRunning: React.Dispatch<React.SetStateAction<boolean>>
    setTargetTimeMsState: React.Dispatch<React.SetStateAction<number | null>>
    notifyCompletion: () => void
  }
) => {
  if (nextRemaining > 0) return
  completeTimer(props)
}

const createTimerStart = (props: {
  remaining: number
  runningRef: React.MutableRefObject<boolean>
  targetTimeMsRef: React.MutableRefObject<number | null>
  setTargetTimeMsState: React.Dispatch<React.SetStateAction<number | null>>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  onStart: TimerEventHandler
}) => {
  return () => {
    if (props.remaining <= 0 || props.runningRef.current) return
    const nowMs = Date.now()
    const nextTargetTimeMs = nowMs + props.remaining * 1000
    props.targetTimeMsRef.current = nextTargetTimeMs
    props.runningRef.current = true
    props.setTargetTimeMsState(nextTargetTimeMs)
    props.setRunning(true)
    props.onStart(new CustomEvent('start', {}))
  }
}

const createTimerStop = (props: {
  runningRef: React.MutableRefObject<boolean>
  targetTimeMsRef: React.MutableRefObject<number | null>
  getCurrentRemaining: (nowMs?: number) => number
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setTargetTimeMsState: React.Dispatch<React.SetStateAction<number | null>>
  onStop: TimerEventHandler
}) => {
  return () => {
    if (!props.runningRef.current) return
    props.setRemaining(props.getCurrentRemaining())
    props.runningRef.current = false
    props.targetTimeMsRef.current = null
    props.setRunning(false)
    props.setTargetTimeMsState(null)
    props.onStop(new CustomEvent('stop', {}))
  }
}

const createTimerToggle = (
  running: boolean,
  start: () => void,
  stop: () => void
) => {
  return () => {
    if (running) {
      stop()
      return
    }
    start()
  }
}

const createSetTimerValue = (
  runningRef: React.MutableRefObject<boolean>,
  targetTimeMsRef: React.MutableRefObject<number | null>,
  setRunning: React.Dispatch<React.SetStateAction<boolean>>,
  setTargetTimeMsState: React.Dispatch<React.SetStateAction<number | null>>,
  setRemaining: React.Dispatch<React.SetStateAction<number>>
) => {
  return (value: number) => {
    runningRef.current = false
    targetTimeMsRef.current = null
    setRunning(false)
    setTargetTimeMsState(null)
    setRemaining(Math.max(0, value || 0))
  }
}

const createSetVibrationEnabledAction = (
  setVibrationEnabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return (value: boolean) => {
    setVibrationEnabled(value)
  }
}

const createToggleVibrationAction = (
  setVibrationEnabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return () => {
    setVibrationEnabled((current) => !current)
  }
}

const createIncrementTimerValue = (props: {
  runningRef: React.MutableRefObject<boolean>
  targetTimeMsRef: React.MutableRefObject<number | null>
  getCurrentRemaining: (nowMs?: number) => number
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setTargetTimeMsState: React.Dispatch<React.SetStateAction<number | null>>
  setRemaining: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (value: number) => {
    const baseRemaining = props.getCurrentRemaining()
    props.runningRef.current = false
    props.targetTimeMsRef.current = null
    props.setRunning(false)
    props.setTargetTimeMsState(null)
    props.setRemaining(Math.max(0, baseRemaining + value))
  }
}

const createResetTimer = (props: {
  runningRef: React.MutableRefObject<boolean>
  targetTimeMsRef: React.MutableRefObject<number | null>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setTargetTimeMsState: React.Dispatch<React.SetStateAction<number | null>>
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  onReset: TimerEventHandler
}) => {
  return () => {
    props.runningRef.current = false
    props.targetTimeMsRef.current = null
    props.setRunning(false)
    props.setTargetTimeMsState(null)
    props.setRemaining(0)
    props.onReset(new CustomEvent('reset', {}))
  }
}

const calculateElapsedVibrationSupported = () => {
  return (
    typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function'
  )
}

export const TimerContextProvider: React.FC<TimerContextProviderProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const emptyFn = (_event: CustomEvent) => {
    /* do nothing */
  }
  const onStart = resolveHandler(props.onStart, emptyFn)
  const onStop = resolveHandler(props.onStop, emptyFn)
  const onComplete = resolveHandler(props.onComplete, emptyFn)
  const onReset = resolveHandler(props.onReset, emptyFn)
  const [running, setRunning] = React.useState(false)
  const [remaining, setRemaining] = React.useState(0)
  const [targetTimeMs, setTargetTimeMsState] = React.useState<number | null>(
    null
  )
  const [vibrationEnabled, setVibrationEnabled] = React.useState(
    resolveDefaultVibrationEnabled(props.defaultVibrationEnabled)
  )
  const runningRef = React.useRef(running)
  const targetTimeMsRef = React.useRef<number | null>(targetTimeMs)
  const vibrationPattern = resolveVibrationPattern(props.vibrationPattern)
  const vibrationSupported = calculateElapsedVibrationSupported()

  const refreshInterval = resolveTimerRefreshInterval(props.refreshInterval)

  const getCurrentRemaining = (nowMs = Date.now()) =>
    getTimerCurrentRemaining(
      runningRef.current,
      targetTimeMsRef.current,
      remaining,
      nowMs
    )

  const notifyCompletion = () =>
    notifyTimerCompletion(
      vibrationEnabled,
      vibrationSupported,
      vibrationPattern,
      onComplete
    )

  const tick = createTimerTick({
    runningRef,
    targetTimeMsRef,
    getCurrentRemaining,
    setRemaining,
    setRunning,
    setTargetTimeMsState,
    notifyCompletion,
  })

  useInterval(tick, getActiveTimerInterval(running, refreshInterval))

  const start = createTimerStart({
    remaining,
    runningRef,
    targetTimeMsRef,
    setTargetTimeMsState,
    setRunning,
    onStart,
  })

  const stop = createTimerStop({
    runningRef,
    targetTimeMsRef,
    getCurrentRemaining,
    setRemaining,
    setRunning,
    setTargetTimeMsState,
    onStop,
  })

  const toggle = createTimerToggle(running, start, stop)
  const reset = createResetTimer({
    runningRef,
    targetTimeMsRef,
    setRunning,
    setTargetTimeMsState,
    setRemaining,
    onReset,
  })
  const setTimerValue = createSetTimerValue(
    runningRef,
    targetTimeMsRef,
    setRunning,
    setTargetTimeMsState,
    setRemaining
  )
  const incrementTimerValue = createIncrementTimerValue({
    runningRef,
    targetTimeMsRef,
    getCurrentRemaining,
    setRunning,
    setTargetTimeMsState,
    setRemaining,
  })
  const setVibrationEnabledAction =
    createSetVibrationEnabledAction(setVibrationEnabled)
  const toggleVibration = createToggleVibrationAction(setVibrationEnabled)

  return (
    <TimerContext.Provider
      value={{
        remaining,
        running,
        vibrationEnabled,
        vibrationSupported,
        toggle,
        reset,
        start,
        stop,
        setTimerValue,
        incrementTimerValue,
        setVibrationEnabled: setVibrationEnabledAction,
        toggleVibration,
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}
