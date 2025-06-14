import React from 'react'
import { useInterval } from 'react-use'
import { curve } from './curve'
import { SizedBox } from './SizedBox'

const DEFAULT_INTERVAL = 10  // Default interval in milliseconds for the wave animation (10ms)

/**
 * WaveBox component that animates its width and height in a wave-like manner.
 *
 * @param props - The properties for the WaveBox component.
 * @param props.children - The content to be rendered inside the WaveBox.
 * @param props.maxWidth - The maximum width of the WaveBox.
 * @param props.maxHeight - The maximum height of the WaveBox.
 * @param props.minWidth - The minimum width of the WaveBox.
 * @param props.minHeight - The minimum height of the WaveBox.
 * @param props.widthCycle - The cycle duration for the width animation.
 * @param props.heightCycle - The cycle duration for the height animation.
 * @param props.interval - The interval in milliseconds for updating the wave animation (default is 10ms).
 * @returns {React.JSX.Element} The rendered WaveBox component.
 */
export const WaveBox = (props: {
  children: React.ReactNode
  maxWidth: number
  maxHeight: number
  minWidth: number
  minHeight: number
  widthCycle: number
  heightCycle: number
  interval?: number
}): React.JSX.Element => {
  const { children, maxWidth, maxHeight, minWidth, minHeight, widthCycle, heightCycle } = props
  const interval = props.interval ?? DEFAULT_INTERVAL
  return (
    <WaveBoxProvider
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      minWidth={minWidth}
      minHeight={minHeight}
      widthCycle={widthCycle}
      heightCycle={heightCycle}
      interval={interval}
    >
      <BaseWaveBox>{children}</BaseWaveBox>
    </WaveBoxProvider>
  )
}

/**
 * WaveBoxContext that provides the context for the WaveBox.
 * It contains the properties needed to calculate the wave-like behavior.
 */
export const WaveBoxContext = React.createContext<{
  maxWidth: number
  maxHeight: number
  minWidth: number
  minHeight: number
  widthCycle: number
  heightCycle: number
  tick: number
}>({
  maxWidth: 0,
  maxHeight: 0,
  minWidth: 0,
  minHeight: 0,
  widthCycle: 0,
  heightCycle: 0,
  tick: 0,
})

/**
 * WaveBoxProvider component that provides the context for the WaveBox.
 * It manages the tick state that is used to animate the wave-like behavior.
 * @param props.children - The content to be rendered inside the WaveBoxProvider.
 * @param props.maxWidth - The maximum width of the WaveBox.
 * @param props.maxHeight - The maximum height of the WaveBox.
 * @param props.minWidth - The minimum width of the WaveBox.
 * @param props.minHeight - The minimum height of the WaveBox.
 * @param props.widthCycle - The cycle duration for the width animation.
 * @param props.heightCycle - The cycle duration for the height animation.
 * @param props.interval - The interval in milliseconds for updating the tick state (default is 10ms).
 * @returns {React.JSX.Element} The rendered WaveBoxProvider component.
 */
export const WaveBoxProvider = (props: {
  children: React.ReactNode
  maxWidth: number
  maxHeight: number
  minWidth: number
  minHeight: number
  widthCycle: number
  heightCycle: number
  interval?: number
}): React.JSX.Element => {
  const { children, maxWidth, maxHeight, minWidth, minHeight, widthCycle, heightCycle } = props
  const interval = props.interval ?? DEFAULT_INTERVAL
  const [tick, setTick] = React.useState<number>(0)
  useInterval(() => {
    setTick((prevTick) => prevTick + 1)
  }, interval)
  return (
    <WaveBoxContext
      value={{ maxWidth, maxHeight, minWidth, minHeight, widthCycle, heightCycle, tick }}
    >
      {children}
    </WaveBoxContext>
  )
}

/**
 * BaseWaveBox component that uses the WaveBoxContext to determine its size based on the sine wave curve.
 * @param props - The properties for the BaseWaveBox component.
 * @returns {React.JSX.Element} The rendered BaseWaveBox component.
 */
const BaseWaveBox = (props: {
  children: React.ReactNode
}): React.JSX.Element => {
  const { maxWidth, maxHeight, minWidth, minHeight, widthCycle, heightCycle, tick } = React.useContext(WaveBoxContext)
  const currentWidth = curve(minWidth, maxWidth, widthCycle, tick)
  const currentHeight = curve(minHeight, maxHeight, heightCycle, tick)
  return (
    <SizedBox width={currentWidth} height={currentHeight}>
      {props.children}
    </SizedBox>
  )
}
