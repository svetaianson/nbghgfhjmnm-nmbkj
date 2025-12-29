"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, X, TrendingDown, TrendingUp, Loader2, Ban } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/sections/header"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useProtectedRoute } from "@/hooks/use-protected-route"
import { useLanguage } from "@/lib/i18n/language-context"

const getToken = (): string | null => {
  if (typeof window !== "undefined" && (window as any).__AUTH_TOKEN__) {
    return (window as any).__AUTH_TOKEN__
  }

  if (typeof window !== "undefined") {
    const token =
      localStorage.getItem("auth_token") || localStorage.getItem("token") || localStorage.getItem("access_token")
    return token
  }

  return null
}

const getEmail = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("user_email")
  }
  return null
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://your-api-domain.com/api"

export default function AnalyzePage() {
  useProtectedRoute("Please login to use the analysis feature")

  const { t } = useLanguage()

  const router = useRouter()
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [analysisResult, setAnalysisResult] = useState<string | null>(null)
  const [procent, setProcent] = useState<number | null>(null)
  const [sol, setSol] = useState<"SELL" | "BUY" | "NULL" | null>(null)
  const [showActivate, setShowActivate] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const uploadContainerRef = useRef<HTMLDivElement>(null)

  const handleFileSelect = (file: File) => {
    if (!file) return

    if (!file.type.match("image.*")) {
      toast.error(t.analyze.invalidFile, {
        description: t.analyze.invalidFileDesc,
      })
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error(t.analyze.fileTooLarge, {
        description: t.analyze.fileTooLargeDesc,
      })
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      setUploadedImage(result)
      setAnalysisResult(null)
      setProcent(null)
      setSol(null)
      setError(null)
      setShowActivate(false)
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFileSelect(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.startsWith("image/")) {
        const file = items[i].getAsFile()
        if (file) {
          if (file.size > 5 * 1024 * 1024) {
            toast.error(t.analyze.fileTooLarge, {
              description: t.analyze.fileTooLargeDesc,
            })
            return
          }
          handleFileSelect(file)
        }
      }
    }
  }

  useEffect(() => {
    const handleGlobalPaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items
      if (!items) return

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith("image/")) {
          const file = items[i].getAsFile()
          if (file) {
            if (file.size > 5 * 1024 * 1024) {
              toast.error(t.analyze.fileTooLarge, {
                description: t.analyze.fileTooLargeDesc,
              })
              return
            }
            handleFileSelect(file)
            e.preventDefault()
            break
          }
        }
      }
    }

    window.addEventListener("paste", handleGlobalPaste)
    return () => window.removeEventListener("paste", handleGlobalPaste)
  }, [t])

  const resetUpload = () => {
    setUploadedImage(null)
    setAnalysisResult(null)
    setProcent(null)
    setSol(null)
    setError(null)
    setShowActivate(false)
  }

  const handleClose = () => {
    if (isLoading) {
      toast.error(t.formatrixTurbo.waitForResponse)
      return
    }
    resetUpload()
  }

  const analyzeImage = async (imageData: string) => {
    setIsLoading(true)
    setError(null)
    setShowActivate(false)

    try {
      const token = getToken()
      const userEmail = getEmail()

      if (!token) {
        throw new Error(t.analyze.pleaseLogin)
      }

      if (!userEmail) {
        throw new Error(t.analyze.pleaseLogin)
      }

      const response = await fetch(`${API_BASE}/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          image: imageData,
          email: userEmail,
        }),
      })

      if (response.status === 401) {
        toast.error(t.formatrixTurbo.sessionExpired, {
          description: t.analyze.pleaseLogin,
        })
        if (typeof window !== "undefined") {
          localStorage.removeItem("auth_token")
          localStorage.removeItem("token")
          localStorage.removeItem("access_token")
          localStorage.removeItem("user_email")
          localStorage.removeItem("user_data")
          ;(window as any).__AUTH_TOKEN__ = null
        }
        router.push("/login?reason=session_expired")
        return
      }

      if (!response.ok) {
        let errorData
        try {
          errorData = await response.json()
        } catch {
          throw new Error(`Server error: ${response.status} ${response.statusText}`)
        }

        if (response.status === 429) {
          setShowActivate(true)
          setAnalysisResult(null)
          setProcent(0)
          setSol(null)
          toast.warning(t.formatrixTurbo.analysisLimitExceeded, {
            description: t.formatrixTurbo.upgradAccount,
          })
          return
        }

        throw new Error(errorData.message || `Analysis failed: ${response.status}`)
      }

      const data = await response.json()

      let cleaned = data.answer
      if (typeof cleaned === "string") {
        cleaned = cleaned.replace(/^```json\s*/i, "").replace(/\s*```$/, "")
      }

      let parsed: any
      try {
        parsed = typeof cleaned === "string" ? JSON.parse(cleaned) : cleaned
      } catch {
        parsed = {
          text: typeof data.answer === "string" ? data.answer : JSON.stringify(data.answer),
          probability: 0,
          sol: "BUY",
        }
      }

      setAnalysisResult(parsed.text ?? t.formatrixTurbo.noDescription)
      setProcent(parsed.probability ?? 0)
      if (parsed.sol === "NULL") {
        setSol("NULL")
      } else {
        setSol(parsed.sol === "SELL" ? "SELL" : "BUY")
      }

      toast.success(t.formatrixTurbo.analysisCompleted, {
        description: t.formatrixTurbo.analysisCompletedDesc,
      })
    } catch (err: any) {
      const errorMessage = err.message || t.formatrixTurbo.analysisFailed

      let description = errorMessage

      if (errorMessage.includes("Authentication required") || errorMessage.includes("401")) {
        description = t.analyze.pleaseLogin
        router.push("/login")
      } else if (errorMessage.includes("429")) {
        description = t.formatrixTurbo.upgradAccount
      }

      toast.error(t.formatrixTurbo.analysisFailed, {
        description: description,
        duration: 5000,
      })

      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (uploadedImage) {
      analyzeImage(uploadedImage)
    }
  }, [uploadedImage])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]" />

      <div className="absolute inset-0 opacity-30">
        <Image src="/chart-bg-1.png" alt="" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 opacity-20">
        <Image src="/chart-bg-2.png" alt="" fill className="object-cover mix-blend-screen" />
      </div>

      <Header />

      <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          {!uploadedImage && !analysisResult && !isLoading && !error && !showActivate ? (
            <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem]">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                    {t.formatrixTurbo.title} <span className="text-purple-500">{t.formatrixTurbo.turbo}</span>
                  </h1>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">{t.formatrixTurbo.description}</p>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-600/30 border-2 border-purple-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold text-lg">i</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t.formatrixTurbo.chartAnalysisInfo}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{t.formatrixTurbo.chartAnalysisInfoDesc}</p>
                  </div>
                </div>

                <div
                  ref={uploadContainerRef}
                  className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-colors ${
                    isDragging ? "border-purple-500 bg-purple-500/10" : "border-purple-500/50 bg-[#0a0514]/50"
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onPaste={handlePaste}
                  tabIndex={0}
                >
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center">
                      <Upload className="w-10 h-10 text-purple-500" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">{t.analyze.uploadTitle}</h3>
                      <p className="text-white/70 text-sm">{t.analyze.uploadDesc}</p>
                      <p className="text-white/50 text-xs">{t.formatrixTurbo.pasteTip}</p>
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) handleFileSelect(file)
                      }}
                    />

                    <Button
                      size="lg"
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] px-8 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer transition-colors"
                    >
                      {t.formatrixTurbo.selectImage}
                    </Button>

                    <p className="text-white/40 text-xs">{t.analyze.supportedFormats}</p>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem]">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-start gap-4">
                      <svg width="32" height="32" viewBox="0 0 65 65" fill="none" className="flex-shrink-0 mt-1">
                        <path
                          d="M59.5832 59.5833H5.4165"
                          stroke="url(#paint0_linear_31_588)"
                          strokeWidth="5.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M56.875 59.5833V39.2708C56.875 38.1933 56.447 37.16 55.6851 36.3981C54.9233 35.6363 53.8899 35.2083 52.8125 35.2083H44.6875C43.6101 35.2083 42.5767 35.6363 41.8149 36.3981C41.053 37.16 40.625 38.1933 40.625 39.2708V59.5833"
                          stroke="url(#paint1_linear_31_588)"
                          strokeWidth="5.5"
                        />
                        <path
                          d="M40.625 59.5833V24.375M24.375 59.5833V13.5416C24.375 9.71204 24.375 7.79725 25.5667 6.60829C26.7529 5.41663 28.6677 5.41663 32.5 5.41663C36.3323 5.41663 38.2444 5.41663 39.4333 6.60829C40.625 7.79454 40.625 9.70933 40.625 13.5416"
                          stroke="url(#paint2_linear_31_588)"
                          strokeWidth="5.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24.375 59.5833V25.7291C24.375 24.6517 23.947 23.6184 23.1851 22.8565C22.4233 22.0946 21.3899 21.6666 20.3125 21.6666H12.1875C11.1101 21.6666 10.0767 22.0946 9.31488 22.8565C8.55301 23.6184 8.125 24.6517 8.125 25.7291V43.3333M8.125 59.5833V53.4895"
                          stroke="url(#paint3_linear_31_588)"
                          strokeWidth="5.5"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_31_588"
                            x1="5.4165"
                            y1="60.0833"
                            x2="59.5832"
                            y2="60.0833"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6D1D7D" />
                            <stop offset="1" stopColor="#5F0BE8" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_31_588"
                            x1="40.625"
                            y1="47.3958"
                            x2="56.875"
                            y2="47.3958"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6D1D7D" />
                            <stop offset="1" stopColor="#5F0BE8" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_31_588"
                            x1="24.375"
                            y1="32.5"
                            x2="40.625"
                            y2="32.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6D1D7D" />
                            <stop offset="1" stopColor="#5F0BE8" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_31_588"
                            x1="8.125"
                            y1="40.625"
                            x2="24.375"
                            y2="40.625"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6D1D7D" />
                            <stop offset="1" stopColor="#5F0BE8" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h2 className="text-2xl sm:text-3xl font-bold text-white">{t.analyze.title}</h2>
                          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] bg-clip-text text-transparent">
                            1min
                          </span>
                        </div>
                        <div className="h-1 mt-2 bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleClose}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6D1D7D] to-[#5F0BE8] flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0 cursor-pointer"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
                  <Image
                    src={uploadedImage || "/placeholder.svg"}
                    alt="Uploaded chart"
                    width={800}
                    height={400}
                    className="w-full h-auto object-contain max-h-[400px]"
                  />
                </div>

                {isLoading && (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <Loader2 className="w-12 h-12 text-purple-500 animate-spin" />
                    <p className="text-white/70">{t.analyze.analyzing}</p>
                  </div>
                )}

                {!isLoading && analysisResult && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        {sol === "BUY" && (
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/50">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            <span className="text-green-500 font-bold">{t.analyze.buy}</span>
                          </div>
                        )}
                        {sol === "SELL" && (
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50">
                            <TrendingDown className="w-5 h-5 text-red-500" />
                            <span className="text-red-500 font-bold">{t.analyze.sell}</span>
                          </div>
                        )}
                        {sol === "NULL" && (
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-500/20 border border-gray-500/50">
                            <Ban className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-400 font-bold">{t.analyze.noSignal}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-white/70 text-sm">{t.analyze.confidence}:</span>
                        <span className="text-purple-400 font-bold">{procent}%</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0a0514]/50 border border-purple-500/20">
                      <h4 className="text-white font-semibold mb-2">{t.analyze.analysisResult}</h4>
                      <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap">{analysisResult}</p>
                    </div>
                  </div>
                )}

                {showActivate && (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{t.analyze.activateAccount}</h3>
                      <p className="text-white/70 text-sm">{t.analyze.activateDesc}</p>
                    </div>
                    <Button
                      onClick={() => router.push("/register")}
                      className="bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] px-8 py-3 rounded-full"
                    >
                      {t.analyze.activateAccount}
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
