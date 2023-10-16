import { Ref, useCallback, useRef, useState } from 'react'
import React from 'react'

import { useCombinedRefs } from './utils'

type WrappedProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>
type alternateProps = {
  ref?: Ref<HTMLTextAreaElement>
  onInputChunk?: (value: string) => void
  value?: string
}

type excludeProps =
  | 'onChange'
  | 'onCompositionStart'
  | 'onCompositionEnd'
  | 'value'

type WrapperProps = Omit<WrappedProps, excludeProps> & alternateProps

export const TextArea = (props: WrapperProps): JSX.Element => {
  const { onInputChunk } = props
  const [inputtingValue, setInputtingValue] = useState(props.value ?? '')
  const [isInputting, setIsInputting] = useState(false)

  const innerRef = useRef<HTMLTextAreaElement>(null!)
  const ref = useCombinedRefs(innerRef, props.ref)

  // Use Object.assign({}, props) instead of { ...props } because it must create deep copy.
  const propsExcludedWrapperProps = Object.assign({}, props)
  delete propsExcludedWrapperProps.ref
  delete propsExcludedWrapperProps.onInputChunk

  const handle = useCallback(() => {
    const text = innerRef.current.value
    setInputtingValue(text)
    if (isInputting) return
    onInputChunk?.(text)
  }, [isInputting, onInputChunk])

  return (
    <textarea
      {...propsExcludedWrapperProps}
      ref={ref}
      onCompositionStart={() => setIsInputting(true)}
      onCompositionEnd={() => {
        setIsInputting(false)
        onInputChunk?.(inputtingValue)
      }}
      onBlur={(e) => {
        setIsInputting(false)
        propsExcludedWrapperProps.onBlur?.(e)
      }}
      onChange={handle}
      value={inputtingValue}
    ></textarea>
  )
}
