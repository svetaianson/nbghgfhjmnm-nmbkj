import { Header } from "@/components/sections/header"
import { SmartPortfoliosContent } from "@/components/learning/smart-portfolios-content"
import { SmartPortfoliosQuiz } from "@/components/learning/smart-portfolios-quiz"
import { Separator } from "@/components/ui/separator"

export default function SmartPortfoliosPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <SmartPortfoliosContent />
        <Separator className="my-8 bg-white/10" />
        <SmartPortfoliosQuiz />
      </main>
    </div>
  )
}
