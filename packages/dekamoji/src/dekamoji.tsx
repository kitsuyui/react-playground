import { layout, prepare } from '@chenglou/pretext'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useMeasure } from 'react-use'

type Props = {
  text: string
}

type SizedDekamojiProps = Props & {
  width: number
  height: number
}

type InheritedTextStyle = {
  fontFamily?: string
  fontStyle?: string
  fontWeight?: string
  lineHeightRatio: number
  lineBreak?: React.CSSProperties['lineBreak']
  overflowWrap?: React.CSSProperties['overflowWrap']
  whiteSpace?: React.CSSProperties['whiteSpace']
  wordBreak?: React.CSSProperties['wordBreak']
}

export const SizedDekamoji: React.FC<SizedDekamojiProps> = React.memo(function SizedDekamoji({
  text,
  width,
  height,
}): React.JSX.Element {
  const hostRef = useRef<HTMLDivElement>(null)
  const [inheritedTextStyle, setInheritedTextStyle] = React.useState<InheritedTextStyle | null>(null)
  const [fontSize, setFontSize] = React.useState(0)

  useLayoutEffect(() => {
    const hostElement = hostRef.current
    if (!hostElement) {
      return
    }

    const styleSource = hostElement.parentElement ?? hostElement
    setInheritedTextStyle(detectInheritedTextStyle(styleSource))
  }, [])

  useEffect(() => {
    if (!inheritedTextStyle) {
      return
    }

    const size = calcFontSizeWithPretext(width, height, text, inheritedTextStyle)
    setFontSize(size)
  }, [height, inheritedTextStyle, text, width])

  return (
    <div
      ref={hostRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      {inheritedTextStyle
        ? (
            <div style={createTextStyle(fontSize, inheritedTextStyle)}>
              {text}
            </div>
          )
        : null}
    </div>
  )
})

export const AutoDekamoji: React.FC<Props> = React.memo(function AutoDekamoji({
  text,
}: Props): React.JSX.Element {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()

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
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <SizedDekamoji width={width} height={height} text={text} />
      </div>
    </div>
  )
})

const createTextStyle = (
  fontSize: number,
  textStyle: InheritedTextStyle
): React.CSSProperties => {
  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    fontSize: `${fontSize}px`,
    lineHeight: textStyle.lineHeightRatio,
    textAlign: 'center',
    margin: '0 auto',
    boxSizing: 'border-box',
    whiteSpace: textStyle.whiteSpace ?? 'pre-wrap',
    overflowWrap: textStyle.overflowWrap,
    wordBreak: textStyle.wordBreak,
    lineBreak: textStyle.lineBreak,
    fontFamily: textStyle.fontFamily,
    fontStyle: textStyle.fontStyle,
    fontWeight: textStyle.fontWeight,
  }
}

const detectInheritedTextStyle = (element: HTMLElement): InheritedTextStyle => {
  const style = window.getComputedStyle(element)
  const fontSize = resolveFontSizePx(element, style)
  const lineHeight = resolveLineHeightPx(element, style)
  const lineHeightRatio = Number.isFinite(lineHeight) && fontSize > 0
    ? lineHeight / fontSize
    : measureLineHeightRatio(element, style, fontSize)

  return {
    fontFamily: style.fontFamily || undefined,
    fontStyle: style.fontStyle || undefined,
    fontWeight: style.fontWeight || undefined,
    lineHeightRatio,
    lineBreak: style.lineBreak || undefined,
    overflowWrap: style.overflowWrap || undefined,
    whiteSpace: style.whiteSpace || undefined,
    wordBreak: style.wordBreak || undefined,
  }
}

const resolveFontSizePx = (
  element: HTMLElement,
  style: CSSStyleDeclaration
): number => {
  const computedFontSize = Number.parseFloat(style.fontSize)
  if (computedFontSize > 0) {
    return computedFontSize
  }

  for (let current: HTMLElement | null = element; current; current = current.parentElement) {
    const inlineFontSize = Number.parseFloat(current.style.fontSize)
    if (inlineFontSize > 0) {
      return inlineFontSize
    }
  }

  throw new Error(`Expected a positive font-size from computed or inline styles, received: ${style.fontSize}`)
}

