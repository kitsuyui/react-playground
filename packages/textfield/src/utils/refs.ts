// Combine multiple refs into one
// For when user wants to pass a ref to the component but also wants to use the ref internally.
// original: https://gist.github.com/KurtGokhan/9aafd8e83c9bc6a2946fe2dc7f2c1d19

import { type ForwardedRef, useMemo } from 'react'

type OptionalRef<T> = ForwardedRef<T> | undefined

type Cleanup = (() => void) | undefined

/**
 * This hook combines multiple refs into one.
 * @param refs
 * @returns combined ref
 */
export const useCombinedRefs = <T>(...refs: OptionalRef<T>[]) => {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null
    }
    return (node: T) => {
      for (const ref of refs) {
        if (ref) setRef(ref, node)
      }
    }
  }, [refs])
}

const setRef = <T>(ref: OptionalRef<T>, value: T): Cleanup => {
  if (!ref) return

  if (typeof ref === 'function') {
    ref(value)
    return
  }

  try {
    ref.current = value
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}
