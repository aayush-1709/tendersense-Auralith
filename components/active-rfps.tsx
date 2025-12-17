"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, DollarSign, TrendingUp, ExternalLink, Target, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export function ActiveRFPs() {
  const rfps = [
    {
      id: "RFP-2025-001",
      title: "Industrial Coating for Steel Infrastructure",
      source: "GeM Portal",
      deadline: "15 days left",
      estimatedValue: "₹45,00,000",
      specMatch: 92,
      winProbability: 78,
      status: "spec-matched",
      priority: "high",
      riskFlags: 1,
    },
    {
      id: "RFP-2025-002",
      title: "Protective Paint for Marine Equipment",
      source: "CPPP Portal",
      deadline: "22 days left",
      estimatedValue: "₹28,00,000",
      specMatch: 85,
      winProbability: 72,
      status: "pricing",
      priority: "medium",
      riskFlags: 2,
    },
    {
      id: "RFP-2025-003",
      title: "Epoxy Coating for Chemical Tanks",
      source: "NHAI Tender",
      deadline: "8 days left",
      estimatedValue: "₹67,00,000",
      specMatch: 78,
      winProbability: 65,
      status: "new",
      priority: "high",
      riskFlags: 3,
    },
    {
      id: "RFP-2025-004",
      title: "Anti-Corrosive Paint for Bridges",
      source: "State PWD",
      deadline: "30 days left",
      estimatedValue: "₹1,20,00,000",
      specMatch: 88,
      winProbability: 82,
      status: "proposal-ready",
      priority: "high",
      riskFlags: 0,
    },
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      new: { label: "New", variant: "outline" as const },
      "spec-matched": { label: "Spec Matched", variant: "secondary" as const },
      pricing: { label: "Pricing", variant: "default" as const },
      "proposal-ready": { label: "Proposal Ready", variant: "default" as const },
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  const getWinProbabilityColor = (probability: number) => {
    if (probability >= 75) return "text-green-600"
    if (probability >= 60) return "text-blue-600"
    return "text-yellow-600"
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">Active RFPs</h2>
          <p className="text-sm text-muted-foreground">Recently discovered and in-progress tenders</p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {rfps.map((rfp) => (
          <div key={rfp.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-mono text-muted-foreground">{rfp.id}</span>
                  {rfp.priority === "high" && (
                    <Badge variant="destructive" className="text-xs">
                      High Priority
                    </Badge>
                  )}
                  {rfp.riskFlags > 0 && (
                    <Badge variant="outline" className="text-xs gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {rfp.riskFlags} {rfp.riskFlags === 1 ? "risk" : "risks"}
                    </Badge>
                  )}
                </div>
                <h3 className="font-semibold mb-2 text-balance">{rfp.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {rfp.deadline}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    {rfp.estimatedValue}
                  </span>
                  <span>{rfp.source}</span>
                </div>
              </div>
              <div className="text-right space-y-2">{getStatusBadge(rfp.status)}</div>
            </div>

            <div className="space-y-3 pt-3 border-t">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">Spec Match</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={rfp.specMatch} className="h-2 flex-1" />
                    <span className="text-sm font-bold text-green-600 w-12 text-right">{rfp.specMatch}%</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">Win Probability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={rfp.winProbability} className="h-2 flex-1" />
                    <span className={`text-sm font-bold w-12 text-right ${getWinProbabilityColor(rfp.winProbability)}`}>
                      {rfp.winProbability}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="ghost" size="sm" asChild className="gap-1">
                  <Link href={`/rfp/${rfp.id}`}>
                    View Details <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
