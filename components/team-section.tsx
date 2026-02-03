"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Code, Cpu, Globe } from "lucide-react"

const team = [
  {
    name: "PHANTOM",
    role: "Founder & Vision",
    icon: Shield,
    description: "Privacy researcher. Building invisible infrastructure.",
  },
  {
    name: "CIPHER",
    role: "Protocol Architect",
    icon: Cpu,
    description: "Cryptography expert. Ex-core L1 contributor.",
  },
  {
    name: "SHADOW",
    role: "Lead Engineer",
    icon: Code,
    description: "Full-stack builder. Solana native since 2021.",
  },
  {
    name: "VECTOR",
    role: "Growth & Community",
    icon: Globe,
    description: "Ecosystem builder. DeFi strategist.",
  },
]

export function TeamSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="relative py-32 bg-[#050510]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-[#6366F1]/50 mb-4">// THE_TEAM</p>
          <h2 className="font-pixel text-2xl md:text-4xl text-[#E0E7FF] glow-text mb-4">WHO WE ARE</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto mb-6" />
          <p className="text-[#E0E7FF]/60 max-w-2xl mx-auto">
            Anonymous builders united by a single mission: financial privacy for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className={`group border-2 border-[#6366F1]/30 p-6 text-center hover:border-[#6366F1] transition-all duration-300 glass-card ${visible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-[#6366F1] flex items-center justify-center group-hover:animate-pulse-glow">
                <member.icon className="w-10 h-10 text-[#6366F1]" />
              </div>
              <h3 className="font-pixel text-sm text-[#E0E7FF] mb-1">{member.name}</h3>
              <p className="font-pixel text-[10px] text-[#6366F1] mb-3">{member.role}</p>
              <p className="text-xs text-[#E0E7FF]/50">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { title: "CODE IS LAW", desc: "Open source, audited, battle-tested" },
            { title: "PRIVACY FIRST", desc: "Default privacy, selective transparency" },
            { title: "COMMUNITY DRIVEN", desc: "Built by users, for users" },
          ].map((value, i) => (
            <div
              key={i}
              className={`border border-[#6366F1]/20 p-6 text-center ${visible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 4) * 0.1}s` }}
            >
              <h4 className="font-pixel text-xs text-[#6366F1] mb-2">{value.title}</h4>
              <p className="text-xs text-[#E0E7FF]/50">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
