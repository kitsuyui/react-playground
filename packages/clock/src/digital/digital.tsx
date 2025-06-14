import { DateTime } from 'luxon'

import type { ClockProps } from '../types'
import { zeroPad2 } from '../utils'

export const DigitalClock: React.FC<ClockProps> = (props): React.JSX.Element => {
  const { timezone, date } = props
  const dateStr = dateToDigital(date, timezone)
  return (
    <div
      style={{
        width: '20em',
        fontFamily: 'monospace',
      }}
    >
      {dateStr}
    </div>
  )
}

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
