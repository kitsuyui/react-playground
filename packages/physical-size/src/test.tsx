import { render } from '@testing-library/react'
import React from 'react'

import { PhysicalSizeProvider, PhysicalSizeContext, calcPPI } from './base'

describe('PhysicalSizeProvider', () => {
  it('should render children', () => {
    const { container } = render(
      <PhysicalSizeProvider>
        <div>children</div>
      </PhysicalSizeProvider>,
    )
    expect(container).toMatchSnapshot()
  })
})

describe('PhysicalSizeContext', () => {
  it('should render children', () => {
    const { container } = render(
      <PhysicalSizeProvider>
        <PhysicalSizeContext.Consumer>
          {(value) => <div>{value.ppi}</div>}
        </PhysicalSizeContext.Consumer>
      </PhysicalSizeProvider>,
    )
    expect(container).toMatchSnapshot()
  })
})

describe('calcPPI', () => {
  it('should return the correct PPI', () => {
    expect(calcPPI({ width: 96, height: 96 })).toBe(96)
    expect(calcPPI({ width: 192, height: 192 })).toBe(192)
    // weird test case
    expect(calcPPI({ width: 96, height: 192 })).toBe(135.7645019878171)
  })
})
