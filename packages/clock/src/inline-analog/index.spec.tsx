import { afterEach, describe, expect, it } from 'vitest'

import { cleanup, render, screen } from '@testing-library/react'

import { InlineAnalogClock } from '.'

describe('InlineAnalogClock', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders as a span-compatible inline component', () => {
    render(
      <InlineAnalogClock
        data-testid="clock"
        date={new Date('2021-01-01T00:00:00Z')}
        timezone="Asia/Tokyo"
        className="inline-clock"
        style={{ color: 'rebeccapurple' }}
        title="Tokyo inline clock"
      />
    )

    const clock = screen.getByTestId('clock')
    const svg = clock.querySelector('svg')

    expect(clock.tagName).toBe('SPAN')
    expect(clock.getAttribute('class')).toBe('inline-clock')
    expect(clock.getAttribute('title')).toBe('Tokyo inline clock')
    expect(clock.style.color).toBe('rebeccapurple')
    expect(svg?.style.width).toBe('1em')
    expect(svg?.style.height).toBe('1em')
    expect(svg?.getAttribute('aria-hidden')).toBe('true')
  })

  it('provides a default accessible label', () => {
    const { getByRole } = render(
      <InlineAnalogClock
        date={new Date('2021-01-01T00:00:00Z')}
        timezone="Asia/Tokyo"
      />
    )

    expect(getByRole('img').getAttribute('aria-label')).toBe(
      'Analog clock showing 09:00:00 in Asia/Tokyo'
    )
  })

  it('preserves an explicit aria-label from the caller', () => {
    const { getByRole } = render(
      <InlineAnalogClock
        aria-label="Tokyo time"
        date={new Date('2021-01-01T00:00:00Z')}
        timezone="Asia/Tokyo"
      />
    )

    expect(getByRole('img').getAttribute('aria-label')).toBe('Tokyo time')
  })

  it('does not render the second hand by default', () => {
    const { container } = render(
      <InlineAnalogClock
        date={new Date('2021-01-01T00:00:00Z')}
        timezone="Asia/Tokyo"
      />
    )

    expect(container.querySelectorAll('line')).toHaveLength(3)
  })

  it('renders the second hand when enabled', () => {
    const { container } = render(
      <InlineAnalogClock
        date={new Date('2021-01-01T00:00:00Z')}
        timezone="Asia/Tokyo"
        showSecondHand
      />
    )

    expect(container.querySelectorAll('line')).toHaveLength(4)
  })
})
