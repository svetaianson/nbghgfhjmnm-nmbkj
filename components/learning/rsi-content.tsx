"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { RSIQuiz } from "./rsi-quiz"

export function RSIContent() {
  const [showQuiz, setShowQuiz] = useState(false)

  if (showQuiz) {
    return <RSIQuiz onBack={() => setShowQuiz(false)} />
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
            <h1 className="text-3xl font-bold text-white mb-6">Relative Strength Index (RSI)</h1>

            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">What is RSI?</h2>
                <p className="leading-relaxed">
                  The Relative Strength Index (RSI) is a momentum oscillator that measures the speed and magnitude of
                  recent price changes to evaluate overbought or oversold conditions. It ranges from 0 to 100 and is
                  typically displayed as a line graph below the main price chart.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Understanding RSI Levels</h2>
                <p className="leading-relaxed mb-3">RSI readings help identify potential reversal points:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Above 70:</strong> Asset is considered overbought, possible correction ahead
                  </li>
                  <li>
                    <strong>Below 30:</strong> Asset is considered oversold, possible bounce ahead
                  </li>
                  <li>
                    <strong>50 Level:</strong> Acts as a support/resistance level and trend indicator
                  </li>
                  <li>
                    <strong>Extreme Levels (80+/20-):</strong> Very strong momentum, but reversal risk increases
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">RSI Divergence</h2>
                <p className="leading-relaxed mb-3">
                  One of the most powerful RSI signals is divergence between price and RSI:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Bullish Divergence:</strong> Price makes lower lows, but RSI makes higher lows (reversal up)
                  </li>
                  <li>
                    <strong>Bearish Divergence:</strong> Price makes higher highs, but RSI makes lower highs (reversal
                    down)
                  </li>
                  <li>
                    <strong>Hidden Divergence:</strong> Signals trend continuation rather than reversal
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Trading with RSI</h2>
                <p className="leading-relaxed mb-3">Effective RSI trading strategies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Overbought/Oversold:</strong> Look for entries when RSI exits extreme zones
                  </li>
                  <li>
                    <strong>Centerline Crossover:</strong> RSI crossing above/below 50 confirms trend direction
                  </li>
                  <li>
                    <strong>Failure Swings:</strong> RSI fails to reach overbought/oversold, signals reversal
                  </li>
                  <li>
                    <strong>Combine with Price Action:</strong> Use RSI to confirm support/resistance breaks
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Key Takeaways</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li>✓ RSI measures momentum and identifies overbought/oversold conditions</li>
                    <li>✓ Readings above 70 or below 30 suggest potential reversals</li>
                    <li>✓ Divergence between price and RSI is a powerful signal</li>
                    <li>✓ Works best when combined with trend analysis and support/resistance</li>
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
