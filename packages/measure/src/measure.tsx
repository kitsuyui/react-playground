import React from 'react'
import { createContext } from 'react'
import { useMeasure } from 'react-use'
import { MeasureStyle, MeasureBase, DEFAULT_MEASURE_STYLE } from './base'

export const MeasureStyleContext = createContext<MeasureStyle>(DEFAULT_MEASURE_STYLE)

/**
 * Measure component
 *
 * This component shows the size of the parent element.
 * @returns {JSX.Element}
 */
export const Measure: React.FC = (): JSX.Element => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const styles = React.useContext(MeasureStyleContext)
  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        overflow: 'hidden',
      }}
    >
      <MeasureBase width={width} height={height} styles={styles} />
    </div>
  )
}
