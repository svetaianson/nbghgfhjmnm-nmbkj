"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { TradingStylesQuiz } from "./trading-styles-quiz"

export function TradingStylesContent() {
  const [showQuiz, setShowQuiz] = useState(false)

  if (showQuiz) {
    return <TradingStylesQuiz onBack={() => setShowQuiz(false)} />
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
            <h1 className="text-3xl font-bold text-white mb-6">Pick Your Trading Style</h1>

            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Finding Your Trading Style</h2>
                <p className="leading-relaxed">
                  Your trading style should match your personality, available time, and risk tolerance. There's no
                  "best" style - only the style that's best for you. Understanding each approach helps you choose the
                  right path and set realistic expectations for your trading journey.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Scalping</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4 space-y-2">
                  <p className="font-semibold text-white">Quick In and Out</p>
                  <p>
                    <strong>Timeframe:</strong> Seconds to minutes (1-15 minute charts)
                  </p>
                  <p>
                    <strong>Trade Duration:</strong> Seconds to a few minutes
                  </p>
                  <p>
                    <strong>Target:</strong> 5-20 pips per trade
                  </p>
                  <p>
                    <strong>Best For:</strong> Full-time traders who can dedicate hours to screen watching
                  </p>
                  <p>
                    <strong>Pros:</strong> Many opportunities, quick results, small losses
                  </p>
                  <p>
                    <strong>Cons:</strong> High stress, requires fast execution, significant time commitment
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Day Trading</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4 space-y-2">
                  <p className="font-semibold text-white">Same Day Trading</p>
                  <p>
                    <strong>Timeframe:</strong> 5-minute to 1-hour charts
                  </p>
                  <p>
                    <strong>Trade Duration:</strong> Hours, never overnight
                  </p>
                  <p>
                    <strong>Target:</strong> 20-80 pips per trade
                  </p>
                  <p>
                    <strong>Best For:</strong> Traders who can monitor markets during the day
                  </p>
                  <p>
                    <strong>Pros:</strong> No overnight risk, multiple opportunities, good balance
                  </p>
                  <p>
                    <strong>Cons:</strong> Requires daily market attention, moderate stress
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Swing Trading</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4 space-y-2">
                  <p className="font-semibold text-white">Ride the Swings</p>
                  <p>
                    <strong>Timeframe:</strong> 4-hour to daily charts
                  </p>
                  <p>
                    <strong>Trade Duration:</strong> Days to weeks
                  </p>
                  <p>
                    <strong>Target:</strong> 100-500 pips per trade
                  </p>
                  <p>
                    <strong>Best For:</strong> Part-time traders with other commitments
                  </p>
                  <p>
                    <strong>Pros:</strong> Less time-intensive, bigger profits per trade, less stressful
                  </p>
                  <p>
                    <strong>Cons:</strong> Overnight/weekend risk, requires patience, fewer opportunities
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Position Trading</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4 space-y-2">
                  <p className="font-semibold text-white">Long-Term Approach</p>
                  <p>
                    <strong>Timeframe:</strong> Daily to monthly charts
                  </p>
                  <p>
                    <strong>Trade Duration:</strong> Weeks to months
                  </p>
                  <p>
                    <strong>Target:</strong> 500+ pips per trade
                  </p>
                  <p>
                    <strong>Best For:</strong> Patient traders focused on fundamentals
                  </p>
                  <p>
                    <strong>Pros:</strong> Minimal time required, lowest stress, captures major trends
                  </p>
                  <p>
                    <strong>Cons:</strong> Requires large capital, very patient, significant drawdowns
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Choosing Your Style</h2>
                <p className="leading-relaxed mb-3">Ask yourself these questions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Time:</strong> How much time can you dedicate to trading daily?
                  </li>
                  <li>
                    <strong>Personality:</strong> Do you prefer quick action or patient waiting?
                  </li>
                  <li>
                    <strong>Stress:</strong> How do you handle pressure and fast decisions?
                  </li>
                  <li>
                    <strong>Capital:</strong> How much trading capital do you have available?
                  </li>
                  <li>
                    <strong>Goals:</strong> Are you looking for supplemental or primary income?
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Key Takeaways</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li>✓ Choose a style that matches your lifestyle and personality</li>
                    <li>✓ You can try different styles on demo accounts first</li>
                    <li>✓ Most beginners succeed better with swing or position trading</li>
                    <li>✓ Your style may evolve as you gain experience</li>
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
