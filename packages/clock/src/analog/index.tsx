import type React from 'react'

import { type FaceType, computeFace } from '../utils/faces'
import { type StepStyle, calcHMS } from '../utils/step'

export interface AnalogClockStyle {
  width: number
  height: number
  step: StepStyle
  face: FaceType
  bigHand: HandStyle
  smallHand: HandStyle
  secondHand: HandStyle
  frame: FrameStyle
  centerPoint: CenterPointStyle
  hourLines: LinesStyle
  minuteLines: LinesStyle
}

export interface HandStyle {
  width: number
  length: number
  color: string
}

export interface FrameStyle {
  size: number
  width: number
  color: string
  backgroundColor: string
}

export interface CenterPointStyle {
  size: number
  color: string
}

export interface LinesStyle {
  width: number
  length: number
  color: string
}

export const defaultAnalogClockStyle: AnalogClockStyle = {
  width: 100,
  height: 100,
  step: 'tick',
  face: 'arabic',
  bigHand: {
    width: 3,
    length: 30,
    color: 'black',
  },
  smallHand: {
    width: 2,
    length: 40,
    color: 'black',
  },
  secondHand: {
    width: 1,
    length: 45,
    color: 'red',
  },
  frame: {
    size: 49,
    width: 1,
    color: 'black',
    backgroundColor: 'white',
  },
  centerPoint: {
    size: 2,
    color: 'black',
  },
  hourLines: {
    width: 1,
    length: 4,
    color: 'black',
  },
  minuteLines: {
    width: 1,
    length: 2,
    color: 'black',
  },
}

interface AnalogClockCustomize {
  step?: StepStyle
  face?: FaceType
  width?: number
  height?: number
  bigHand?: Partial<HandStyle>
  smallHand?: Partial<HandStyle>
  secondHand?: Partial<HandStyle>
  frame?: Partial<FrameStyle>
  centerPoint?: Partial<CenterPointStyle>
  hourLines?: Partial<LinesStyle>
  minuteLines?: Partial<LinesStyle>
}

type AnalogClockProps = {
  timezone: string
  date: Date
} & AnalogClockCustomize

export const AnalogClock: React.FC<AnalogClockProps> = (props): React.JSX.Element => {
  const { timezone, date } = props
  const {
    width,
    height,
    bigHand,
    smallHand,
    secondHand,
    frame,
    step,
    face,
    centerPoint,
    hourLines,
    minuteLines,
  } = customizeClockProps(props)
  const { hour, minute, second } = calcHMS(date, timezone, step)
  const centerX = width / 2
  const centerY = height / 2
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <title>{`${hour}:${minute}:${second}`}</title>
        <circle
          cx={centerX}
          cy={centerY}
          r={frame.size}
          stroke={frame.color}
          strokeWidth={frame.width}
          fill={frame.backgroundColor}
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={centerPoint.size}
          stroke={centerPoint.color}
          strokeWidth={centerPoint.size}
          fill={centerPoint.color}
        />
        <HourLines
          centerX={centerX}
          centerY={centerY}
          radius={frame.size - hourLines.length}
          {...hourLines}
        />
        <MinutesLines
          centerX={centerX}
          centerY={centerY}
          radius={frame.size - minuteLines.length}
          {...minuteLines}
        />
        <Faces
          centerX={centerX}
          centerY={centerY}
          radius={frame.size - minuteLines.length}
          faceType={face}
        />
        <Hand
          centerX={centerX}
          centerY={centerY}
          degree={30 * hour}
          {...bigHand}
        />
        <Hand
          centerX={centerX}
          centerY={centerY}
          degree={6 * minute}
          {...smallHand}
        />
        <Hand
          centerX={centerX}
          centerY={centerY}
          degree={6 * second}
          {...secondHand}
        />
      </svg>
    </div>
  )
}

export const Hand: React.FC<
  {
    centerX: number
    centerY: number
    degree: number
  } & HandStyle
