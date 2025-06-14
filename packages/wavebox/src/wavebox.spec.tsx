import { expect, describe, it } from 'vitest'

import { render, cleanup } from '@testing-library/react'

import { WaveBox, WaveBoxContext, WaveBoxProvider } from './wavebox'
import React from 'react'

describe('WaveBox', () => {
  it('renders with specified width and height', () => {
    const { asFragment } = render(
      <WaveBox
        minWidth={100}
        maxWidth={200}
        minHeight={100}
        maxHeight={200}
        widthCycle={100}
        heightCycle={100}
      >
        <div>Test Content</div>
      </WaveBox>
    )
    expect(asFragment()).toMatchSnapshot()
    // Avoid useInterval cleanup issues in tests
    cleanup()
  })
  it('accepts custom interval', () => {
    const { asFragment } = render(
      <WaveBox
        minWidth={100}
        maxWidth={200}
        minHeight={100}
        maxHeight={200}
        widthCycle={100}
        heightCycle={100}
        interval={50} // Custom interval
      >
        <div>Test Content</div>
      </WaveBox>
    )
    expect(asFragment()).toMatchSnapshot()
    // Avoid useInterval cleanup issues in tests
    cleanup()
  })
})

describe('WaveBoxContext', () => {
  it('provides context values', () => {
    const WaveBoxContextProviderTester = () => {
      const context = React.useContext(WaveBoxContext)
      return (
        <div>
          {JSON.stringify({
            maxWidth: context.maxWidth,
            maxHeight: context.maxHeight,
            minWidth: context.minWidth,
            minHeight: context.minHeight,
            widthCycle: context.widthCycle,
            heightCycle: context.heightCycle,
            tick: context.tick,
          }, null, 2)}
        </div>
      )
    }
    const { asFragment } = render(
      <WaveBoxProvider
        maxWidth={200}
        maxHeight={200}
        minWidth={100}
        minHeight={100}
        widthCycle={100}
        heightCycle={100}
      >
        <WaveBoxContextProviderTester />
      </WaveBoxProvider>
    )
    expect(asFragment()).toMatchSnapshot()
    // Avoid useInterval cleanup issues in tests
    cleanup()
  })
})
