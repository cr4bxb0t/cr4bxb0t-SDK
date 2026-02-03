"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Book, Shield, ArrowLeft, Layers, Users, FileCode, Terminal, Lock, Eye, Zap } from "lucide-react"

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Book,
    content: `p7xLabs is a privacy-native finance layer built on Solana,
designed to let users transact, swap, invest, and manage portfolios
without exposing their wallets, strategies, or transaction history.

████████████████████████████████████████████████████████████████
█                                                              █
█   MISSION: Enable truly private, permissionless finance      █
█   VISION: Become the backbone of confidential DeFi           █
█   METHOD: Shadow vaults + selective disclosure + Solana      █
█                                                              █
████████████████████████████████████████████████████████████████

WHAT WE BUILD:
▸ Privacy-native finance layer
▸ Shadow vault system for hidden balances
▸ Selective disclosure proofs
▸ Non-custodial architecture

This documentation covers everything you need to know about
using and building on p7xLabs.`,
  },
  {
    id: "shadow-vault",
    title: "Shadow Vault System",
    icon: Lock,
    content: `SHADOW VAULT - THE CORE OF P7XLABS PRIVACY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Shadow Vault is your private sub-account that hides all
activity from public blockchain observers.

HOW IT WORKS:
┌─────────────────────────────────────────────────────────────┐
│  [DEPOSIT] ──▶ [SHADOW VAULT] ──▶ [ACTIONS] ──▶ [WITHDRAW] │
│                                                             │
│  Public sees    Private        Hidden          Any wallet  │
│  deposit only   balance        operations      destination │
└─────────────────────────────────────────────────────────────┘

WHAT OBSERVERS SEE:
▸ Deposit transaction ........... [VISIBLE]
▸ Internal balance .............. [HIDDEN]
▸ Swaps & trades ................ [HIDDEN]
▸ Yield strategies .............. [HIDDEN]
▸ Withdrawal destination ........ [UNLINKABLE]

WHAT YOU CONTROL:
▸ Full balance visibility ....... [YOUR EYES ONLY]
▸ All position details .......... [YOUR EYES ONLY]
▸ P&L tracking .................. [YOUR EYES ONLY]
▸ Selective proofs .............. [WHEN YOU CHOOSE]`,
  },
  {
    id: "workflow",
    title: "Privacy Workflow",
    icon: Layers,
    content: `PRIVACY WORKFLOW - 4 STAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAGE 1: CONNECT & GENERATE PROFILE
────────────────────────────────────────────────────────────────
▸ Link your Solana wallet
▸ Generate a private cryptographic profile
▸ Separate identity for privacy actions
▸ Full user control preserved

STAGE 2: TRANSFER TO SHADOW VAULT
────────────────────────────────────────────────────────────────
▸ Deposit SOL and SPL tokens
▸ Assets enter shadow vault
▸ On-chain: only deposit visible
▸ Internal balance: completely hidden

STAGE 3: EXECUTE PRIVATE ACTIONS
────────────────────────────────────────────────────────────────
▸ Private swaps and trades
▸ Hidden yield strategies
▸ Discreet payments
▸ Portfolio adjustments
▸ All batched and executed invisibly

STAGE 4: SELECTIVE DISCLOSURE
────────────────────────────────────────────────────────────────
▸ Withdraw to any external wallet
▸ Generate optional proofs
▸ Create auditor reports
▸ Transparency on YOUR terms`,
  },
  {
    id: "features",
    title: "Core Features",
    icon: Zap,
    content: `CORE FEATURES & PHILOSOPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACCOUNT-LEVEL PRIVACY
────────────────────────────────────────────────────────────────
Your positions, entries, exits, and strategies cannot be
tracked by snipers or on-chain analysts.

DISCREET TRANSACTION FLOWS
────────────────────────────────────────────────────────────────
Even yield routes and swaps become invisible to direct
blockchain tracing.

SERIOUS TRADER SUPPORT
────────────────────────────────────────────────────────────────
Supports multi-asset, multi-venue strategies without
revealing sensitive information.

SELECTIVE DISCLOSURE
────────────────────────────────────────────────────────────────
Generate reports that reveal only what you choose.
Transparency on demand, not forced exposure.

FRICTIONLESS UX
────────────────────────────────────────────────────────────────
As simple as sending a message. No burner wallets or
complex privacy setups required.

NON-CUSTODIAL
────────────────────────────────────────────────────────────────
You always own your wallets. Financial actions flow
through encrypted shadow balance.`,
  },
  {
    id: "use-cases",
    title: "Use Cases",
    icon: Users,
    content: `USE CASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRIVATE TRADING
────────────────────────────────────────────────────────────────
Execute trades without revealing your strategy to
front-runners, copy-traders, and competitors.

INSTITUTIONAL FUNDS
────────────────────────────────────────────────────────────────
Manage large positions without market impact or
competitor surveillance. Enterprise-ready features.

YIELD STRATEGIES
────────────────────────────────────────────────────────────────
Farm yields across protocols without exposing your
alpha to the public blockchain.

PORTFOLIO MANAGEMENT
────────────────────────────────────────────────────────────────
Rebalance and adjust positions privately across
multiple assets and venues.

OTC & PAYMENTS
────────────────────────────────────────────────────────────────
Send discreet payments and execute OTC deals
without public traces.

COMPLIANCE
────────────────────────────────────────────────────────────────
Generate selective proofs for auditors and regulators
when needed. Privacy with accountability.`,
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: FileCode,
    content: `SYSTEM ARCHITECTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────────────────────────────────┐
│                      USER INTERFACE                         │
│              Web App | Mobile | SDK Integration             │
├─────────────────────────────────────────────────────────────┤
│                     PRIVACY LAYER                           │
│        Shadow Vault | Proof System | Disclosure Engine      │
├─────────────────────────────────────────────────────────────┤
│                    EXECUTION LAYER                          │
│         DEX Integration | Yield Routing | Batching          │
├─────────────────────────────────────────────────────────────┤
│                      SOLANA                                 │
│              Programs | State | Settlement                  │
└─────────────────────────────────────────────────────────────┘

COMPONENTS:
[1] SHADOW VAULT
    Private sub-accounts for hidden balances
    Encrypted state management
    Nullifier-based security

[2] PROOF SYSTEM
    Selective disclosure proofs
    Verifiable financial statements
    Compliance reporting tools

[3] EXECUTION ENGINE
    Private swap routing
    Hidden yield strategies
    Batched transactions

[4] INTEGRATION LAYER
    DEX connections
    Yield protocol integrations
    Cross-venue operations`,
  },
  {
    id: "roadmap",
    title: "Roadmap",
    icon: Eye,
    content: `DEVELOPMENT ROADMAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 1: FOUNDATIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [COMPLETED] ✓
├─ Architectural design
├─ Privacy assumptions research
├─ Solana-native infrastructure
└─ Core team assembly

PHASE 2: PRIVATE BALANCE LAYER ━━━━━━━━━━━━━━━━ [IN PROGRESS]
├─ Internal execution runtime
├─ Private accounts system
├─ Asset vaulting mechanism
└─ Hidden routing protocol

PHASE 3: PRIVATE SWAPS & YIELD ━━━━━━━━━━━━━━━━━━ [UPCOMING]
├─ DEX integration layer
├─ Yield venue connections
├─ Privacy runtime execution
└─ Batched transactions

PHASE 4: PROOFS & AGENTS ━━━━━━━━━━━━━━━━━━━━━━━━━ [FUTURE]
├─ Verifiable financial proofs
├─ Automated privacy agents
├─ Compliance reporting tools
└─ Institutional features`,
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
    content: `SECURITY PHILOSOPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

p7xLabs prioritizes non-custodial security and user control
at every layer of the architecture.

CORE PRINCIPLES:
▸ Non-Custodial ........... You always control your keys
▸ Trust Minimization ...... Minimal trusted components
▸ Privacy by Default ...... No data exposure without consent
▸ Selective Disclosure .... You choose what to reveal
▸ Open Development ........ Building in public

SECURITY MEASURES:
┌─────────────────────────────────────────────────────────────┐
│ [◻] Security audits planned                                 │
│ [◻] Formal verification in progress                         │
│ [◻] Bug bounty program coming                               │
│ [✓] Non-custodial architecture                              │
│ [✓] No single points of failure                             │
│ [✓] Privacy-preserving design                               │
└─────────────────────────────────────────────────────────────┘

RISK ACKNOWLEDGMENT:
This is an early-stage project. The technology is experimental
and should be treated as high-risk infrastructure until
fully audited and battle-tested.`,
  },
  {
    id: "community",
    title: "Community",
    icon: Users,
    content: `COMMUNITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

p7xLabs is built by the community, for the community.

OFFICIAL CHANNELS:
┌─────────────────────────────────────────────────────────────┐
│ X (Twitter)    │ https://x.com/p7xLabs                      │
│ Discord        │ Coming soon                                │
│ Telegram       │ Coming soon                                │
│ GitHub         │ Coming soon                                │
└─────────────────────────────────────────────────────────────┘

GET INVOLVED:
▸ Follow for updates ........ @p7xLabs on X
▸ Join discussions .......... Discord (coming)
▸ Contribute code ........... GitHub (coming)
▸ Provide feedback .......... Community channels

    ╔═══════════════════════════════════════════════════════╗
    ║                                                       ║
    ║   "Privacy is not about having something to hide.    ║
    ║    Privacy is about having something to protect."     ║
    ║                                                       ║
    ╚═══════════════════════════════════════════════════════╝

Follow us: https://x.com/p7xLabs`,
  },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState(sections[0])

  return (
    <div className="min-h-screen bg-[#0A0A1A]">
      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-20" />

      {/* Header */}
      <header className="border-b-2 border-[#6366F1]/50 bg-[#0A0A1A]/95 sticky top-0 z-40">
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
              <span className="font-pixel text-sm text-[#E0E7FF] glow-text">DOCS</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/terminal"
              className="px-4 py-2 border-2 border-[#6366F1]/50 text-xs font-pixel text-[#E0E7FF]/70 hover:text-[#6366F1] hover:border-[#6366F1] transition-all flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              TERMINAL
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

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <nav className="border-2 border-[#6366F1]/30 bg-[#050510] p-4">
              <h3 className="font-pixel text-xs text-[#6366F1]/50 mb-4 px-3">
                {"<"} DOCUMENTATION {">"}
              </h3>
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-300 ${
                        activeSection.id === section.id
                          ? "bg-[#6366F1]/10 text-[#6366F1] border-l-2 border-[#6366F1]"
                          : "text-[#E0E7FF]/50 hover:text-[#6366F1] hover:bg-[#6366F1]/5"
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      <span className="font-pixel text-xs">{section.title}</span>
                      {activeSection.id === section.id && <ChevronRight className="w-4 h-4 ml-auto animate-pulse" />}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <main className="border-2 border-[#6366F1]/30 bg-[#050510] p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 border-2 border-[#6366F1] flex items-center justify-center animate-pulse-glow">
                <activeSection.icon className="w-6 h-6 text-[#6366F1]" />
              </div>
              <h1 className="font-pixel text-xl text-[#E0E7FF] glow-text">{activeSection.title}</h1>
            </div>
            <div className="prose prose-invert max-w-none">
              <pre className="font-mono text-sm text-[#E0E7FF]/80 leading-relaxed whitespace-pre-wrap bg-transparent border-0 p-0">
                {activeSection.content}
              </pre>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
