import { Header } from "@/components/sections/header"
import { MovingAverageContent } from "@/components/learning/moving-average-content"

export default function MovingAveragePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MovingAverageContent />
    </div>
  )
}
