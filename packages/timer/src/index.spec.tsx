import { expect, test, vi } from 'vitest'

import { render } from '@testing-library/react'

import { MinimalTimer } from '.'

test('render MinimalTimer', () => {
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
