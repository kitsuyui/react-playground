import type React from 'react'

import type { MetronomeContextValue } from './context'

export const DefaultMetronome: React.FC<MetronomeContextValue> = (
  props
): React.JSX.Element => {
  const { beat, incrementTempo, lastBeatAtMs, reset, running, tempo, toggle } = props
  const beatActive = lastBeatAtMs !== null && Date.now() - lastBeatAtMs < 120
  return (
    <>
      <span
        aria-live="off"
        aria-atomic="true"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'monospace',
          minWidth: '10em',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            background: beatActive ? '#111111' : '#d0d0d0',
            borderRadius: '999px',
            display: 'inline-block',
            height: '0.75rem',
            width: '0.75rem',
          }}
        />
        {tempo} BPM / Beat {beat}
      </span>
      <button
        type="button"
        onClick={() => {
          incrementTempo(-5)
        }}
      >
        -5 BPM
      </button>
      <button
        type="button"
        onClick={() => {
          incrementTempo(5)
        }}
      >
        +5 BPM
      </button>
      <button
        type="button"
        onClick={() => {
          reset()
        }}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => {
          toggle()
        }}
      >
        {running ? 'Stop' : 'Start'}
      </button>
    </>
  )
}
