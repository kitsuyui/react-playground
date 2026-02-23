import { describe, expect, it } from 'vitest'

import { render } from '@testing-library/react'

import { Zoomer, ZoomerWithinSize } from './zoomer'

describe('Zoomer', () => {
  it('renders without crashing', () => {
    const {container} = render(<Zoomer>Test</Zoomer>)
    expect(container.firstElementChild).not.toBeNull()
    expect(container.textContent).toContain('Test')
  })
})

describe('ZoomerWithinSize', () => {
  it('renders without crashing', () => {
    const {container} = render(
      <ZoomerWithinSize width={100} height={100}>
        Test
      </ZoomerWithinSize>
    )
    expect(container.firstElementChild).not.toBeNull()
    expect(container.textContent).toContain('Test')
  })
})
