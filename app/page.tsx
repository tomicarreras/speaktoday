import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorkshopsSection } from "@/components/workshops-section"
import { MethodSection } from "@/components/method-section"
import { PricingSection } from "@/components/pricing-section"
import { EnrollmentForm } from "@/components/enrollment-form"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WorkshopsSection />
      <MethodSection />
      <PricingSection />
      <EnrollmentForm />
      <FaqSection />
      <Footer />
    </main>
  )
}
