"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Building2, Wallet, Users, Shield, Repeat } from "lucide-react"

const useCases = [
  {
    icon: TrendingUp,
    title: "PRIVATE TRADING",
    description: "Execute trades without revealing your strategy to front-runners and copy-traders.",
    stats: "100% Hidden",
  },
  {
    icon: Building2,
    title: "INSTITUTIONAL FUNDS",
    description: "Manage large positions without market impact or competitor surveillance.",
    stats: "Enterprise Ready",
  },
  {
    icon: Repeat,
    title: "YIELD STRATEGIES",
    description: "Farm yields across protocols without exposing your alpha to the public.",
    stats: "Multi-Protocol",
  },
  {
    icon: Wallet,
    title: "PORTFOLIO MANAGEMENT",
    description: "Rebalance and adjust positions privately across multiple assets.",
    stats: "Full Control",
  },
  {
    icon: Users,
    title: "OTC & PAYMENTS",
    description: "Send discreet payments and execute OTC deals without public traces.",
    stats: "P2P Ready",
  },
  {
    icon: Shield,
    title: "COMPLIANCE READY",
    description: "Generate selective proofs for auditors and regulators when needed.",
    stats: "On Demand",
  },
]

export function UseCasesSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="use-cases" className="relative py-32 bg-[#050510]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-[#6366F1]/50 mb-4">// USE_CASES</p>
          <h2 className="font-pixel text-2xl md:text-4xl text-[#E0E7FF] glow-text mb-4">WHO IS IT FOR?</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto mb-6" />
          <p className="text-[#E0E7FF]/60 max-w-2xl mx-auto">
            Designed for serious traders, funds, and anyone wanting privacy from on-chain surveillance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, i) => (
            <div
              key={i}
              className={`group relative border-2 border-[#6366F1]/30 p-6 hover:border-[#6366F1] transition-all duration-300 glass-card overflow-hidden ${visible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <useCase.icon className="w-8 h-8 text-[#6366F1] group-hover:animate-pixel-bounce" />
                  <span className="font-pixel text-[10px] text-[#8B5CF6]">{useCase.stats}</span>
                </div>
                <h3 className="font-pixel text-sm text-[#E0E7FF] mb-3">{useCase.title}</h3>
                <p className="text-xs text-[#E0E7FF]/60 leading-relaxed">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
