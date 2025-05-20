"use client"

import { useEffect, useState, useRef } from "react"



export default function CountUp({ end, duration = 2000, className = "", prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const observerRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!countRef.current) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
        }
      },
      { threshold: 0.1 },
    )

    observerRef.current.observe(countRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  })

  const animateCount = () => {
    const startTime = Date.now()
    const startValue = 0

    const step = () => {
      const currentTime = Date.now()
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smoother animation
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      const currentCount = Math.floor(startValue + easedProgress * (end - startValue))
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  return (
    <span ref={countRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

