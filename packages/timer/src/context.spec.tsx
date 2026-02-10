import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { render } from '@testing-library/react'

import { TimerContext, TimerContextProvider } from './context'
import React from 'react'

describe('TimerContextProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
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
})
