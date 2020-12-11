import { RefObject, useEffect, useRef } from 'react'

export function useOuterClick(callback: (e: MouseEvent) => void): RefObject<HTMLDivElement> {
  const callbackRef = useRef<(e: MouseEvent) => void>() // initialize mutable callback ref
  const innerRef = useRef<HTMLDivElement>() as RefObject<HTMLDivElement> // returned to client, who sets the "border" element

  // update callback on each render, so second useEffect has most recent callback
  useEffect(() => {
    callbackRef.current = callback
  })
  useEffect(() => {
    function handleClick(e: MouseEvent): void {
      if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target as Node))
        callbackRef.current(e)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, []) // no dependencies -> stable click listener

  return innerRef // convenience for client (doesn't need to init ref himself)
}
