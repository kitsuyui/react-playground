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
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const maxFontSize = Math.max(width, height)
  const maxIterations = iterations ?? (Math.log2(maxFontSize) + 1) | 0 // for binary search
  const [fontSize, setFontSize] = useState<number>(maxFontSize / 2)
  const ref2 = React.useRef<HTMLDivElement>(null)
  const [iter, setIter] = useState<number>(0)

  function calcFontSize() {
    if (!ref2.current) return
    if (iter > maxIterations) return
    if (text.length === 0) return
    const { current } = ref2
    const overflowHeight = current.scrollHeight - height
    const overflowWidth = current.scrollWidth - width

    // binary search
    const delta = maxFontSize / 2 ** (iter + 2)

    // If the text is too large, reduce the font size
    if (overflowHeight > 0 || overflowWidth > 0) {
      setFontSize(Math.max(fontSize - delta, 0))
    } else if (overflowHeight <= 0 && overflowWidth <= 0) {
      // If the text is too small, increase the font size
      setFontSize(Math.min(fontSize + delta, maxFontSize))
    }
    setIter(iter + 1)
  }

  useEffect(() => {
    setIter(0)
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
          position: 'relative',
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
    </div>
  )
}
