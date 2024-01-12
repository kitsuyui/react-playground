import {
  ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import React from 'react'

import { TextArea, WrapperProps as TextAreaWrapperProps } from './TextArea'
import { TextField, WrapperProps as TextFieldWrapperProps } from './TextField'

const TextContext = createContext('')
const SetTextContext = createContext((_text: string) => {})
const ClearContext = createContext(() => {})

type WrappedProps = ComponentPropsWithoutRef<'button'>
type WrapperProps = WrappedProps

export const ClearButtonProvider = (props: { children: React.ReactNode }) => {
  const [text, setText] = useState('')
  const [handleInputChunk] = useState<(text: string) => void>()
  const clear = useCallback(() => {
    setText('')
    handleInputChunk?.('')
  }, [handleInputChunk])
  return (
    <TextContext.Provider value={text}>
      <SetTextContext.Provider value={setText}>
        <ClearContext.Provider value={clear}>
          {props.children}
        </ClearContext.Provider>
      </SetTextContext.Provider>
    </TextContext.Provider>
  )
}

export const TextFieldWithClear = (props: TextFieldWrapperProps) => {
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
  useEffect(() => {
    setText(props.value ?? '')
  }, [props.value, setText])

  return <TextField {...props} value={text} onInputChunk={handleInputChunk} />
}

export const TextAreaWithClear = (props: TextAreaWrapperProps) => {
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
  useEffect(() => {
    setText(props.value ?? '')
  }, [props.value, setText])

  return <TextArea {...props} value={text} onInputChunk={handleInputChunk} />
}

export const ClearButton = forwardRef<HTMLButtonElement, WrapperProps>(
  (props, ref) => {
    const propsExcludedWrapperProps = Object.assign({}, props)
    const clear = useContext(ClearContext)
    const { onClick } = props
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        clear()
        onClick?.(e)
      },
      [clear, onClick]
    )
    const type = props.type ?? 'button'
    return (
      <button
        {...propsExcludedWrapperProps}
        ref={ref}
        onClick={handleClick}
        type={type}
      >
        {props.children}
      </button>
    )
  }
)

ClearButton.displayName = 'ClearButton'
