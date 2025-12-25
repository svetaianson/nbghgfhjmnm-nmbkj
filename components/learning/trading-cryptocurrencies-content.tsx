"use client"

import { Card } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export function TradingCryptocurrenciesContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Trading Cryptocurrencies</h1>
        <p className="text-white/60">Understanding crypto trading in the forex context</p>
      </div>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">What Are Cryptocurrency Pairs?</h2>
        <div className="space-y-4 text-white/80">
          <p>
            Cryptocurrency trading shares many similarities with forex trading. Instead of trading traditional currency
            pairs like EUR/USD, you trade crypto pairs like BTC/USD (Bitcoin against US Dollar) or ETH/BTC (Ethereum
            against Bitcoin).
          </p>
          <p>
            Crypto pairs work the same way as forex pairs - when you go long on BTC/USD, you're buying Bitcoin and
            selling US Dollars. When you go short, you're selling Bitcoin and buying US Dollars. The same technical
            analysis tools you use for forex apply to crypto markets.
          </p>
        </div>
      </Card>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Key Differences from Forex</h2>
        <div className="space-y-4">
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">24/7 Market</h3>
            <p className="text-white/80">
              Unlike forex which has trading sessions, crypto markets never close. They trade 24 hours a day, 7 days a
              week, including weekends and holidays. This means opportunities and risks exist around the clock.
            </p>
          </div>
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">Higher Volatility</h3>
            <p className="text-white/80">
              Cryptocurrencies are significantly more volatile than major forex pairs. Bitcoin can move 5-10% in a
              single day, while EUR/USD rarely moves more than 1%. This means larger profit potential but also greater
              risk.
            </p>
          </div>
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">Different Market Drivers</h3>
            <p className="text-white/80">
              Crypto prices are driven by technology updates, regulatory news, adoption rates, and market sentiment
              rather than traditional economic indicators like GDP or interest rates. Stay informed about blockchain
              developments and regulatory changes.
            </p>
          </div>
          <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">Liquidity Variations</h3>
            <p className="text-white/80">
              Major cryptocurrencies like Bitcoin and Ethereum have good liquidity, but smaller altcoins can have wide
              spreads and slippage. Always check liquidity before trading less popular crypto pairs.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Popular Crypto Trading Pairs</h2>
        <div className="space-y-3 text-white/80">
          <div className="bg-[#0a090c]/40 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-1">BTC/USD - Bitcoin vs US Dollar</h4>
            <p>The most traded crypto pair, high liquidity, good for beginners</p>
          </div>
          <div className="bg-[#0a090c]/40 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-1">ETH/USD - Ethereum vs US Dollar</h4>
            <p>Second largest crypto, often follows Bitcoin but with unique movements</p>
          </div>
          <div className="bg-[#0a090c]/40 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-1">BTC/EUR - Bitcoin vs Euro</h4>
            <p>Popular in European markets, provides diversification from USD pairs</p>
          </div>
          <div className="bg-[#0a090c]/40 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-1">ETH/BTC - Ethereum vs Bitcoin</h4>
            <p>Pure crypto pair, useful for trading altcoin strength against Bitcoin</p>
          </div>
        </div>
      </Card>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Risk Management for Crypto Trading</h2>
        <div className="space-y-4 text-white/80">
          <p>
            Due to higher volatility, risk management is even more critical in crypto trading. Use smaller position
            sizes compared to forex - if you typically risk 2% per forex trade, consider risking only 1% per crypto
            trade.
          </p>
          <p>
            Always use stop losses and be prepared for sudden price swings. Crypto markets can gap significantly during
            low-liquidity periods or major news events. Never risk more than you can afford to lose, and consider crypto
            as a smaller portion of your overall trading portfolio.
          </p>
        </div>
      </Card>

      <Card className="border-2 border-amber-500/30 bg-amber-950/20 backdrop-blur-xl p-6">
        <div className="flex gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Important Warning</h3>
            <p className="text-white/80">
              Cryptocurrency trading carries significantly higher risk than traditional forex due to extreme volatility
              and regulatory uncertainty. Only trade crypto with capital you can afford to lose entirely. Start with
              small positions and gradually increase as you gain experience with crypto market dynamics.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
