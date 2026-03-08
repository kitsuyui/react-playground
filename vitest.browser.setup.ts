import { afterEach, beforeEach } from 'vitest'
import { cleanup } from 'vitest-browser-react'

beforeEach(() => {
  const style = document.createElement('style')
  style.dataset.testStyle = 'browser-stability'
  style.textContent = `
    *,
    *::before,
    *::after {
      animation: none !important;
      caret-color: transparent !important;
      transition: none !important;
    }
  `
  document.head.appendChild(style)
})

afterEach(() => {
  document.querySelector('[data-test-style="browser-stability"]')?.remove()
  cleanup()
})
