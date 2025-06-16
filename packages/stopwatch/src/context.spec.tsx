import { describe, expect, it, } from 'vitest'

import { render } from '@testing-library/react'

import { StopwatchContextProvider, StopwatchContext } from './context'
import React from 'react'


describe('StopwatchContextProvider', () => {
  it('provides context', () => {
    const ContextReceiver = () => {
      const context = React.useContext(StopwatchContext)
      const valueString = JSON.stringify(Object.keys(context).sort())
      return (<>{valueString}</>)
    }
    const { asFragment } = render(<StopwatchContextProvider>
      <ContextReceiver />
    </StopwatchContextProvider>)
    expect(asFragment()).toMatchSnapshot()
  })
})
