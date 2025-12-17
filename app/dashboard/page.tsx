import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { ActiveRFPs } from "@/components/active-rfps"
import { AgentWorkflow } from "@/components/agent-workflow"
import { RecentActivity } from "@/components/recent-activity"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">RFP Management Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor all tender activities with live AI agent collaboration, win probability analysis, and automated
            compliance checking
          </p>
        </div>

        <StatsCards />

        <AgentWorkflow />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ActiveRFPs />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  )
}
