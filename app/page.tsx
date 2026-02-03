import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PrivacySection } from "@/components/privacy-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ShadowVaultSection } from "@/components/shadow-vault-section"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { TeamSection } from "@/components/team-section"
import { CommunitySection } from "@/components/community-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { MatrixBackground } from "@/components/matrix-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A1A] overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <PrivacySection />
        <HowItWorksSection />
        <ShadowVaultSection />
        <FeaturesSection />
        <UseCasesSection />
        <RoadmapSection />
        <TeamSection />
        <CommunitySection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  )
}
