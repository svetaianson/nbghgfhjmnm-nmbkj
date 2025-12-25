"use client"

import { Card } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

export function SmartPortfoliosContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Smart Portfolios</h1>
        <p className="text-white/60">Building a diversified trading portfolio</p>
      </div>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">What is Portfolio Diversification?</h2>
        <div className="space-y-4 text-white/80">
          <p>
            Portfolio diversification is the practice of spreading your investments across different assets, markets,
            and trading instruments to reduce risk. Instead of putting all your capital into one trade or one currency
            pair, you distribute it strategically.
          </p>
          <p>
            A smart portfolio combines multiple elements: different currency pairs, various timeframes, and even
            different asset classes like forex, commodities, and indices. This approach protects you from major losses
            if one position moves against you.
          </p>
        </div>
      </Card>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Key Principles of Smart Portfolios</h2>
        <div className="space-y-4">
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">1. Asset Correlation</h3>
            <p className="text-white/80">
              Choose assets that don't move in the same direction. If EUR/USD and GBP/USD are highly correlated, having
              both doesn't provide true diversification. Consider pairs from different regions and with different
              economic drivers.
            </p>
          </div>
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">2. Position Sizing</h3>
            <p className="text-white/80">
              Don't allocate equal amounts to every trade. Risk more on high-probability setups and less on experimental
              trades. A common approach is limiting each position to 1-2% of your total capital.
            </p>
          </div>
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">3. Time Diversification</h3>
            <p className="text-white/80">
              Combine different trading timeframes - some swing trades (days to weeks), some day trades (hours), and
              perhaps long-term positions (weeks to months). This balances short-term opportunities with long-term
              stability.
            </p>
          </div>
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">4. Risk Balance</h3>
            <p className="text-white/80">
              Your total portfolio risk should never exceed 5-10% of your capital at any given time. If you have 5
              positions open, each should risk no more than 1-2% so your combined exposure stays manageable.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Sample Portfolio Structure</h2>
        <div className="space-y-4 text-white/80">
          <p>Here's an example of a balanced forex trading portfolio:</p>
          <div className="bg-[#0a090c]/40 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span>Major Pairs (EUR/USD, USD/JPY)</span>
              <span className="text-purple-400 font-semibold">40% allocation</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Minor Pairs (EUR/GBP, AUD/NZD)</span>
              <span className="text-purple-400 font-semibold">30% allocation</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Exotic Pairs (USD/TRY, EUR/ZAR)</span>
              <span className="text-purple-400 font-semibold">15% allocation</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Gold/Commodities</span>
              <span className="text-purple-400 font-semibold">15% allocation</span>
            </div>
          </div>
          <p>
            This structure balances liquidity, volatility, and opportunity. Majors provide stability, minors offer good
            opportunities with moderate risk, exotics add high-reward potential, and commodities hedge against currency
            risks.
          </p>
        </div>
      </Card>

      <Card className="border-2 border-green-500/30 bg-green-950/20 backdrop-blur-xl p-6">
        <div className="flex gap-3">
          <Lightbulb className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Pro Tip</h3>
            <p className="text-white/80">
              Rebalance your portfolio regularly. As some positions grow and others shrink, your allocation percentages
              will shift. Review your portfolio weekly and adjust position sizes to maintain your target allocation.
              This disciplined approach helps lock in profits and control risk.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
