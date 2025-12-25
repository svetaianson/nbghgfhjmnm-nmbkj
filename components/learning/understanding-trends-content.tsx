"use client"

import { Card } from "@/components/ui/card"

export function UnderstandingTrendsContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">THE POWER OF TRENDS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          One of the most fundamental principles in trading is: "The trend is your friend." Understanding trends and
          trading in their direction dramatically improves your probability of success.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          A trend represents the general direction in which a market is moving. Rather than fighting against market
          momentum, successful traders identify the prevailing trend and position themselves accordingly.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">TYPES OF TRENDS</h2>
        <div className="space-y-4">
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-green-300 mb-2">1. Uptrend (Bullish Trend)</h3>
            <p className="text-white/80 text-base leading-relaxed mb-3">
              Characterized by higher highs and higher lows. Each peak reaches a new high, and each pullback finds
              support above the previous low. This pattern shows buyers are in control and willing to pay increasingly
              higher prices.
            </p>
            <p className="text-white/60 text-sm italic">Trading Strategy: Look for buying opportunities on pullbacks</p>
          </div>

          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-red-300 mb-2">2. Downtrend (Bearish Trend)</h3>
            <p className="text-white/80 text-base leading-relaxed mb-3">
              Identified by lower highs and lower lows. Each rally meets resistance below the previous peak, and each
              decline breaks through the previous low. Sellers dominate and push prices consistently lower.
            </p>
            <p className="text-white/60 text-sm italic">Trading Strategy: Look for selling opportunities on rallies</p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">3. Sideways Trend (Consolidation/Range)</h3>
            <p className="text-white/80 text-base leading-relaxed mb-3">
              Price moves horizontally between defined support and resistance levels. Neither buyers nor sellers have
              clear control. The market is in a state of equilibrium, often seen before significant moves.
            </p>
            <p className="text-white/60 text-sm italic">
              Trading Strategy: Buy at support, sell at resistance, or wait for breakout
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">TREND TIMEFRAMES</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Trends exist on multiple timeframes simultaneously. A currency pair might be in a long-term uptrend, while
          experiencing a short-term downtrend (pullback). Understanding this concept is crucial:
        </p>
        <div className="space-y-3">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Primary Trend (Long-term)</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Lasts months to years. This is the major direction of the market and should guide your overall trading
              bias.
            </p>
          </div>
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Secondary Trend (Medium-term)</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Lasts weeks to months. Often corrections or consolidations within the primary trend. These are swing
              trading opportunities.
            </p>
          </div>
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Minor Trend (Short-term)</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Lasts days to weeks. Short-term fluctuations within the secondary trend. Day traders focus on these
              movements.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">IDENTIFYING TRENDS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Here are practical ways to identify and confirm trends:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Higher Highs/Higher Lows:</span> Clear sign of an uptrend
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Lower Highs/Lower Lows:</span> Indicates a downtrend
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Trendlines:</span> Connect swing lows in uptrends or swing
              highs in downtrends
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Moving Averages:</span> Price above MA = uptrend, below =
              downtrend
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Volume:</span> Increasing volume in trend direction
              confirms strength
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 mt-6">
          <p className="text-white text-base leading-relaxed font-medium">
            Golden Rule: Never fight the trend. Trading against a strong trend is like swimming against a powerful
            current - exhausting and usually unsuccessful. Wait for the trend to change rather than trying to predict
            tops and bottoms.
          </p>
        </div>
      </Card>
    </div>
  )
}
