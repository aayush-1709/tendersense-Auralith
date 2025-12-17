import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, Target, FileText } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      label: "Active RFPs",
      value: "12",
      change: "+3 this week",
      trend: "up",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      label: "Avg Spec Match",
      value: "87%",
      change: "+5% from last month",
      trend: "up",
      icon: Target,
      color: "text-green-600",
    },
    {
      label: "Avg Response Time",
      value: "2.4h",
      change: "-3.2h saved",
      trend: "up",
      icon: Clock,
      color: "text-cyan-600",
    },
    {
      label: "Win Rate",
      value: "68%",
      change: "+12% improvement",
      trend: "up",
      icon: TrendingUp,
      color: "text-emerald-600",
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <Card key={i} className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-green-600">{stat.change}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
