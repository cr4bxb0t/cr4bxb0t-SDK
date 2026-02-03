"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, Circle } from "lucide-react"

const phases = [
  {
    phase: "PHASE 1",
    title: "FOUNDATIONS",
    status: "completed",
    items: [
      "Architectural design",
      "Privacy assumptions research",
      "Solana-native infrastructure",
      "Core team assembly",
    ],
  },
  {
    phase: "PHASE 2",
    title: "PRIVATE BALANCE LAYER",
    status: "current",
    items: [
      "Internal execution runtime",
      "Private accounts system",
      "Asset vaulting mechanism",
      "Hidden routing protocol",
    ],
  },
  {
    phase: "PHASE 3",
    title: "PRIVATE SWAPS & YIELD",
    status: "upcoming",
    items: ["DEX integration layer", "Yield venue connections", "Privacy runtime execution", "Batched transactions"],
  },
  {
    phase: "PHASE 4",
    title: "PROOFS & AGENTS",
    status: "upcoming",
    items: [
      "Verifiable financial proofs",
      "Automated privacy agents",
      "Compliance reporting tools",
      "Institutional features",
    ],
  },
]

export function RoadmapSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="roadmap" className="relative py-32 grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-[#6366F1]/50 mb-4">// ROADMAP</p>
          <h2 className="font-pixel text-2xl md:text-4xl text-[#E0E7FF] glow-text mb-4">DEVELOPMENT PATH</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto mb-6" />
          <p className="text-[#E0E7FF]/60 max-w-2xl mx-auto">
            Building the future of private finance, one phase at a time
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-[#6366F1]/30" />

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} ${visible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  {phase.status === "completed" ? (
                    <CheckCircle className="w-6 h-6 text-green-400 bg-[#0A0A1A]" />
                  ) : phase.status === "current" ? (
                    <div className="w-6 h-6 border-2 border-[#6366F1] bg-[#6366F1] animate-pulse-glow" />
                  ) : (
                    <Circle className="w-6 h-6 text-[#6366F1]/30 bg-[#0A0A1A]" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}
                >
                  <div
                    className={`border-2 p-6 transition-all duration-300 hover:bg-[#6366F1]/5 ${
                      phase.status === "current"
                        ? "border-[#6366F1] glass-card animate-pulse-glow"
                        : phase.status === "completed"
                          ? "border-green-500/30 bg-green-500/5"
                          : "border-[#6366F1]/30"
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="font-pixel text-xs text-[#6366F1]">{phase.phase}</span>
                      {phase.status === "current" && (
                        <span className="font-pixel text-[10px] text-white bg-[#6366F1] px-2 py-0.5">ACTIVE</span>
                      )}
                      {phase.status === "completed" && (
                        <span className="font-pixel text-[10px] text-green-400 bg-green-500/20 px-2 py-0.5">DONE</span>
                      )}
                    </div>
                    <h3 className="font-pixel text-sm text-[#E0E7FF] mb-4">{phase.title}</h3>
                    <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-[#E0E7FF]/60">
                          <span className={`text-[#6366F1] ${i % 2 === 0 ? "md:order-last" : ""}`}>▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status note */}
        <div className="mt-16 text-center">
          <p className="font-pixel text-xs text-[#6366F1]/50">
            {"<"} EARLY STAGE PROJECT — BUILDING IN PUBLIC {">"}
          </p>
        </div>
      </div>
    </section>
  )
}
