import { Header } from "@/components/sections/header"
import { ReadyForRealTradingContent } from "@/components/learning/ready-for-real-trading-content"
import { ReadyForRealTradingQuiz } from "@/components/learning/ready-for-real-trading-quiz"
import { Separator } from "@/components/ui/separator"

export default function ReadyForRealTradingPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <ReadyForRealTradingContent />
        <Separator className="my-8 bg-white/10" />
        <ReadyForRealTradingQuiz />
      </main>
    </div>
  )
}
