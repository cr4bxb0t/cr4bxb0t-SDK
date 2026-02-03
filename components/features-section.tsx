"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, EyeOff, Zap, RefreshCw, FileCheck, Users } from "lucide-react"

const features = [
  {
    icon: EyeOff,
    title: "ACCOUNT-LEVEL PRIVACY",
    description: "Your positions, entries, exits, and strategies cannot be tracked by snipers or on-chain analysts.",
  },
  {
    icon: Shield,
    title: "DISCREET TRANSACTIONS",
    description: "Even yield routes and swaps become invisible to direct blockchain tracing.",
  },
  {
    icon: Users,
    title: "FUND WORKFLOWS",
    description: "Supports multi-asset, multi-venue strategies without revealing sensitive information.",
  },
  {
    icon: FileCheck,
    title: "SELECTIVE DISCLOSURE",
    description: "Generate reports that reveal only what you choose. Transparency on demand.",
  },
  {
    icon: Zap,
    title: "FRICTIONLESS UX",
    description: "As simple as sending a message. No burner wallets or complex privacy setups needed.",
  },
  {
    icon: RefreshCw,
    title: "NON-CUSTODIAL",
    description: "You always own your wallets. Financial actions flow through encrypted shadow balance.",
  },
]

export function FeaturesSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="relative py-32 bg-[#0A0A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-[#6366F1]/50 mb-4">// CORE_FEATURES</p>
          <h2 className="font-pixel text-2xl md:text-4xl text-[#E0E7FF] glow-text mb-4">PRIVACY PHILOSOPHY</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto mb-6" />
          <p className="text-[#E0E7FF]/60 max-w-2xl mx-auto">Speed, privacy, and control — simultaneously.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group border-2 border-[#6366F1]/30 p-6 hover:border-[#6366F1] transition-all duration-300 hover:bg-[#6366F1]/5 ${visible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <feature.icon className="w-8 h-8 text-[#6366F1] mb-4 group-hover:animate-pixel-bounce" />
              <h3 className="font-pixel text-sm text-[#E0E7FF] mb-3">{feature.title}</h3>
              <p className="text-xs text-[#E0E7FF]/60 leading-relaxed">{feature.description}</p>
              <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
