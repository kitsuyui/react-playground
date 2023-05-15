import { render } from '@testing-library/react'
import React from 'react'

import { toLabel } from './minimal'

import { MinimalTimer } from '.'

test('render MinimalTimer', () => {
  const props = {
    remaining: 1000,
    running: false,
    incrementTimerValue: jest.fn(),
    toggle: jest.fn(),
    reset: jest.fn(),
    start: jest.fn(),
    stop: jest.fn(),
    setTimerValue: jest.fn(),
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
