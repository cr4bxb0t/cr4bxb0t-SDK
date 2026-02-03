"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Terminal, Book } from "lucide-react"

const navLinks = [
  { name: "PRIVACY", href: "#privacy" },
  { name: "HOW IT WORKS", href: "#how-it-works" },
  { name: "FEATURES", href: "#features" },
  { name: "ROADMAP", href: "#roadmap" },
  { name: "TEAM", href: "#team" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A1A]/95 border-b-2 border-[#6366F1]/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
            <div className="w-full h-full border-2 border-[#6366F1] animate-pulse-glow rounded-lg overflow-hidden">
              <Image src="/images/p7xLabs.png" alt="p7xLabs" fill className="object-contain" />
            </div>
          </div>
          <span className="font-pixel text-sm text-[#E0E7FF] glow-text tracking-wider">p7xLabs</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-pixel text-[#E0E7FF]/70 hover:text-[#6366F1] transition-all duration-300 hover:glow-text"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/docs"
            className="flex items-center gap-1 text-xs font-pixel text-[#E0E7FF]/70 hover:text-[#6366F1] transition-all duration-300 hover:glow-text"
          >
            <Book className="w-3 h-3" />
            DOCS
          </Link>
          <Link
            href="/terminal"
            className="flex items-center gap-1 text-xs font-pixel text-[#E0E7FF]/70 hover:text-[#6366F1] transition-all duration-300 hover:glow-text"
          >
            <Terminal className="w-3 h-3" />
            TERMINAL
          </Link>
          <Link
            href="https://x.com/p7xLabs"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border-2 border-[#6366F1] text-[#E0E7FF] font-pixel text-xs hover:bg-[#6366F1] hover:text-white transition-all duration-300 animate-border-pulse"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            FOLLOW
          </Link>
        </div>

        <button
          className="md:hidden text-[#6366F1] p-2 border-2 border-[#6366F1]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A1A] border-2 border-[#6366F1] mx-4 p-6 animate-slide-up">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-3 font-pixel text-xs text-[#E0E7FF]/70 hover:text-[#6366F1] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {">"} {link.name}
            </Link>
          ))}
          <Link
            href="/docs"
            className="block py-3 font-pixel text-xs text-[#E0E7FF]/70 hover:text-[#6366F1] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {">"} DOCS
          </Link>
          <Link
            href="/terminal"
            className="block py-3 font-pixel text-xs text-[#E0E7FF]/70 hover:text-[#6366F1] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {">"} TERMINAL
          </Link>
          <Link
            href="https://x.com/p7xLabs"
            target="_blank"
            className="flex items-center gap-2 mt-4 font-pixel text-xs text-[#6366F1]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            @p7xLabs
          </Link>
        </div>
      )}
    </nav>
  )
}
