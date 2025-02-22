import { expect, test } from 'vitest'

import { render } from '@testing-library/react'

import { AnalogClock, DigitalClock } from '.'

test('render AnalogClock', () => {
  const dt = new Date('2021-01-01T00:00:00Z')
  const { asFragment } = render(<AnalogClock timezone="Asia/Tokyo" date={dt} />)
  expect(asFragment()).toMatchSnapshot()
})

test('render DigitalClock', () => {
  const dt = new Date('2021-01-01T00:00:00Z')
  const { asFragment } = render(
    <DigitalClock timezone="Asia/Tokyo" date={dt} />
  )
  expect(asFragment()).toMatchSnapshot()
})
