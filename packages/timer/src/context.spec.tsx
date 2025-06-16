import { describe, expect, it, } from 'vitest'

import { render } from '@testing-library/react'

import { TimerContext, TimerContextProvider } from './context'
import React from 'react'


describe('TimerContextProvider', () => {
  it('provides context', () => {
    const ContextReceiver = () => {
      const context = React.useContext(TimerContext)
      const valueString = JSON.stringify(Object.keys(context).sort())
      return (<>{valueString}</>)
    }
    const { asFragment } = render(<TimerContextProvider>
      <ContextReceiver />
    </TimerContextProvider>)
    expect(asFragment()).toMatchSnapshot()
  })
})
