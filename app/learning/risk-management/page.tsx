import { Header } from "@/components/sections/header"
import { RiskManagementContent } from "@/components/learning/risk-management-content"

export default function RiskManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <RiskManagementContent />
    </div>
  )
}
