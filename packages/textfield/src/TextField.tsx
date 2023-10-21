import {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  ComponentPropsWithoutRef,
} from 'react'
import React from 'react'

import { useCombinedRefs } from './utils'

type WrappedProps = ComponentPropsWithoutRef<'input'>

type alternateProps = {
  onInputChunk?: (value: string) => void
  onChangeInputting?: (inputting: boolean) => void
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

export const TextField = forwardRef<HTMLInputElement, WrapperProps>(
  (props, ref) => {
    const innerRef = useRef<HTMLInputElement>(null!)
    const { onInputChunk, onChangeInputting } = props
    const outerValue = props.value ?? ''
    const [internalValue, setInternalValue] = useState(props.value ?? '')
    const [isInputting, setIsInputting] = useState(false)
    const combinedRef = useCombinedRefs(innerRef, ref)

    // Use Object.assign({}, props) instead of { ...props } because it must create deep copy.
    const propsExcludedWrapperProps = Object.assign({}, props)
    delete propsExcludedWrapperProps.onInputChunk
    delete propsExcludedWrapperProps.onChangeInputting

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
      onChangeInputting?.(true)
    }, [innerRef, onChangeInputting])

    const handleCompositionEnd = useCallback(() => {
      const text = innerRef.current.value
      setInternalValue(text)
      setIsInputting(false)
      onChangeInputting?.(false)
      onInputChunk?.(text)
    }, [innerRef, onInputChunk, onChangeInputting])

    return (
      <input
        {...propsExcludedWrapperProps}
        type="text"
        ref={combinedRef}
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
)

TextField.displayName = 'TextField'
