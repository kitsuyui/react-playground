import { describe, expect, it } from 'vitest'

import { render } from '@testing-library/react'

import { AnalogClock } from '.'

describe('AnalogClock', () => {
  it('renders correctly', () => {
    const dt = new Date('2021-01-01T00:00:00Z')
    const { asFragment } = render(<AnalogClock timezone="Asia/Tokyo" date={dt} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders with sweep step style', () => {
    const dt = new Date('2021-01-01T00:00:00Z')
    const { asFragment } = render(
      <AnalogClock timezone="Asia/Tokyo" date={dt} step="sweep" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders with tick step style', () => {
    const dt = new Date('2021-01-01T00:00:00Z')
    const { asFragment } = render(
      <AnalogClock timezone="Asia/Tokyo" date={dt} step="tick" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders with roman face', () => {
    const dt = new Date('2021-01-01T00:00:00Z')
    const { asFragment } = render(
      <AnalogClock timezone="Asia/Tokyo" date={dt} face="roman" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders with arabic face', () => {
    const dt = new Date('2021-01-01T00:00:00Z')
    const { asFragment } = render(
      <AnalogClock timezone="Asia/Tokyo" date={dt} face="arabic" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
