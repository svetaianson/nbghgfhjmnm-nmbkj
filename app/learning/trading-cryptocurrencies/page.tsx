import { Header } from "@/components/sections/header"
import { TradingCryptocurrenciesContent } from "@/components/learning/trading-cryptocurrencies-content"
import { TradingCryptocurrenciesQuiz } from "@/components/learning/trading-cryptocurrencies-quiz"
import { Separator } from "@/components/ui/separator"

export default function TradingCryptocurrenciesPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <TradingCryptocurrenciesContent />
        <Separator className="my-8 bg-white/10" />
        <TradingCryptocurrenciesQuiz />
      </main>
    </div>
  )
}
