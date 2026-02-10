import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { render } from '@testing-library/react'

import { ClockContext, ClockContextProvider } from './context'
import React from 'react'

describe('ClockContextProvider', () => {
  const baseTime = new Date('2020-01-01T00:00:00.000Z')

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(baseTime)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('provides context', () => {
    const ContextReceiver = () => {
      const context = React.useContext(ClockContext)
      return <>{context.toISOString()}</>
    }
    const { asFragment } = render(
      <ClockContextProvider>
        <ContextReceiver />
      </ClockContextProvider>
    )
    vi.advanceTimersByTime(10) // refresh interval
    expect(asFragment()).toMatchSnapshot()
  })
})
