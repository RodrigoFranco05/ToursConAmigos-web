import { useState, useEffect, useRef } from 'react'

export const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          
          const startTime = Date.now()
          const range = end - start

          const animate = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)
            
            // Easing function (ease out)
            const easeProgress = 1 - Math.pow(1 - progress, 3)
            
            const current = Math.floor(start + range * easeProgress)
            setCount(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          animate()
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [end, duration, start, hasAnimated])

  return [count, elementRef]
}
