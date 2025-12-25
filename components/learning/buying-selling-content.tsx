"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { BuyingSellingQuiz } from "./buying-selling-quiz"

export function BuyingSellingContent() {
  const [showQuiz, setShowQuiz] = useState(false)

  if (showQuiz) {
    return <BuyingSellingQuiz onBack={() => setShowQuiz(false)} />
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
            <h1 className="text-3xl font-bold text-white mb-6">Buying and Selling in Forex</h1>

            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Understanding Buy and Sell Orders</h2>
                <p className="leading-relaxed">
                  In forex trading, you always trade in pairs. When you buy (go long) a currency pair, you're buying the
                  base currency and selling the quote currency. When you sell (go short), you're selling the base
                  currency and buying the quote currency. Forex is unique because you can profit from both rising and
                  falling markets.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Buy (Long) Position</h2>
                <p className="leading-relaxed mb-3">
                  A buy order means you believe the base currency will strengthen against the quote currency:
                </p>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 space-y-2">
                  <p>
                    <strong>Example:</strong> Buy EUR/USD at 1.1000
                  </p>
                  <p>You're buying euros and selling dollars</p>
                  <p>You profit if EUR/USD rises to 1.1100 (base currency strengthens)</p>
                  <p>You lose if EUR/USD falls to 1.0900 (base currency weakens)</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Sell (Short) Position</h2>
                <p className="leading-relaxed mb-3">
                  A sell order means you believe the base currency will weaken against the quote currency:
                </p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 space-y-2">
                  <p>
                    <strong>Example:</strong> Sell GBP/USD at 1.3000
                  </p>
                  <p>You're selling pounds and buying dollars</p>
                  <p>You profit if GBP/USD falls to 1.2900 (base currency weakens)</p>
                  <p>You lose if GBP/USD rises to 1.3100 (base currency strengthens)</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Types of Orders</h2>
                <p className="leading-relaxed mb-3">Different order types give you control over trade execution:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Market Order:</strong> Execute trade immediately at current price
                  </li>
                  <li>
                    <strong>Limit Order:</strong> Buy below or sell above current price (better entry)
                  </li>
                  <li>
                    <strong>Stop Order:</strong> Buy above or sell below current price (breakout entry)
                  </li>
                  <li>
                    <strong>Stop Loss:</strong> Automatically close trade at predetermined loss level
                  </li>
                  <li>
                    <strong>Take Profit:</strong> Automatically close trade at predetermined profit level
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Executing a Trade</h2>
                <p className="leading-relaxed mb-3">Step-by-step process for entering a trade:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Analyze the market and identify your trading opportunity</li>
                  <li>Decide whether to buy or sell based on your analysis</li>
                  <li>Calculate your position size based on risk management</li>
                  <li>Set your stop loss level to limit potential losses</li>
                  <li>Set your take profit level based on your risk-reward ratio</li>
                  <li>Execute the trade using appropriate order type</li>
                  <li>Monitor the trade and manage according to your plan</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Key Takeaways</h2>
                <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li>✓ Buy when you expect the base currency to strengthen</li>
                    <li>✓ Sell when you expect the base currency to weaken</li>
                    <li>✓ Always use stop loss orders to protect your capital</li>
                    <li>✓ Choose the right order type for your trading strategy</li>
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
