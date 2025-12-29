"use client"

import { Card } from "@/components/ui/card"

export function GoldPricesContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">GOLD AND FOREX: THE CONNECTION</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Gold has historically been viewed as a safe-haven asset and a store of value. Its relationship with currency
          markets, particularly the U.S. dollar, is crucial for forex traders to understand.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Gold is typically priced in U.S. dollars, creating an inverse relationship: when the dollar strengthens, gold
          often becomes cheaper (and vice versa). This dynamic creates interesting trading opportunities.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">WHY GOLD MATTERS TO FOREX TRADERS</h2>
        <div className="space-y-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Safe-Haven Asset</h3>
            <p className="text-white/80 text-base leading-relaxed">
              During times of economic uncertainty, geopolitical tension, or market volatility, investors flock to gold
              as a safe place to store wealth. This often coincides with weakness in riskier currencies.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Inflation Hedge</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Gold is seen as a hedge against inflation. When inflation rises, currencies lose purchasing power, but
              gold often maintains or increases its value, making it attractive to investors.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">USD Inverse Relationship</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Since gold is priced in U.S. dollars, a stronger dollar makes gold more expensive for holders of other
              currencies, typically pushing gold prices down. A weaker dollar has the opposite effect.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Commodity Currencies</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Countries that export gold (like Australia, Canada, and South Africa) often see their currencies move in
              tandem with gold prices. Higher gold prices can strengthen these "commodity currencies."
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">TRADING STRATEGIES</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Understanding gold's movements can inform your forex trading decisions:
        </p>
        <ul className="space-y-3 text-white/80 text-base leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong className="text-white">Risk-Off Trades:</strong> When gold prices surge due to uncertainty,
              consider shorting riskier currencies and going long on safe-havens like JPY or CHF.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong className="text-white">Commodity Currency Correlation:</strong> Rising gold prices can signal
              opportunities to go long on AUD, CAD, or other commodity-linked currencies.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong className="text-white">USD Inverse Plays:</strong> If you expect gold to rise, consider shorting
              USD against other major currencies.
            </span>
          </li>
        </ul>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">KEY TAKEAWAY</h2>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
          <p className="text-white text-base leading-relaxed font-medium">
            Gold isn't just a commodity - it's a barometer for global economic sentiment and risk appetite. By
            monitoring gold prices and understanding their relationship with currencies, you gain valuable insight into
            market dynamics and potential trading opportunities.
          </p>
        </div>
      </Card>
    </div>
  )
}
