"use client"

import { Button } from "@/components/ui/button"
import { forwardRef, useState, useEffect } from "react"
import { AuthDialog } from "@/components/auth-dialog"
import { useRouter } from "next/navigation"

export const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  
  // Функция для получения email пользователя из разных источников
  const getUserEmail = () => {
    if (typeof window === "undefined") return null
    
    // Проверяем в порядке приоритета
    const email = 
      window.__USER_EMAIL__ || 
      localStorage.getItem('user_email') || 
      localStorage.getItem('__USER_EMAIL__') ||
      localStorage.getItem('user_data')?.replace(/"/g, '');
    
    return email;
  }

  // Проверка аутентификации при монтировании компонента
  useEffect(() => {
    const email = getUserEmail();
    if (email) {
      setUserEmail(email)
      setIsLoggedIn(true)
    }
  }, [])

  const handleAuthSuccess = () => {
    const email = getUserEmail();
    if (email) {
      setUserEmail(email)
      setIsLoggedIn(true)
    }
  }

  const handleAnalyzeClick = () => {
    if (isLoggedIn && userEmail) {
      // Если пользователь залогинен - перенаправляем на offer
      router.push('/analyze')
    }
    // Если не залогинен - откроется AuthDialog (управление этим находится в триггере)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background image container - full width, covers header and hero */}
      <div className="absolute inset-x-0 top-0 h-screen z-0 overflow-hidden">
        <img
          src="/trading-image.png"
          alt="Trading chart background"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient overlay for smooth transition to background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(10, 9, 12, 0.3) 60%, rgba(26, 9, 45, 0.6) 80%, rgba(10, 9, 12, 0.95) 95%, rgba(10, 9, 12, 1) 100%)",
          }}
        />
      </div>

      {/* Hero Content - flex-1 to take remaining space */}
      <main ref={ref} className="relative px-4 flex-1 flex items-center sm:px-6 lg:px-16 opacity-0">
        <div className="mx-auto max-w-7xl relative z-10 w-full">
          <div className="max-w-2xl">
            <div className="rounded-3xl sm:rounded-[2.5rem] border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 sm:p-8 shadow-[0_0_40px_rgba(95,11,232,0.3)] backdrop-blur-xl lg:p-12">
              <h2
                className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl"
                style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              >
                Trade like a{" "}
                <span className="text-[#5F0BE8]" style={{ textShadow: "0 0 30px rgba(95, 11, 232, 0.8)" }}>
                  Pro
                </span>
                <br />
                without the{" "}
                <span className="text-[#5F0BE8]" style={{ textShadow: "0 0 30px rgba(95, 11, 232, 0.8)" }}>
                  guru
                </span>
              </h2>

              <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-gray-300 lg:text-lg">
                AI-powered chart analysis that delivers actionable trade plans. Upload your charts and get instant
                insights for better trading decisions.
              </p>
              
              {isLoggedIn ? (
                <Button
                  size="lg"
                  onClick={handleAnalyzeClick}
                  className="bg-gradient-to-r from-[#8b44c7] via-[#7c3aed] to-[#4f46e5] px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold text-white hover:from-[#7c3aed] hover:via-[#6d28d9] hover:to-[#4338ca] w-full sm:w-auto"
                >
                  Analyze a Chart
                </Button>
              ) : (
                <AuthDialog
                  defaultMode="signup"
                  onAuthSuccess={handleAuthSuccess}
                  trigger={
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#8b44c7] via-[#7c3aed] to-[#4f46e5] px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold text-white hover:from-[#7c3aed] hover:via-[#6d28d9] hover:to-[#4338ca] w-full sm:w-auto"
                    >
                      Analyze a Chart
                    </Button>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
})

HeroSection.displayName = "HeroSection"