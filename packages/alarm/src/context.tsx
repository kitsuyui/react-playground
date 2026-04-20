import React from 'react'
import { useInterval } from 'react-use'

import { calcRemainingUntil } from './time'

export interface AlarmValue {
  armed: boolean
  ringing: boolean
  remaining: number
  targetTimeMs: number | null
  notificationEnabled: boolean
  notificationSupported: boolean
  notificationPermission: NotificationPermission | 'unsupported'
}

export interface AlarmActions {
  arm(): void
  disarm(): void
  toggle(): void
  reset(): void
  stopRinging(): void
  scheduleAfter(seconds: number): void
  setTargetTimeMs(value: number): void
  setNotificationEnabled(value: boolean): void
  toggleNotification(): void
}

export type AlarmContextValue = AlarmValue & AlarmActions

export const AlarmContext = React.createContext<AlarmContextValue>({
  armed: false,
  ringing: false,
  remaining: 0,
  targetTimeMs: null,
  notificationEnabled: false,
  notificationSupported: false,
  notificationPermission: 'unsupported',
  arm: () => { /* do nothing */ },
  disarm: () => { /* do nothing */ },
  toggle: () => { /* do nothing */ },
  reset: () => { /* do nothing */ },
  stopRinging: () => { /* do nothing */ },
  scheduleAfter: (_seconds: number) => { /* do nothing */ },
  setTargetTimeMs: (_value: number) => { /* do nothing */ },
  setNotificationEnabled: (_value: boolean) => { /* do nothing */ },
  toggleNotification: () => { /* do nothing */ },
})

export interface AlarmContextProviderProps {
  refreshInterval?: number
  children: React.ReactNode
  defaultNotificationEnabled?: boolean
  onArm?(event: CustomEvent): void
  onDisarm?(event: CustomEvent): void
  onRing?(event: CustomEvent): void
  onReset?(event: CustomEvent): void
}

type AlarmEventHandler = (event: CustomEvent) => void

const resolveHandler = <T,>(handler: T | undefined, fallback: T): T => {
  return handler ?? fallback
}

const resolveAlarmRefreshInterval = (refreshInterval?: number) => {
  return refreshInterval ?? 100
}

const resolveDefaultNotificationEnabled = (enabled?: boolean) => {
  return enabled ?? false
}

const getNotificationPermission = (
  notificationSupported: boolean
): NotificationPermission | 'unsupported' => {
  return notificationSupported ? Notification.permission : 'unsupported'
}

const getActiveAlarmInterval = (armed: boolean, refreshInterval: number) => {
  return armed ? refreshInterval : null
}

const getAlarmCurrentRemaining = (
  targetTimeMs: number | null,
  nowMs = Date.now()
) => {
  if (targetTimeMs === null) return 0
  return calcRemainingUntil(targetTimeMs, nowMs)
}

const notifyAlarmRing = (
  notificationEnabled: boolean,
  notificationSupported: boolean,
  onRing: AlarmEventHandler
) => {
  if (
    notificationEnabled &&
    notificationSupported &&
    Notification.permission === 'granted'
  ) {
    new Notification('Alarm', {
      body: 'The scheduled alarm time has been reached.',
    })
  }
  onRing(new CustomEvent('ring', {}))
}

const finishAlarmRing = (props: {
  armedRef: React.MutableRefObject<boolean>
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setArmed: React.Dispatch<React.SetStateAction<boolean>>
  setRinging: React.Dispatch<React.SetStateAction<boolean>>
  notifyRing: () => void
}) => {
  props.setRemaining(0)
  props.armedRef.current = false
  props.setArmed(false)
  props.setRinging(true)
  props.notifyRing()
}

const createAlarmTick = (props: {
  armedRef: React.MutableRefObject<boolean>
  targetTimeMsRef: React.MutableRefObject<number | null>
  getCurrentRemaining: (nowMs?: number) => number
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setArmed: React.Dispatch<React.SetStateAction<boolean>>
  setRinging: React.Dispatch<React.SetStateAction<boolean>>
  notifyRing: () => void
}) => {
  return () => {
    if (shouldSkipAlarmTick(props.armedRef, props.targetTimeMsRef)) return
    const nextRemaining = props.getCurrentRemaining()
    props.setRemaining(nextRemaining)
    handleAlarmRing(nextRemaining, props)
  }
}

