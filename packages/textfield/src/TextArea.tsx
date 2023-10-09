import { Ref, useCallback, useRef, useState } from 'react'
import React from 'react'

import { useCombinedRefs } from './utils'

type WrappedProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>
type alternateProps = {
  ref?: Ref<HTMLTextAreaElement>
  onInput?: (value: string) => void
  value?: string
}

type excludeProps =
  | 'onChange'
  | 'onCompositionStart'
  | 'onCompositionUpdate'
  | 'onCompositionEnd'
  | 'onCompositionStartCapture'
  | 'onCompositionUpdateCapture'
  | 'onCompositionEndCapture'
  | 'value'

type WrapperProps = Omit<WrappedProps, excludeProps> & alternateProps

export const TextArea = (props: WrapperProps) => {
  const { onInput } = props
  const [inputtingValue, setInputtingValue] = useState(props.value ?? '')
  const [isInputting, setIsInputting] = useState(false)

  const innerRef = useRef<HTMLTextAreaElement>(null!)
  const ref = useCombinedRefs(innerRef, props.ref)

  const propsExcludedWrapperProps = {
    ...props,
    ref: undefined,
    onInput: undefined,
  }

  const handle = useCallback(() => {
    const text = innerRef.current.value
    setInputtingValue(text)
    if (isInputting) return
    onInput?.(text)
  }, [isInputting, onInput])

  return (
    <textarea
      {...propsExcludedWrapperProps}
      ref={ref}
      onCompositionStart={() => setIsInputting(true)}
      onCompositionEnd={() => {
        setIsInputting(false)
        onInput?.(inputtingValue)
      }}
      onChange={handle}
      value={inputtingValue}
    ></textarea>
  )
}
