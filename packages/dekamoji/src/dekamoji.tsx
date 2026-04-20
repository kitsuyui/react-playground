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
  whiteSpace?: string
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
  }
}

const detectInheritedTextStyle = (element: HTMLElement): InheritedTextStyle => {
  const style = window.getComputedStyle(element)
  const fontSize = resolveFontSizePx(element, style)
  const lineHeight = resolveLineHeightPx(element, style)
  const lineHeightRatio = resolveLineHeightRatio(
    element,
    style,
    fontSize,
    lineHeight
  )

  return {
    fontFamily: style.fontFamily || undefined,
    fontStyle: style.fontStyle || undefined,
    fontWeight: style.fontWeight || undefined,
    lineHeightRatio,
    whiteSpace: readCssProperty(style.whiteSpace),
  }
}

const resolveLineHeightRatio = (
  element: HTMLElement,
  style: CSSStyleDeclaration,
  fontSize: number,
  lineHeight: number
) => {
  if (Number.isFinite(lineHeight) && fontSize > 0) {
    return lineHeight / fontSize
  }
  return measureLineHeightRatio(element, style, fontSize)
}

const findPositiveInlineStyleNumber = (
  element: HTMLElement,
  readValue: (current: HTMLElement) => string
) => {
  for (
    let current: HTMLElement | null = element;
    current;
    current = current.parentElement
  ) {
    const inlineValue = Number.parseFloat(readValue(current))
    if (inlineValue > 0) {
      return inlineValue
    }
  }

  return null
}

const resolveFontSizePx = (
  element: HTMLElement,
  style: CSSStyleDeclaration
): number => {
  const computedFontSize = Number.parseFloat(style.fontSize)
  if (computedFontSize > 0) {
    return computedFontSize
  }

  const inlineFontSize = findPositiveInlineStyleNumber(
    element,
    (current) => current.style.fontSize
  )
  if (inlineFontSize !== null) return inlineFontSize

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

  const inlineLineHeight = findPositiveInlineStyleNumber(
    element,
    (current) => current.style.lineHeight
  )
  if (inlineLineHeight !== null) return inlineLineHeight

  return Number.NaN
}

const assertPositiveMeasurement = (value: number, message: string) => {
  if (!(value > 0)) {
    throw new Error(message)
  }
  return value
}

const createLineHeightProbe = (
  style: CSSStyleDeclaration,
  document: Document
) => {
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
  return probe
}

const measureLineHeight = (
  element: HTMLElement,
  style: CSSStyleDeclaration
) => {
  const { ownerDocument } = element
  const probe = createLineHeightProbe(style, ownerDocument)
  const container = ownerDocument.createElement('div')
  container.style.position = 'absolute'
  container.style.visibility = 'hidden'
  container.style.inset = '0'
  container.appendChild(probe)
  ownerDocument.body.appendChild(container)
  const measuredLineHeight = probe.getBoundingClientRect().height
  ownerDocument.body.removeChild(container)
  return measuredLineHeight
}

const measureLineHeightRatio = (
  element: HTMLElement,
  style: CSSStyleDeclaration,
  fontSize: number
): number => {
  const positiveFontSize = assertPositiveMeasurement(
    fontSize,
    `Expected a positive computed font-size, received: ${style.fontSize}`
  )
  const measuredLineHeight = measureLineHeight(element, style)
  return (
    assertPositiveMeasurement(
      measuredLineHeight,
      `Failed to measure line-height for font-size: ${style.fontSize}`
    ) / positiveFontSize
  )
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
    ;[minAvailable, minOverflow] = getNextFontSizeBounds(
      minAvailable,
      minOverflow,
      overflows
    )
  }

  return minAvailable
}

const getNextFontSizeBounds = (
  minAvailable: number,
  minOverflow: number,
  overflows: (candidate: number) => boolean
) => {
  const candidate = Math.floor((minAvailable + minOverflow) / 2)
  if (overflows(candidate)) return [minAvailable, candidate] as const
  return [candidate, minOverflow] as const
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

const readCssProperty = (value: string): string | undefined => {
  return value || undefined
}

const resolvePretextWhiteSpace = (
  whiteSpace: string | undefined
): 'normal' | 'pre-wrap' => {
  return whiteSpace === 'normal' || whiteSpace === 'nowrap' ? 'normal' : 'pre-wrap'
}
