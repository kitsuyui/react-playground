import React from 'react'
import { useCombinedRefs } from './utils/refs'

type WrappedProps = React.ComponentPropsWithRef<'textarea'>

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

export type WrapperProps = Omit<WrappedProps, excludeProps> & alternateProps

type ExtraImperativeHandle = {
  clear: () => void
}

type WrappedRef = React.ComponentRef<typeof TextArea> & ExtraImperativeHandle
export type TextAreaRef = WrappedRef

export const TextArea = (props: WrapperProps) => {
  const ref = props.ref
  const { onInputChunk, onChangeInputting } = props
  const [internalValue, setInternalValue] = React.useState(props.value ?? '')
  const [isInputting, setIsInputting] = React.useState(false)
  const innerRef = React.useRef<HTMLTextAreaElement>(null)
  const compbinedRef = useCombinedRefs(innerRef, ref)

  React.useImperativeHandle(ref, () => {
    const current = innerRef?.current as HTMLTextAreaElement
    const extra: ExtraImperativeHandle = {
      clear: () => {
        current.value = ''
        setInternalValue('')
        onInputChunk?.('')
      }
    }
    return {
      ...current,
      ...extra
    }
  })

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
    setIsInputting(false)
    onChangeInputting?.(false)
    onInputChunk?.(text)
  }, [onInputChunk, onChangeInputting])

  const handleOnBlur = React.useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      const text = innerRef?.current?.value ?? ''
      setInternalValue(text)
      setIsInputting(false)
      onChangeInputting?.(false)
      onInputChunk?.(text)
      onBlur?.(e)
    },
    [onInputChunk, onChangeInputting]
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

TextArea.displayName = 'TextArea'
