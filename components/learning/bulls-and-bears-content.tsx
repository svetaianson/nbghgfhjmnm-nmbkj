"use client"

import { Card } from "@/components/ui/card"

export function BullsAndBearsContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">MARKET SENTIMENT</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          The terms "bulls" and "bears" describe the two fundamental forces driving markets: optimism and pessimism.
          Understanding these concepts is crucial for reading market psychology and predicting price movements.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          These terms originated from the way each animal attacks - a bull thrusts its horns upward, while a bear swipes
          its paws downward. This imagery perfectly captures the direction of market movements.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">BULLISH MARKETS</h2>
        <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-5 mb-4">
          <h3 className="text-lg font-semibold text-green-300 mb-3">What is a Bull Market?</h3>
          <p className="text-white/80 text-base leading-relaxed">
            A bull market is characterized by rising prices, increased investor confidence, and strong economic
            indicators. Bulls believe prices will continue to climb and buy assets expecting further appreciation.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-purple-300">Characteristics of Bullish Markets:</h3>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">Consistent upward price movement</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">High trading volume on up days</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">Positive economic news and strong fundamentals</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">Investor optimism and risk appetite</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              Higher lows - each pullback finds support above the previous low
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">BEARISH MARKETS</h2>
        <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-5 mb-4">
          <h3 className="text-lg font-semibold text-red-300 mb-3">What is a Bear Market?</h3>
          <p className="text-white/80 text-base leading-relaxed">
            A bear market features declining prices, investor pessimism, and weakening economic conditions. Bears
            believe prices will fall and sell assets or take short positions to profit from the decline.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-purple-300">Characteristics of Bearish Markets:</h3>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">Sustained downward price pressure</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">High volume on down days</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">Negative economic outlook and weak data</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">Fear, uncertainty, and risk aversion</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              Lower highs - each rally meets resistance below the previous peak
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">TRADING WITH BULLS AND BEARS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Successful traders learn to identify whether bulls or bears are in control and adjust their strategies
          accordingly. This doesn't mean always following the crowd - sometimes the best opportunities come from
          anticipating when sentiment will shift.
        </p>
        <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4 mb-4">
          <h3 className="text-lg font-semibold text-purple-300 mb-2">Key Trading Principles:</h3>
          <div className="space-y-2">
            <p className="text-white/80 text-base leading-relaxed">
              • In bull markets: "Buy the dips" - look for temporary pullbacks as entry opportunities
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              • In bear markets: "Sell the rallies" - temporary upward moves offer shorting opportunities
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              • Always respect the prevailing trend - "the trend is your friend until it ends"
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 mt-4">
          <p className="text-white text-base leading-relaxed font-medium">
            Remember: Markets don't move in straight lines. Even strong bull markets have bearish corrections, and bear
            markets experience bullish rallies. Learning to identify the overall trend while managing short-term
            volatility is key to successful trading.
          </p>
        </div>
      </Card>
    </div>
  )
}
