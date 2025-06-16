import { describe, expect, it, vi } from 'vitest'

import { render } from '@testing-library/react'

import { MinimalTimer } from '.'

describe('MinimalTimer', () => {
  it('renders correctly', () => {
    const props = {
      remaining: 1000,
      running: false,
      incrementTimerValue: vi.fn(),
      toggle: vi.fn(),
      reset: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
      setTimerValue: vi.fn(),
    }
    const { asFragment } = render(<MinimalTimer {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
