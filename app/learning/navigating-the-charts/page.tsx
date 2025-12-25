"use client"

import Image from "next/image"
import { Header } from "@/components/sections/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { NavigatingChartsContent } from "@/components/learning/navigating-charts-content"
import { NavigatingChartsQuiz } from "@/components/learning/navigating-charts-quiz"
import Link from "next/link"

export default function NavigatingChartsPage() {
  const { t } = useLanguage()

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
        <div className="mx-auto max-w-3xl">
          <Link href="/learning">
            <Button variant="ghost" className="mb-6 text-white/60 hover:text-white hover:bg-white/5">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Learning
            </Button>
          </Link>

          <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] mb-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-purple-500" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Navigating The Charts</h1>
              <p className="text-white/60 text-sm">Learn to read and understand trading charts</p>
            </div>
          </Card>

          <NavigatingChartsContent />

          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-purple-500" />
              </div>
              <h2 className="text-xl font-bold text-white">Test Your Knowledge</h2>
            </div>
            <NavigatingChartsQuiz />
          </div>
        </div>
      </main>
    </div>
  )
}
