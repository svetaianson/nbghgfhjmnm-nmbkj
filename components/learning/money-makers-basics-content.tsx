"use client"

import { Card } from "@/components/ui/card"

export function MoneyMakersBasicsContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">WHAT MOVES THE MARKETS?</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Understanding what drives currency prices is essential for successful forex trading. Markets don't move
          randomly - they respond to fundamental forces that shape the global economy.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          At the heart of forex trading is the relationship between different countries' economies. Currency values
          fluctuate based on economic indicators, central bank policies, and market sentiment.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">KEY MARKET MOVERS</h2>
        <div className="space-y-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">1. Economic Data</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Reports like GDP, employment figures, and inflation rates directly impact currency values. Strong economic
              data typically strengthens a currency, while weak data can cause depreciation.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">2. Central Bank Policies</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Interest rate decisions and monetary policy statements from central banks like the Federal Reserve, ECB,
              and Bank of England are among the most powerful market movers.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">3. Geopolitical Events</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Political instability, elections, trade wars, and international relations can create significant
              volatility in currency markets as traders assess risk.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">4. Market Sentiment</h3>
            <p className="text-white/80 text-base leading-relaxed">
              The overall mood of traders - whether risk-on (optimistic) or risk-off (cautious) - influences which
              currencies strengthen or weaken during different market conditions.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">SUPPLY AND DEMAND</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Like any market, forex operates on the principle of supply and demand. When demand for a currency increases
          (more buyers than sellers), its value rises. When supply exceeds demand (more sellers than buyers), its value
          falls.
        </p>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 mt-4">
          <p className="text-white text-base leading-relaxed font-medium">
            Remember: Every forex transaction involves buying one currency and selling another simultaneously. This is
            why currencies are always quoted in pairs, like EUR/USD or GBP/JPY.
          </p>
        </div>
      </Card>
    </div>
  )
}
