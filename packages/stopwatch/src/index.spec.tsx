import { expect, test, vi } from 'vitest'

import { render } from '@testing-library/react'

import { calcTimeDiff } from './container'
import { toLabel } from './minimal'

import { MinimalStopwatch } from '.'

test('render MinimalStopwatch', () => {
  const props = {
    remaining: 1000,
    running: false,
    toggle: vi.fn(),
    reset: vi.fn(),
    start: vi.fn(),
    stop: vi.fn(),
  }
  const { asFragment } = render(<MinimalStopwatch elapsedTime={0} {...props} />)
  expect(asFragment()).toMatchSnapshot()
})

test('getTimeDiff returns diff in seconds', () => {
  const startTime = new Date('2021-01-01T00:00:00Z')
  const endTime = new Date('2021-01-01T00:00:01Z')
  expect(calcTimeDiff(startTime, endTime)).toBe(1)
})

test('toLabel returns formatted string', () => {
  expect(toLabel(0)).toBe('00:00.000')
  expect(toLabel(1)).toBe('00:01.000')
  expect(toLabel(59)).toBe('00:59.000')
  expect(toLabel(60)).toBe('01:00.000')
  expect(toLabel(61)).toBe('01:01.000')
  expect(toLabel(3599)).toBe('59:59.000')
})
