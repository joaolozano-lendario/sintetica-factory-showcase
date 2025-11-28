import { useState, useEffect, useRef, RefObject } from 'react'

export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.1 }
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    }, options)

    observer.observe(element)

    return () => observer.disconnect()
  }, [options])

  return [ref, isInView]
}
