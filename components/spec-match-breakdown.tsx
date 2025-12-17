"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Info } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function SpecMatchBreakdown() {
  const specifications = [
    {
      parameter: "Coating Type",
      required: "Epoxy-based",
      matched: "Epoxy Zinc Phosphate",
      score: 98,
      status: "excellent",
    },
    {
      parameter: "Dry Film Thickness",
      required: "300-350 microns",
      matched: "320 microns (avg)",
      score: 95,
      status: "excellent",
    },
    {
      parameter: "Salt Spray Resistance",
      required: "1000+ hours",
      matched: "1200 hours",
      score: 100,
      status: "excellent",
    },
    {
      parameter: "Adhesion",
      required: "ASTM D3359 5B",
      matched: "5B Grade",
      score: 100,
      status: "excellent",
    },
    {
      parameter: "VOC Content",
      required: "< 250 g/L",
      matched: "220 g/L",
      score: 92,
      status: "good",
    },
    {
      parameter: "Chemical Resistance",
      required: "Acid/Alkali resistant",
      matched: "pH 3-11",
      score: 85,
      status: "good",
    },
    {
      parameter: "Certification",
      required: "ISO 12944",
      matched: "ISO 12944-C5",
      score: 90,
      status: "good",
    },
    {
      parameter: "Delivery Timeline",
      required: "45 days",
      matched: "50 days",
      score: 75,
      status: "warning",
    },
  ]

  const getStatusIcon = (status: string) => {
    if (status === "excellent") return <CheckCircle2 className="h-5 w-5 text-green-600" />
    if (status === "good") return <CheckCircle2 className="h-5 w-5 text-blue-600" />
    if (status === "warning") return <AlertCircle className="h-5 w-5 text-yellow-600" />
    return <Info className="h-5 w-5 text-muted-foreground" />
  }

  const overallScore = Math.round(specifications.reduce((acc, spec) => acc + spec.score, 0) / specifications.length)

  return (
    <Card className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Spec Match Analysis</h2>
          <div className="text-right">
            <div className="text-3xl font-bold text-green-600">{overallScore}%</div>
            <div className="text-sm text-muted-foreground">Overall Match</div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">AI-powered parameter-wise matching with explainability</p>
      </div>

      <div className="space-y-4">
        {specifications.map((spec, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-start gap-3">
              {getStatusIcon(spec.status)}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{spec.parameter}</span>
                  <span className="text-sm font-semibold">{spec.score}%</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-muted-foreground">Required:</span>
                    <p className="font-medium">{spec.required}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Matched:</span>
                    <p className="font-medium">{spec.matched}</p>
                  </div>
                </div>
                <Progress value={spec.score} className="h-1 mt-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
        <div className="flex gap-2">
          <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-blue-900 dark:text-blue-100 mb-1">AI Recommendation</p>
            <p className="text-blue-700 dark:text-blue-300">
              Excellent match overall. Recommend proceeding with SKU-2847 (Epoxy Zinc Phosphate Primer) and SKU-2851
              (Industrial Epoxy Topcoat). Consider expedited production for delivery timeline.
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
