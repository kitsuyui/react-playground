import { describe, expect, it, vi } from 'vitest'

import { render } from '@testing-library/react'

import { MinimalStopwatch } from './minimal'

describe('MinimalStopwatch', () => {
  it('renders correctly', () => {
    const props = {
      elapsedTime: 0,
      running: false,
      toggle: vi.fn(),
      reset: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
    }
    const { asFragment } = render(<MinimalStopwatch {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
