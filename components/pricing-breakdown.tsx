import { Card } from "@/components/ui/card"
import { DollarSign, Package, FlaskConical, Truck } from "lucide-react"

export function PricingBreakdown() {
  const pricingItems = [
    {
      category: "Material Cost",
      icon: Package,
      items: [
        { name: "Primer (SKU-2847)", quantity: "500 L", unitPrice: 850, total: 425000 },
        { name: "Intermediate Coat (SKU-2849)", quantity: "400 L", unitPrice: 920, total: 368000 },
        { name: "Finish Coat (SKU-2851)", quantity: "300 L", unitPrice: 1100, total: 330000 },
      ],
    },
    {
      category: "Testing & Certification",
      icon: FlaskConical,
      items: [
        { name: "Salt Spray Test (ASTM B117)", quantity: "1", unitPrice: 45000, total: 45000 },
        { name: "Adhesion Testing", quantity: "1", unitPrice: 15000, total: 15000 },
        { name: "Chemical Resistance Test", quantity: "1", unitPrice: 25000, total: 25000 },
      ],
    },
    {
      category: "Logistics & Documentation",
      icon: Truck,
      items: [
        { name: "Transportation", quantity: "1", unitPrice: 35000, total: 35000 },
        { name: "Documentation & Compliance", quantity: "1", unitPrice: 20000, total: 20000 },
      ],
    },
  ]

  const subtotal = pricingItems.reduce(
    (acc, category) => acc + category.items.reduce((sum, item) => sum + item.total, 0),
    0,
  )
  const gst = subtotal * 0.18
  const total = subtotal + gst

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Pricing Breakdown</h2>
        <p className="text-sm text-muted-foreground">Comprehensive cost calculation including materials and testing</p>
      </div>

      <div className="space-y-6">
        {pricingItems.map((category, i) => (
          <div key={i} className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <category.icon className="h-4 w-4" />
              {category.category}
            </div>
            <div className="space-y-2">
              {category.items.map((item, j) => (
                <div key={j} className="flex items-center justify-between text-sm pl-6">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.quantity} × ₹{item.unitPrice.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <span className="font-semibold">₹{item.total.toLocaleString("en-IN")}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="border-t pt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-semibold">₹{subtotal.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>GST (18%)</span>
            <span className="font-semibold">₹{gst.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex items-center justify-between text-lg font-bold pt-2 border-t">
            <span>Total Estimated Cost</span>
            <span className="text-green-600">₹{total.toLocaleString("en-IN")}</span>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Profit Margin (15%)</p>
              <p className="text-xs text-muted-foreground">Recommended margin for this tender</p>
            </div>
            <span className="text-lg font-bold">₹{(total * 0.15).toLocaleString("en-IN")}</span>
          </div>
          <div className="flex items-center justify-between mt-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">Proposed Bid Amount</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">₹{(total * 1.15).toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
