import React from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render } from '@testing-library/react'

import {
  MetronomeContext,
  MetronomeContextProvider,
  type MetronomeContextValue,
} from './context'

describe('MetronomeContextProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('emits beats on schedule', async () => {
    const onBeat = vi.fn()

    const ContextReceiver = () => {
      const context = React.useContext(MetronomeContext)
      const startedRef = React.useRef(false)
      React.useEffect(() => {
        startMetronomeOnce(startedRef, context.start)
      }, [context])
      return <span>{context.beat}</span>
    }

    const { getByText } = render(
      <MetronomeContextProvider initialTempo={120} onBeat={onBeat} refreshInterval={10}>
        <ContextReceiver />
      </MetronomeContextProvider>
    )

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1_100)
    })

    expect(getByText('3')).toBeTruthy()
    expect(onBeat).toHaveBeenCalledTimes(3)
  })

  it('supports tempo, toggle, stop, and reset actions', async () => {
    const onStart = vi.fn()
    const onStop = vi.fn()
    const onReset = vi.fn()
    const { getContext } = renderMetronomeContext({
      initialTempo: 120,
      onStart,
      onStop,
      onReset,
      refreshInterval: 10,
    })

    act(() => {
      getContext().setTempo(0)
      getContext().incrementTempo(-10)
    })
    expect(getContext().tempo).toBe(1)

    act(() => {
      getContext().setTempo(120)
      getContext().toggle()
    })
    expect(getContext().running).toBe(true)
    expect(onStart).toHaveBeenCalledTimes(1)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(600)
    })

    act(() => {
      getContext().toggle()
    })
    expect(getContext().running).toBe(false)
    expect(onStop).toHaveBeenCalledTimes(1)

    act(() => {
      getContext().reset()
    })
    expect(getContext().beat).toBe(0)
    expect(getContext().lastBeatAtMs).toBeNull()
    expect(onReset).toHaveBeenCalledTimes(1)
  })
})

const renderMetronomeContext = (
  props: Partial<React.ComponentProps<typeof MetronomeContextProvider>> = {}
) => {
  let context!: MetronomeContextValue

  const ContextReceiver = () => {
    context = React.useContext(MetronomeContext)
    return null
  }

  render(
    <MetronomeContextProvider {...props}>
      <ContextReceiver />
    </MetronomeContextProvider>
  )

  return {
    getContext: () => context,
  }
}

const startMetronomeOnce = (
  startedRef: React.MutableRefObject<boolean>,
  start: () => void
) => {
  if (startedRef.current) return
  startedRef.current = true
  start()
}
