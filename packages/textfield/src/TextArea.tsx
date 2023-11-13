import {
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useRef,
  useState,
} from 'react'
import React from 'react'

import { useCombinedRefs } from './utils'

type WrappedProps = ComponentPropsWithoutRef<'textarea'>

type alternateProps = {
  onInputChunk?: (value: string) => void
  onChangeInputting?: (inputting: boolean) => void
  value?: string
}

type excludeProps =
  | 'onChange'
  | 'onCompositionStart'
  | 'onCompositionUpdate'
  | 'onCompositionEnd'
  | 'value'

type WrapperProps = Omit<WrappedProps, excludeProps> & alternateProps

export const TextArea = forwardRef<HTMLTextAreaElement, WrapperProps>(
  (props, ref) => {
    const { onInputChunk, onChangeInputting } = props
    const [internalValue, setInternalValue] = useState(props.value ?? '')
    const [isInputting, setIsInputting] = useState(false)
    const innerRef = useRef<HTMLTextAreaElement>(null!)
    const compbinedRef = useCombinedRefs(innerRef, ref)

    // Use Object.assign({}, props) instead of { ...props } because it must create deep copy.
    const propsExcludedWrapperProps = Object.assign({}, props)
    delete propsExcludedWrapperProps.onInputChunk
    delete propsExcludedWrapperProps.onChangeInputting

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

    const handleOnBlur = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        const text = innerRef.current.value
        setInternalValue(text)
        setIsInputting(false)
        onChangeInputting?.(false)
        onInputChunk?.(text)
        propsExcludedWrapperProps.onBlur?.(e)
      },
      [innerRef, onInputChunk, onChangeInputting, propsExcludedWrapperProps]
    )

    return (
      <textarea
        {...propsExcludedWrapperProps}
        ref={compbinedRef}
        value={internalValue}
        onCompositionStart={handleCompositionChange}
        onCompositionUpdate={handleCompositionChange}
        onCompositionEnd={handleCompositionEnd}
        onBlur={handleOnBlur}
        onChange={handleChange}
      />
    )
  }
)

TextArea.displayName = 'TextArea'
