import React, { useRef, useMemo } from 'react'
import { useMeasure } from 'react-use'

type Props = {
  text: string
}

export const Dekamoji: React.FC<Props> = React.memo(function Dekamoji({
  text,
}: {
  text: string
}): React.JSX.Element {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const [fontSize, setFontSize] = React.useState(0)
  const ref2 = useRef<HTMLDivElement>(null)

  useMemo(() => {
    const element = ref2.current
    let fontFamily: string | undefined
    if (element) {
      fontFamily = detectFontFamily(element)
    }
    const size = calcFontSize(width, height, text, fontFamily)
    setFontSize(size)
  }, [width, height, text])

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <div
        ref={ref2}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          fontSize: `${fontSize}px`,
          textAlign: 'center',
          margin: '0 auto',
          boxSizing: 'border-box',
          whiteSpace: 'pre-wrap',
        }}
      >
        {text}
      </div>
    </div>
  )
})

/**
 * Detect font family inherited from parent element
 * @param element
 * @returns font family
 */
const detectFontFamily = (element: HTMLElement): string | undefined => {
  const style = window.getComputedStyle(element)
  const fontFamily = style.fontFamily
  return fontFamily
}

const calcFontSize = (
  width: number,
  height: number,
  text: string,
  fontFamily?: string
): number => {
  // calculate font size without react component and raw dom
  const outer = document.createElement('div')
  outer.style.position = 'absolute'
  outer.style.width = `${width}px`
  outer.style.height = `${height}px`
  outer.style.boxSizing = 'border-box'
  outer.style.zIndex = '-1'
  outer.style.overflowX = 'hidden'
  outer.style.overflowY = 'hidden'
  const inner = document.createElement('div')
  inner.style.visibility = 'hidden'
  inner.style.fontSize = '0'
  inner.style.textAlign = 'center'
  inner.style.margin = '0 auto'
  inner.style.whiteSpace = 'pre-wrap'
  inner.style.boxSizing = 'border-box'
  inner.style.zIndex = '-1'
  if (fontFamily) {
    inner.style.fontFamily = fontFamily
  }
  inner.textContent = text
  outer.appendChild(inner)
  document.body.appendChild(outer)

  // binary search for font size
  const maxFontSize = Math.max(width, height)
  const min = 0.0
  const max = maxFontSize
  let minOverflow = max
  let maxAvailable = min
  let trial = Math.floor((minOverflow + maxAvailable) / 2)
  const maxIterations = Math.log2(maxFontSize)
  let iterations = 0
  while (iterations < maxIterations) {
    iterations += 1
    trial = Math.floor((minOverflow + maxAvailable) / 2)
    inner.style.fontSize = `${trial}px`
    const overflowHeight = inner.scrollHeight - height
    const overflowWidth = inner.scrollWidth - width
    const scrollbarWidth = 2
    const overflows = overflowHeight > scrollbarWidth || overflowWidth > scrollbarWidth
    if (overflows) {
      minOverflow = trial
    } else {
      maxAvailable = trial
    }
    if (minOverflow - maxAvailable <= 1) {
      break
    }
  }
  document.body.removeChild(outer)
  return trial - 4
}
