import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { act, render } from '@testing-library/react'

import {
  StopwatchContextProvider,
  StopwatchContext,
  type StopwatchContextValue,
} from './context'
import React from 'react'

describe('StopwatchContextProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })
  it('provides context', () => {
    const ContextReceiver = () => {
      const context = React.useContext(StopwatchContext)
      const valueString = JSON.stringify(Object.keys(context).sort())
      return <>{valueString}</>
    }
    const { asFragment } = render(
      <StopwatchContextProvider>
        <ContextReceiver />
      </StopwatchContextProvider>
    )
    vi.advanceTimersByTime(10) // refresh interval
    expect(asFragment()).toMatchSnapshot()
  })

  it('supports start, stop, toggle, and reset actions', async () => {
    const onStart = vi.fn()
    const onStop = vi.fn()
    const onReset = vi.fn()
    const { getContext } = renderStopwatchContext({
      onStart,
      onStop,
      onReset,
      refreshInterval: 10,
    })

    act(() => {
      getContext().toggle()
    })
    expect(getContext().running).toBe(true)
    expect(onStart).toHaveBeenCalledTimes(1)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1_200)
    })
    expect(getContext().elapsedTime).toBeGreaterThan(1)

    act(() => {
      getContext().toggle()
    })
    expect(getContext().running).toBe(false)
    expect(onStop).toHaveBeenCalledTimes(1)

    act(() => {
      getContext().start()
    })
    expect(getContext().running).toBe(true)
    expect(onStart).toHaveBeenCalledTimes(2)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(800)
    })

    act(() => {
      getContext().stop()
    })
    expect(getContext().elapsedTime).toBeGreaterThan(1.5)
    expect(getContext().running).toBe(false)
    expect(onStop).toHaveBeenCalledTimes(2)

    act(() => {
      getContext().reset()
    })
    expect(getContext().elapsedTime).toBe(0)
    expect(onReset).toHaveBeenCalledTimes(1)
  })
})

const renderStopwatchContext = (
  props: Partial<React.ComponentProps<typeof StopwatchContextProvider>> = {}
) => {
  let context!: StopwatchContextValue

  const ContextReceiver = () => {
    context = React.useContext(StopwatchContext)
    return null
  }

  render(
    <StopwatchContextProvider {...props}>
      <ContextReceiver />
    </StopwatchContextProvider>
  )

  return {
    getContext: () => context,
  }
}
