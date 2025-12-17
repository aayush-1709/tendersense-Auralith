"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle2, AlertCircle, ShieldCheck, XCircle } from "lucide-react"

export function RiskCompliance() {
  const complianceItems = [
    {
      category: "Certifications",
      status: "passed",
      items: [
        { name: "ISO 9001:2015", status: "valid", expiry: "Dec 2026" },
        { name: "ISO 14001:2015", status: "valid", expiry: "Dec 2026" },
        { name: "OHSAS 18001", status: "valid", expiry: "Mar 2026" },
      ],
    },
    {
      category: "Testing Requirements",
      status: "passed",
      items: [
        { name: "ASTM B117 Salt Spray Test", status: "valid", notes: "Lab accredited" },
        { name: "ASTM D3359 Adhesion Test", status: "valid", notes: "Equipment calibrated" },
        { name: "Impact Resistance Test", status: "valid", notes: "Recent certification" },
      ],
    },
    {
      category: "Legal Compliance",
      status: "passed",
      items: [
        { name: "GST Registration", status: "valid", expiry: "Active" },
        { name: "PAN Card", status: "valid", expiry: "Permanent" },
        { name: "MSME Registration", status: "valid", expiry: "Dec 2025" },
      ],
    },
  ]

  const riskFlags = [
    {
      severity: "low",
      title: "Tight Timeline",
      description: "15 days to deadline. Recommended to submit within 48 hours for optimal positioning.",
      recommendation: "Accelerate internal approval process",
    },
    {
      severity: "medium",
      title: "Price Sensitivity",
      description: "Estimated budget is ₹45L. Our quote at ₹45L is at upper limit.",
      recommendation: "Consider 5-8% price reduction if strategically important",
    },
    {
      severity: "low",
      title: "Geographic Distance",
      description: "Delivery location is Delhi NCR. Logistics may add 2-3 days.",
      recommendation: "Confirm delivery timelines with logistics partner",
    },
  ]

  const detectedIssues = [
    {
      type: "warning",
      title: "Non-Standard Payment Terms",
      description: "Payment split: 40% advance, 60% post-delivery. Standard is 30-70.",
      impact: "May affect cash flow. Ensure advance covers procurement costs.",
    },
  ]

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              Risk & Compliance Analysis
            </h2>
            <Badge variant="outline" className="bg-green-50 dark:bg-green-950/30 border-green-600 text-green-600">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              All Clear
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Automated risk detection and compliance verification across 25+ parameters
          </p>
        </div>

        {/* Compliance Status */}
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            Compliance Status
          </h3>
          <div className="space-y-4">
            {complianceItems.map((category, i) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{category.category}</h4>
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-950/30 border-green-600 text-green-600">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Passed
                  </Badge>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, j) => (
                    <div key={j} className="flex items-center justify-between text-sm py-2 border-b last:border-0">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>{item.name}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.expiry && `Expires: ${item.expiry}`}
                        {item.notes && item.notes}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Flags */}
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            Identified Risk Flags
          </h3>
          <div className="space-y-3">
            {riskFlags.map((risk, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg border ${
                  risk.severity === "high"
                    ? "bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-800"
                    : risk.severity === "medium"
                      ? "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-300 dark:border-yellow-800"
                      : "bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-800"
                }`}
              >
                <div className="flex gap-3">
                  <div className="shrink-0">
                    {risk.severity === "high" ? (
                      <XCircle className="h-5 w-5 text-red-600" />
                    ) : risk.severity === "medium" ? (
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm">{risk.title}</h4>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          risk.severity === "high"
                            ? "border-red-600 text-red-600"
                            : risk.severity === "medium"
                              ? "border-yellow-600 text-yellow-600"
                              : "border-blue-600 text-blue-600"
                        }`}
                      >
                        {risk.severity} risk
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{risk.description}</p>
                    <div className="flex items-start gap-2 mt-2 p-2 bg-background/50 rounded">
                      <span className="text-xs font-medium">Recommendation:</span>
                      <span className="text-xs text-muted-foreground">{risk.recommendation}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detected Issues */}
        {detectedIssues.length > 0 && (
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              Detected Issues
            </h3>
            <div className="space-y-3">
              {detectedIssues.map((issue, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border bg-orange-50 dark:bg-orange-950/20 border-orange-300 dark:border-orange-800"
                >
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-600 shrink-0" />
                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold text-sm">{issue.title}</h4>
                      <p className="text-sm text-muted-foreground">{issue.description}</p>
                      <p className="text-xs mt-2 font-medium text-orange-900 dark:text-orange-100">{issue.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="pt-4 border-t bg-muted/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium mb-1">Compliance Verified</p>
              <p className="text-muted-foreground">
                All certifications valid and up-to-date. Minor risks identified with clear mitigation strategies. Safe
                to proceed with proposal submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
