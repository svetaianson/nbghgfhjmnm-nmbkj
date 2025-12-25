"use client"

import { Card } from "@/components/ui/card"

export function ChartPatternsContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">THE LANGUAGE OF CHARTS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Chart patterns are formations created by price movements that tend to repeat over time. These patterns reflect
          market psychology and the battle between bulls and bears, often providing clues about future price direction.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Traders have identified and studied these patterns for decades. While no pattern guarantees success,
          understanding them significantly improves your ability to anticipate market moves and manage risk effectively.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">CONTINUATION PATTERNS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          These patterns suggest the current trend will resume after a brief pause or consolidation.
        </p>
        <div className="space-y-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Flag Pattern</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              Forms after a strong price move (the flagpole), followed by a rectangular consolidation that slopes
              against the trend. The pattern completes when price breaks out in the direction of the original move.
            </p>
            <p className="text-white/60 text-sm italic">
              Trading: Enter on breakout, target the length of the flagpole
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Triangle Patterns</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              Price converges between two trendlines, creating progressively smaller price swings. Can be symmetrical
              (both lines converge), ascending (flat top, rising bottom), or descending (flat bottom, declining top).
            </p>
            <p className="text-white/60 text-sm italic">
              Trading: Enter on breakout from consolidation, measure target from widest part
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Pennant Pattern</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              Similar to a flag but forms a small symmetrical triangle after the strong move. Typically forms quickly
              and indicates a brief pause before trend continuation.
            </p>
            <p className="text-white/60 text-sm italic">Trading: Quick pattern - enter on breakout with tight stops</p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">REVERSAL PATTERNS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          These patterns signal that the current trend may be ending and price could reverse direction.
        </p>
        <div className="space-y-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Head and Shoulders</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              Forms at the end of uptrends. Three peaks: left shoulder, higher head, right shoulder at similar height to
              left. The neckline connects the two troughs. Break below neckline signals reversal to downtrend.
            </p>
            <p className="text-white/60 text-sm italic">
              Trading: Sell on neckline break, target equals head-to-neckline distance
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Inverse Head and Shoulders</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              The bullish version that forms at the end of downtrends. Three troughs with the middle one (head) being
              the lowest. Break above neckline signals reversal to uptrend.
            </p>
            <p className="text-white/60 text-sm italic">Trading: Buy on neckline break, same measurement method</p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Double Top/Bottom</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              Price tests a level twice and fails to break through. Double top forms at resistance (bearish reversal),
              double bottom at support (bullish reversal). The pattern completes when price breaks the middle level.
            </p>
            <p className="text-white/60 text-sm italic">
              Trading: Enter on confirmation break, target equals pattern height
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">TRADING PATTERN PRINCIPLES</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Wait for Confirmation:</span> Don't trade the pattern
              until it completes with a breakout
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Volume Matters:</span> Breakouts with high volume are more
              reliable
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Measure Your Targets:</span> Most patterns provide
              measurable price targets
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Use Stop Losses:</span> Place stops beyond the pattern
              boundaries
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-white/80 text-base leading-relaxed">
              <span className="text-purple-300 font-semibold">Context is Key:</span> Patterns are more reliable when
              aligned with the larger trend
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 mt-6">
          <p className="text-white text-base leading-relaxed font-medium">
            Remember: Patterns are not guarantees but probabilities. They work because they represent repeating market
            psychology. Always combine pattern analysis with other technical indicators and proper risk management for
            best results.
          </p>
        </div>
      </Card>
    </div>
  )
}
