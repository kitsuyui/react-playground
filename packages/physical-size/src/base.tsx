import React from 'react'

import { createContext, useEffect, useRef, useState, forwardRef } from 'react'

/**
 * I want to get the physical size of the device.
 * But this package is meaningless.Because PPI is constant value for each device.
 * In CSS definition, 1in is always 96px.So PPI = sqrt(96 * 96) = 96.
 * https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
 */

export interface PhysicalSize {
  ppi: number
}

const DEFAULT_PPI = 96

/**
 * PhysicalSizeContext is a context that provides the physical size of the device.
 */
export const PhysicalSizeContext = createContext<PhysicalSize>({
  ppi: DEFAULT_PPI,
})

/**
 * PhysicalSizeProvider is a provider that provides the physical size of the device.
 * @param props children
 * @returns PhysicalSizeProvider
 */
export const PhysicalSizeProvider = (props: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [ppi, setPpi] = useState(DEFAULT_PPI)
  useEffect(() => {
    if (!ref?.current) return
    const ppi = calcPPIFromHiddenComponent(ref.current)
    setPpi(ppi)
  })
  return (
    <>
      <HiddenComponent ref={ref} />
      <PhysicalSizeContext.Provider value={{ ppi }}>
        {props.children}
      </PhysicalSizeContext.Provider>
    </>
  )
}

export const calcPPI = (values: { width: number; height: number }): number => {
  const { width, height } = values
  return Math.sqrt(width * height)
}

/**
 * HiddenComponent is a hidden component that is used to calculate PPI.
 * @param props ref
 * @returns HiddenComponent
 */
const HiddenComponent = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: '1in',
        height: '1in',
        position: 'absolute',
        top: '-100%',
        left: '-100%',
        opacity: 0,
        overflow: 'hidden',
      }}
    />
  )
})

/**
 * calculate PPI from hidden component
 * @param element hidden component
 * @returns PPI (Pixel Per Inch)
 */
const calcPPIFromHiddenComponent = (element: HTMLDivElement): number => {
  const { offsetWidth, offsetHeight } = element
  return calcPPI({ width: offsetWidth, height: offsetHeight })
}
