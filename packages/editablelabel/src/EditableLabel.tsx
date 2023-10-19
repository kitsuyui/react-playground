import { TextField } from '@kitsuyui/react-textfield'
import React, {
  useCallback,
  useState,
  KeyboardEvent,
  useRef,
  useEffect,
} from 'react'

type Mode = 'view' | 'edit'

export const EditableLabel = (props: {
  text: string
  onEditComplete?: (text: string) => void
  enterToSubmit?: boolean
}): JSX.Element => {
  const { text, onEditComplete } = props
  const inputRef = useRef<HTMLInputElement>(null!)
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
      inputRef.current.focus()
    }
  }, [mode])

  return (
    <>
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
        onInputChunk={(text: string) => {
          setEditingText(text)
        }}
        onSubmit={() => {
          handleEditToView()
        }}
        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
          if (enterToCommit && e.key === 'Enter') {
            handleEditToView()
          }
        }}
        onBlur={() => handleEditToView()}
      />
    </>
  )
}
