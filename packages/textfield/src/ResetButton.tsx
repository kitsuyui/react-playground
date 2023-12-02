import {
  useCallback,
  useState,
  useContext,
  forwardRef,
  createContext,
  ComponentPropsWithoutRef,
} from 'react'
import React from 'react'

import { TextField, WrapperProps as TextFieldWrapperProps } from './TextField'

const TextContext = createContext('')
const SetTextContext = createContext((_text: string) => {})
const ResetContext = createContext(() => {})

type WrappedProps = ComponentPropsWithoutRef<'button'>
type WrapperProps = WrappedProps

export const ResetForm = (props: { children: React.ReactNode }) => {
  const [text, setText] = useState('')
  const reset = useCallback(() => {
    setText('')
  }, [])
  return (
    <TextContext.Provider value={text}>
      <SetTextContext.Provider value={setText}>
        <ResetContext.Provider value={reset}>
          {props.children}
        </ResetContext.Provider>
      </SetTextContext.Provider>
    </TextContext.Provider>
  )
}

export const TextFieldWithReset = (props: TextFieldWrapperProps) => {
  const text = useContext(TextContext)
  const setText = useContext(SetTextContext)
  const onInputChunk = props.onInputChunk
  const handleInputChunk = useCallback(
    (text: string) => {
      setText(text)
      onInputChunk?.(text)
    },
    [setText, onInputChunk]
  )
  return <TextField {...props} value={text} onInputChunk={handleInputChunk} />
}

export const ResetButton = forwardRef<HTMLButtonElement, WrapperProps>(
  (props, ref) => {
    const propsExcludedWrapperProps = Object.assign({}, props)
    const reset = useContext(ResetContext)
    const { onClick } = props
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        reset()
        onClick?.(e)
      },
      [reset, onClick]
    )
    return (
      <button {...propsExcludedWrapperProps} ref={ref} onClick={handleClick}>
        {props.children}
      </button>
    )
  }
)

ResetButton.displayName = 'ResetButton'
