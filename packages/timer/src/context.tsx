import React from 'react'
import { useInterval } from 'react-use'

import { calcRemaining } from './time'

export interface TimerValue {
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
  incrementTimerValue(value: number): void
  setTimerValue(value: number): void
  setVibrationEnabled(value: boolean): void
  toggleVibration(): void
}

export type TimerContextValue = TimerValue & TimerActions

// TODO: Support leap second: https://github.com/kitsuyui/react-playground/issues/40
export const TimerContext = React.createContext<TimerContextValue>({
  remaining: 0,
  running: false,
  vibrationEnabled: false,
  vibrationSupported: false,
  start: () => { /* do nothing */ },
  stop: () => { /* do nothing */ },
  toggle: () => { /* do nothing */ },
  reset: () => { /* do nothing */ },
  incrementTimerValue: (_value: number) => { /* do nothing */ },
  setTimerValue: (_value: number) => { /* do nothing */ },
  setVibrationEnabled: (_value: boolean) => { /* do nothing */ },
  toggleVibration: () => { /* do nothing */ },
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
  return refreshInterval || 10
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
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setTargetTimeMs: React.Dispatch<React.SetStateAction<number | null>>
  notifyCompletion: () => void
}) => {
  props.setRemaining(0)
  props.setRunning(false)
  props.setTargetTimeMs(null)
  props.notifyCompletion()
}

const createTimerTick = (props: {
  running: boolean
  targetTimeMs: number | null
  getCurrentRemaining: (nowMs?: number) => number
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setTargetTimeMs: React.Dispatch<React.SetStateAction<number | null>>
  notifyCompletion: () => void
}) => {
  return () => {
    if (shouldSkipTimerTick(props.running, props.targetTimeMs)) return
    const nextRemaining = props.getCurrentRemaining()
    props.setRemaining(nextRemaining)
    handleTimerCompletion(nextRemaining, props)
  }
}

const shouldSkipTimerTick = (
  running: boolean,
  targetTimeMs: number | null
) => {
  return !running || targetTimeMs === null
}

const handleTimerCompletion = (
  nextRemaining: number,
  props: {
    setRemaining: React.Dispatch<React.SetStateAction<number>>
    setRunning: React.Dispatch<React.SetStateAction<boolean>>
    setTargetTimeMs: React.Dispatch<React.SetStateAction<number | null>>
    notifyCompletion: () => void
  }
) => {
  if (nextRemaining > 0) return
  completeTimer(props)
}

const createTimerStart = (props: {
  remaining: number
  running: boolean
  setTargetTimeMs: React.Dispatch<React.SetStateAction<number | null>>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  onStart: TimerEventHandler
}) => {
  return () => {
    if (props.remaining <= 0 || props.running) return
    const nowMs = Date.now()
    props.setTargetTimeMs(nowMs + props.remaining * 1000)
    props.setRunning(true)
    props.onStart(new CustomEvent('start', {}))
  }
}

const createTimerStop = (props: {
  running: boolean
  getCurrentRemaining: (nowMs?: number) => number
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setTargetTimeMs: React.Dispatch<React.SetStateAction<number | null>>
  onStop: TimerEventHandler
}) => {
  return () => {
    if (!props.running) return
    props.setRemaining(props.getCurrentRemaining())
    props.setRunning(false)
    props.setTargetTimeMs(null)
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
  setRunning: React.Dispatch<React.SetStateAction<boolean>>,
  setTargetTimeMs: React.Dispatch<React.SetStateAction<number | null>>,
  setRemaining: React.Dispatch<React.SetStateAction<number>>
) => {
  return (value: number) => {
    setRunning(false)
    setTargetTimeMs(null)
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
  getCurrentRemaining: (nowMs?: number) => number
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setTargetTimeMs: React.Dispatch<React.SetStateAction<number | null>>
  setRemaining: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (value: number) => {
    const baseRemaining = props.getCurrentRemaining()
    props.setRunning(false)
    props.setTargetTimeMs(null)
    props.setRemaining(Math.max(0, baseRemaining + value))
  }
}

const createResetTimer = (
  setRunning: React.Dispatch<React.SetStateAction<boolean>>,
  setTargetTimeMs: React.Dispatch<React.SetStateAction<number | null>>,
  setRemaining: React.Dispatch<React.SetStateAction<number>>,
  onReset: TimerEventHandler
) => {
  return () => {
    setRunning(false)
    setTargetTimeMs(null)
    setRemaining(0)
    onReset(new CustomEvent('reset', {}))
  }
}

const calculateElapsedVibrationSupported = () => {
  return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function'
}

export const TimerContextProvider: React.FC<TimerContextProviderProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const emptyFn = (_event: CustomEvent) => { /* do nothing */ }
  const onStart = resolveHandler(props.onStart, emptyFn)
  const onStop = resolveHandler(props.onStop, emptyFn)
  const onComplete = resolveHandler(props.onComplete, emptyFn)
  const onReset = resolveHandler(props.onReset, emptyFn)
  const [running, setRunning] = React.useState(false)
  const [remaining, setRemaining] = React.useState(0)
  const [targetTimeMs, setTargetTimeMs] = React.useState<number | null>(null)
  const [vibrationEnabled, setVibrationEnabled] = React.useState(
    resolveDefaultVibrationEnabled(props.defaultVibrationEnabled)
  )
  const vibrationPattern = resolveVibrationPattern(props.vibrationPattern)
  const vibrationSupported = calculateElapsedVibrationSupported()

  const refreshInterval = resolveTimerRefreshInterval(props.refreshInterval)

  const getCurrentRemaining = (nowMs = Date.now()) =>
    getTimerCurrentRemaining(running, targetTimeMs, remaining, nowMs)

  const notifyCompletion = () =>
    notifyTimerCompletion(
      vibrationEnabled,
      vibrationSupported,
      vibrationPattern,
      onComplete
    )

  const tick = createTimerTick({
    running,
    targetTimeMs,
    getCurrentRemaining,
    setRemaining,
    setRunning,
    setTargetTimeMs,
    notifyCompletion,
  })

  useInterval(tick, getActiveTimerInterval(running, refreshInterval))

  const start = createTimerStart({
    remaining,
    running,
    setTargetTimeMs,
    setRunning,
    onStart,
  })

  const stop = createTimerStop({
    running,
    getCurrentRemaining,
    setRemaining,
    setRunning,
    setTargetTimeMs,
    onStop,
  })

  const toggle = createTimerToggle(running, start, stop)
  const reset = createResetTimer(setRunning, setTargetTimeMs, setRemaining, onReset)
  const setTimerValue = createSetTimerValue(
    setRunning,
    setTargetTimeMs,
    setRemaining
  )
  const incrementTimerValue = createIncrementTimerValue({
    getCurrentRemaining,
    setRunning,
    setTargetTimeMs,
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
