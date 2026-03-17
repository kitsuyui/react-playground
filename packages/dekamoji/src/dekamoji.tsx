import React, { useEffect, useRef } from 'react'
import { useMeasure } from 'react-use'

type Props = {
  text: string
}

type SizedDekamojiProps = Props & {
  width: number
  height: number
  fontFamily?: string
}

export const SizedDekamoji: React.FC<SizedDekamojiProps> = React.memo(function SizedDekamoji({
  text,
  width,
  height,
  fontFamily,
}): React.JSX.Element {
  const [fontSize, setFontSize] = React.useState(0)

  useEffect(() => {
    const size = calcFontSize(width, height, text, fontFamily)
    setFontSize(size)
  }, [fontFamily, height, text, width])

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        fontSize: `${fontSize}px`,
        textAlign: 'center',
        margin: '0 auto',
        boxSizing: 'border-box',
        whiteSpace: 'pre-wrap',
        fontFamily,
      }}
    >
      {text}
    </div>
  )
})

export const AutoDekamoji: React.FC<Props> = React.memo(function AutoDekamoji({
  text,
}: Props): React.JSX.Element {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const innerRef = useRef<HTMLDivElement>(null)
  const [fontFamily, setFontFamily] = React.useState<string | undefined>(undefined)

  useEffect(() => {
    const element = innerRef.current
    if (!element) {
      return
    }
    setFontFamily(detectFontFamily(element))
  }, [])

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
        ref={innerRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <SizedDekamoji
          width={width}
          height={height}
          text={text}
          fontFamily={fontFamily}
        />
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
