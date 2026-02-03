"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is p7xLabs?",
    answer:
      "p7xLabs is a privacy-native finance layer built on Solana. It lets users transact, swap, invest, and manage portfolios without exposing their wallets, strategies, or transaction history to the public blockchain.",
  },
  {
    question: "How does the Shadow Vault work?",
    answer:
      "When you deposit assets, they enter a shadow vault acting as a private sub-account. On-chain, only a deposit is visible, but your internal balance and all subsequent actions remain completely hidden from observers.",
  },
  {
    question: "Is my data truly private?",
    answer:
      "Yes. All financial actions flow through an encrypted shadow balance that hides activity details from on-chain observers. Your positions, entries, exits, and strategies cannot be tracked by snipers or analysts.",
  },
  {
    question: "Can I prove my activity if needed?",
    answer:
      "Absolutely. p7xLabs supports selective disclosure — you can generate optional proofs or reports for auditors, partners, or institutions. Transparency on-demand, not forced exposure.",
  },
  {
    question: "What stage is the project in?",
    answer:
      "p7xLabs is currently in early development. We've completed the foundational architecture and are now building the private balance layer. Follow @p7xLabs on X for updates.",
  },
  {
    question: "Is this non-custodial?",
    answer:
      "Yes, completely. You always own your wallets and maintain full control. Financial actions flow through encrypted infrastructure, but your keys remain yours.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-32 bg-[#0A0A1A]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-[#6366F1]/50 mb-4">// FAQ</p>
          <h2 className="font-pixel text-2xl md:text-4xl text-[#E0E7FF] glow-text mb-4">QUESTIONS</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-2 transition-all duration-300 ${
                openIndex === i ? "border-[#6366F1] bg-[#6366F1]/5" : "border-[#6366F1]/30"
              }`}
            >
              <button
                className="w-full p-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-pixel text-xs text-[#E0E7FF] pr-4">
                  {">"} {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#6366F1] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 animate-slide-up">
                  <p className="text-sm text-[#E0E7FF]/60 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
