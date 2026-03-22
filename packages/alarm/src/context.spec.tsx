import React from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render } from '@testing-library/react'

import { AlarmContext, AlarmContextProvider } from './context'

describe('AlarmContextProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('rings when the scheduled time is reached', async () => {
    const onRing = vi.fn()

    const ContextReceiver = () => {
      const context = React.useContext(AlarmContext)
      const scheduledRef = React.useRef(false)
      React.useEffect(() => {
        if (scheduledRef.current) {
          return
        }
        scheduledRef.current = true
        context.scheduleAfter(1)
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
})
