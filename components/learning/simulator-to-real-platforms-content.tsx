"use client"

import { Card } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

export function SimulatorToRealPlatformsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">From Simulator to Real Trading Platforms</h1>
        <p className="text-white/60">Choosing and transitioning to a live trading platform</p>
      </div>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding Trading Platforms</h2>
        <div className="space-y-4 text-white/80">
          <p>
            A trading platform is your gateway to the forex market. While simulators provide a great learning
            environment, real trading platforms connect you directly to the market and execute your trades with actual
            brokers. Choosing the right platform is crucial for your trading success.
          </p>
          <p>
            The best platforms combine user-friendly interfaces with powerful analysis tools, fast execution, and
            reliable customer support. They should also be regulated by reputable financial authorities to protect your
            capital.
          </p>
        </div>
      </Card>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Popular Trading Platforms</h2>
        <div className="space-y-4">
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">MetaTrader 4 (MT4)</h3>
            <p className="text-white/80 mb-2">
              The most popular forex platform worldwide. Known for its reliability, extensive technical indicators, and
              automated trading capabilities through Expert Advisors (EAs).
            </p>
            <p className="text-sm text-purple-300">Best for: Beginners and experienced traders seeking reliability</p>
          </div>
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">MetaTrader 5 (MT5)</h3>
            <p className="text-white/80 mb-2">
              The successor to MT4 with more timeframes, indicators, and the ability to trade stocks and commodities
              alongside forex. More advanced but with a learning curve.
            </p>
            <p className="text-sm text-purple-300">Best for: Multi-asset traders wanting advanced features</p>
          </div>
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">cTrader</h3>
            <p className="text-white/80 mb-2">
              A modern platform with an intuitive interface, advanced order types, and detailed market depth
              information. Popular among day traders and scalpers.
            </p>
            <p className="text-sm text-purple-300">Best for: Traders who value modern UI and fast execution</p>
          </div>
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">TradingView</h3>
            <p className="text-white/80 mb-2">
              Excellent charting and social features with the ability to connect to brokers for trading. Great analysis
              tools but execution depends on broker integration.
            </p>
            <p className="text-sm text-purple-300">Best for: Traders who prioritize chart analysis and community</p>
          </div>
        </div>
      </Card>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Key Features to Look For</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#0a090c]/40 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-2">Regulation & Security</h4>
            <p className="text-white/80 text-sm">
              Choose brokers regulated by FCA, ASIC, CySEC, or similar authorities. Your funds should be segregated from
              broker's operating capital.
            </p>
          </div>
          <div className="bg-[#0a090c]/40 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-2">Low Spreads & Fees</h4>
            <p className="text-white/80 text-sm">
              Compare spreads on major pairs. Lower spreads mean lower trading costs, which significantly impacts
              profitability over time.
            </p>
          </div>
          <div className="bg-[#0a090c]/40 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-2">Fast Execution</h4>
            <p className="text-white/80 text-sm">
              Look for platforms with execution times under 100ms. Slippage and requotes can eat into your profits,
              especially for scalpers.
            </p>
          </div>
          <div className="bg-[#0a090c]/40 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-2">Educational Resources</h4>
            <p className="text-white/80 text-sm">
              Good platforms offer webinars, tutorials, and market analysis to help you continue learning and improving
              your trading skills.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Making the Transition</h2>
        <div className="space-y-4 text-white/80">
          <p>
            Start by opening a demo account with your chosen platform. Even though you've practiced on a simulator, each
            platform has unique features and interfaces. Spend 1-2 weeks familiarizing yourself with order placement,
            charting tools, and account management features.
          </p>
          <p>
            When you're comfortable, open a live account with a small deposit. Many platforms allow you to start with as
            little as $100-$500. Begin with micro lots (0.01) to get used to trading with real money while minimizing
            risk. Only increase your position sizes after you've proven consistent profitability.
          </p>
        </div>
      </Card>

      <Card className="border-2 border-green-500/30 bg-green-950/20 backdrop-blur-xl p-6">
        <div className="flex gap-3">
          <Lightbulb className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Pro Tip</h3>
            <p className="text-white/80">
              Don't choose a broker based solely on bonuses or promotions. Focus on regulation, execution quality, and
              customer service. A reliable broker is your business partner - choose wisely. Read reviews from multiple
              sources and test their demo account thoroughly before depositing real money.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