const shouldSkipAlarmTick = (
  armedRef: React.MutableRefObject<boolean>,
  targetTimeMsRef: React.MutableRefObject<number | null>
) => {
  return !armedRef.current || targetTimeMsRef.current === null
}

const handleAlarmRing = (
  nextRemaining: number,
  props: {
    armedRef: React.MutableRefObject<boolean>
    setRemaining: React.Dispatch<React.SetStateAction<number>>
    setArmed: React.Dispatch<React.SetStateAction<boolean>>
    setRinging: React.Dispatch<React.SetStateAction<boolean>>
    notifyRing: () => void
  }
) => {
  if (nextRemaining > 0) return
  finishAlarmRing(props)
}

const createAlarmArm = (props: {
  targetTimeMsRef: React.MutableRefObject<number | null>
  getCurrentRemaining: (nowMs?: number) => number
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setRinging: React.Dispatch<React.SetStateAction<boolean>>
  armedRef: React.MutableRefObject<boolean>
  setArmed: React.Dispatch<React.SetStateAction<boolean>>
  onArm: AlarmEventHandler
}) => {
  return () => {
    if (props.targetTimeMsRef.current === null) return
    props.setRemaining(props.getCurrentRemaining())
    props.setRinging(false)
    props.armedRef.current = true
    props.setArmed(true)
    props.onArm(new CustomEvent('arm', {}))
  }
}

const createAlarmDisarm = (props: {
  armedRef: React.MutableRefObject<boolean>
  getCurrentRemaining: (nowMs?: number) => number
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setArmed: React.Dispatch<React.SetStateAction<boolean>>
  onDisarm: AlarmEventHandler
}) => {
  return () => {
    if (!props.armedRef.current) return
    props.setRemaining(props.getCurrentRemaining())
    props.armedRef.current = false
    props.setArmed(false)
    props.onDisarm(new CustomEvent('disarm', {}))
  }
}

const createAlarmToggle = (
  armed: boolean,
  disarm: () => void,
  arm: () => void
) => {
  return () => {
    if (armed) {
      disarm()
      return
    }
    arm()
  }
}

const createAlarmReset = (props: {
  armedRef: React.MutableRefObject<boolean>
  targetTimeMsRef: React.MutableRefObject<number | null>
  setArmed: React.Dispatch<React.SetStateAction<boolean>>
  setRinging: React.Dispatch<React.SetStateAction<boolean>>
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setTargetTimeMsState: React.Dispatch<React.SetStateAction<number | null>>
  onReset: AlarmEventHandler
}) => {
  return () => {
    props.armedRef.current = false
    props.targetTimeMsRef.current = null
    props.setArmed(false)
    props.setRinging(false)
    props.setRemaining(0)
    props.setTargetTimeMsState(null)
    props.onReset(new CustomEvent('reset', {}))
  }
}

const createScheduleAlarmAfter = (props: {
  targetTimeMsRef: React.MutableRefObject<number | null>
  armedRef: React.MutableRefObject<boolean>
  setTargetTimeMsState: React.Dispatch<React.SetStateAction<number | null>>
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setRinging: React.Dispatch<React.SetStateAction<boolean>>
  setArmed: React.Dispatch<React.SetStateAction<boolean>>
  onArm: AlarmEventHandler
}) => {
  return (seconds: number) => {
    const nextTargetTimeMs = Date.now() + Math.max(0, seconds) * 1000
    props.targetTimeMsRef.current = nextTargetTimeMs
    props.armedRef.current = true
    props.setTargetTimeMsState(nextTargetTimeMs)
    props.setRemaining(Math.max(0, seconds))
    props.setRinging(false)
    props.setArmed(true)
    props.onArm(new CustomEvent('arm', {}))
  }
}

