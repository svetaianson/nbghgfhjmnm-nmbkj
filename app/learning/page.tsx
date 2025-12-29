"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/sections/header"
import { Card } from "@/components/ui/card"
import { ChevronRight, BookOpen, TrendingUp, BarChart3, Wrench, Target, DollarSign, Shield, Rocket } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useProtectedRoute } from "@/hooks/use-protected-route"

const learningTopics = [
  {
    id: 1,
    title: "Getting Started",
    subtitle: "Your Trading Journey",
    icon: Rocket,
    lessons: [
      { title: "Why Trade Forex?", href: "/learning/why-trade-forex" },
      { title: "How Much Can You Make Trading?", href: "/learning/how-much-can-you-make" },
      { title: "When to Trade", href: "/learning/when-to-trade" },
      { title: "Social Trading (Copy Trading)", href: "/learning/social-trading" },
    ],
  },
  {
    id: 2,
    title: "The Money Makers",
    subtitle: "What Moves Markets",
    icon: DollarSign,
    lessons: [
      { title: "Basics", href: "/learning/money-makers-basics" },
      { title: "The Language of Forex", href: "/learning/language-of-forex" },
      { title: "Following the Fundamentals", href: "/learning/following-fundamentals" },
      { title: "Gold Prices and Forex", href: "/learning/gold-prices-and-forex" },
      { title: "Investing in Stocks vs Forex", href: "/learning/stocks-vs-forex" },
      { title: "Crude Oil Prices and Forex", href: "/learning/crude-oil-and-forex" },
    ],
  },
  {
    id: 3,
    title: "Reading the Market",
    subtitle: "Master the Charts",
    icon: BarChart3,
    lessons: [
      { title: "Navigating The Charts", href: "/learning/navigating-the-charts" },
      { title: "Bulls and Bears", href: "/learning/bulls-and-bears" },
      { title: "Understanding Trends", href: "/learning/understanding-trends" },
      { title: "Support And Resistance", href: "/learning/support-and-resistance" },
      { title: "Chart Patterns", href: "/learning/chart-patterns" },
      { title: "Candlestick Patterns", href: "/learning/candlestick-patterns" },
    ],
  },
  {
    id: 4,
    title: "Your Trading Toolkit",
    subtitle: "Essential Indicators",
    icon: Wrench,
    lessons: [
      { title: "Volume Indicator", href: "/learning/volume-indicator" },
      { title: "Moving Average", href: "/learning/moving-average" },
      { title: "Relative Strength Index", href: "/learning/relative-strength-index" },
    ],
  },
  {
    id: 5,
    title: "Winning Strategies",
    subtitle: "Trade Like a Pro",
    icon: Target,
    lessons: [
      { title: "Top Down Trading Strategy", href: "/learning/top-down-trading" },
      { title: "Example", href: "/learning/strategy-example" },
    ],
  },
  {
    id: 6,
    title: "Execute & Profit",
    subtitle: "Making Your Move",
    icon: TrendingUp,
    lessons: [
      { title: "Buying and Selling", href: "/learning/buying-and-selling" },
      { title: "Pick Your Trading Style", href: "/learning/trading-styles" },
    ],
  },
  {
    id: 7,
    title: "Protect Your Capital",
    subtitle: "Stay in the Game",
    icon: Shield,
    lessons: [{ title: "Risk Management", href: "/learning/risk-management" }],
  },
  {
    id: 8,
    title: "Level Up",
    subtitle: "Beyond the Basics",
    icon: BookOpen,
    lessons: [
      { title: "Smart Portfolios", href: "/learning/smart-portfolios" },
      { title: "Trading Cryptocurrencies", href: "/learning/trading-cryptocurrencies" },
      { title: "Are You Ready For Real Trading?", href: "/learning/ready-for-real-trading" },
      { title: "From Simulator to Real Trading Platforms", href: "/learning/simulator-to-real-platforms" },
    ],
  },
]

export default function LearningPage() {
  // Protect this route - redirect to home if not authenticated
  useProtectedRoute('Please login to access learning materials')

  const { t } = useLanguage()

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]" />

      {/* Background chart images */}
      <div className="absolute inset-0 opacity-30">
        <Image src="/chart-bg-1.png" alt="" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 opacity-20">
        <Image src="/chart-bg-2.png" alt="" fill className="object-cover mix-blend-screen" />
      </div>

      <Header />

      {/* Main content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Page header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Learning Center</h1>
            <p className="text-white/60 text-lg">Master forex trading step by step</p>
          </div>

          {/* Topics grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {learningTopics.map((topic) => {
              const Icon = topic.icon
              return (
                <Card
                  key={topic.id}
                  className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/40 backdrop-blur-xl hover:border-[#5F0BE8]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(95,11,232,0.3)] p-6 rounded-2xl"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">{topic.title}</h2>
                      <p className="text-white/60 text-sm">{topic.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {topic.lessons.map((lesson, idx) => (
                      <Link
                        key={idx}
                        href={lesson.href}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                          lesson.href === "#"
                            ? "opacity-50 cursor-not-allowed hover:bg-white/5"
                            : "hover:bg-purple-600/10 group"
                        }`}
                        onClick={(e) => {
                          if (lesson.href === "#") {
                            e.preventDefault()
                          }
                        }}
                      >
                        <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                          {idx + 1}. {lesson.title}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 transition-all ${
                            lesson.href === "#" ? "text-white/30" : "text-purple-500 group-hover:translate-x-1"
                          }`}
                        />
                      </Link>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
