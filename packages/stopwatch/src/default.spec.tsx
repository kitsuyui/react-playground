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

  it('shows "Stop" label when running=true and "Start" when running=false', () => {
    const props = {
      elapsedTime: 0,
      running: true,
      toggle: vi.fn(),
      reset: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
    }
    const { getByText, rerender } = render(<DefaultStopwatch {...props} />)
    expect(getByText('Stop')).toBeTruthy()
    rerender(<DefaultStopwatch {...props} running={false} />)
    expect(getByText('Start')).toBeTruthy()
  })

  it('has role="timer" with aria-live="off" on the elapsed time display', () => {
    const props = {
      elapsedTime: 5000,
      running: false,
      toggle: vi.fn(),
      reset: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
    }
    const { container } = render(<DefaultStopwatch {...props} />)
    const timer = container.querySelector('[role="timer"]')
    expect(timer).not.toBeNull()
    expect(timer?.getAttribute('aria-live')).toBe('off')
    expect(timer?.getAttribute('aria-atomic')).toBe('true')
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
