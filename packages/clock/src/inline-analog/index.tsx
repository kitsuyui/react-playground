import type React from 'react'

import { DateTime } from 'luxon'

import { type StepStyle, calcHMS } from '../utils/step'

export interface InlineAnalogClockProps
  extends Omit<React.ComponentPropsWithoutRef<'span'>, 'children'> {
  timezone: string
  date: Date
  step?: StepStyle
  showSecondHand?: boolean
}

const VIEWBOX_SIZE = 100
const CENTER = VIEWBOX_SIZE / 2
const FRAME_RADIUS = 46

export const InlineAnalogClock = (
  props: InlineAnalogClockProps
): React.JSX.Element => {
  const {
    timezone,
    date,
    step = 'tick',
    showSecondHand = false,
    style,
    title,
    ...spanProps
  } = props
  const { hour, minute, second } = calcHMS(date, timezone, step)
  const ariaLabel =
    spanProps['aria-label'] ??
    (spanProps['aria-labelledby']
      ? undefined
      : createAccessibleLabel(date, timezone))

  return (
    <span
      {...spanProps}
      role="img"
      aria-label={ariaLabel}
      title={title ?? createAccessibleLabel(date, timezone)}
      style={{
        display: 'inline-block',
        lineHeight: 1,
        ...style,
      }}
    >
      <svg
        viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          display: 'block',
          width: '1em',
          height: '1em',
          overflow: 'visible',
        }}
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={FRAME_RADIUS}
          stroke="currentColor"
          strokeWidth="6"
        />
        <line
          x1={CENTER}
          y1={CENTER}
          x2={CENTER}
          y2={CENTER - 2}
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <Hand degree={30 * hour} length={24} width={6} />
        <Hand degree={6 * minute} length={34} width={4} />
        {showSecondHand && (
          <Hand degree={6 * second} length={38} width={2} opacity={0.6} />
        )}
        <circle
          cx={CENTER}
          cy={CENTER}
          r="3"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}

const Hand = (props: {
  degree: number
  length: number
  width: number
  opacity?: number
}) => {
  const { degree, length, width, opacity } = props
  const radian = degreeToRadian(degree)
  const x = CENTER + length * Math.sin(radian)
  const y = CENTER - length * Math.cos(radian)

  return (
    <line
      x1={CENTER}
      y1={CENTER}
      x2={x}
      y2={y}
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      opacity={opacity}
    />
  )
}

const degreeToRadian = (degree: number): number => {
  return (degree * Math.PI) / 180
}

const createAccessibleLabel = (date: Date, timezone: string): string => {
  const time = DateTime.fromJSDate(date).setZone(timezone).toFormat('HH:mm:ss')
  return `Analog clock showing ${time} in ${timezone}`
}
