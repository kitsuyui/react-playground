import React from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render } from '@testing-library/react'

import { MetronomeContext, MetronomeContextProvider } from './context'

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
        if (startedRef.current) {
          return
        }
        startedRef.current = true
        context.start()
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
})
