import { describe, expect, it } from 'vitest'

import { render } from '@testing-library/react'

import { Zoomer, ZoomerWithinSize } from './zoomer'

describe('Zoomer', () => {
  it('renders without crashing', () => {
    const {asFragment} = render(<Zoomer>Test</Zoomer>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('ZoomerWithinSize', () => {
  it('renders without crashing', () => {
    const {asFragment} = render(
      <ZoomerWithinSize width={100} height={100}>
        Test
      </ZoomerWithinSize>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
