"use client"

import { PowerfullSection } from "@/components/powerfull-section"
import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { useEffect, useRef } from "react"

export default function Home() {
  const howItWorksRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const powerfullRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const sections = [heroRef.current, howItWorksRef.current, powerfullRef.current, testimonialsRef.current].filter(
      Boolean,
    ) as HTMLElement[]
    const howItWorksCards = Array.from(
      howItWorksRef.current?.querySelectorAll<HTMLElement>(".how-it-works-card") ?? [],
    )
    const testimonialCards = Array.from(
      testimonialsRef.current?.querySelectorAll<HTMLElement>(".testimonial-card") ?? [],
    )
    const animatedElements = [...sections, ...howItWorksCards, ...testimonialCards]

    if (!isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in-up")
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 },
      )

      animatedElements.forEach((element) => observer.observe(element))

      return () => observer.disconnect()
    } else {
      animatedElements.forEach((element) => {
        element.style.opacity = "1"
      })
    }
  }, [])

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--back, linear-gradient(315deg, #0A090C 0.38%, #1A092D 99.62%))" }}
    >
      <div className="relative z-10">
        <Header />
        <HeroSection ref={heroRef} />
        <HowItWorksSection ref={howItWorksRef} />
        <div ref={powerfullRef} className="opacity-0">
          <PowerfullSection />
        </div>
        <TestimonialsSection ref={testimonialsRef} />
      </div>
    </div>
  )
}