const createSetAlarmTargetTime = (props: {
  targetTimeMsRef: React.MutableRefObject<number | null>
  setTargetTimeMsState: React.Dispatch<React.SetStateAction<number | null>>
  setRemaining: React.Dispatch<React.SetStateAction<number>>
  setRinging: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (value: number) => {
    props.targetTimeMsRef.current = value
    props.setTargetTimeMsState(value)
    props.setRemaining(calcRemainingUntil(value))
    props.setRinging(false)
  }
}

const createStopRinging = (
  setRinging: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return () => {
    setRinging(false)
  }
}

const createSetNotificationEnabledAction = (
  setNotificationEnabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return (value: boolean) => {
    setNotificationEnabled(value)
  }
}

const createToggleNotification = (
  setNotificationEnabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return () => {
    setNotificationEnabled((current) => !current)
  }
}

export const AlarmContextProvider: React.FC<AlarmContextProviderProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const emptyFn = (_event: CustomEvent) => { /* do nothing */ }
  const onArm = resolveHandler(props.onArm, emptyFn)
  const onDisarm = resolveHandler(props.onDisarm, emptyFn)
  const onRing = resolveHandler(props.onRing, emptyFn)
  const onReset = resolveHandler(props.onReset, emptyFn)
  const [armed, setArmed] = React.useState(false)
  const [ringing, setRinging] = React.useState(false)
  const [remaining, setRemaining] = React.useState(0)
  const [targetTimeMs, setTargetTimeMsState] = React.useState<number | null>(null)
  const [notificationEnabled, setNotificationEnabled] = React.useState(
    resolveDefaultNotificationEnabled(props.defaultNotificationEnabled)
  )
  const armedRef = React.useRef(armed)
  const targetTimeMsRef = React.useRef<number | null>(targetTimeMs)
  const refreshInterval = resolveAlarmRefreshInterval(props.refreshInterval)
  const notificationSupported = typeof Notification !== 'undefined'
  const notificationPermission = getNotificationPermission(notificationSupported)

  const getCurrentRemaining = (nowMs = Date.now()) =>
    getAlarmCurrentRemaining(targetTimeMsRef.current, nowMs)

  const notifyRing = () =>
    notifyAlarmRing(notificationEnabled, notificationSupported, onRing)

  const tick = createAlarmTick({
    armedRef,
    targetTimeMsRef,
    getCurrentRemaining,
    setRemaining,
    setArmed,
    setRinging,
    notifyRing,
  })

  useInterval(tick, getActiveAlarmInterval(armed, refreshInterval))

  const arm = createAlarmArm({
    targetTimeMsRef,
    getCurrentRemaining,
    setRemaining,
    setRinging,
    armedRef,
    setArmed,
    onArm,
  })

  const disarm = createAlarmDisarm({
    armedRef,
    getCurrentRemaining,
    setRemaining,
    setArmed,
    onDisarm,
  })

  const toggle = createAlarmToggle(armed, disarm, arm)
  const reset = createAlarmReset({
    armedRef,
    targetTimeMsRef,
    setArmed,
    setRinging,
    setRemaining,
    setTargetTimeMsState,
    onReset,
  })

  const stopRinging = createStopRinging(setRinging)

  const scheduleAfter = createScheduleAlarmAfter({
    targetTimeMsRef,
    armedRef,
    setTargetTimeMsState,
    setRemaining,
    setRinging,
    setArmed,
    onArm,
  })

  const setTargetTimeMs = createSetAlarmTargetTime({
    targetTimeMsRef,
    setTargetTimeMsState,
    setRemaining,
    setRinging,
  })
  const setNotificationEnabledAction =
    createSetNotificationEnabledAction(setNotificationEnabled)
  const toggleNotification = createToggleNotification(setNotificationEnabled)

  return (
    <AlarmContext.Provider
      value={{
        armed,
        ringing,
        remaining,
        targetTimeMs,
        notificationEnabled,
        notificationSupported,
        notificationPermission,
        arm,
        disarm,
        toggle,
        reset,
        stopRinging,
        scheduleAfter,
        setTargetTimeMs,
        setNotificationEnabled: setNotificationEnabledAction,
        toggleNotification,
      }}
    >
      {children}
    </AlarmContext.Provider>
  )
}
