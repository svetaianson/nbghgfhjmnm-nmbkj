"use client"

import { Card } from "@/components/ui/card"

export function CrudeOilContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">OIL: THE WORLD'S MOST IMPORTANT COMMODITY</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Crude oil is often called "black gold" because of its massive impact on the global economy. As the world's
          primary energy source, oil prices affect everything from transportation costs to manufacturing, making them a
          crucial factor in forex trading.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Understanding the relationship between oil prices and currency values can give forex traders a significant
          edge in predicting market movements.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">HOW OIL AFFECTS FOREX MARKETS</h2>
        <div className="space-y-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Oil-Exporting Nations</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Countries that export oil (Canada, Norway, Russia, Saudi Arabia, etc.) typically see their currencies
              strengthen when oil prices rise. Higher oil prices mean more revenue from exports, boosting their
              economies. The Canadian dollar (CAD) and Norwegian krone (NOK) are particularly sensitive to oil price
              movements.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Oil-Importing Nations</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Countries that import most of their oil (Japan, many European nations) can see their currencies weaken
              when oil prices rise. Higher oil costs increase import bills and can hurt economic growth, leading to
              currency depreciation.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Inflation Impact</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Rising oil prices can fuel inflation as transportation and manufacturing costs increase. This may prompt
              central banks to raise interest rates, which typically strengthens the currency. However, if inflation
              becomes too high, it can damage economic growth and weaken the currency.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">USD Correlation</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Since oil is priced in U.S. dollars globally, there's often an inverse relationship between USD strength
              and oil prices. A stronger dollar makes oil more expensive for countries using other currencies, which can
              reduce demand and push prices down.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">KEY CURRENCY PAIRS TO WATCH</h2>
        <div className="space-y-3">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">USD/CAD (U.S. Dollar / Canadian Dollar)</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Known as the "Loonie," this pair has a strong inverse correlation with oil prices. When oil rises, CAD
              typically strengthens (USD/CAD falls).
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">USD/NOK (U.S. Dollar / Norwegian Krone)</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Norway is a major oil exporter. Rising oil prices generally strengthen the NOK against the USD.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">USD/RUB (U.S. Dollar / Russian Ruble)</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Russia's economy heavily depends on oil exports. Oil price movements significantly impact the ruble's
              value.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">TRADING STRATEGIES</h2>
        <ul className="space-y-3 text-white/80 text-base leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong className="text-white">Monitor oil price trends:</strong> Keep an eye on WTI (West Texas
              Intermediate) and Brent Crude benchmarks
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong className="text-white">Trade CAD pairs:</strong> USD/CAD moves inversely to oil prices. Rising oil
              = CAD strength
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong className="text-white">Watch OPEC announcements:</strong> Production decisions by OPEC+
              significantly impact oil prices
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong className="text-white">Consider geopolitical events:</strong> Conflicts in oil-producing regions
              can cause price spikes
            </span>
          </li>
        </ul>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
          <p className="text-white text-base leading-relaxed font-medium">
            Oil prices don't just affect commodity traders - they're a crucial indicator for forex traders. By
            understanding how oil movements impact different currencies, you can identify trading opportunities and
            better manage your positions in commodity-linked currency pairs.
          </p>
        </div>
      </Card>
    </div>
  )
}
