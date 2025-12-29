"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { StrategyExampleQuiz } from "./strategy-example-quiz"

export function StrategyExampleContent() {
  const [showQuiz, setShowQuiz] = useState(false)

  if (showQuiz) {
    return <StrategyExampleQuiz onBack={() => setShowQuiz(false)} />
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
            <h1 className="text-3xl font-bold text-white mb-6">Trading Strategy Example</h1>

            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">The Moving Average Crossover Strategy</h2>
                <p className="leading-relaxed">
                  One of the most popular and reliable trading strategies is the Moving Average Crossover. This strategy
                  uses two moving averages (a fast and a slow one) to generate buy and sell signals. It's simple,
                  effective, and great for beginners while still being used by professional traders.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Strategy Setup</h2>
                <p className="leading-relaxed mb-3">Here's what you need to implement this strategy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Fast MA:</strong> 50-period Exponential Moving Average (EMA)
                  </li>
                  <li>
                    <strong>Slow MA:</strong> 200-period Exponential Moving Average (EMA)
                  </li>
                  <li>
                    <strong>Timeframe:</strong> Daily chart for swing trading, 4H for shorter-term
                  </li>
                  <li>
                    <strong>Confirmation:</strong> RSI to filter overbought/oversold conditions
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Entry Rules</h2>
                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Buy Signal (Long Entry)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>1. Fast MA (50) crosses above Slow MA (200) - "Golden Cross"</li>
                      <li>2. RSI is above 50 but below 70</li>
                      <li>3. Wait for candle close to confirm</li>
                      <li>4. Enter on next candle open</li>
                    </ul>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Sell Signal (Short Entry)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>1. Fast MA (50) crosses below Slow MA (200) - "Death Cross"</li>
                      <li>2. RSI is below 50 but above 30</li>
                      <li>3. Wait for candle close to confirm</li>
                      <li>4. Enter on next candle open</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Risk Management</h2>
                <p className="leading-relaxed mb-3">Proper risk management is crucial for this strategy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Stop Loss:</strong> Place 2 ATR below entry (long) or above entry (short)
                  </li>
                  <li>
                    <strong>Take Profit:</strong> 2:1 or 3:1 risk-reward ratio
                  </li>
                  <li>
                    <strong>Position Size:</strong> Risk only 1-2% of account per trade
                  </li>
                  <li>
                    <strong>Exit Signal:</strong> When MAs cross in opposite direction
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Real-World Example</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4 space-y-2 text-sm">
                  <p>
                    <strong>Pair:</strong> EUR/USD | <strong>Timeframe:</strong> Daily
                  </p>
                  <p>
                    <strong>Date:</strong> 50 EMA crosses above 200 EMA
                  </p>
                  <p>
                    <strong>Entry:</strong> 1.0850 (next candle open)
                  </p>
                  <p>
                    <strong>Stop Loss:</strong> 1.0750 (100 pips below)
                  </p>
                  <p>
                    <strong>Take Profit:</strong> 1.1050 (200 pips above, 2:1 R/R)
                  </p>
                  <p className="text-green-400">
                    <strong>Result:</strong> Take profit hit after 3 weeks for +200 pips
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Key Takeaways</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li>✓ Simple strategy perfect for beginners and effective for pros</li>
                    <li>✓ Wait for clear crossovers and confirmations before entering</li>
                    <li>✓ Always use stop losses and maintain risk-reward ratios</li>
                    <li>✓ Works best in trending markets, less effective in ranging conditions</li>
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
