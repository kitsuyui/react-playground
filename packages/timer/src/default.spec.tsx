import { describe, expect, it, vi, beforeEach } from 'vitest'

import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DefaultTimer } from '.'

beforeEach(() => {
  cleanup()
})

describe('DefaultTimer', () => {
  it('renders correctly', () => {
    const props = {
      remaining: 1000,
      running: false,
      vibrationEnabled: false,
      vibrationSupported: false,
      incrementTimerValue: vi.fn(),
      toggle: vi.fn(),
      toggleVibration: vi.fn(),
      reset: vi.fn(),
      setVibrationEnabled: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
      setTimerValue: vi.fn(),
    }
    const { asFragment } = render(<DefaultTimer {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls toggle when button is clicked', async () => {
    const props = {
      remaining: 1000,
      running: false,
      vibrationEnabled: false,
      vibrationSupported: false,
      incrementTimerValue: vi.fn(),
      toggle: vi.fn(),
      toggleVibration: vi.fn(),
      reset: vi.fn(),
      setVibrationEnabled: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
      setTimerValue: vi.fn(),
    }
    const { getByText } = render(<DefaultTimer {...props} />)
    const button = getByText('Start')
    await userEvent.click(button)
    expect(props.toggle).toHaveBeenCalled()
  })
  it('calls reset when reset button is clicked', async () => {
    const props = {
      remaining: 1000,
      running: false,
      vibrationEnabled: false,
      vibrationSupported: false,
      incrementTimerValue: vi.fn(),
      toggle: vi.fn(),
      toggleVibration: vi.fn(),
      reset: vi.fn(),
      setVibrationEnabled: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
      setTimerValue: vi.fn(),
    }
    const { getByText } = render(<DefaultTimer {...props} />)
    const button = getByText('Reset')
    await userEvent.click(button)
    expect(props.reset).toHaveBeenCalled()
  })
  it('shows "Stop" label when running=true and "Start" when running=false', () => {
    const baseProps = {
      remaining: 1000,
      vibrationEnabled: false,
      vibrationSupported: false,
      incrementTimerValue: vi.fn(),
      toggle: vi.fn(),
      toggleVibration: vi.fn(),
      reset: vi.fn(),
      setVibrationEnabled: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
      setTimerValue: vi.fn(),
    }
    const { getByText, rerender } = render(<DefaultTimer {...baseProps} running={true} />)
    expect(getByText('Stop')).toBeTruthy()
    rerender(<DefaultTimer {...baseProps} running={false} />)
    expect(getByText('Start')).toBeTruthy()
  })

  it('has role="timer" with aria-live="off" on the remaining time display', () => {
    const props = {
      remaining: 1234,
      running: false,
      vibrationEnabled: false,
      vibrationSupported: false,
      incrementTimerValue: vi.fn(),
      toggle: vi.fn(),
      toggleVibration: vi.fn(),
      reset: vi.fn(),
      setVibrationEnabled: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
      setTimerValue: vi.fn(),
    }
    const { container } = render(<DefaultTimer {...props} />)
    const timer = container.querySelector('[role="timer"]')
    expect(timer).not.toBeNull()
    expect(timer?.getAttribute('aria-live')).toBe('off')
    expect(timer?.getAttribute('aria-atomic')).toBe('true')
  })

  it('calls incrementTimerValue when increment button is clicked', async () => {
    const props = {
      remaining: 1000,
      running: false,
      vibrationEnabled: false,
      vibrationSupported: false,
      incrementTimerValue: vi.fn(),
      toggle: vi.fn(),
      toggleVibration: vi.fn(),
      reset: vi.fn(),
      setVibrationEnabled: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
      setTimerValue: vi.fn(),
    }
    const { getByText } = render(<DefaultTimer {...props} />)
    const button = getByText('+分')
    await userEvent.click(button)
    expect(props.incrementTimerValue).toHaveBeenCalledWith(60)
    const button2 = getByText('+秒')
    await userEvent.click(button2)
    expect(props.incrementTimerValue).toHaveBeenCalledWith(1)
  })
})
