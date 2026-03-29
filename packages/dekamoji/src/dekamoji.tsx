import { layout, prepare } from '@chenglou/pretext'
import { SizedZoomer } from '@kitsuyui/react-zoomer'
import React, { useEffect, useRef } from 'react'
import { useMeasure } from 'react-use'

export type DekamojiImplementation = 'dom' | 'zoomer' | 'pretext'

export type DekamojiTextWrapProps = Pick<
  React.CSSProperties,
  'lineBreak' | 'overflowWrap' | 'whiteSpace' | 'wordBreak'
>

type Props = {
  text: string
  implementation?: DekamojiImplementation
} & DekamojiTextWrapProps

type SizedDekamojiProps = Props & {
  width: number
  height: number
  fontFamily?: string
  fontStyle?: string
  fontWeight?: string
  lineHeightRatio?: number
}

type InheritedTextStyle = {
  fontFamily?: string
  fontStyle?: string
  fontWeight?: string
  lineHeightRatio: number
} & DekamojiTextWrapProps

const DEFAULT_IMPLEMENTATION: DekamojiImplementation = 'pretext'
const DEFAULT_LINE_HEIGHT_RATIO = 1.2

export const SizedDekamoji: React.FC<SizedDekamojiProps> = React.memo(function SizedDekamoji({
  text,
  width,
  height,
  fontFamily,
  fontStyle,
  fontWeight,
  lineHeightRatio = DEFAULT_LINE_HEIGHT_RATIO,
  implementation = DEFAULT_IMPLEMENTATION,
  lineBreak,
  overflowWrap,
  whiteSpace,
  wordBreak,
}): React.JSX.Element {
  const textStyle = {
    fontFamily,
    fontStyle,
    fontWeight,
    lineHeightRatio,
    lineBreak,
    overflowWrap,
    whiteSpace,
    wordBreak,
  }

  switch (implementation) {
    case 'zoomer':
      return (
        <SizedDekamojiZoomer
          width={width}
          height={height}
          text={text}
          textStyle={textStyle}
        />
      )
    case 'pretext':
      return (
        <SizedDekamojiPretext
          width={width}
          height={height}
          text={text}
          textStyle={textStyle}
        />
      )
    default:
      return (
        <SizedDekamojiDom
          width={width}
          height={height}
          text={text}
          textStyle={textStyle}
        />
      )
  }
})

