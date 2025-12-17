import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Zap, Clock, Target, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">TenderSense </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#problem" className="text-sm font-medium hover:text-primary transition-colors">
              Solution
            </Link>
          </nav>
          <Button asChild>
            <Link href="/dashboard">View Demo</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-4">
            AI-Powered RFP Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Transform Your B2B Tender Response Process
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Automated tender discovery, intelligent spec matching, and instant proposal generation. Win more tenders
            with less effort.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" asChild className="gap-2">
              <Link href="/dashboard">
                View Live Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#problem">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "90%", label: "Win Rate with Timely RFPs", icon: Target },
            { value: "60%", label: "Wins with Proper Time Allocation", icon: Clock },
            { value: "10x", label: "Faster Response Time", icon: Zap },
            { value: "3x", label: "More RFPs Processed", icon: TrendingUp },
          ].map((stat, i) => (
            <div key={i} className="bg-card border rounded-xl p-6 text-center space-y-2">
              <stat.icon className="h-8 w-8 mx-auto text-blue-600" />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Business Problem</h2>
            <p className="text-lg text-muted-foreground">
              Why FMCG companies are losing millions in missed opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-destructive/10 border-destructive/20 border rounded-xl p-6">
              <div className="text-destructive font-semibold text-lg mb-2">❌ Fewer RFPs Responded</div>
              <p className="text-sm text-muted-foreground">Lost opportunities from missed or late-discovered tenders</p>
            </div>
            <div className="bg-destructive/10 border-destructive/20 border rounded-xl p-6">
              <div className="text-destructive font-semibold text-lg mb-2">⏱️ Slow Turnaround</div>
              <p className="text-sm text-muted-foreground">Manual matching reduces win-rate and response quality</p>
            </div>
            <div className="bg-destructive/10 border-destructive/20 border rounded-xl p-6">
              <div className="text-destructive font-semibold text-lg mb-2">📉 Inconsistent Quality</div>
              <p className="text-sm text-muted-foreground">Manual work leads to errors and missed specifications</p>
            </div>
          </div>

          <div className="mt-12 bg-card border rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Key Findings from Analysis</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>
                  <strong>90% of wins</strong> correlated with timely received and actioned RFPs
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>
                  <strong>60% of wins</strong> correlated with adequate time for technical team alignment
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Technical SKU matching</strong> is the most time-consuming aspect
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Delays in submission</strong> significantly reduced the chances for winning
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Features</h2>
            <p className="text-lg text-muted-foreground">
              Not just automation — intelligent decision-making built to win tenders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Miss-Proof Tender Discovery",
                description: "Continuous monitoring of tender portals → early visibility → higher win probability",
                icon: "🔍",
              },
              {
                title: "AI-Based Spec Match",
                description: "Parameter-wise match breakdown with explainable Spec-Match % and confidence scores",
                icon: "🎯",
              },
              {
                title: "Smart Pricing Engine",
                description: "Material + testing cost calculation with real commercial view, not just numbers",
                icon: "💰",
              },
              {
                title: "Risk Flags & Intelligence",
                description: "Incomplete specs or short timeline? System flags risks and suggests alternatives",
                icon: "⚠️",
              },
              {
                title: "One-Click Proposals",
                description: "Proposal-ready PDF/Excel output with instant email or WhatsApp sharing",
                icon: "📄",
              },
              {
                title: "Real Business KPIs",
                description: "Dashboard shows time saved, RFP throughput, average Spec Match %, and more",
                icon: "📊",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-card border rounded-xl p-6 space-y-3">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your RFP Process?</h2>
          <p className="text-lg mb-8 opacity-90">
            See how TenderSense can help you win more tenders with intelligent automation
          </p>
          <Button size="lg" variant="secondary" asChild className="gap-2">
            <Link href="/dashboard">
              View Interactive Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>TenderSense • EY Techathon 6.0 • 2025</p>
        </div>
      </footer>
    </div>
  )
}
