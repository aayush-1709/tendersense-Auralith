import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, ExternalLink, MapPin, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RFPDetails({ rfpId }: { rfpId: string }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">Industrial Coating for Steel Infrastructure</h1>
            <Badge className="bg-green-600">92% Match</Badge>
          </div>
          <p className="text-muted-foreground font-mono">{rfpId}</p>
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <ExternalLink className="h-4 w-4" />
          View Source
        </Button>
      </div>

      <Card className="p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Deadline</span>
            </div>
            <p className="text-xl font-semibold">30 Nov 2025</p>
            <p className="text-sm text-green-600">15 days remaining</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span>Estimated Value</span>
            </div>
            <p className="text-xl font-semibold">₹45,00,000</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span>Organization</span>
            </div>
            <p className="text-xl font-semibold">NHAI</p>
            <p className="text-sm text-muted-foreground">National Highways</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Location</span>
            </div>
            <p className="text-xl font-semibold">Delhi NCR</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">RFP Requirements Summary</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Product Requirements</h3>
            <p className="text-sm text-muted-foreground">
              High-performance epoxy-based coating system for steel structures. Must provide corrosion protection in
              industrial environments with minimum 15-year durability. Requires 3-coat system: primer, intermediate, and
              finish coat. Total DFT: 300-350 microns.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Testing Requirements</h3>
            <p className="text-sm text-muted-foreground">
              Salt spray test (ASTM B117) minimum 1000 hours, adhesion test (ASTM D3359), impact resistance, flexibility
              test, and chemical resistance certification required.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
