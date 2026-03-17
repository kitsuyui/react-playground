import { describe, expect, it } from 'vitest'

import { render } from '@testing-library/react'

import { dateToDigital, DigitalClock } from '.'


describe('DigitalClock', () => {
  it('renders correctly', () => {
    const date = new Date('2020-01-01T12:34:56Z')
    const timezone = 'Asia/Tokyo'
    const { asFragment } = render(
      <DigitalClock date={date} timezone={timezone} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('dateToDigital', () => {
  it('converts date to digital format in Other Timezone', () => {
    const date = new Date('2020-01-01T12:34:56Z')
    const timezone = 'Asia/Manila'
    const result = dateToDigital(date, timezone)
    expect(result).toBe('08:34:56 PM (Asia/Manila)')
  })

  it('keeps 12 instead of 00 at noon', () => {
    const date = new Date('2020-01-01T04:00:00Z')
    const timezone = 'Asia/Tokyo'
    const result = dateToDigital(date, timezone)
    expect(result).toBe('01:00:00 PM (Asia/Tokyo)')
  })
})
