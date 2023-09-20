import React, { useRef, useMemo } from 'react'
import { useMeasure } from 'react-use'

type Props = {
  text: string
}

export const Dekamoji: React.FC<Props> = React.memo(function Dekamoji({
  text,
}: {
  text: string
}): JSX.Element {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const [fontSize, setFontSize] = React.useState(0)
  const ref2 = useRef<HTMLDivElement>(null!)
  const ref3 = useRef<HTMLDivElement>(null!)
  useMemo(() => {
    const size = calcFontSize(width, height, ref3.current)
    if (size !== 0) {
      // Jittering prevention (HTML element is not ready yet)
      setFontSize(size)
    }
  }, [text, width, height])

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
          fontSize: fontSize + 'px',
          textAlign: 'center',
          margin: '0 auto',
          whiteSpace: 'pre-wrap',
        }}
      >
        {text}
      </div>
      <div
        ref={ref3}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          fontSize: fontSize + 'px',
          textAlign: 'center',
          margin: '0 auto',
          visibility: 'hidden', // for measure
          whiteSpace: 'pre-wrap',
        }}
      >
        {text}
      </div>
    </div>
  )
})

function calcFontSize(
  width: number,
  height: number,
  element: HTMLDivElement
): number {
  const current = element
  const maxFontSize = Math.max(width, height)
  let i = 0
  let fontSize = maxFontSize / 2
  const maxIterations = (Math.log2(maxFontSize) + 4) | 0 // for binary search
  while (maxIterations > i++) {
    // binary search
    const delta = maxFontSize / 2 ** i
    current.style.fontSize = fontSize + 'px'
    const overflowHeight = current.scrollHeight - height
    const overflowWidth = current.scrollWidth - width
    // If the text is too large, reduce the font size
    if (overflowHeight > 0 || overflowWidth > 0) {
      fontSize = Math.max(fontSize - delta, 0)
    } else if (overflowHeight <= 0 && overflowWidth <= 0) {
      fontSize = Math.min(fontSize + delta, maxFontSize)
    }
  }
  return fontSize | 0
}
