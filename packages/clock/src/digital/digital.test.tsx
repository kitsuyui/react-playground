import { dateToDigital } from './digital'

test('dateToDigital', () => {
  const date = new Date('2020-01-01T12:34:56Z')
  const timezone = 'America/Los_Angeles'
  const expected = '04:34:56 AM (America/Los_Angeles)'
  const actual = dateToDigital(date, timezone)
  expect(actual).toEqual(expected)
})
