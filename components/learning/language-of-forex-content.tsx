"use client"

import { Card } from "@/components/ui/card"

export function LanguageOfForexContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">FOREX TERMINOLOGY</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          To navigate the forex market successfully, you need to understand its unique language. These terms form the
          foundation of trading communication and analysis.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">ESSENTIAL TERMS</h2>
        <div className="space-y-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Currency Pair</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Two currencies quoted against each other, like EUR/USD. The first currency is the base currency, the
              second is the quote currency.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Pip (Point in Percentage)</h3>
            <p className="text-white/80 text-base leading-relaxed">
              The smallest price move in a currency pair. For most pairs, it's the fourth decimal place (0.0001). For
              JPY pairs, it's the second decimal place (0.01).
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Spread</h3>
            <p className="text-white/80 text-base leading-relaxed">
              The difference between the bid (sell) and ask (buy) price. This is essentially the broker's commission for
              executing your trade.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Leverage</h3>
            <p className="text-white/80 text-base leading-relaxed">
              The ability to control a large position with a relatively small amount of capital. For example, 100:1
              leverage means you can control $100,000 with just $1,000.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Margin</h3>
            <p className="text-white/80 text-base leading-relaxed">
              The amount of money required in your account to open and maintain a leveraged position. It's like a good
              faith deposit.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Long Position</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Buying a currency pair because you believe the base currency will strengthen against the quote currency.
              "Going long" means buying.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Short Position</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Selling a currency pair because you believe the base currency will weaken against the quote currency.
              "Going short" means selling.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Stop Loss</h3>
            <p className="text-white/80 text-base leading-relaxed">
              An order placed to automatically close a position at a specified price to limit potential losses. This is
              your safety net.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Take Profit</h3>
            <p className="text-white/80 text-base leading-relaxed">
              An order to automatically close a position when it reaches a specified profit level. Lock in your gains
              automatically.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">WHY TERMINOLOGY MATTERS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Understanding these terms isn't just about sounding professional - it's about being able to analyze market
          conditions, understand trading strategies, and manage your risk effectively.
        </p>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 mt-4">
          <p className="text-white text-base leading-relaxed font-medium">
            Think of forex terminology as your trading toolkit. The better you understand each tool, the more effective
            you'll be at using them to achieve your trading goals.
          </p>
        </div>
      </Card>
    </div>
  )
}
