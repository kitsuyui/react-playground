import { Ref, useCallback, useEffect, useRef, useState } from 'react'
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
  | 'onCompositionUpdate'
  | 'onCompositionEnd'
  | 'value'
  | 'type'

type WrapperProps = Omit<WrappedProps, excludeProps> & alternateProps

export const TextField = (props: WrapperProps): JSX.Element => {
  const innerRef = useRef<HTMLInputElement>(null!)
  const { onInputChunk } = props
  const outerValue = props.value ?? ''
  const [internalValue, setInternalValue] = useState(props.value ?? '')
  const [isInputting, setIsInputting] = useState(false)
  const ref = useCombinedRefs(innerRef, props.ref)

  // Use Object.assign({}, props) instead of { ...props } because it must create deep copy.
  const propsExcludedWrapperProps = Object.assign({}, props)
  delete propsExcludedWrapperProps.ref
  delete propsExcludedWrapperProps.onInputChunk

  useEffect(() => {
    if (isInputting) return
    setInternalValue(outerValue)
  }, [outerValue, isInputting])

  const handleChange = useCallback(() => {
    const text = innerRef.current.value
    setInternalValue(text)
    if (isInputting) return
    onInputChunk?.(text)
  }, [isInputting, onInputChunk])

  const handleCompositionChange = useCallback(() => {
    const text = innerRef.current.value
    setInternalValue(text)
    setIsInputting(true)
  }, [innerRef])

  const handleCompositionEnd = useCallback(() => {
    const text = innerRef.current.value
    setInternalValue(text)
    setIsInputting(false)
    onInputChunk?.(text)
  }, [innerRef, onInputChunk])

  return (
    <input
      {...propsExcludedWrapperProps}
      type="text"
      ref={ref}
      value={internalValue}
      onCompositionStart={handleCompositionChange}
      onCompositionUpdate={handleCompositionChange}
      onCompositionEnd={handleCompositionEnd}
      onBlur={(e) => {
        handleCompositionEnd()
        propsExcludedWrapperProps.onBlur?.(e)
      }}
      onChange={handleChange}
    />
  )
}
