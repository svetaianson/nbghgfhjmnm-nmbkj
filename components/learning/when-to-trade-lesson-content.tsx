"use client"

import { Card } from "@/components/ui/card"

export function WhenToTradeLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <p className="text-white/80 text-base leading-relaxed">
          Timing is everything in trading and knowing the most profitable times to enter the market can be a key factor
          in your trading results. In this lesson, we'll guide you through the best times to trade each asset class.
          These insights will help you make informed decisions to maximise profits and minimise risk.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">THE WINDOW OF OPPORTUNITY</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          There is a specific period widely regarded as the prime time for trading all assets. In short, that is when
          there is the most activity in the markets, with traders from around the world participating in the buzz.
        </p>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
          <p className="text-white text-base leading-relaxed font-medium">
            The overlap between the <strong className="text-purple-300">London and New York sessions</strong>, which
            occurs from <strong className="text-purple-300">8 am to 12 pm ET</strong>, is the most active and liquid
            time of the day for trading currencies, stocks, and other assets.
          </p>
        </div>
        <p className="text-white/80 text-base leading-relaxed mt-4">
          This period is characterised by high volumes and significant volatility, which means there are more
          opportunities for you to enter and exit trades.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">WHAT IS A SESSION?</h2>
        <p className="text-white/60 text-base leading-relaxed">
          Now let's get into specific market opening and closing times for each asset class.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">FOREX</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          The flexibility of forex trading hours is a significant advantage, allowing you access the market from
          anywhere in the world on weekdays.
        </p>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          For those unable to trade during the London-New York overlap, off-peak hours can still offer some advantages.
          Trading during the Asian session can be beneficial if you trade the yen or other Asian currencies, and major
          news releases outside of peak trading hours can create big moves despite lower market activity.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">STOCKS/INDICES</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          The first hour after the stock market opens is widely considered the most profitable time for stock trading.
          During this time, there is increased volatility and volume as traders react to news and events that occurred
          overnight or before the market opened.
        </p>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Similarly, the last hour before the market closes is also a time when traders position themselves for the next
          trading day.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Indices, such as the S&P 500 and FTSE 100, are also traded during stock market hours. If you want to trade
          these indices, you can only do so during the stock market hours of their respective exchanges. For example,
          the S&P 500 index is traded on the New York Stock Exchange (NYSE), and the FTSE 100 index is traded on the
          London Stock Exchange (LSE).
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">CRYPTOS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          One of the major attractions of crypto trading is its round-the-clock availability. However, it's worth noting
          that the volume and volatility of the crypto markets can vary depending on the time of day, day of the week,
          and news releases that impact the industry.
        </p>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Typically, the highest volume and volatility in the crypto market can be observed on weekends when traditional
          markets are closed. During this time, traders tend to turn to the cryptocurrency market for trading
          opportunities.
        </p>
        <p className="text-white/80 text-base leading-relaxed mb-2">
          Additionally, some crypto exchanges experience higher trading volumes during specific hours, such as early
          mornings or late evenings.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">COMMODITIES</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Commodities such as gold, oil, and agricultural products have different peak trading hours. For instance, gold
          tends to be more volatile during the overlap of the European and US sessions (8 am to 2 pm ET), while oil
          prices typically fluctuate the most during US market hours when major reports are released.
        </p>
        <p className="text-white/80 text-base leading-relaxed mb-2">Here are some examples of such reports:</p>
        <ul className="space-y-2 text-white/80 text-base leading-relaxed ml-4">
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong>Weekly Petroleum Status Report</strong> by the US Energy Information Administration (EIA):
              Released every Wednesday at 10:30 am ET.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong>Monthly Oil Market Report</strong> from the International Energy Agency (IEA): Usually released on
              the 12th of each month, but the exact release date can vary.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong>Monthly Oil Market Report</strong> from the Organization of the Petroleum Exporting Countries
              (OPEC): Usually released around the 10th to 15th of each month, but the exact release date can vary.
            </span>
          </li>
        </ul>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">WHEN NOT TO TRADE</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          As a beginner, it is advisable to avoid periods of low liquidity, such as Friday afternoons and holidays, and
          major events like Christmas or Primetime TV events. It is also important to remember that major economic
          reports and news releases can cause significant volatility and unpredictability in the markets.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          However, if you feel ready to trade during peak times and big price moves, it is crucial to be mindful of your
          emotional and mental state when trading. Emotions such as anger, frustration, or exhaustion can negatively
          impact your decision-making and lead to poor results. Therefore, it is essential to avoid trading when you are
          feeling emotional.
        </p>
      </Card>
    </div>
  )
}
