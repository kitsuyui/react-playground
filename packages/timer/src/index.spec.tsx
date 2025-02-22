import { expect, test, vi } from 'vitest'

import { render } from '@testing-library/react'
import React from 'react'

import { toLabel } from './minimal'

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

test('toLabel returns formatted string', () => {
  expect(toLabel(0)).toBe('00:00.000')
  expect(toLabel(1)).toBe('00:01.000')
  expect(toLabel(59)).toBe('00:59.000')
  expect(toLabel(60)).toBe('01:00.000')
  expect(toLabel(61)).toBe('01:01.000')
  expect(toLabel(3599)).toBe('59:59.000')
})