export const AutoDekamoji: React.FC<Props> = React.memo(function AutoDekamoji({
  text,
  implementation = DEFAULT_IMPLEMENTATION,
  lineBreak,
  overflowWrap,
  whiteSpace,
  wordBreak,
}: Props): React.JSX.Element {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const innerRef = useRef<HTMLDivElement>(null)
  const [textStyle, setTextStyle] = React.useState<InheritedTextStyle>({
    lineHeightRatio: DEFAULT_LINE_HEIGHT_RATIO,
  })

  useEffect(() => {
    const element = innerRef.current
    if (!element) {
      return
    }
    setTextStyle(detectInheritedTextStyle(element))
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
          implementation={implementation}
          fontFamily={textStyle.fontFamily}
          fontStyle={textStyle.fontStyle}
          fontWeight={textStyle.fontWeight}
          lineHeightRatio={textStyle.lineHeightRatio}
          lineBreak={lineBreak ?? textStyle.lineBreak}
          overflowWrap={overflowWrap ?? textStyle.overflowWrap}
          whiteSpace={whiteSpace ?? textStyle.whiteSpace}
          wordBreak={wordBreak ?? textStyle.wordBreak}
        />
      </div>
    </div>
  )
})

const SizedDekamojiDom = ({
  width,
  height,
  text,
  textStyle,
}: {
  width: number
  height: number
  text: string
  textStyle: InheritedTextStyle
}) => {
  const [fontSize, setFontSize] = React.useState(0)

  useEffect(() => {
    const size = calcFontSizeWithDom(width, height, text, textStyle)
    setFontSize(size)
  }, [height, text, textStyle, width])

  return (
    <div
      style={createTextStyle(fontSize, textStyle)}
    >
      {text}
    </div>
  )
}

const SizedDekamojiZoomer = ({
  width,
  height,
  text,
  textStyle,
}: {
  width: number
  height: number
  text: string
  textStyle: InheritedTextStyle
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SizedZoomer width={width} height={height}>
        <div style={createTextStyle(1, textStyle, { fillContainer: false })}>
          {text}
        </div>
      </SizedZoomer>
    </div>
  )
}

const SizedDekamojiPretext = ({
  width,
  height,
  text,
  textStyle,
}: {
  width: number
  height: number
  text: string
  textStyle: InheritedTextStyle
}) => {
  const [fontSize, setFontSize] = React.useState(0)

  useEffect(() => {
    const size = calcFontSizeWithPretext(width, height, text, textStyle)
    setFontSize(size)
  }, [height, text, textStyle, width])

  return (
    <div
      style={createTextStyle(fontSize, textStyle)}
    >
      {text}
    </div>
  )
}

const createTextStyle = (
  fontSize: number,
  textStyle: InheritedTextStyle,
  options: {
    fillContainer?: boolean
  } = {}
): React.CSSProperties => {
  const fillContainer = options.fillContainer ?? true

  return {
    position: fillContainer ? 'absolute' : 'static',
    width: fillContainer ? '100%' : 'auto',
    height: fillContainer ? '100%' : 'auto',
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
  const fontSize = Number.parseFloat(style.fontSize)
  const lineHeight = Number.parseFloat(style.lineHeight)
  const lineHeightRatio = Number.isFinite(lineHeight) && fontSize > 0
    ? lineHeight / fontSize
    : DEFAULT_LINE_HEIGHT_RATIO

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

const applyTextStyle = (
  element: HTMLElement,
  fontSize: number,
  textStyle: InheritedTextStyle
) => {
  element.style.fontSize = `${fontSize}px`
  element.style.lineHeight = String(textStyle.lineHeightRatio)
  if (textStyle.fontFamily) {
    element.style.fontFamily = textStyle.fontFamily
  }
  if (textStyle.fontStyle) {
    element.style.fontStyle = textStyle.fontStyle
  }
  if (textStyle.fontWeight) {
    element.style.fontWeight = textStyle.fontWeight
  }
  if (textStyle.lineBreak) {
    element.style.lineBreak = textStyle.lineBreak
  }
  if (textStyle.overflowWrap) {
    element.style.overflowWrap = textStyle.overflowWrap
  }
  if (textStyle.whiteSpace) {
    element.style.whiteSpace = textStyle.whiteSpace
  }
  if (textStyle.wordBreak) {
    element.style.wordBreak = textStyle.wordBreak
  }
}

const calcFontSizeWithDom = (
  width: number,
  height: number,
  text: string,
  textStyle: InheritedTextStyle
): number => {
  if (width <= 0 || height <= 0) {
    return 0
  }

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
  inner.style.textAlign = 'center'
  inner.style.margin = '0 auto'
  inner.style.whiteSpace = 'pre-wrap'
  inner.style.boxSizing = 'border-box'
  inner.style.zIndex = '-1'
  inner.textContent = text
  outer.appendChild(inner)
  document.body.appendChild(outer)

  const fontSize = binarySearchFontSize(Math.max(width, height), (candidate) => {
    applyTextStyle(inner, candidate, textStyle)
    const overflowHeight = inner.scrollHeight - height
    const overflowWidth = inner.scrollWidth - width
    const scrollbarWidth = 2
    return overflowHeight > scrollbarWidth || overflowWidth > scrollbarWidth
  })

  document.body.removeChild(outer)
  return Math.max(0, fontSize - 4)
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

  try {
    return binarySearchFontSize(Math.max(width, height), (candidate) => {
      const lineHeight = Math.max(1, Math.ceil(candidate * textStyle.lineHeightRatio))
      const prepared = prepare(text, createPretextFont(candidate, textStyle), {
        whiteSpace: resolvePretextWhiteSpace(textStyle.whiteSpace),
      })
      const result = layout(prepared, width, lineHeight)
      return result.height > height
    })
  } catch {
    return 0
  }
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
