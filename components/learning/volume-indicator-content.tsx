"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { VolumeIndicatorQuiz } from "./volume-indicator-quiz"

export function VolumeIndicatorContent() {
  const [showQuiz, setShowQuiz] = useState(false)

  if (showQuiz) {
    return <VolumeIndicatorQuiz onBack={() => setShowQuiz(false)} />
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
            <h1 className="text-3xl font-bold text-white mb-6">Volume Indicator</h1>

            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">What is Volume?</h2>
                <p className="leading-relaxed">
                  Volume is one of the most important indicators in trading. It represents the number of shares,
                  contracts, or lots traded during a specific time period. High volume indicates strong interest in a
                  security, while low volume suggests less interest.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Why Volume Matters</h2>
                <p className="leading-relaxed mb-3">Volume confirms price movements and helps validate trends:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Trend Confirmation:</strong> Rising prices with increasing volume confirm an uptrend
                  </li>
                  <li>
                    <strong>Reversal Signals:</strong> High volume at price extremes may signal reversals
                  </li>
                  <li>
                    <strong>Breakout Validation:</strong> Volume spikes confirm genuine breakouts from patterns
                  </li>
                  <li>
                    <strong>Weak Moves:</strong> Price changes on low volume are often unreliable
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Reading Volume Bars</h2>
                <p className="leading-relaxed mb-3">
                  Volume is typically displayed as vertical bars below the price chart:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Tall bars:</strong> High trading activity and strong conviction
                  </li>
                  <li>
                    <strong>Short bars:</strong> Low activity, often during consolidation
                  </li>
                  <li>
                    <strong>Green bars:</strong> Usually indicate buying pressure (price closed higher)
                  </li>
                  <li>
                    <strong>Red bars:</strong> Usually indicate selling pressure (price closed lower)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Volume Trading Strategies</h2>
                <p className="leading-relaxed mb-3">Professional traders use volume in several ways:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Volume Surge:</strong> Sudden volume spikes often precede significant moves
                  </li>
                  <li>
                    <strong>Climax Volume:</strong> Extreme volume can signal exhaustion and potential reversal
                  </li>
                  <li>
                    <strong>Volume Dry-Up:</strong> Decreasing volume during trends suggests weakening momentum
                  </li>
                  <li>
                    <strong>Accumulation/Distribution:</strong> Steady volume increase suggests institutional buying
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Key Takeaways</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li>✓ Volume confirms the strength of price movements</li>
                    <li>✓ Always check volume when analyzing breakouts or reversals</li>
                    <li>✓ High volume validates trends, low volume signals caution</li>
                    <li>✓ Combine volume with other indicators for best results</li>
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
