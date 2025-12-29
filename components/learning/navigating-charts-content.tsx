"use client"

import { Card } from "@/components/ui/card"

export function NavigatingChartsContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">UNDERSTANDING TRADING CHARTS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Charts are the primary tool for technical analysis in forex trading. They display price movements over time,
          helping traders identify patterns, trends, and potential trading opportunities.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Learning to read charts is like learning a new language - once you understand the basics, you'll be able to
          interpret market sentiment and make informed trading decisions.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">TYPES OF CHARTS</h2>
        <div className="space-y-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">1. Line Charts</h3>
            <p className="text-white/80 text-base leading-relaxed">
              The simplest chart type, connecting closing prices with a continuous line. Best for getting a quick
              overview of price direction but lacks detail about price movements within each period.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">2. Bar Charts</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Each bar shows four key prices: open, high, low, and close (OHLC). The vertical line represents the
              trading range, with horizontal ticks showing opening (left) and closing (right) prices.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">3. Candlestick Charts</h3>
            <p className="text-white/80 text-base leading-relaxed">
              The most popular chart type among traders. Each candlestick displays OHLC data with a visual "body"
              (difference between open and close) and "wicks" (high and low). Green/white candles show price increases,
              red/black show decreases.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">TIMEFRAMES</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Charts can display different timeframes, from 1-minute intervals to monthly views. Each timeframe offers
          different perspectives:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Short-term (1m-15m):</span> For day traders and scalpers
              looking for quick trades
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Medium-term (1h-4h):</span> For swing traders holding
              positions for days or weeks
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Long-term (Daily-Monthly):</span> For position traders and
              investors with a broader perspective
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">READING THE AXES</h2>
        <div className="space-y-3">
          <p className="text-white/80 text-base leading-relaxed">
            <span className="text-purple-300 font-semibold">Vertical (Y) Axis:</span> Shows the price level. The scale
            adjusts automatically to fit the price range displayed.
          </p>
          <p className="text-white/80 text-base leading-relaxed">
            <span className="text-purple-300 font-semibold">Horizontal (X) Axis:</span> Represents time, moving from
            left (past) to right (present/future).
          </p>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 mt-4">
          <p className="text-white text-base leading-relaxed font-medium">
            Pro Tip: Most trading platforms allow you to zoom in and out on charts and switch between timeframes
            instantly. Practice navigating different timeframes to understand how the same market can look different
            depending on your perspective.
          </p>
        </div>
      </Card>
    </div>
  )
}
