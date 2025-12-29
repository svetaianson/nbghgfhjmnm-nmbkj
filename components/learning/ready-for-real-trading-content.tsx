"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function ReadyForRealTradingContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Are You Ready For Real Trading?</h1>
        <p className="text-white/60">Assess your readiness before trading with real money</p>
      </div>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">The Transition from Demo to Live</h2>
        <div className="space-y-4 text-white/80">
          <p>
            Moving from a demo account to real money trading is one of the most critical steps in your trading journey.
            Many traders who perform well on demo accounts struggle when real money is on the line because of the
            psychological pressure.
          </p>
          <p>
            Demo trading removes the emotional element - it's easy to follow your strategy when there's no real risk.
            But when your actual money is at stake, fear and greed can cause you to deviate from your plan. This
            assessment will help you determine if you're truly ready to make the transition.
          </p>
        </div>
      </Card>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Readiness Checklist</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-green-950/20 rounded-lg p-4 border border-green-500/30">
            <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Consistent Demo Performance</h3>
              <p className="text-white/80">
                You've been profitable for at least 3-6 months on your demo account with a positive win rate and
                risk-reward ratio.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-green-950/20 rounded-lg p-4 border border-green-500/30">
            <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Solid Trading Strategy</h3>
              <p className="text-white/80">
                You have a clear, written trading strategy with defined entry and exit rules, and you follow it
                consistently.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-green-950/20 rounded-lg p-4 border border-green-500/30">
            <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Risk Management Mastery</h3>
              <p className="text-white/80">
                You never risk more than 1-2% per trade, use stop losses religiously, and understand position sizing
                calculations.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-green-950/20 rounded-lg p-4 border border-green-500/30">
            <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Emotional Control</h3>
              <p className="text-white/80">
                You can take losses without getting emotional, don't chase trades, and can walk away when your strategy
                conditions aren't met.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-green-950/20 rounded-lg p-4 border border-green-500/30">
            <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Sufficient Capital</h3>
              <p className="text-white/80">
                You have risk capital that you can afford to lose without affecting your financial stability or daily
                life.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-green-950/20 rounded-lg p-4 border border-green-500/30">
            <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Trading Journal Habit</h3>
              <p className="text-white/80">
                You maintain a detailed trading journal, review your trades regularly, and continuously work on
                improving your weaknesses.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Starting Small with Real Money</h2>
        <div className="space-y-4 text-white/80">
          <p>
            When you do transition to live trading, start with a micro account or the smallest position sizes available.
            Your first goal isn't to make money - it's to prove you can execute your strategy with real money without
            emotional interference.
          </p>
          <p>
            Trade the same way you did on demo for at least 50-100 trades before increasing your position sizes. This
            gradual approach helps you build emotional resilience and confidence with real money on the line. Many
            successful traders recommend starting with amounts so small that wins and losses don't trigger any emotional
            response.
          </p>
        </div>
      </Card>

      <Card className="border-2 border-amber-500/30 bg-amber-950/20 backdrop-blur-xl p-6">
        <div className="flex gap-3">
          <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Red Flags - You're Not Ready Yet If:</h3>
            <ul className="space-y-2 text-white/80">
              <li>• You're inconsistent on demo or haven't tested your strategy for at least 3 months</li>
              <li>• You need the money you plan to trade with for bills or essential expenses</li>
              <li>• You get excited or anxious thinking about winning or losing trades</li>
              <li>• You don't have a written trading plan or risk management rules</li>
              <li>• You're hoping to get rich quick or see trading as easy money</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
