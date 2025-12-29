"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { RiskManagementQuiz } from "./risk-management-quiz"

export function RiskManagementContent() {
  const [showQuiz, setShowQuiz] = useState(false)

  if (showQuiz) {
    return <RiskManagementQuiz onBack={() => setShowQuiz(false)} />
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
            <h1 className="text-3xl font-bold text-white mb-6">Risk Management</h1>

            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Why Risk Management is Critical</h2>
                <p className="leading-relaxed">
                  Risk management is the most important skill in trading - more important than finding winning trades.
                  Even the best strategy will fail without proper risk management. It's what separates professional
                  traders from amateurs. Your goal is not just to make profits, but to protect your capital so you can
                  trade another day.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">The 1-2% Rule</h2>
                <p className="leading-relaxed mb-3">The golden rule of risk management:</p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 space-y-2">
                  <p className="font-semibold text-white">
                    Never risk more than 1-2% of your account on a single trade
                  </p>
                  <p>
                    <strong>Example:</strong> With a $10,000 account:
                  </p>
                  <p>• 1% risk = $100 maximum loss per trade</p>
                  <p>• 2% risk = $200 maximum loss per trade</p>
                  <p className="text-white mt-3">
                    This means you can survive 50-100 consecutive losses before blowing your account - giving you time
                    to learn and adapt.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Position Sizing</h2>
                <p className="leading-relaxed mb-3">Calculate your position size based on your stop loss:</p>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4 space-y-2 text-sm">
                  <p className="font-semibold text-white">Position Size Formula:</p>
                  <p className="font-mono">(Account Size × Risk %) / Stop Loss Distance = Position Size</p>
                  <p className="mt-3">
                    <strong>Example:</strong>
                  </p>
                  <p>Account: $10,000 | Risk: 1% ($100) | Stop Loss: 50 pips</p>
                  <p className="font-mono">$100 / 50 pips = $2 per pip</p>
                  <p className="text-white">Trade 0.2 lots (mini lot where each pip = $1 × 2)</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Risk-Reward Ratio</h2>
                <p className="leading-relaxed mb-3">Always aim for a minimum 1:2 risk-reward ratio:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>1:2 Ratio:</strong> Risk $100 to make $200 (minimum acceptable)
                  </li>
                  <li>
                    <strong>1:3 Ratio:</strong> Risk $100 to make $300 (good)
                  </li>
                  <li>
                    <strong>1:5 Ratio:</strong> Risk $100 to make $500 (excellent)
                  </li>
                </ul>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mt-3">
                  <p className="text-sm">With a 1:2 ratio, you only need a 35% win rate to be profitable!</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Essential Risk Rules</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Always use stop losses:</strong> No exceptions, ever
                  </li>
                  <li>
                    <strong>Never move stop loss further:</strong> Only move it to reduce risk (trailing stop)
                  </li>
                  <li>
                    <strong>Don't risk more after losses:</strong> Avoid revenge trading
                  </li>
                  <li>
                    <strong>Limit daily/weekly loss:</strong> Stop trading if you hit 6% account drawdown in a day
                  </li>
                  <li>
                    <strong>Don't over-leverage:</strong> High leverage amplifies both gains and losses
                  </li>
                  <li>
                    <strong>Diversify pairs:</strong> Don't put all trades in correlated pairs
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Managing Open Trades</h2>
                <p className="leading-relaxed mb-3">Once in a trade, follow these guidelines:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Break-even stop:</strong> Move stop to entry once trade moves in your favor
                  </li>
                  <li>
                    <strong>Partial profits:</strong> Close 50% at 1:1, let rest run to target
                  </li>
                  <li>
                    <strong>Trailing stop:</strong> Follow price with stop to lock in profits
                  </li>
                  <li>
                    <strong>Don't second-guess:</strong> Trust your plan and analysis
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Key Takeaways</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li>✓ Never risk more than 1-2% per trade</li>
                    <li>✓ Always calculate position size based on stop loss distance</li>
                    <li>✓ Aim for minimum 1:2 risk-reward ratio</li>
                    <li>✓ Protect your capital first, profits will follow</li>
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
