import React from 'react'

import { useMeasure } from 'react-use'

// Avoid using `window` directly to ensure compatibility without browser globals. (e.g., in SSR environments)
const window = globalThis.window || {
  innerWidth: 2 ** 16,
  innerHeight: 2 ** 16,
}

const EXPECT_MAX_RESOLUTION = Math.min(window.innerWidth, window.innerHeight)  // max resolution of the viewport
const DEFAULT_MAX_ITERATIONS = Math.ceil(Math.log2(EXPECT_MAX_RESOLUTION))
const INITIAL_ZOOM_UPPER_LIMIT = 2 ** DEFAULT_MAX_ITERATIONS // initial zoom upper limit is 2^maxIterations
const INITIAL_ZOOM = 2 ** (DEFAULT_MAX_ITERATIONS / 2)
const BREAK_DIFFERENCE = 1 / INITIAL_ZOOM_UPPER_LIMIT // meaningless zoom difference to stop zooming

export const ZoomerContext = React.createContext<{
  zoom: number
  computed: boolean
}>({
  zoom: 1.0,
  computed: false,
})

/**
 * Zoomer component that automatically adjusts the zoom level of its children not to overflow the container.
 * @param props
 * @returns
 */
export const Zoomer = (props: {
  children: React.ReactNode
}) => {
  const { children } = props
  const [ref, size] = useMeasure<HTMLDivElement>()
  const { width, height } = size
  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        overflow: 'clip',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ZoomerWithinSize
        width={width}
        height={height}
      >
        {children}
      </ZoomerWithinSize>
    </div>
  )
}

/**
 * ZoomerWithinSize component that adjusts the zoom level of its children to fit within the specified width and height.
 * It uses a binary search algorithm to find the optimal zoom level.
 * @param props
 * @returns
 */
export const ZoomerWithinSize = (props: {
  children: React.ReactNode
  width: number
  height: number
}) => {
  const { children, width, height } = props
  const innerRef = React.useRef<HTMLDivElement>(null)
  const [binarySearchState, setBinarySearchState] = React.useState({
    zoom: INITIAL_ZOOM,
    zoomUpperLimit: INITIAL_ZOOM_UPPER_LIMIT,
    zoomLowerLimit: 0.0,
    cachedSize: {
      width,
      height,
    },
    iterations: 0,
    computed: false,
  })
  React.useLayoutEffect(() => {
    if (binarySearchState.cachedSize.width !== width ||
        binarySearchState.cachedSize.height !== height) {
      setBinarySearchState({
        zoom: INITIAL_ZOOM,
        zoomUpperLimit: INITIAL_ZOOM_UPPER_LIMIT,
        zoomLowerLimit: 0.0,
        cachedSize: {
          width,
          height,
        },
        computed: false,
        iterations: 0,
      })
      return
    }
    if (binarySearchState.computed) {
      return
    }
    if (binarySearchState.iterations >= DEFAULT_MAX_ITERATIONS) {
      // if the number of iterations exceeds the maximum, stop zooming
      setBinarySearchState((prev) => ({
        ...prev,
        zoom: prev.zoomLowerLimit,
        computed: true,
      }))
      return
    }
    const innerElement = innerRef.current
    if (!innerElement) return
    const { zoom, zoomUpperLimit, zoomLowerLimit } = binarySearchState
    if (Math.abs(zoomUpperLimit - zoomLowerLimit) < BREAK_DIFFERENCE) {
      // if the difference between upper and lower limit is too small, stop zooming
      setBinarySearchState((prev) => ({
        ...prev,
        iterations: prev.iterations + 1,
        zoom: prev.zoomLowerLimit,
        computed: true,
      }))
      return
    }
    const verticalOverflow = innerElement.scrollHeight - height
    const horizontalOverflow = innerElement.scrollWidth - width
    const isOverflowing = verticalOverflow > 0 || horizontalOverflow > 0
    // binary search
    if (isOverflowing) {
      const newUpperLimit = Math.min(zoom, zoomUpperLimit)
      const next = zoom / 2 + zoomLowerLimit / 2
      setBinarySearchState((prev) => ({
        ...prev,
        zoom: next,
        iterations: prev.iterations + 1,
        zoomUpperLimit: newUpperLimit,
      }))
    } else {
      const newLowerLimit = Math.max(zoom, zoomLowerLimit)
      const next = zoom / 2 + zoomUpperLimit / 2
      setBinarySearchState((prev) => ({
        ...prev,
        zoom: next,
        iterations: prev.iterations + 1,
        zoomLowerLimit: newLowerLimit,
      }))
    }
  }, [
    width,
    height,
    binarySearchState,
  ])
  return (
    <div
      ref={innerRef}
    >
      <div
        style={{
          zoom: binarySearchState.zoom,
        }}
      >
        <ZoomerContext.Provider
          value={{
            zoom: binarySearchState.zoom,
            computed: binarySearchState.computed,
          }}
        >
          {children}
        </ZoomerContext.Provider>
      </div>
    </div>
  )
}
