"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Loader2, Clock, ArrowRight, Brain, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function AgentWorkflow() {
  const [activeConversation, setActiveConversation] = useState(0)

  const agentMessages = [
    {
      from: "Sales Agent",
      to: "Technical Agent",
      message: "Found new NHAI tender - Industrial coating needed. Can we match specs?",
      timestamp: "2 min ago",
      type: "query",
    },
    {
      from: "Technical Agent",
      to: "Sales Agent",
      message: "Analyzing... SKU-7823 matches 92% of requirements. Missing ISO 9001 certification though.",
      timestamp: "1 min ago",
      type: "analysis",
    },
    {
      from: "Sales Agent",
      to: "Technical Agent",
      message: "We have ISO 9001 for SKU-7823. It's just not in the system. Should we proceed?",
      timestamp: "45 sec ago",
      type: "info",
    },
    {
      from: "Technical Agent",
      to: "Pricing Agent",
      message: "Confirmed match! SKU-7823 ready. Need pricing for 15,000 units with testing costs.",
      timestamp: "30 sec ago",
      type: "handoff",
    },
    {
      from: "Pricing Agent",
      to: "All Agents",
      message: "Calculated: ₹45L total. Materials ₹32L, Testing ₹8L, Logistics ₹5L. Margin: 18%",
      timestamp: "15 sec ago",
      type: "result",
    },
    {
      from: "Proposal Generator",
      to: "All Agents",
      message: "Proposal generated! Win probability: 78%. Ready for review.",
      timestamp: "Just now",
      type: "complete",
    },
  ]

  const agents = [
    {
      name: "Sales Agent",
      status: "thinking",
      task: "Scanning tender portals",
      progress: 75,
      color: "blue",
      icon: "🎯",
      thinking: "Evaluating 12 new tenders from GeM portal...",
    },
    {
      name: "Technical Agent",
      status: "active",
      task: "Spec matching analysis",
      progress: 60,
      color: "purple",
      icon: "🔬",
      thinking: "Cross-referencing coating specs with SKU database...",
    },
    {
      name: "Pricing Agent",
      status: "active",
      task: "Cost calculation",
      progress: 85,
      color: "green",
      icon: "💰",
      thinking: "Optimizing pricing for competitive advantage...",
    },
    {
      name: "Proposal Generator",
      status: "completed",
      task: "2 proposals ready",
      progress: 100,
      color: "cyan",
      icon: "✨",
      thinking: "Proposals generated with 92% confidence",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConversation((prev) => (prev + 1) % agentMessages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-600" />
              Live AI Agent Collaboration
            </h2>
            <Badge variant="outline" className="gap-1">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              Live
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">Watch AI agents collaborate in real-time to process RFPs</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {agents.map((agent, i) => (
            <div key={i} className="relative">
              <div
                className={`bg-gradient-to-br ${
                  agent.color === "blue"
                    ? "from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20"
                    : agent.color === "purple"
                      ? "from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20"
                      : agent.color === "green"
                        ? "from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20"
                        : "from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/20"
                } rounded-lg p-4 space-y-3 border ${
                  agent.status === "active" || agent.status === "thinking"
                    ? "border-blue-300 dark:border-blue-700 shadow-md"
                    : "border-gray-200 dark:border-gray-800"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{agent.icon}</span>
                    <span className="font-medium text-sm">{agent.name}</span>
                  </div>
                  {agent.status === "active" && <Loader2 className="h-4 w-4 animate-spin text-blue-600" />}
                  {agent.status === "thinking" && (
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  )}
                  {agent.status === "completed" && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                  {agent.status === "idle" && <Clock className="h-4 w-4 text-muted-foreground" />}
                </div>

                <div>
                  <Badge
                    variant={agent.status === "active" || agent.status === "thinking" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {agent.status === "active" || agent.status === "thinking"
                      ? "Working"
                      : agent.status === "completed"
                        ? "Complete"
                        : "Idle"}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium">{agent.task}</p>
                  <div className="w-full bg-background rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        agent.color === "blue"
                          ? "bg-blue-600"
                          : agent.color === "purple"
                            ? "bg-purple-600"
                            : agent.color === "green"
                              ? "bg-green-600"
                              : "bg-cyan-600"
                      }`}
                      style={{ width: `${agent.progress}%` }}
                    ></div>
                  </div>
                  {(agent.status === "active" || agent.status === "thinking") && (
                    <div className="flex items-start gap-2 mt-2 p-2 bg-background/50 rounded text-xs italic">
                      <Brain className="h-3 w-3 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{agent.thinking}</span>
                    </div>
                  )}
                </div>
              </div>

              {i < agents.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-4 w-4 text-blue-600 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Agent Communication Panel */}
        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="h-4 w-4 text-blue-600" />
            <h3 className="font-semibold text-sm">Agent Communication Log</h3>
          </div>
          <div className="space-y-3 max-h-[300px] overflow-y-auto">
            {agentMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 p-3 rounded-lg transition-all ${
                  i === activeConversation
                    ? "bg-blue-100 dark:bg-blue-950/50 border border-blue-300 dark:border-blue-700 scale-105"
                    : "bg-background"
                }`}
              >
                <div className="shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      msg.from === "Sales Agent"
                        ? "bg-blue-600 text-white"
                        : msg.from === "Technical Agent"
                          ? "bg-purple-600 text-white"
                          : msg.from === "Pricing Agent"
                            ? "bg-green-600 text-white"
                            : "bg-cyan-600 text-white"
                    }`}
                  >
                    {msg.from.split(" ")[0][0]}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-semibold text-sm">{msg.from}</span>
                    <ArrowRight className="h-3 w-3 text-muted-foreground shrink-0" />
                    <span className="text-xs text-muted-foreground">{msg.to}</span>
                    <span className="text-xs text-muted-foreground ml-auto">{msg.timestamp}</span>
                  </div>
                  <p className="text-sm">{msg.message}</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {msg.type}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
