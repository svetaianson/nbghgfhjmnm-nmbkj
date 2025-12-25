"use client"

import { Card } from "@/components/ui/card"

export function CandlestickPatternsContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">THE ART OF CANDLESTICK READING</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Candlestick patterns originated in 18th century Japan and have become one of the most popular methods of
          technical analysis worldwide. Each candlestick tells a story about the battle between buyers and sellers
          during a specific time period.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Unlike regular chart patterns that can take weeks to form, candlestick patterns often complete in just 1-3
          candles, providing quick signals about potential price direction. They're powerful because they capture market
          psychology in a visual, easy-to-read format.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">ANATOMY OF A CANDLESTICK</h2>
        <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-5 mb-4">
          <div className="space-y-3">
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Body:</span> The thick part representing the range between
              open and close. Green/white = close higher than open (bullish), Red/black = close lower than open
              (bearish).
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Wicks/Shadows:</span> The thin lines above and below the
              body showing the high and low prices during the period.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Upper Wick:</span> Shows rejection of higher prices by
              sellers.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Lower Wick:</span> Shows rejection of lower prices by
              buyers.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">BULLISH REVERSAL PATTERNS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          These patterns typically appear at the end of downtrends and signal potential upward reversals.
        </p>
        <div className="space-y-4">
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-green-300 mb-2">Hammer</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Small body at the top with a long lower wick (at least 2x the body size) and little to no upper wick.
              Shows sellers pushed price down, but buyers regained control and pushed it back up. Most powerful at
              support levels.
            </p>
          </div>

          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-green-300 mb-2">Bullish Engulfing</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Two-candle pattern. First candle is bearish (red), second is a larger bullish (green) candle that
              completely engulfs the first candle's body. Signals strong buying pressure overwhelming sellers.
            </p>
          </div>

          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-green-300 mb-2">Morning Star</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Three-candle pattern. Long bearish candle, followed by a small-bodied candle (the star), then a long
              bullish candle. The star shows indecision, and the third candle confirms the reversal.
            </p>
          </div>

          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-green-300 mb-2">Piercing Line</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Two-candle pattern. First is a long bearish candle, second is bullish and opens below the first candle's
              low but closes above the midpoint of the first candle's body. Shows buyers stepping in aggressively.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">BEARISH REVERSAL PATTERNS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          These patterns form at the end of uptrends and suggest potential downward reversals.
        </p>
        <div className="space-y-4">
          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-red-300 mb-2">Shooting Star</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Small body at the bottom with a long upper wick and little to no lower wick. Shows buyers pushed price up,
              but sellers regained control. The opposite of a hammer, most effective at resistance levels.
            </p>
          </div>

          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-red-300 mb-2">Bearish Engulfing</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Two-candle pattern. First candle is bullish (green), second is a larger bearish (red) candle that
              completely engulfs the first candle's body. Signals strong selling pressure overwhelming buyers.
            </p>
          </div>

          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-red-300 mb-2">Evening Star</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Three-candle pattern. Long bullish candle, small-bodied star candle, then long bearish candle. The mirror
              opposite of morning star, indicating the uptrend is losing momentum and may reverse.
            </p>
          </div>

          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-red-300 mb-2">Dark Cloud Cover</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Two-candle pattern. First is long bullish, second is bearish and opens above the first candle's high but
              closes below the midpoint of the first candle's body. Shows sellers taking control.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">INDECISION PATTERNS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          These patterns show uncertainty in the market and potential turning points.
        </p>
        <div className="space-y-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Doji</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Candle where open and close are virtually the same, creating little to no body. Shows perfect balance
              between buyers and sellers. Can signal a reversal depending on location and context.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Spinning Top</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Small body (can be bullish or bearish) with long wicks on both sides. Indicates indecision as both buyers
              and sellers fought for control but neither won decisively.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">TRADING CANDLESTICK PATTERNS</h2>
        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Context is Critical:</span> Patterns are more reliable at
              key support/resistance levels
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Confirm the Pattern:</span> Wait for the next candle to
              confirm the signal
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Combine with Trend:</span> Trade patterns in the direction
              of the larger trend
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Set Stops:</span> Place stop losses beyond the pattern's
              high or low
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 mt-4">
          <p className="text-white text-base leading-relaxed font-medium">
            Master Tip: Candlestick patterns are most powerful when they appear at the confluence of multiple technical
            factors - support/resistance levels, trendlines, and moving averages. A hammer at a major support level
            during an uptrend is far more significant than a random hammer in the middle of a chart.
          </p>
        </div>
      </Card>
    </div>
  )
}