> = (props) => {
  const { centerX, centerY, degree, length, width, color } = props
  const radDegree = degreeToRadian(degree)
  const x = centerX + length * Math.sin(radDegree)
  const y = centerY - length * Math.cos(radDegree) // clock coordinate
  return (
    <line
      x1={centerX}
      y1={centerY}
      x2={x}
      y2={y}
      stroke={color}
      strokeWidth={width}
    />
  )
}

const HourLines = (props: {
  centerX: number
  centerY: number
  radius: number
  length: number
  width: number
  color: string
}) => {
  const { centerX, centerY, radius, width, color, length } = props
  return (
    <Lines
      centerX={centerX}
      centerY={centerY}
      radius={radius}
      length={length}
      count={12}
      width={width}
      color={color}
    />
  )
}

const MinutesLines = (props: {
  centerX: number
  centerY: number
  radius: number
  length: number
  width: number
  color: string
}) => {
  const { centerX, centerY, radius, width, color, length } = props
  return (
    <Lines
      centerX={centerX}
      centerY={centerY}
      radius={radius}
      length={length}
      count={60}
      width={width}
      color={color}
    />
  )
}

const Lines = (props: {
  centerX: number
  centerY: number
  radius: number
  length: number
  count: number
  width: number
  color: string
}) => {
  const { centerX, centerY, radius, length, count, width, color } = props
  const lines = []
  for (let i = 0; i < count; i++) {
    const degree = (360 / count) * i
    const radDegree = degreeToRadian(degree)
    const x1 = centerX + radius * Math.sin(radDegree)
    const y1 = centerY + radius * Math.cos(radDegree)
    const x2 = x1 + length * Math.sin(radDegree)
    const y2 = y1 + length * Math.cos(radDegree)
    lines.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={width}
      />
    )
  }
  return <>{lines}</>
}

type DominantBaseline = "inherit" | "auto" | "middle" | "central" | "use-script" | "no-change" | "reset-size" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "text-after-edge" | "text-before-edge" | undefined
type TextAnchor = "start" | "middle" | "end" | "inherit" | undefined

const Faces = (props: {
  centerX: number
  centerY: number
  radius: number
  faceType: FaceType
}) => {
  const { centerX, centerY, radius } = props
  const faces = []
  const textSize = radius / 5
  const radius2 = radius - textSize
  const textStyle = {
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: textSize,
    fontFamily: 'monospace',
    fill: 'black',
  } satisfies {
    textAnchor: TextAnchor
    dominantBaseline: DominantBaseline
    fontSize: number
    fontFamily: string
    fill: string
  }
  for (let i = 0; i < 12; i++) {
    const degree = (360 / 12) * i
    const rad = degreeToRadian(degree)
    const x = centerX + radius2 * Math.sin(rad)
    const y = centerY - radius2 * Math.cos(rad) // clock coordinate
    faces.push(
      <text key={i} x={x} y={y} {...textStyle}>
        {computeFace(i, props.faceType)}
      </text>
    )
  }
  return <>{faces}</>
}

function customizeClockProps(
  customize: AnalogClockCustomize
): AnalogClockStyle {
  const {
    width,
    height,
    step,
    face,
    bigHand,
    smallHand,
    secondHand,
    frame,
    centerPoint,
    hourLines,
    minuteLines,
  } = {
    ...defaultAnalogClockStyle,
    ...customize,
  }
  return {
    width,
    height,
    step,
    face,
    bigHand: {
      ...defaultAnalogClockStyle.bigHand,
      ...bigHand,
    },
    smallHand: {
      ...defaultAnalogClockStyle.smallHand,
      ...smallHand,
    },
    secondHand: {
      ...defaultAnalogClockStyle.secondHand,
      ...secondHand,
    },
    frame: {
      ...defaultAnalogClockStyle.frame,
      ...frame,
    },
    centerPoint: {
      ...defaultAnalogClockStyle.centerPoint,
      ...centerPoint,
    },
    hourLines: {
      ...defaultAnalogClockStyle.hourLines,
      ...hourLines,
    },
    minuteLines: {
      ...defaultAnalogClockStyle.minuteLines,
      ...minuteLines,
    },
  }
}

const degreeToRadian = (degree: number): number => {
  return (degree * Math.PI) / 180
}
