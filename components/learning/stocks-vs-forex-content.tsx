"use client"

import { Card } from "@/components/ui/card"

export function StocksVsForexContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">STOCKS VS FOREX: WHAT'S THE DIFFERENCE?</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Both stock and forex markets offer opportunities for profit, but they operate quite differently. Understanding
          these differences will help you choose the market that best fits your trading style and goals.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">KEY DIFFERENCES</h2>
        <div className="space-y-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Market Size & Liquidity</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              <strong className="text-white">Forex:</strong> The largest financial market in the world with over $7
              trillion in daily trading volume. Extremely liquid with tight spreads.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              <strong className="text-white">Stocks:</strong> Global stock markets combined trade around $200 billion
              daily. Individual stocks can have varying liquidity levels.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Trading Hours</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              <strong className="text-white">Forex:</strong> Open 24 hours a day, 5 days a week. Trade anytime from
              Sunday evening to Friday evening.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              <strong className="text-white">Stocks:</strong> Limited to stock exchange hours (typically 9:30 AM - 4:00
              PM local time). Extended hours trading available but with less liquidity.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Number of Options</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              <strong className="text-white">Forex:</strong> Focus on major currency pairs (EUR/USD, GBP/USD, USD/JPY,
              etc.). Around 30-40 pairs commonly traded.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              <strong className="text-white">Stocks:</strong> Thousands of stocks to choose from across multiple
              exchanges worldwide. Can be overwhelming for beginners.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Leverage</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              <strong className="text-white">Forex:</strong> Typically offers higher leverage (50:1 to 500:1 depending
              on regulations). Control larger positions with less capital.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              <strong className="text-white">Stocks:</strong> Generally lower leverage (2:1 to 4:1 for most retail
              traders). More capital required for larger positions.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Profit Direction</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              <strong className="text-white">Forex:</strong> Equally easy to profit from rising or falling markets.
              Every trade involves buying one currency and selling another.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              <strong className="text-white">Stocks:</strong> Traditionally easier to profit from rising prices (going
              long). Short selling stocks can be more complex and restricted.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Minimum Capital</h3>
            <p className="text-white/80 text-base leading-relaxed mb-2">
              <strong className="text-white">Forex:</strong> Can start with as little as $100-$500 due to high leverage.
              Micro and mini accounts available.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              <strong className="text-white">Stocks:</strong> Pattern day trading rules in the U.S. require $25,000
              minimum. Can start with less for swing trading or investing.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">WHICH IS BETTER FOR YOU?</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Neither market is inherently "better" - it depends on your circumstances and preferences:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Choose Forex if you want:</h3>
            <ul className="space-y-2 text-white/80 text-base leading-relaxed ml-4">
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>24-hour trading flexibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>Lower starting capital requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>Higher leverage opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>Focus on fewer, more liquid instruments</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Choose Stocks if you want:</h3>
            <ul className="space-y-2 text-white/80 text-base leading-relaxed ml-4">
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>To invest in specific companies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>Long-term wealth building through dividends</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>More choices and variety</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>Traditional business investing approach</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
          <p className="text-white text-base leading-relaxed font-medium">
            Remember: Many successful traders eventually participate in both markets. You don't have to choose just one
            - you can diversify your trading across multiple asset classes as you gain experience!
          </p>
        </div>
      </Card>
    </div>
  )
}
