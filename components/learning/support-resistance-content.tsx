"use client"

import { Card } from "@/components/ui/card"

export function SupportResistanceContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">WHAT ARE SUPPORT AND RESISTANCE?</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Support and resistance are among the most important concepts in technical analysis. They represent price
          levels where the forces of supply and demand meet, creating barriers that price has difficulty breaking
          through.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Think of support and resistance as floors and ceilings for price movement. Understanding these levels helps
          you identify potential entry and exit points, set stop losses, and anticipate market reversals or breakouts.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">SUPPORT LEVELS</h2>
        <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-5 mb-4">
          <h3 className="text-lg font-semibold text-green-300 mb-3">What is Support?</h3>
          <p className="text-white/80 text-base leading-relaxed">
            Support is a price level where buying interest is strong enough to overcome selling pressure, preventing the
            price from falling further. It's like a floor that catches the price when it falls.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-purple-300">Why Support Forms:</h3>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              Buyers remember that level as a good value and return to buy again
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              Previous buyers who missed the opportunity want to enter at similar prices
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              Psychological price levels (round numbers like 1.2000) attract attention
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              Previous resistance levels often become support after being broken
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">RESISTANCE LEVELS</h2>
        <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-5 mb-4">
          <h3 className="text-lg font-semibold text-red-300 mb-3">What is Resistance?</h3>
          <p className="text-white/80 text-base leading-relaxed">
            Resistance is a price level where selling pressure overcomes buying interest, preventing the price from
            rising further. It acts like a ceiling that price struggles to break through.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-purple-300">Why Resistance Forms:</h3>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              Sellers see that level as expensive and return to sell again
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              Previous buyers want to break even or take profits at familiar levels
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              Psychological barriers at round numbers create natural resistance
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              Previous support levels can become resistance after being broken
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">TRADING WITH SUPPORT AND RESISTANCE</h2>
        <div className="space-y-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Bounce Strategy</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Buy when price bounces off support in an uptrend, or sell when price bounces off resistance in a
              downtrend. Place stop losses just beyond the support/resistance level.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Breakout Strategy</h3>
            <p className="text-white/80 text-base leading-relaxed">
              When price breaks through a strong support or resistance level with conviction (high volume), it often
              continues in that direction. Trade the breakout with the new momentum.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Role Reversal</h3>
            <p className="text-white/80 text-base leading-relaxed">
              After a breakout, the broken support often becomes new resistance (or vice versa). This "role reversal"
              provides high-probability trading opportunities when price retests the level.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 mt-6">
          <p className="text-white text-base leading-relaxed font-medium">
            Key Insight: Support and resistance are not exact price points but rather zones or areas. Price may not
            touch the exact same level - it's more about a general area where buying or selling pressure emerges. Allow
            for some flexibility in your analysis.
          </p>
        </div>
      </Card>
    </div>
  )
}
