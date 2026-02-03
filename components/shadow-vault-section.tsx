"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, ArrowUp, Eye, EyeOff, Shield } from "lucide-react"

export function ShadowVaultSection() {
  const [visible, setVisible] = useState(false)
  const [activeView, setActiveView] = useState<"public" | "private">("public")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="shadow-vault" className="relative py-32 grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-[#6366F1]/50 mb-4">// SHADOW_VAULT</p>
          <h2 className="font-pixel text-2xl md:text-4xl text-[#E0E7FF] glow-text mb-4">THE SHADOW BALANCE</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto mb-6" />
          <p className="text-[#E0E7FF]/60 max-w-2xl mx-auto">
            Your private sub-account that hides all activity from public blockchain observers
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="border-2 border-[#6366F1]/30 p-1 flex">
            <button
              onClick={() => setActiveView("public")}
              className={`px-6 py-3 font-pixel text-xs transition-all duration-300 flex items-center gap-2 ${
                activeView === "public" ? "bg-red-500/20 text-red-400 border border-red-500/50" : "text-[#E0E7FF]/50"
              }`}
            >
              <Eye className="w-4 h-4" /> PUBLIC VIEW
            </button>
            <button
              onClick={() => setActiveView("private")}
              className={`px-6 py-3 font-pixel text-xs transition-all duration-300 flex items-center gap-2 ${
                activeView === "private"
                  ? "bg-[#6366F1]/20 text-[#6366F1] border border-[#6366F1]/50"
                  : "text-[#E0E7FF]/50"
              }`}
            >
              <EyeOff className="w-4 h-4" /> PRIVATE VIEW
            </button>
          </div>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 ${visible ? "animate-slide-up" : "opacity-0"}`}>
          {/* What others see */}
          <div
            className={`border-2 p-8 transition-all duration-500 ${
              activeView === "public" ? "border-red-500/50 bg-red-500/5" : "border-[#6366F1]/30 opacity-50"
            }`}
          >
            <h3 className="font-pixel text-sm text-red-400 mb-6 flex items-center gap-2">
              <Eye className="w-5 h-5" /> WHAT OTHERS SEE
            </h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-3 bg-[#0A0A1A] border border-red-500/20">
                <span className="text-red-400">TX:</span> <span className="text-[#E0E7FF]/50">0x7f3a...deposit</span>
              </div>
              <div className="p-3 bg-[#0A0A1A] border border-red-500/20">
                <span className="text-red-400">Amount:</span> <span className="text-[#E0E7FF]/50">??? SOL</span>
              </div>
              <div className="p-3 bg-[#0A0A1A] border border-red-500/20">
                <span className="text-red-400">Actions:</span> <span className="text-[#E0E7FF]/50">[ENCRYPTED]</span>
              </div>
              <div className="p-3 bg-[#0A0A1A] border border-red-500/20">
                <span className="text-red-400">Strategy:</span> <span className="text-[#E0E7FF]/50">[UNKNOWN]</span>
              </div>
            </div>
            <p className="mt-6 text-xs text-red-400/60">On-chain observers only see a deposit — nothing else.</p>
          </div>

          {/* What you see */}
          <div
            className={`border-2 p-8 transition-all duration-500 ${
              activeView === "private"
                ? "border-[#6366F1] bg-[#6366F1]/5 animate-pulse-glow"
                : "border-[#6366F1]/30 opacity-50"
            }`}
          >
            <h3 className="font-pixel text-sm text-[#6366F1] mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5" /> WHAT YOU SEE
            </h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-3 bg-[#0A0A1A] border border-[#6366F1]/20">
                <span className="text-[#6366F1]">Balance:</span> <span className="text-[#E0E7FF]">1,234.56 SOL</span>
              </div>
              <div className="p-3 bg-[#0A0A1A] border border-[#6366F1]/20">
                <span className="text-[#6366F1]">Positions:</span> <span className="text-[#E0E7FF]">5 active</span>
              </div>
              <div className="p-3 bg-[#0A0A1A] border border-[#6366F1]/20">
                <span className="text-[#6366F1]">P&L:</span> <span className="text-green-400">+23.4%</span>
              </div>
              <div className="p-3 bg-[#0A0A1A] border border-[#6366F1]/20">
                <span className="text-[#6366F1]">Strategy:</span> <span className="text-[#E0E7FF]">Yield Farming</span>
              </div>
            </div>
            <p className="mt-6 text-xs text-[#6366F1]/60">Full visibility and control — only for you.</p>
          </div>
        </div>

        {/* Flow diagram */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="px-6 py-3 border-2 border-[#E0E7FF]/30 font-pixel text-xs text-[#E0E7FF]">YOUR WALLET</div>
            <ArrowDown className="w-6 h-6 text-[#6366F1] animate-pixel-float" />
            <div className="px-6 py-3 border-2 border-[#6366F1] bg-[#6366F1]/10 font-pixel text-xs text-[#6366F1] animate-pulse-glow">
              SHADOW VAULT
            </div>
            <ArrowUp className="w-6 h-6 text-[#6366F1] animate-pixel-float" />
            <div className="px-6 py-3 border-2 border-[#E0E7FF]/30 font-pixel text-xs text-[#E0E7FF]">ANY WALLET</div>
          </div>
          <p className="text-xs text-[#E0E7FF]/40 font-pixel">DEPOSIT → EXECUTE → WITHDRAW</p>
        </div>
      </div>
    </section>
  )
}
