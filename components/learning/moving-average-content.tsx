"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { MovingAverageQuiz } from "./moving-average-quiz"

export function MovingAverageContent() {
  const [showQuiz, setShowQuiz] = useState(false)

  if (showQuiz) {
    return <MovingAverageQuiz onBack={() => setShowQuiz(false)} />
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]" />

      <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <Link href="/learning">
            <Button variant="ghost" className="mb-6 text-white/60 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Learning
            </Button>
          </Link>

          <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/40 backdrop-blur-xl p-8 rounded-2xl">
            <h1 className="text-3xl font-bold text-white mb-6">Moving Average</h1>

            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">What is a Moving Average?</h2>
                <p className="leading-relaxed">
                  A moving average (MA) is one of the most popular and easy-to-use technical indicators. It smooths out
                  price data by creating a constantly updated average price over a specific time period. This helps
                  traders identify the direction of the trend and potential support/resistance levels.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Types of Moving Averages</h2>
                <p className="leading-relaxed mb-3">There are two main types of moving averages:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Simple Moving Average (SMA):</strong> Calculates the average of prices over a set period.
                    All prices are weighted equally.
                  </li>
                  <li>
                    <strong>Exponential Moving Average (EMA):</strong> Gives more weight to recent prices, making it
                    more responsive to new information.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Common Time Periods</h2>
                <p className="leading-relaxed mb-3">
                  Different traders use different periods based on their trading style:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>20-day MA:</strong> Short-term trend identification
                  </li>
                  <li>
                    <strong>50-day MA:</strong> Intermediate trend analysis
                  </li>
                  <li>
                    <strong>200-day MA:</strong> Long-term trend, considered very significant
                  </li>
                  <li>
                    <strong>Multiple MAs:</strong> Using 2-3 MAs together helps confirm trends
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">How to Use Moving Averages</h2>
                <p className="leading-relaxed mb-3">Moving averages provide several trading signals:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Trend Direction:</strong> Price above MA = uptrend, price below MA = downtrend
                  </li>
                  <li>
                    <strong>Support/Resistance:</strong> Moving averages often act as dynamic support or resistance
                    levels
                  </li>
                  <li>
                    <strong>Golden Cross:</strong> When a short-term MA crosses above a long-term MA (bullish signal)
                  </li>
                  <li>
                    <strong>Death Cross:</strong> When a short-term MA crosses below a long-term MA (bearish signal)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Key Takeaways</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li>✓ Moving averages smooth price action and identify trends</li>
                    <li>✓ EMAs react faster to price changes than SMAs</li>
                    <li>✓ Use multiple MAs to confirm trend strength and direction</li>
                    <li>✓ MAs work best in trending markets, less effective in ranging markets</li>
                  </ul>
                </div>
              </section>
            </div>

            <Button
              onClick={() => setShowQuiz(true)}
              className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white"
            >
              Take the Quiz
            </Button>
          </Card>
        </div>
      </main>
    </div>
  )
}
