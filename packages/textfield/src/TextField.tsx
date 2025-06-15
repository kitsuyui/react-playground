import React from 'react'
import { useCombinedRefs } from './utils'

type WrappedProps = React.ComponentPropsWithRef<'input'>

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
  | 'type'

export type WrapperProps = Omit<WrappedProps, excludeProps> & alternateProps

export const TextField = (props: WrapperProps) => {
  const ref = props.ref
  const { onInputChunk, onChangeInputting } = props
  const [internalValue, setInternalValue] = React.useState(props.value ?? '')
  const [isInputting, setIsInputting] = React.useState(false)
  const innerRef = React.useRef<HTMLInputElement>(null)
  const combinedRef = useCombinedRefs(innerRef, ref)

  // Use Object.assign({}, props) instead of just { ...props } because it must create deep copy.
  const {
    onInputChunk: _1,
    onChangeInputting: _2,
    ...propsExcludedWrapperProps
  } = Object.assign({}, props)
  const onBlur = propsExcludedWrapperProps.onBlur

  React.useEffect(() => {
    setInternalValue(props.value ?? '')
  }, [props.value])

  const handleChange = React.useCallback(() => {
    const text = innerRef?.current?.value ?? ''
    setInternalValue(text)
    if (isInputting) return
    onInputChunk?.(text)
  }, [isInputting, onInputChunk])

  const handleCompositionChange = React.useCallback(() => {
    const text = innerRef?.current?.value ?? ''
    setInternalValue(text)
    setIsInputting(true)
    onChangeInputting?.(true)
  }, [onChangeInputting])

  const handleCompositionEnd = React.useCallback(() => {
    const text = innerRef?.current?.value ?? ''
    setInternalValue(text)
    onChangeInputting?.(false)
    onInputChunk?.(text)
    setIsInputting(false)
  }, [onInputChunk, onChangeInputting])

  const handleOnBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const text = innerRef?.current?.value ?? ''
      setInternalValue(text)
      setIsInputting(false)
      onChangeInputting?.(false)
      onInputChunk?.(text)
      onBlur?.(e)
    },
    [onInputChunk, onChangeInputting, onBlur]
  )

  return (
    <input
      {...propsExcludedWrapperProps}
      type="text"
      ref={combinedRef}
      value={internalValue}
      onCompositionStart={handleCompositionChange}
      onCompositionUpdate={handleCompositionChange}
      onCompositionEnd={handleCompositionEnd}
      onBlur={handleOnBlur}
      onChange={handleChange}
    />
  )
}

TextField.displayName = 'TextField'
