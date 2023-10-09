import { Ref, useCallback, useRef, useState } from 'react'
import React from 'react'

import { useCombinedRefs } from './utils'

// HTMLInputElement
type WrappedProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type alternateProps = {
  ref?: Ref<HTMLInputElement>
  onInputChunk?: (value: string) => void
  value: string
}

type excludeProps =
  | 'onChange'
  | 'onCompositionStart'
  | 'onCompositionEnd'
  | 'value'
  | 'type'

type WrapperProps = Omit<WrappedProps, excludeProps> & alternateProps

export const TextField = (props: WrapperProps) => {
  const { onInputChunk } = props
  const [inputtingValue, setInputtingValue] = useState(props.value ?? '')
  const [isInputting, setIsInputting] = useState(false)

  const innerRef = useRef<HTMLInputElement>(null!)
  const ref = useCombinedRefs(innerRef, props.ref)

  const propsExcludedWrapperProps = {
    ...props,
    ref: undefined,
    value: undefined,
    onInputChunk: undefined,
  }

  const handle = useCallback(() => {
    const text = innerRef.current.value
    setInputtingValue(text)
    if (isInputting) return
    onInputChunk?.(text)
  }, [isInputting, onInputChunk])

  return (
    <input
      {...propsExcludedWrapperProps}
      type="text"
      ref={ref}
      value={inputtingValue}
      onCompositionStart={() => setIsInputting(true)}
      onCompositionEnd={() => {
        setIsInputting(false)
        onInputChunk?.(inputtingValue)
      }}
      onChange={handle}
    />
  )
}
