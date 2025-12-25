"use client"

import { Card } from "@/components/ui/card"

export function FollowingFundamentalsContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">FUNDAMENTAL ANALYSIS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Fundamental analysis is the study of economic, social, and political forces that affect currency supply and
          demand. It's about understanding the "why" behind price movements.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          While technical analysis focuses on price charts and patterns, fundamental analysis looks at the bigger
          picture - the health of economies and the factors that drive them.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">KEY ECONOMIC INDICATORS</h2>
        <div className="space-y-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Interest Rates</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Central banks set interest rates to control inflation and economic growth. Higher rates typically attract
              foreign investment, strengthening the currency. Lower rates have the opposite effect.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">GDP (Gross Domestic Product)</h3>
            <p className="text-white/80 text-base leading-relaxed">
              GDP measures the total value of goods and services produced in a country. Strong GDP growth indicates a
              healthy economy and often strengthens the currency.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Employment Data</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Employment reports like the U.S. Non-Farm Payrolls show job creation and unemployment rates. Strong
              employment data signals economic strength and can boost currency values.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Inflation Rates</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Measured by CPI (Consumer Price Index) and PPI (Producer Price Index). Moderate inflation is healthy, but
              high inflation can weaken a currency while deflation can signal economic problems.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Trade Balance</h3>
            <p className="text-white/80 text-base leading-relaxed">
              The difference between a country's exports and imports. A positive trade balance (more exports) typically
              strengthens the currency as foreign buyers need to purchase the local currency.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">CENTRAL BANK POLICY</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Central banks like the Federal Reserve (U.S.), European Central Bank (ECB), and Bank of England (BoE) have
          enormous influence over currency values through monetary policy decisions.
        </p>
        <ul className="space-y-3 text-white/80 text-base leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong className="text-white">Hawkish Policy:</strong> Indicates plans to raise interest rates to combat
              inflation. Typically strengthens the currency.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong className="text-white">Dovish Policy:</strong> Signals plans to lower rates or maintain
              accommodative policy to stimulate growth. Often weakens the currency.
            </span>
          </li>
        </ul>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">PUTTING IT ALL TOGETHER</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Successful forex traders use an economic calendar to track when important data releases and central bank
          meetings are scheduled. These events can create significant market volatility and trading opportunities.
        </p>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 mt-4">
          <p className="text-white text-base leading-relaxed font-medium">
            Remember: Markets often move on expectations. The actual data matters less than whether it beats or misses
            market expectations. A "good" economic report can cause a currency to fall if traders were expecting even
            better results.
          </p>
        </div>
      </Card>
    </div>
  )
}
