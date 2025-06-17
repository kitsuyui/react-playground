import { DateTime } from 'luxon'

import { toText } from "@kitsuyui/number-time"
const zeroPad2 = toText.zeroPad2

/**
 * DigitalClock component displays the current time in a digital format.
 * @param props
 * @returns
 */
export const DigitalClock = (props: {
  timezone: string
  date: Date
}): React.JSX.Element => {
  const { timezone, date } = props
  const dateStr = dateToDigital(date, timezone)
  return (
    <span
      style={{
        width: '20em',
        fontFamily: 'monospace',
      }}
    >
      {dateStr}
    </span>
  )
}

/**
 * Converts a Date object to a digital time string in the format "HH:MM:SS AM/PM (timezone)".
 * @param date
 * @param timezone
 * @returns
 */
export const dateToDigital = (date: Date, timezone: string): string => {
  const datetime = DateTime.fromJSDate(date)
  const dt = datetime.setZone(timezone)
  const hour = dt.hour % 12
  const hourStr = zeroPad2(hour)
  const minuteStr = zeroPad2(dt.minute)
  const secondStr = zeroPad2(dt.second)
  const ampm = dt.hour < 12 ? 'AM' : 'PM'
  return `${hourStr}:${minuteStr}:${secondStr} ${ampm} (${timezone})`
}
