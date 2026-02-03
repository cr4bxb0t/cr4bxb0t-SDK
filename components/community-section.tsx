"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function CommunitySection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.2 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="community" className="relative py-32 grid-bg">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`${visible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <p className="font-pixel text-xs text-[#6366F1]/50 mb-4">// COMMUNITY</p>
            <h2 className="font-pixel text-2xl md:text-4xl text-[#E0E7FF] glow-text mb-4">JOIN THE MOVEMENT</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto" />
          </div>

          <div className="border-4 border-[#6366F1] p-8 md:p-12 text-center glass-card animate-pulse-glow relative overflow-hidden">
            {/* Pixel decorations */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-[#6366F1] animate-blink" />
            <div
              className="absolute top-4 right-4 w-2 h-2 bg-[#8B5CF6] animate-blink"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute bottom-4 left-4 w-2 h-2 bg-[#8B5CF6] animate-blink"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-4 right-4 w-2 h-2 bg-[#6366F1] animate-blink"
              style={{ animationDelay: "1.5s" }}
            />

            <div className="relative z-10">
              <pre className="text-[#6366F1]/50 text-[10px] mb-8 hidden md:block">
                {`
   ╔══════════════════════════════════════╗
   ║   PRIVACY IS A RIGHT, NOT A FEATURE  ║
   ╚══════════════════════════════════════╝
`}
              </pre>

              <h3 className="font-pixel text-lg md:text-2xl text-[#E0E7FF] mb-6 glow-text">BUILD THE FUTURE WITH US</h3>
              <p className="text-sm text-[#E0E7FF]/60 mb-10 max-w-xl mx-auto leading-relaxed">
                Join the growing community of privacy advocates, DeFi builders, and traders shaping the future of
                confidential finance on Solana.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://x.com/p7xLabs"
                  target="_blank"
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-pixel text-xs transition-all duration-300 hover:from-[#8B5CF6] hover:to-[#6366F1] glow-indigo"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  FOLLOW @p7xLabs
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2 px-8 py-4 border-2 border-[#6366F1] text-[#E0E7FF] font-pixel text-xs transition-all duration-300 hover:bg-[#6366F1]/10"
                >
                  JOIN DISCORD
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 pt-8 border-t-2 border-[#6366F1]/20 grid grid-cols-3 gap-8">
                {[
                  { value: "EARLY", label: "ACCESS" },
                  { value: "24/7", label: "BUILDING" },
                  { value: "100%", label: "PRIVATE" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-pixel text-xl text-[#6366F1] glow-text">{stat.value}</div>
                    <div className="text-[10px] text-[#E0E7FF]/50 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
