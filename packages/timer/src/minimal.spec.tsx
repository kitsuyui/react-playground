import { describe, expect, it, vi, beforeEach } from 'vitest'

import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MinimalTimer } from '.'

beforeEach(() => {
  cleanup()
})

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

  it('calls toggle when button is clicked', async () => {
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
    const { getByText } = render(<MinimalTimer {...props} />)
    const button = getByText('Start')
    await userEvent.click(button)
    expect(props.toggle).toHaveBeenCalled()
  })
  it('calls reset when reset button is clicked', async () => {
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
    const { getByText } = render(<MinimalTimer {...props} />)
    const button = getByText('Reset')
    await userEvent.click(button)
    expect(props.reset).toHaveBeenCalled()
  })
  it('calls incrementTimerValue when increment button is clicked', async () => {
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
    const { getByText } = render(<MinimalTimer {...props} />)
    const button = getByText('+分')
    await userEvent.click(button)
    expect(props.incrementTimerValue).toHaveBeenCalledWith(60)
    const button2 = getByText('+秒')
    await userEvent.click(button2)
    expect(props.incrementTimerValue).toHaveBeenCalledWith(1)
  })
})
