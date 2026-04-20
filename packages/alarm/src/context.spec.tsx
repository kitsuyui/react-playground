import React from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render } from '@testing-library/react'

import {
  AlarmContext,
  AlarmContextProvider,
  type AlarmContextValue,
} from './context'

describe('AlarmContextProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('rings when the scheduled time is reached', async () => {
    const onRing = vi.fn()

    const ContextReceiver = () => {
      const context = React.useContext(AlarmContext)
      const scheduledRef = React.useRef(false)
      React.useEffect(() => {
        scheduleAlarmOnce(scheduledRef, context.scheduleAfter)
      }, [context])
      return <span>{JSON.stringify({ armed: context.armed, ringing: context.ringing })}</span>
    }

    const { getByText } = render(
      <AlarmContextProvider onRing={onRing} refreshInterval={10}>
        <ContextReceiver />
      </AlarmContextProvider>
    )

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1100)
    })

    expect(getByText(JSON.stringify({ armed: false, ringing: true }))).toBeTruthy()
    expect(onRing).toHaveBeenCalledTimes(1)
  })

  it('supports arm, disarm, notification, and reset actions', async () => {
    const onArm = vi.fn()
    const onDisarm = vi.fn()
    const onReset = vi.fn()
    const onRing = vi.fn()
    const NotificationMock = vi.fn(function MockNotification() {})
    Object.assign(NotificationMock, {
      permission: 'granted' as NotificationPermission,
    })
    vi.stubGlobal('Notification', NotificationMock as unknown as typeof Notification)

    const { getContext } = renderAlarmContext({
      defaultNotificationEnabled: true,
      onArm,
      onDisarm,
      onReset,
      onRing,
      refreshInterval: 10,
    })

    act(() => {
      getContext().setTargetTimeMs(Date.now() + 5_000)
    })
    expect(getContext().remaining).toBeCloseTo(5, 5)
    expect(getContext().notificationEnabled).toBe(true)

    act(() => {
      getContext().toggle()
    })
    expect(getContext().armed).toBe(true)

    act(() => {
      getContext().toggle()
    })
    expect(getContext().armed).toBe(false)
    expect(onArm).toHaveBeenCalledTimes(1)
    expect(onDisarm).toHaveBeenCalledTimes(1)

    act(() => {
      getContext().toggleNotification()
      getContext().setNotificationEnabled(true)
      getContext().scheduleAfter(0)
    })
    expect(getContext().armed).toBe(true)
    expect(getContext().remaining).toBe(0)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(20)
    })

    expect(getContext().armed).toBe(false)
    expect(getContext().ringing).toBe(true)
    expect(NotificationMock).toHaveBeenCalledTimes(1)
    expect(onRing).toHaveBeenCalledTimes(1)

    act(() => {
      getContext().stopRinging()
      getContext().reset()
    })

    expect(getContext().ringing).toBe(false)
    expect(getContext().armed).toBe(false)
    expect(getContext().targetTimeMs).toBeNull()
    expect(getContext().remaining).toBe(0)
    expect(onReset).toHaveBeenCalledTimes(1)
  })
})

const renderAlarmContext = (
  props: Partial<React.ComponentProps<typeof AlarmContextProvider>> = {}
) => {
  let context!: AlarmContextValue

  const ContextReceiver = () => {
    context = React.useContext(AlarmContext)
    return null
  }

  render(
    <AlarmContextProvider {...props}>
      <ContextReceiver />
    </AlarmContextProvider>
  )

  return {
    getContext: () => context,
  }
}

const scheduleAlarmOnce = (
  scheduledRef: React.MutableRefObject<boolean>,
  scheduleAfter: (seconds: number) => void
) => {
  if (scheduledRef.current) return
  scheduledRef.current = true
  scheduleAfter(1)
}
