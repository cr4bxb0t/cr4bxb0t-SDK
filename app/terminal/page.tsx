"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Book } from "lucide-react"

interface TerminalLine {
  type: "input" | "output" | "error" | "success" | "info" | "privacy"
  content: string
}

const commands: Record<string, string> = {
  help: `
╔════════════════════════════════════════════════════════════════════╗
║                    P7XLABS TERMINAL v1.0                           ║
║              [ PRIVACY-NATIVE FINANCE ON SOLANA ]                  ║
╠════════════════════════════════════════════════════════════════════╣
║  CORE COMMANDS                                                     ║
║  ──────────────────────────────────────────────────────────────── ║
║  help          - Display this help message                         ║
║  about         - What is p7xLabs?                                  ║
║  privacy       - Why privacy matters                               ║
║  workflow      - How the system works                              ║
║  vault         - Shadow vault explained                            ║
║  features      - Core features                                     ║
║  usecases      - Who is it for?                                    ║
║  roadmap       - Development roadmap                               ║
║  team          - About the team                                    ║
║  social        - Official channels                                 ║
║  ──────────────────────────────────────────────────────────────── ║
║  UTILITY COMMANDS                                                  ║
║  ──────────────────────────────────────────────────────────────── ║
║  clear         - Clear terminal                                    ║
║  version       - Version info                                      ║
║  status        - Network status                                    ║
║  shield        - Activate privacy shield                           ║
║  shadow        - Enter shadow mode                                 ║
╚════════════════════════════════════════════════════════════════════╝`,
  about: `
┌────────────────────────────────────────────────────────────────────┐
│                        ABOUT P7XLABS                               │
└────────────────────────────────────────────────────────────────────┘

p7xLabs is a privacy-native finance layer built on Solana.

████████████████████████████████████████████████████████████████████
█                                                                  █
█   THE FIRST TRULY PRIVATE DEFI LAYER ON SOLANA                   █
█                                                                  █
█   ▸ Private by Default - Shadow vault system                     █
█   ▸ Non-Custodial - You always control your keys                 █
█   ▸ Selective Disclosure - Prove only what you choose            █
█   ▸ Solana Speed - Sub-second finality                           █
█                                                                  █
████████████████████████████████████████████████████████████████████

THE MISSION:
Transact, swap, invest, and manage portfolios without exposing
your wallet, strategies, or transaction history to the public.

Follow us: https://x.com/p7xLabs`,
  privacy: `
┌────────────────────────────────────────────────────────────────────┐
│                      WHY PRIVACY MATTERS                           │
└────────────────────────────────────────────────────────────────────┘

The current financial system on-chain is completely transparent.
This creates serious problems:

THE PROBLEM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Every transaction publicly visible
▸ Wallet history permanently exposed
▸ Snipers track your strategies
▸ Copy-traders front-run your moves
▸ No privacy from surveillance

THE P7XLABS SOLUTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Transaction amounts hidden
▸ Wallet strategies private
▸ No trace of DeFi positions
▸ Selective disclosure when YOU choose

    ╔═══════════════════════════════════════════════════════╗
    ║                                                       ║
    ║   "Privacy is not about hiding.                      ║
    ║    Privacy is about protecting."                      ║
    ║                                                       ║
    ╚═══════════════════════════════════════════════════════╝`,
  workflow: `
┌────────────────────────────────────────────────────────────────────┐
│                     THE PRIVACY WORKFLOW                           │
└────────────────────────────────────────────────────────────────────┘

Four stages to complete financial privacy:

STAGE 1: CONNECT & GENERATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Link Solana wallet
▸ Generate private profile
▸ Separate cryptographic identity

STAGE 2: TRANSFER TO SHADOW VAULT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Deposit SOL/SPL tokens
▸ On-chain: only deposit visible
▸ Internal balance: hidden

STAGE 3: EXECUTE PRIVATELY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Private swaps & trades
▸ Hidden yield strategies
▸ Discreet payments

STAGE 4: SELECTIVE DISCLOSURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Withdraw to any wallet
▸ Generate optional proofs
▸ Transparency on YOUR terms`,
  vault: `
┌────────────────────────────────────────────────────────────────────┐
│                       SHADOW VAULT                                 │
└────────────────────────────────────────────────────────────────────┘

The Shadow Vault is your private sub-account.

HOW IT WORKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    [YOUR WALLET] ──▶ [SHADOW VAULT] ──▶ [ANY WALLET]
                                                     
    Public deposit    Private         Unlinkable    
    only visible      operations      withdrawal    

WHAT OBSERVERS SEE:
▸ Deposit transaction ........... [VISIBLE]
▸ Internal balance .............. [████████████] HIDDEN
▸ Swaps & trades ................ [████████████] HIDDEN
▸ Yield strategies .............. [████████████] HIDDEN
▸ Withdrawal destination ........ [████████████] UNLINKABLE

WHAT YOU SEE:
▸ Full balance .................. [████████████] VISIBLE
▸ All positions ................. [████████████] VISIBLE
▸ P&L tracking .................. [████████████] VISIBLE
▸ Complete history .............. [████████████] VISIBLE`,
  features: `
┌────────────────────────────────────────────────────────────────────┐
│                       CORE FEATURES                                │
└────────────────────────────────────────────────────────────────────┘

p7xLabs provides speed, privacy, and control simultaneously.

PRIVACY FEATURES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Account-level privacy - No tracking by snipers
▸ Discreet transactions - Hidden from tracing
▸ Selective disclosure - Prove what you choose
▸ Non-custodial - You always control your keys

USER EXPERIENCE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Frictionless UX - Simple as sending a message
▸ No burner wallets needed
▸ No complex setups
▸ Works with existing Solana wallet`,
  usecases: `
┌────────────────────────────────────────────────────────────────────┐
│                        USE CASES                                   │
└────────────────────────────────────────────────────────────────────┘

WHO IS P7XLABS FOR?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▸ PRIVATE TRADERS
  Execute without revealing strategy to front-runners

▸ INSTITUTIONAL FUNDS
  Manage large positions without market impact

▸ YIELD FARMERS
  Farm without exposing your alpha

▸ PORTFOLIO MANAGERS
  Rebalance privately across assets

▸ OTC & PAYMENTS
  Discreet P2P transactions

▸ COMPLIANCE-READY
  Generate selective proofs for auditors`,
  roadmap: `
┌────────────────────────────────────────────────────────────────────┐
│                    DEVELOPMENT ROADMAP                             │
└────────────────────────────────────────────────────────────────────┘

PHASE 1: FOUNDATIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [COMPLETED] ✓
├─ Architectural design
├─ Privacy research
├─ Solana infrastructure
└─ Team assembly

PHASE 2: PRIVATE BALANCE ━━━━━━━━━━━━━━━━━━━━━━━━ [IN PROGRESS] ▶
├─ Execution runtime
├─ Private accounts
├─ Asset vaulting
└─ Hidden routing

PHASE 3: SWAPS & YIELD ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [UPCOMING] ○
├─ DEX integration
├─ Yield connections
└─ Batched execution

PHASE 4: PROOFS & AGENTS ━━━━━━━━━━━━━━━━━━━━━━━━━━ [FUTURE] ○
├─ Verifiable proofs
├─ Privacy agents
└─ Institutional features`,
  team: `
┌────────────────────────────────────────────────────────────────────┐
│                        THE TEAM                                    │
└────────────────────────────────────────────────────────────────────┘

Anonymous builders united by a mission:
Financial privacy for everyone.

    ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
    │ PHANTOM │ │ CIPHER  │ │ SHADOW  │ │ VECTOR  │
    │ Founder │ │  Arch.  │ │  Lead   │ │ Growth  │
    └─────────┘ └─────────┘ └─────────┘ └─────────┘

BACKGROUNDS:
▸ Privacy researchers
▸ Ex-core L1 contributors  
▸ Solana natives since 2021
▸ DeFi strategists

VALUES:
▸ CODE IS LAW - Open, audited, tested
▸ PRIVACY FIRST - Default privacy
▸ COMMUNITY DRIVEN - Built for users`,
  social: `
┌────────────────────────────────────────────────────────────────────┐
│                    OFFICIAL CHANNELS                               │
└────────────────────────────────────────────────────────────────────┘

CONNECT WITH P7XLABS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ X (Twitter) ...... https://x.com/p7xLabs
▸ Discord .......... Coming soon
▸ Telegram ......... Coming soon
▸ GitHub ........... Coming soon

RESOURCES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Documentation .... /docs
▸ Terminal ......... /terminal (you are here)

Follow @p7xLabs for updates, alpha, and announcements!`,
  version: `
p7xLabs Terminal v1.0.0
Protocol: Shadow Vault v0.1
Build: 2024.12.09
Network: Solana Devnet
Status: BUILDING`,
  status: `
┌────────────────────────────────────────────────────────────────────┐
│                      NETWORK STATUS                                │
└────────────────────────────────────────────────────────────────────┘

SYSTEM STATUS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Shadow Vault     [████████░░] IN DEVELOPMENT
▸ Proof System     [██████░░░░] DESIGNING
▸ DEX Integration  [████░░░░░░] PLANNED
▸ Yield Routes     [████░░░░░░] PLANNED
▸ Mainnet          [░░░░░░░░░░] UPCOMING

PROJECT PHASE:
┌────────────────────┬───────────────────────────────────────────────┐
│ Current Phase      │ Phase 2: Private Balance Layer                │
│ Progress           │ Early Development                             │
│ Network            │ Solana                                        │
│ Status             │ Building in Public                            │
└────────────────────┴───────────────────────────────────────────────┘

Last update: ${new Date().toLocaleString()}`,
  shield: `
Activating privacy shield...

    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░                                                     ░░
    ░░               ████████████████████                  ░░
    ░░            ███░░░░░░░░░░░░░░░░░░░░███               ░░
    ░░          ██░░░░░░░░░░░░░░░░░░░░░░░░░░██             ░░
    ░░         █░░░░░░░░░░  SHIELD  ░░░░░░░░░█             ░░
    ░░         █░░░░░░░░░░ ACTIVATED ░░░░░░░░█             ░░
    ░░          ██░░░░░░░░░░░░░░░░░░░░░░░░░██              ░░
    ░░            ███░░░░░░░░░░░░░░░░░░░███                ░░
    ░░               ████████████████████                  ░░
    ░░                                                     ░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

Your transactions are now shielded.
Your identity is protected.
Your strategy is hidden.

Welcome to p7xLabs.`,
  shadow: `
Entering shadow mode...

    ████████████████████████████████████████ 100%

    [SHADOW MODE ACTIVATED]

    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░                                                     ░░
    ░░   > CONNECTING TO SHADOW VAULT...                  ░░
    ░░   > ENCRYPTING BALANCE...                          ░░
    ░░   > HIDING TRANSACTIONS...                         ░░
    ░░                                                     ░░
    ░░   Y O U   A R E   N O W   I N V I S I B L E        ░░
    ░░                                                     ░░
    ░░   Your wallet: [SHIELDED]                          ░░
    ░░   Your balance: [ENCRYPTED]                        ░░
    ░░   Your strategy: [HIDDEN]                          ░░
    ░░                                                     ░░
    ░░   Follow: https://x.com/p7xLabs                    ░░
    ░░                                                     ░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

Privacy is not a feature. It's a right.`,
}

