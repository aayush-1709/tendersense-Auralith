import { DashboardHeader } from "@/components/dashboard-header"
import { RFPDetails } from "@/components/rfp-details"
import { SpecMatchBreakdown } from "@/components/spec-match-breakdown"
import { PricingBreakdown } from "@/components/pricing-breakdown"
import { ProposalActions } from "@/components/proposal-actions"
import { WinProbability } from "@/components/win-probability"
import { RiskCompliance } from "@/components/risk-compliance"

export default function RFPDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <RFPDetails rfpId={params.id} />

        <div className="grid lg:grid-cols-2 gap-6">
          <SpecMatchBreakdown />
          <PricingBreakdown />
        </div>

        <WinProbability />

        <RiskCompliance />

        <ProposalActions />
      </main>
    </div>
  )
}
