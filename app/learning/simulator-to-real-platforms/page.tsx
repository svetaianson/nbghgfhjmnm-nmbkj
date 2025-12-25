import { Header } from "@/components/sections/header"
import { SimulatorToRealPlatformsContent } from "@/components/learning/simulator-to-real-platforms-content"
import { SimulatorToRealPlatformsQuiz } from "@/components/learning/simulator-to-real-platforms-quiz"
import { Separator } from "@/components/ui/separator"

export default function SimulatorToRealPlatformsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <SimulatorToRealPlatformsContent />
        <Separator className="my-8 bg-white/10" />
        <SimulatorToRealPlatformsQuiz />
      </main>
    </div>
  )
}
