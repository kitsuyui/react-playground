import React, { useEffect, useState } from 'react'
import { useMeasure } from 'react-use'

type Props = {
  text: string
  iterations?: number
}

export const Dekamoji: React.FC<Props> = ({
  text,
  iterations,
}: {
  text: string
  iterations?: number
}): JSX.Element => {
  const maxIterations = iterations ?? 20
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const maxFontSize = Math.max(width, height)
  const [fontSize, setFontSize] = useState<number>(maxFontSize)
  const ref2 = React.useRef<HTMLDivElement>(null)
  const [iter, setIter] = useState<number>(0)

  function calcFontSize() {
    if (!ref2.current) return
    if (iter === 0) return
    const { current } = ref2
    const overflowHeight = current.scrollHeight - 1 - height
    const overflowWidth = current.scrollWidth - 1 - width
    // If the text is too large, reduce the font size
    if (overflowHeight >= 0 || overflowWidth >= 0) {
      setFontSize(Math.max(fontSize - iter, 0))
    }
    // Don't expand font size at the last iteration
    if (iter > 1) {
      // If the text is too small, increase the font size
      if (overflowHeight <= 0 && overflowWidth <= 0) {
        setFontSize(Math.min(fontSize + iter, maxFontSize))
      }
    }
    setIter(iter - 1)
  }

  useEffect(() => {
    setIter(maxIterations)
    calcFontSize()
  }, [text, width, height, fontSize, maxFontSize])

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
          fontSize: fontSize + 'px',
          textAlign: 'center',
          margin: 'auto 0',
          whiteSpace: 'pre-wrap',
        }}
      >
        {text}
      </div>
    </div>
  )
}