const resolveLineHeightPx = (
  element: HTMLElement,
  style: CSSStyleDeclaration
): number => {
  const computedLineHeight = Number.parseFloat(style.lineHeight)
  if (computedLineHeight > 0) {
    return computedLineHeight
  }

  for (let current: HTMLElement | null = element; current; current = current.parentElement) {
    const inlineLineHeight = Number.parseFloat(current.style.lineHeight)
    if (inlineLineHeight > 0) {
      return inlineLineHeight
    }
  }

  return Number.NaN
}

const measureLineHeightRatio = (
  element: HTMLElement,
  style: CSSStyleDeclaration,
  fontSize: number
): number => {
  if (!(fontSize > 0)) {
    throw new Error(`Expected a positive computed font-size, received: ${style.fontSize}`)
  }

  const probe = document.createElement('span')
  probe.textContent = 'Hg'
  probe.style.position = 'absolute'
  probe.style.visibility = 'hidden'
  probe.style.whiteSpace = 'pre'
  probe.style.margin = '0'
  probe.style.padding = '0'
  probe.style.border = '0'
  probe.style.fontFamily = style.fontFamily
  probe.style.fontStyle = style.fontStyle
  probe.style.fontWeight = style.fontWeight
  probe.style.fontSize = style.fontSize
  probe.style.lineHeight = style.lineHeight

  const container = element.ownerDocument.createElement('div')
  container.style.position = 'absolute'
  container.style.visibility = 'hidden'
  container.style.inset = '0'
  container.appendChild(probe)
  element.ownerDocument.body.appendChild(container)

  const measuredLineHeight = probe.getBoundingClientRect().height
  element.ownerDocument.body.removeChild(container)

  if (!(measuredLineHeight > 0)) {
    throw new Error(`Failed to measure line-height for font-size: ${style.fontSize}`)
  }

  return measuredLineHeight / fontSize
}

const calcFontSizeWithPretext = (
  width: number,
  height: number,
  text: string,
  textStyle: InheritedTextStyle
): number => {
  if (width <= 0 || height <= 0) {
    return 0
  }

  return binarySearchFontSize(Math.max(width, height), (candidate) => {
    const lineHeight = Math.max(1, Math.ceil(candidate * textStyle.lineHeightRatio))
    const prepared = prepare(text, createPretextFont(candidate, textStyle), {
      whiteSpace: resolvePretextWhiteSpace(textStyle.whiteSpace),
    })
    const result = layout(prepared, width, lineHeight)
    return result.height > height
  })
}

const binarySearchFontSize = (
  upperBound: number,
  overflows: (candidate: number) => boolean
): number => {
  let minAvailable = 0
  let minOverflow = Math.max(1, Math.floor(upperBound))

  while (minAvailable + 1 < minOverflow) {
    const candidate = Math.floor((minAvailable + minOverflow) / 2)
    if (overflows(candidate)) {
      minOverflow = candidate
    } else {
      minAvailable = candidate
    }
  }

  return minAvailable
}

const createPretextFont = (
  fontSize: number,
  textStyle: InheritedTextStyle
): string => {
  const segments = [
    textStyle.fontStyle,
    textStyle.fontWeight,
    `${fontSize}px`,
    textStyle.fontFamily ?? 'sans-serif',
  ]

  return segments.filter(Boolean).join(' ')
}

const resolvePretextWhiteSpace = (
  whiteSpace: React.CSSProperties['whiteSpace']
): 'normal' | 'pre' | 'pre-line' | 'pre-wrap' => {
  switch (whiteSpace) {
    case 'normal':
    case 'pre':
    case 'pre-line':
    case 'pre-wrap':
      return whiteSpace
    default:
      return 'pre-wrap'
  }
}
