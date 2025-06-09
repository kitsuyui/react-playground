import { expect, test } from 'vitest'

import { calcHMS, sweepHMS, tickHMS } from '.'

test('tickHMS returns HMS', () => {
  const dt = new Date('2021-01-01T00:00:00Z')
  expect(tickHMS(dt, 'Asia/Tokyo')).toEqual({
    hour: 9,
    minute: 0,
    second: 0,
  })

  const dt2 = new Date('2021-01-01T10:08:14Z')
  expect(tickHMS(dt2, 'Asia/Tokyo')).toEqual({
    hour: 19,
    minute: 8,
    second: 14,
  })
})

test('sweepHMS returns HMS', () => {
  const dt2 = new Date('2021-01-01T10:08:14.2000Z')
  expect(sweepHMS(dt2, 'Asia/Tokyo')).toEqual({
    hour: 19.13722222222222,
    minute: 8.233333333333333,
    second: 14.2,
  })
})

test('calcHMS returns HMS', () => {
  const dt = new Date('2021-01-01T10:08:14.2000Z')
  expect(calcHMS(dt, 'Asia/Tokyo', 'tick')).toEqual(tickHMS(dt, 'Asia/Tokyo'))
  expect(calcHMS(dt, 'Asia/Tokyo', 'sweep')).toEqual(sweepHMS(dt, 'Asia/Tokyo'))
})
