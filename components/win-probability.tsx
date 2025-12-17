"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, AlertCircle, CheckCircle2, Info } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function WinProbability() {
  const winProbability = 78
  const factors = [
    {
      name: "Spec Match Quality",
      score: 92,
      impact: "High",
      status: "excellent",
      description: "Product specifications exceed requirements",
    },
    {
      name: "Price Competitiveness",
      score: 75,
      impact: "High",
      status: "good",
      description: "8% below market average for similar tenders",
      recommendation: "Consider 5% reduction to increase win rate to 85%",
    },
    {
      name: "Past Performance",
      score: 88,
      impact: "Medium",
      status: "excellent",
      description: "Won 7 out of 8 similar NHAI tenders in past 12 months",
    },
    {
      name: "Compliance & Certifications",
      score: 100,
      impact: "Critical",
      status: "excellent",
      description: "All required certifications present and valid",
    },
    {
      name: "Response Time",
      score: 65,
      impact: "Low",
      status: "moderate",
      description: "15 days remaining - ideal submission window",
      recommendation: "Submit within 48 hours for +7% win probability",
    },
  ]

  const historicalData = [
    { range: "90-100% match", wins: 12, total: 15, rate: 80 },
    { range: "80-89% match", wins: 8, total: 12, rate: 67 },
    { range: "70-79% match", wins: 4, total: 10, rate: 40 },
  ]

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Win Probability Analysis
            </h2>
            <Badge variant="outline" className="gap-1">
              <Info className="h-3 w-3" />
              AI-Powered
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Machine learning prediction based on 150+ historical tender outcomes
          </p>
        </div>

        {/* Main Win Probability Display */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold">{winProbability}%</div>
                <div className="text-xs uppercase tracking-wide">Win Rate</div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-lg">High Confidence Match</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on your 92% spec match and historical performance, you have a strong chance of winning this tender
              </p>
            </div>
          </div>
        </div>

        {/* Contributing Factors */}
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            Contributing Factors
          </h3>
          <div className="space-y-3">
            {factors.map((factor, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{factor.name}</span>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        factor.status === "excellent"
                          ? "border-green-600 text-green-600"
                          : factor.status === "good"
                            ? "border-blue-600 text-blue-600"
                            : "border-yellow-600 text-yellow-600"
                      }`}
                    >
                      {factor.impact} Impact
                    </Badge>
                  </div>
                  <span className="text-sm font-semibold">{factor.score}%</span>
                </div>
                <Progress value={factor.score} className="h-2" />
                <p className="text-xs text-muted-foreground">{factor.description}</p>
                {factor.recommendation && (
                  <div className="flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-800">
                    <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-0.5">Recommendation</p>
                      <p className="text-xs text-blue-700 dark:text-blue-300">{factor.recommendation}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Historical Performance */}
        <div className="pt-4 border-t">
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            Historical Performance by Match Quality
          </h3>
          <div className="space-y-3">
            {historicalData.map((data, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium">{data.range}</div>
                <div className="flex-1">
                  <Progress value={data.rate} className="h-3" />
                </div>
                <div className="w-32 text-right text-sm">
                  <span className="font-semibold">{data.rate}%</span>
                  <span className="text-muted-foreground ml-1">
                    ({data.wins}/{data.total})
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Your current 92% match falls in the highest win-rate category, historically winning 80% of similar tenders.
          </p>
        </div>
      </div>
    </Card>
  )
}
