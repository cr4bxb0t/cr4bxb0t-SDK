"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Shield, Lock, EyeOff } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "PRIVACY-NATIVE FINANCE ON SOLANA_"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 grid-bg scanlines overflow-hidden">
      {/* Animated privacy shields */}
      <div className="absolute top-20 left-10 animate-pixel-float" style={{ animationDelay: "0s" }}>
        <Shield className="w-8 h-8 text-[#6366F1]/30" />
      </div>
      <div className="absolute top-40 right-20 animate-pixel-float" style={{ animationDelay: "0.5s" }}>
        <Lock className="w-6 h-6 text-[#8B5CF6]/40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pixel-float" style={{ animationDelay: "1s" }}>
        <EyeOff className="w-5 h-5 text-[#6366F1]/20" />
      </div>
      <div className="absolute bottom-20 right-40 animate-pixel-float" style={{ animationDelay: "1.5s" }}>
        <Shield className="w-10 h-10 text-[#8B5CF6]/30" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-3xl animate-shield-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-shield-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="relative w-40 h-40 mx-auto mb-8 animate-pixel-bounce">
          <div className="absolute inset-0 border-4 border-[#6366F1] animate-pulse-glow rounded-2xl overflow-hidden bg-[#4F46E5]">
            <Image src="/images/p7xLabs.png" alt="p7xLabs" fill className="object-contain p-2" />
          </div>
          <div className="absolute -inset-4 border-2 border-[#6366F1]/30 rounded-3xl animate-rotate-slow" />
        </div>

        {/* Brand */}
        <h1 className="font-pixel text-4xl md:text-6xl text-[#E0E7FF] mb-4 animate-text-shadow-pulse">p7xLabs</h1>

        <p className="font-pixel text-xs text-[#6366F1] mb-8 tracking-[0.5em]">SHIELD // TRANSACT // EVOLVE</p>

        {/* Typewriter */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-8">
          <h2 className="font-pixel text-sm md:text-lg text-[#E0E7FF]">
            <span className="glow-text">{displayText}</span>
            <span className="animate-blink text-[#6366F1]">|</span>
          </h2>
        </div>

        <p className="text-sm md:text-base text-[#E0E7FF]/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          The first privacy-native finance layer built on Solana. Transact, swap, invest, and manage portfolios without
          exposing your wallet, strategies, or transaction history to the public blockchain.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#how-it-works"
            className="group px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-pixel text-xs hover:from-[#8B5CF6] hover:to-[#6366F1] transition-all duration-300 glow-indigo"
          >
            {">"} HOW IT WORKS
          </Link>
          <Link
            href="https://x.com/p7xLabs"
            target="_blank"
            className="px-8 py-4 border-2 border-[#6366F1] text-[#E0E7FF] font-pixel text-xs hover:bg-[#6366F1]/10 transition-all duration-300"
          >
            {">"} JOIN COMMUNITY
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100%", label: "PRIVATE" },
            { value: "<1s", label: "FINALITY" },
            { value: "0", label: "DATA EXPOSED" },
            { value: "∞", label: "POSSIBILITIES" },
          ].map((stat, i) => (
            <div
              key={i}
              className="border-2 border-[#6366F1]/30 p-4 animate-slide-up hover:border-[#6366F1] transition-all duration-300 glass-card"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="font-pixel text-2xl md:text-3xl text-[#6366F1] glow-text mb-2">{stat.value}</div>
              <div className="text-[10px] text-[#E0E7FF]/50 font-pixel">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#6366F1] flex items-start justify-center p-2 animate-pulse-glow rounded-full">
          <div className="w-1 h-2 bg-[#6366F1] rounded-full animate-pixel-float" />
        </div>
      </div>
    </section>
  )
}
