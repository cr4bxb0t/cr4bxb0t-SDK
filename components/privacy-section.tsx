"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Eye, EyeOff, Lock, Unlock, Database, Server } from "lucide-react"

export function PrivacySection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="privacy" className="relative py-32 grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-[#6366F1]/50 mb-4">// THE_PROBLEM</p>
          <h2 className="font-pixel text-2xl md:text-4xl text-[#E0E7FF] glow-text mb-4">WHY PRIVACY MATTERS</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className={`space-y-6 ${visible ? "animate-slide-up" : "opacity-0"}`}>
            <h3 className="font-pixel text-lg text-[#6366F1] mb-6">THE CURRENT STATE</h3>
            <div className="space-y-4">
              {[
                { icon: Eye, text: "Every transaction is publicly visible", bad: true },
                { icon: Database, text: "Your wallet history is permanently exposed", bad: true },
                { icon: Server, text: "Snipers and analysts track your strategies", bad: true },
                { icon: Unlock, text: "No privacy from on-chain surveillance", bad: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 border-2 border-red-500/30 bg-red-500/5"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <item.icon className="w-6 h-6 text-red-400" />
                  <span className="text-sm text-[#E0E7FF]/70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`space-y-6 ${visible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <h3 className="font-pixel text-lg text-[#6366F1] mb-6">THE P7XLABS SOLUTION</h3>
            <div className="space-y-4">
              {[
                { icon: EyeOff, text: "Transaction amounts completely hidden" },
                { icon: Shield, text: "Wallet strategies remain private" },
                { icon: Lock, text: "No trace of your DeFi positions" },
                { icon: Database, text: "Selective disclosure when YOU choose" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 border-2 border-[#6366F1]/30 bg-[#6366F1]/5 hover:border-[#6366F1] transition-all duration-300"
                  style={{ animationDelay: `${(i + 4) * 0.1}s` }}
                >
                  <item.icon className="w-6 h-6 text-[#6366F1]" />
                  <span className="text-sm text-[#E0E7FF]/70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div
          className={`text-center max-w-3xl mx-auto ${visible ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="border-2 border-[#6366F1]/30 p-8 glass-card">
            <p className="font-pixel text-xs text-[#6366F1] mb-4">
              {"<"} MANIFESTO {">"}
            </p>
            <blockquote className="text-lg md:text-xl text-[#E0E7FF]/80 italic leading-relaxed mb-4">
              "Privacy is not about having something to hide. Privacy is about having the freedom to choose what you
              share."
            </blockquote>
            <p className="font-pixel text-xs text-[#6366F1]/50">— The p7xLabs Philosophy</p>
          </div>
        </div>
      </div>
    </section>
  )
}
