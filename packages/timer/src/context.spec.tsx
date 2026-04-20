import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { render } from '@testing-library/react'

import { act } from '@testing-library/react'
import {
  TimerContext,
  TimerContextProvider,
  type TimerContextValue,
} from './context'
import React from 'react'

describe('TimerContextProvider', () => {
  let restoreNavigatorVibrate = () => {}

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })
  afterEach(() => {
    restoreNavigatorVibrate()
    restoreNavigatorVibrate = () => {}
    vi.useRealTimers()
    vi.restoreAllMocks()
  })
  it('provides context', () => {
    const ContextReceiver = () => {
      const context = React.useContext(TimerContext)
      const valueString = JSON.stringify(Object.keys(context).sort())
      return <>{valueString}</>
    }
    const { asFragment } = render(
      <TimerContextProvider>
        <ContextReceiver />
      </TimerContextProvider>
    )
    vi.advanceTimersByTime(10) // refresh interval
    expect(asFragment()).toMatchSnapshot()
  })

  it('supports timer actions and completion side effects', async () => {
    const onStart = vi.fn()
    const onStop = vi.fn()
    const onComplete = vi.fn()
    const onReset = vi.fn()
    const vibrate = vi.fn()
    restoreNavigatorVibrate = stubNavigatorVibrate(vibrate)

    const { getContext } = renderTimerContext({
      defaultVibrationEnabled: true,
      vibrationPattern: [111, 222],
      onStart,
      onStop,
      onComplete,
      onReset,
      refreshInterval: 10,
    })

    act(() => {
      getContext().start()
      getContext().setTimerValue(2)
    })
    expect(getContext().running).toBe(false)
    expect(getContext().remaining).toBe(2)

    act(() => {
      getContext().toggle()
    })
    expect(getContext().running).toBe(true)
    expect(onStart).toHaveBeenCalledTimes(1)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1_000)
    })

    act(() => {
      getContext().toggle()
    })
    expect(getContext().running).toBe(false)
    expect(getContext().remaining).toBeCloseTo(1, 1)
    expect(onStop).toHaveBeenCalledTimes(1)

    act(() => {
      getContext().incrementTimerValue(1)
      getContext().setVibrationEnabled(false)
      getContext().toggleVibration()
    })
    expect(getContext().remaining).toBeCloseTo(2, 1)
    expect(getContext().vibrationEnabled).toBe(true)

    act(() => {
      getContext().start()
    })
    expect(getContext().running).toBe(true)
    expect(onStart).toHaveBeenCalledTimes(2)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2_100)
    })

    expect(getContext().running).toBe(false)
    expect(getContext().remaining).toBe(0)
    expect(onComplete).toHaveBeenCalled()
    expect(vibrate).toHaveBeenCalledWith([111, 222])

    act(() => {
      getContext().reset()
    })
    expect(getContext().remaining).toBe(0)
    expect(onReset).toHaveBeenCalledTimes(1)
  })
})

const renderTimerContext = (
  props: Partial<React.ComponentProps<typeof TimerContextProvider>> = {}
) => {
  let context!: TimerContextValue

  const ContextReceiver = () => {
    context = React.useContext(TimerContext)
    return null
  }

  render(
    <TimerContextProvider {...props}>
      <ContextReceiver />
    </TimerContextProvider>
  )

  return {
    getContext: () => context,
  }
}

const stubNavigatorVibrate = (vibrate: (pattern: number | number[]) => boolean) => {
  const originalVibrate = Object.getOwnPropertyDescriptor(navigator, 'vibrate')
  Object.defineProperty(navigator, 'vibrate', {
    configurable: true,
    value: vibrate,
  })

  return () => {
    if (originalVibrate) {
      Object.defineProperty(navigator, 'vibrate', originalVibrate)
      return
    }

    delete (navigator as Navigator & { vibrate?: typeof vibrate }).vibrate
  }
}
