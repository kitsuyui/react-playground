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

type BinarySearchState = {
  zoom: number
  zoomUpperLimit: number
  zoomLowerLimit: number
  cachedSize: {
    width: number
    height: number
  }
  iterations: number
  computed: boolean
}

const createBinarySearchState = (
  width: number,
  height: number
): BinarySearchState => ({
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

const hasCachedSizeChanged = (
  state: BinarySearchState,
  width: number,
  height: number
) => {
  return state.cachedSize.width !== width || state.cachedSize.height !== height
}

const completeBinarySearch = (
  state: BinarySearchState,
  iterations = state.iterations
): BinarySearchState => ({
  ...state,
  zoom: state.zoomLowerLimit,
  computed: true,
  iterations,
})

const resolveBinarySearchBoundaryState = (
  state: BinarySearchState,
  width: number,
  height: number
) => {
  if (hasCachedSizeChanged(state, width, height)) {
    return createBinarySearchState(width, height)
  }

  return state.computed ? state : null
}

const resolveBinarySearchTerminalState = (state: BinarySearchState) => {
  if (state.iterations >= DEFAULT_MAX_ITERATIONS) {
    return completeBinarySearch(state)
  }
  if (Math.abs(state.zoomUpperLimit - state.zoomLowerLimit) < BREAK_DIFFERENCE) {
    return completeBinarySearch(state, state.iterations + 1)
  }
  return null
}

const isZoomOverflowing = (
  innerElement: HTMLDivElement,
  width: number,
  height: number
) => {
  const verticalOverflow = innerElement.scrollHeight - height
  const horizontalOverflow = innerElement.scrollWidth - width
  return verticalOverflow > 0 || horizontalOverflow > 0
}

const advanceBinarySearchState = (
  state: BinarySearchState,
  isOverflowing: boolean
): BinarySearchState => {
  if (isOverflowing) {
    const newUpperLimit = Math.min(state.zoom, state.zoomUpperLimit)
    return {
      ...state,
      zoom: state.zoom / 2 + state.zoomLowerLimit / 2,
      iterations: state.iterations + 1,
      zoomUpperLimit: newUpperLimit,
    }
  }

  const newLowerLimit = Math.max(state.zoom, state.zoomLowerLimit)
  return {
    ...state,
    zoom: state.zoom / 2 + state.zoomUpperLimit / 2,
    iterations: state.iterations + 1,
    zoomLowerLimit: newLowerLimit,
  }
}

const resolveNextBinarySearchState = (
  state: BinarySearchState,
  width: number,
  height: number,
  innerElement: HTMLDivElement | null
) => {
  const boundaryState = resolveBinarySearchBoundaryState(state, width, height)
  if (boundaryState) return boundaryState
  if (!innerElement) return null
  const terminalState = resolveBinarySearchTerminalState(state)
  if (terminalState) return terminalState
  return advanceBinarySearchState(
    state,
    isZoomOverflowing(innerElement, width, height)
  )
}

/**
 * AutoZoomer component that automatically adjusts the zoom level of its children not to overflow the container.
 * @param props
 * @returns
 */
export const AutoZoomer = (props: {
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
      <SizedZoomer
        width={width}
        height={height}
      >
        {children}
      </SizedZoomer>
    </div>
  )
}

/**
 * SizedZoomer component that adjusts the zoom level of its children to fit within the specified width and height.
 * It uses a binary search algorithm to find the optimal zoom level.
 * @param props
 * @returns
 */
export const SizedZoomer = (props: {
  children: React.ReactNode
  width: number
  height: number
}) => {
  const { children, width, height } = props
  const innerRef = React.useRef<HTMLDivElement>(null)
  const [binarySearchState, setBinarySearchState] = React.useState(
    createBinarySearchState(width, height)
  )
  React.useLayoutEffect(() => {
    const nextState = resolveNextBinarySearchState(
      binarySearchState,
      width,
      height,
      innerRef.current
    )
    if (nextState !== null && nextState !== binarySearchState) {
      setBinarySearchState(nextState)
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