export default function TerminalPage() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "success", content: "════════════════════════════════════════════════════════════════════════" },
    { type: "success", content: "" },
    { type: "success", content: "     ██████╗ ███████╗██╗  ██╗██╗      █████╗ ██████╗ ███████╗" },
    { type: "success", content: "     ██╔══██╗╚════██║╚██╗██╔╝██║     ██╔══██╗██╔══██╗██╔════╝" },
    { type: "success", content: "     ██████╔╝    ██╔╝ ╚███╔╝ ██║     ███████║██████╔╝███████╗" },
    { type: "success", content: "     ██╔═══╝    ██╔╝  ██╔██╗ ██║     ██╔══██║██╔══██╗╚════██║" },
    { type: "success", content: "     ██║       ██║   ██╔╝ ██╗███████╗██║  ██║██████╔╝███████║" },
    { type: "success", content: "     ╚═╝       ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝" },
    { type: "success", content: "" },
    { type: "success", content: "════════════════════════════════════════════════════════════════════════" },
    { type: "output", content: "            p7xLabs Terminal v1.0 | PRIVACY-NATIVE FINANCE" },
    { type: "output", content: "                 Building the Future of Private DeFi" },
    { type: "success", content: "════════════════════════════════════════════════════════════════════════" },
    { type: "output", content: "" },
    { type: "output", content: "Type 'help' to see available commands. Type 'shadow' to enter shadow mode." },
    { type: "output", content: "" },
  ])
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    setLines((prev) => [...prev, { type: "input", content: `p7x@terminal:~$ ${cmd}` }])

    if (trimmed === "clear") {
      setLines([
        { type: "output", content: "p7xLabs Terminal v1.0" },
        { type: "output", content: "Type 'help' for available commands." },
        { type: "output", content: "" },
      ])
      return
    }

    if (commands[trimmed]) {
      const type = trimmed === "shadow" || trimmed === "shield" ? "privacy" : "success"
      setLines((prev) => [...prev, { type, content: commands[trimmed] }])
    } else if (trimmed === "") {
      // Do nothing
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: "error",
          content: `Command not found: '${trimmed}'\nType 'help' to see available commands.`,
        },
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput("")
  }

  return (
    <div className="min-h-screen bg-[#0A0A1A]">
      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-20" />

      {/* Header */}
      <header className="border-b-2 border-[#6366F1]/50 bg-[#0A0A1A]/95">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#E0E7FF]/50 hover:text-[#6366F1] transition-colors font-pixel text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK
            </Link>
            <div className="w-px h-6 bg-[#6366F1]/30" />
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 border-2 border-[#6366F1] rounded-lg overflow-hidden bg-[#4F46E5]">
                <Image src="/images/p7xLabs.png" alt="p7xLabs" fill className="object-contain" />
              </div>
              <span className="font-pixel text-sm text-[#E0E7FF] glow-text">TERMINAL</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/docs"
              className="px-4 py-2 border-2 border-[#6366F1]/50 text-xs font-pixel text-[#E0E7FF]/70 hover:text-[#6366F1] hover:border-[#6366F1] transition-all flex items-center gap-2"
            >
              <Book className="w-4 h-4" />
              DOCS
            </Link>
            <Link
              href="https://x.com/p7xLabs"
              target="_blank"
              className="px-4 py-2 border-2 border-[#6366F1] text-xs font-pixel text-[#E0E7FF] hover:bg-[#6366F1] hover:text-white transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              FOLLOW
            </Link>
          </div>
        </div>
      </header>

      {/* Terminal */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="border-2 border-[#6366F1]/50 bg-[#050510] overflow-hidden">
          {/* Terminal header */}
          <div className="border-b-2 border-[#6366F1]/30 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 font-pixel text-xs text-[#E0E7FF]/50">p7x@terminal ~ privacy-native-finance</span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="h-[60vh] overflow-y-auto p-6 font-mono text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap mb-1 ${
                  line.type === "input"
                    ? "text-[#6366F1]"
                    : line.type === "error"
                      ? "text-red-400"
                      : line.type === "success"
                        ? "text-[#6366F1]"
                        : line.type === "privacy"
                          ? "text-[#8B5CF6]"
                          : "text-[#E0E7FF]/70"
                }`}
              >
                {line.content}
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-[#6366F1]">p7x@terminal:~$&nbsp;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-[#E0E7FF] outline-none caret-[#6366F1]"
                autoFocus
                spellCheck={false}
              />
            </form>
          </div>
        </div>

        {/* Quick commands */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {["help", "about", "privacy", "workflow", "shadow"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                handleCommand(cmd)
                inputRef.current?.focus()
              }}
              className="px-4 py-2 border border-[#6366F1]/30 text-xs font-pixel text-[#E0E7FF]/50 hover:text-[#6366F1] hover:border-[#6366F1] transition-all"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
