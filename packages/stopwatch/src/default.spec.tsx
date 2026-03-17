import { describe, expect, it, vi, beforeEach } from 'vitest'

import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DefaultStopwatch } from './default'

beforeEach(() => {
  cleanup()
})

describe('DefaultStopwatch', () => {
  it('renders correctly', () => {
    const props = {
      elapsedTime: 0,
      running: false,
      toggle: vi.fn(),
      reset: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
    }
    const { asFragment } = render(<DefaultStopwatch {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls toggle when button is clicked', async () => {
    const props = {
      elapsedTime: 0,
      running: false,
      toggle: vi.fn(),
      reset: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
    }
    const { getByText } = render(<DefaultStopwatch {...props} />)
    const button = getByText('Start')
    await userEvent.click(button)
    expect(props.toggle).toHaveBeenCalled()
  })

  it('calls reset when reset button is clicked', async () => {
    const props = {
      elapsedTime: 0,
      running: false,
      toggle: vi.fn(),
      reset: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
    }
    const { getByText } = render(<DefaultStopwatch {...props} />)
    const button = getByText('Reset')
    await userEvent.click(button)
    expect(props.reset).toHaveBeenCalled()
  })
})
