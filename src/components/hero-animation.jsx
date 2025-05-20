import { useEffect, useRef } from "react"
import ElectronicsImage from "../assets/ElectronicsImage.jpg"

export default function HeroAnimation() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll(".floating-element")

    elements.forEach((el) => {
      const x = Math.random() * 20 - 10
      const y = Math.random() * 20 - 10
      const duration = 3 + Math.random() * 3

      el.style.transform = `translate(${x}px, ${y}px)`
      el.style.animation = `float ${duration}s ease-in-out infinite alternate`
    })

    const style = document.createElement("style")
    style.textContent = `
      @keyframes float {
        0% { transform: translate(0, 0); }
        100% { transform: translate(0, -20px); }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative aspect-square max-w-lg mx-auto">
      {/* Main image */}
      <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-violet-300/50">
        <img
          src={ElectronicsImage}
          alt="Digital Marketing"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>

      {/* Floating elements */}
      <div className="floating-element absolute -top-8 -left-8 z-0 h-16 w-16 rounded-full bg-violet-100 opacity-80" />
      <div className="floating-element absolute top-1/4 -right-6 z-0 h-12 w-12 rounded-full bg-violet-200 opacity-80" />
      <div className="floating-element absolute -bottom-10 left-1/3 z-0 h-20 w-20 rounded-full bg-violet-100 opacity-80" />

      {/* Floating icons (just placeholders here) */}
      <div className="floating-element absolute top-10 right-10 z-20 rounded-lg bg-white p-3 shadow-lg">
        <img
          src="/placeholder.svg?height=40&width=40&text=SEO"
          alt="SEO Icon"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      </div>
      <div className="floating-element absolute bottom-16 -left-4 z-20 rounded-lg bg-white p-3 shadow-lg">
        <img
          src="/placeholder.svg?height=40&width=40&text=Web"
          alt="Web Icon"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      </div>
      <div className="floating-element absolute -bottom-4 right-20 z-20 rounded-lg bg-white p-3 shadow-lg">
        <img
          src="/placeholder.svg?height=40&width=40&text=SMM"
          alt="Social Media Icon"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      </div>
    </div>
  )
}
