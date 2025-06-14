import { TextField } from '@kitsuyui/react-textfield'
import type React from 'react'
import {
  useCallback,
  useState,type 
  KeyboardEvent,
  useRef,
  useEffect,
} from 'react'

type Mode = 'view' | 'edit'

export const EditableLabel = (props: {
  text: string
  onEditComplete?: (text: string) => void
  enterToSubmit?: boolean
}): React.JSX.Element => {
  const { text, onEditComplete } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputting, setInputting] = useState(false)
  const [mode, setMode] = useState<Mode>('view')
  const enterToCommit = props.enterToSubmit ?? true
  const [editingText, setEditingText] = useState(text)

  const handleEditToView = useCallback(() => {
    setMode('view')
    onEditComplete?.(editingText)
  }, [onEditComplete, editingText])

  const handleClick = useCallback(() => {
    setMode('edit')
  }, [])

  useEffect(() => {
    // focus is not working in display: none
    if (mode === 'edit') {
      inputRef?.current?.focus()
    }
  }, [mode])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      // not onKeyUp. onKeyUp is fired after onChangeInputting
      if (enterToCommit && e.key === 'Enter' && !inputting) {
        handleEditToView()
      }
    },
    [enterToCommit, inputting, handleEditToView]
  )

  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: FIXME: TODO: temporary ignore for migration */}
      <span
        onClick={handleClick}
        style={{
          display: mode === 'view' ? 'inline' : 'none',
        }}
      >
        {text}
      </span>
      <TextField
        ref={inputRef}
        style={{
          display: mode === 'edit' ? 'inline' : 'none',
        }}
        value={text}
        onInputChunk={setEditingText}
        onChangeInputting={setInputting}
        onSubmit={handleEditToView}
        onKeyDown={handleKeyDown}
        onBlur={handleEditToView}
      />
    </>
  )
}
