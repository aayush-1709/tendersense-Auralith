"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileDown, Mail, MessageSquare, Eye, CheckCircle2, Loader2, Download } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function ProposalActions() {
  const { toast } = useToast()
  const [generating, setGenerating] = useState<string | null>(null)
  const [shareStatus, setShareStatus] = useState<{
    pdf?: boolean
    email?: boolean
    whatsapp?: boolean
  }>({})

  const handleGeneratePDF = async () => {
    setGenerating("pdf")
    // Simulate PDF generation
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setShareStatus({ ...shareStatus, pdf: true })
    setGenerating(null)

    toast({
      title: "PDF Generated Successfully",
      description: "Your proposal is ready for download.",
    })

    // In a real app, this would trigger actual PDF download
    console.log("[v0] PDF generation completed")
  }

  const handleSendEmail = async () => {
    setGenerating("email")
    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setShareStatus({ ...shareStatus, email: true })
    setGenerating(null)

    toast({
      title: "Email Sent Successfully",
      description: "Proposal sent to procurement@nhai.gov.in with tracking enabled.",
    })

    console.log("[v0] Email sent with tracking link")
  }

  const handleShareWhatsApp = async () => {
    setGenerating("whatsapp")
    // Simulate WhatsApp sharing
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setShareStatus({ ...shareStatus, whatsapp: true })
    setGenerating(null)

    toast({
      title: "WhatsApp Message Sent",
      description: "Proposal shared via WhatsApp Business API.",
    })

    console.log("[v0] WhatsApp message sent")
  }

  const handlePreview = () => {
    toast({
      title: "Opening Preview",
      description: "Loading proposal preview in new window...",
    })
    // In real app, open preview modal or new window
    console.log("[v0] Opening proposal preview")
  }

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Multi-Channel Proposal Sharing</h2>
          <p className="text-sm text-muted-foreground">
            Generate and share your proposal across multiple channels with one click
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button onClick={handlePreview} className="gap-2 h-auto py-4 flex-col items-center justify-center">
            <Eye className="h-5 w-5" />
            <span>Preview Proposal</span>
          </Button>

          <Button
            onClick={handleGeneratePDF}
            disabled={generating !== null}
            variant="outline"
            className="gap-2 h-auto py-4 flex-col items-center justify-center bg-transparent relative"
          >
            {generating === "pdf" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                {shareStatus.pdf ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <FileDown className="h-5 w-5" />
                )}
                <span>Download PDF</span>
                {shareStatus.pdf && (
                  <span className="absolute top-2 right-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </span>
                )}
              </>
            )}
          </Button>

          <Button
            onClick={handleSendEmail}
            disabled={generating !== null}
            variant="outline"
            className="gap-2 h-auto py-4 flex-col items-center justify-center bg-transparent relative"
          >
            {generating === "email" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                {shareStatus.email ? <CheckCircle2 className="h-5 w-5 text-green-600" /> : <Mail className="h-5 w-5" />}
                <span>Send via Email</span>
                {shareStatus.email && (
                  <span className="absolute top-2 right-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </span>
                )}
              </>
            )}
          </Button>

          <Button
            onClick={handleShareWhatsApp}
            disabled={generating !== null}
            variant="outline"
            className="gap-2 h-auto py-4 flex-col items-center justify-center bg-transparent relative"
          >
            {generating === "whatsapp" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Sharing...</span>
              </>
            ) : (
              <>
                {shareStatus.whatsapp ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <MessageSquare className="h-5 w-5" />
                )}
                <span>Share on WhatsApp</span>
                {shareStatus.whatsapp && (
                  <span className="absolute top-2 right-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </span>
                )}
              </>
            )}
          </Button>
        </div>

        {/* Sharing Status */}
        {(shareStatus.pdf || shareStatus.email || shareStatus.whatsapp) && (
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Download className="h-4 w-4" />
              Sharing Status
            </h3>
            <div className="space-y-2 text-sm">
              {shareStatus.pdf && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>PDF generated and ready for download</span>
                </div>
              )}
              {shareStatus.email && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Email sent to procurement@nhai.gov.in - Tracking enabled</span>
                </div>
              )}
              {shareStatus.whatsapp && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>WhatsApp message delivered via Business API</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
          <div className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-green-900 dark:text-green-100 mb-1">Proposal Ready for Submission</p>
              <p className="text-green-700 dark:text-green-300">
                All requirements met. High confidence match (92%). Estimated win probability: 78% based on historical
                data. Recommended to submit within 48 hours to maximize chances.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            <p>
              Generated by AI Agents on{" "}
              {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
          <Button size="lg" className="gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Approve & Submit
          </Button>
        </div>
      </div>
    </Card>
  )
}
