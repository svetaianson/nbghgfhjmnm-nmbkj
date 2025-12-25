"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { TopDownTradingQuiz } from "./top-down-trading-quiz"

export function TopDownTradingContent() {
  const [showQuiz, setShowQuiz] = useState(false)

  if (showQuiz) {
    return <TopDownTradingQuiz onBack={() => setShowQuiz(false)} />
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
            <h1 className="text-3xl font-bold text-white mb-6">Top Down Trading Strategy</h1>

            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">What is Top Down Analysis?</h2>
                <p className="leading-relaxed">
                  Top Down Trading is a multi-timeframe analysis approach where traders start by analyzing longer
                  timeframes (monthly, weekly) to understand the big picture trend, then work down to shorter timeframes
                  (daily, 4-hour, 1-hour) to find precise entry and exit points. This method helps you trade with the
                  major trend while timing entries with precision.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">The Three-Step Process</h2>
                <p className="leading-relaxed mb-3">Follow this systematic approach for top down analysis:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Step 1 - Higher Timeframe (Weekly/Daily):</strong> Identify the overall trend direction and
                    major support/resistance levels
                  </li>
                  <li>
                    <strong>Step 2 - Intermediate Timeframe (4H/1H):</strong> Look for trend confirmation and potential
                    entry setups
                  </li>
                  <li>
                    <strong>Step 3 - Lower Timeframe (15m/5m):</strong> Fine-tune entry timing and set stop loss/take
                    profit levels
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Benefits of Top Down Trading</h2>
                <p className="leading-relaxed mb-3">Why professional traders use this approach:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Trade with the Trend:</strong> Align with higher timeframe direction for better win rates
                  </li>
                  <li>
                    <strong>Better Risk/Reward:</strong> Find high-probability setups with favorable risk-to-reward
                    ratios
                  </li>
                  <li>
                    <strong>Avoid False Signals:</strong> Filter out noise from lower timeframes
                  </li>
                  <li>
                    <strong>Clear Decision Making:</strong> Structured approach reduces emotional trading
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Practical Example</h2>
                <p className="leading-relaxed mb-3">Here's how to apply top down analysis in practice:</p>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4 space-y-3">
                  <p>
                    <strong>Weekly Chart:</strong> EUR/USD is in a strong uptrend, price above 200 MA
                  </p>
                  <p>
                    <strong>Daily Chart:</strong> Price pulls back to support level, RSI not oversold
                  </p>
                  <p>
                    <strong>4-Hour Chart:</strong> Bullish engulfing candle forms at support
                  </p>
                  <p>
                    <strong>1-Hour Chart:</strong> Enter long on breakout above previous high
                  </p>
                  <p className="text-green-400">Result: High probability long trade aligned with major trend</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Key Takeaways</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li>✓ Always start analysis from higher timeframes and work down</li>
                    <li>✓ Only take trades that align with the higher timeframe trend</li>
                    <li>✓ Use lower timeframes for entry timing, not trend determination</li>
                    <li>✓ Be patient - wait for all timeframes to align before entering</li>
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
