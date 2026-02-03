"use client"

import { useEffect, useRef, useState } from "react"
import { Wallet, Shield, ArrowRight, Repeat, FileCheck } from "lucide-react"

export function HowItWorksSection() {
  const [visible, setVisible] = useState(false)
  const [activeStage, setActiveStage] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stages = [
    {
      stage: "01",
      title: "CONNECT & GENERATE",
      icon: Wallet,
      description:
        "Connect your Solana wallet and generate a private cryptographic profile. Your identity remains protected while you maintain full control.",
      details: [
        "Link Solana wallet",
        "Generate private profile",
        "Separate cryptographic identity",
        "Full user control preserved",
      ],
    },
    {
      stage: "02",
      title: "TRANSFER TO SHADOW",
      icon: Shield,
      description:
        "Move SOL and SPL tokens into your shadow vault. On-chain, only a deposit appears — your internal balance and actions stay hidden.",
      details: [
        "Deposit SOL/SPL tokens",
        "Shadow vault activation",
        "Hidden internal balance",
        "Invisible subsequent actions",
      ],
    },
    {
      stage: "03",
      title: "EXECUTE PRIVATELY",
      icon: Repeat,
      description:
        "Perform swaps, trades, yield strategies, and payments. All actions are batched and executed invisibly to on-chain observers.",
      details: ["Private swaps & trades", "Hidden yield strategies", "Discreet payments", "Batched execution"],
    },
    {
      stage: "04",
      title: "SELECTIVE DISCLOSURE",
      icon: FileCheck,
      description:
        "Withdraw to any wallet or generate optional proofs for auditors. Transparency on-demand, not forced exposure.",
      details: ["Withdraw anywhere", "Optional proof generation", "Auditor reports", "Transparency on YOUR terms"],
    },
  ]

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-32 bg-[#050510]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-[#6366F1]/50 mb-4">// HOW_IT_WORKS</p>
          <h2 className="font-pixel text-2xl md:text-4xl text-[#E0E7FF] glow-text mb-4">THE PRIVACY WORKFLOW</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto mb-6" />
          <p className="text-[#E0E7FF]/60 max-w-2xl mx-auto">Four stages to complete financial privacy</p>
        </div>

        {/* Stage selector */}
        <div className="flex justify-center gap-4 mb-12">
          {stages.map((stage, i) => (
            <button
              key={i}
              onClick={() => setActiveStage(i)}
              className={`w-12 h-12 border-2 font-pixel text-xs transition-all duration-300 ${
                activeStage === i
                  ? "border-[#6366F1] bg-[#6366F1] text-white animate-pulse-glow"
                  : "border-[#6366F1]/30 text-[#6366F1]/50 hover:border-[#6366F1]"
              }`}
            >
              {stage.stage}
            </button>
          ))}
        </div>

        {/* Active stage display */}
        <div className={`${visible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="border-2 border-[#6366F1]/30 p-8 md:p-12 glass-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 border-2 border-[#6366F1] flex items-center justify-center animate-pulse-glow">
                    {(() => {
                      const Icon = stages[activeStage].icon
                      return <Icon className="w-8 h-8 text-[#6366F1]" />
                    })()}
                  </div>
                  <div>
                    <p className="font-pixel text-xs text-[#6366F1]/50">STAGE {stages[activeStage].stage}</p>
                    <h3 className="font-pixel text-lg text-[#E0E7FF]">{stages[activeStage].title}</h3>
                  </div>
                </div>
                <p className="text-[#E0E7FF]/70 leading-relaxed mb-6">{stages[activeStage].description}</p>
                <ul className="space-y-2">
                  {stages[activeStage].details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#6366F1]">
                      <span>▸</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                {/* Visual representation */}
                <div className="aspect-square border-2 border-[#6366F1]/20 p-8 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Animated flow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border-4 border-[#6366F1] animate-pulse-glow flex items-center justify-center">
                        {(() => {
                          const Icon = stages[activeStage].icon
                          return <Icon className="w-12 h-12 text-[#6366F1]" />
                        })()}
                      </div>
                    </div>
                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-rotate-slow">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#6366F1]" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#8B5CF6]" />
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#6366F1]" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#8B5CF6]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flow diagram */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-4">
          {stages.map((stage, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className={`p-4 border-2 transition-all duration-300 ${
                  activeStage === i ? "border-[#6366F1] bg-[#6366F1]/10" : "border-[#6366F1]/30"
                }`}
              >
                <stage.icon className={`w-6 h-6 ${activeStage === i ? "text-[#6366F1]" : "text-[#6366F1]/50"}`} />
              </div>
              {i < stages.length - 1 && <ArrowRight className="w-6 h-6 text-[#6366F1]/30" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
