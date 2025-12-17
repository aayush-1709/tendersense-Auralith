import { Card } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Clock, FileCheck } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      type: "success",
      icon: CheckCircle2,
      title: "Proposal Generated",
      description: "RFP-2025-004 ready for review",
      time: "5 min ago",
      color: "text-green-600",
    },
    {
      type: "warning",
      icon: AlertCircle,
      title: "Risk Flag Raised",
      description: "RFP-2025-003 has incomplete specs",
      time: "12 min ago",
      color: "text-yellow-600",
    },
    {
      type: "info",
      icon: FileCheck,
      title: "Spec Match Complete",
      description: "RFP-2025-001 matched 5 SKUs",
      time: "1 hour ago",
      color: "text-blue-600",
    },
    {
      type: "default",
      icon: Clock,
      title: "New RFP Discovered",
      description: "Industrial coating tender found",
      time: "2 hours ago",
      color: "text-muted-foreground",
    },
    {
      type: "success",
      icon: CheckCircle2,
      title: "Pricing Calculated",
      description: "RFP-2025-002 pricing finalized",
      time: "3 hours ago",
      color: "text-green-600",
    },
  ]

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Recent Activity</h2>
        <p className="text-sm text-muted-foreground">Latest updates from all agents</p>
      </div>

      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div key={i} className="flex gap-3">
            <div className={`p-2 rounded-lg bg-muted ${activity.color} shrink-0`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
