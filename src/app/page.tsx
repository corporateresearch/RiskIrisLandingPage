import Hero from "@/components/Hero"
import OfficialSources from "@/components/OfficialSources"
import FeatureGrid from "@/components/FeatureGrid"
import HowItWorks from "@/components/HowItWorks"
import UseCases from "@/components/UseCases"
import MatchAccuracy from "@/components/MatchAccuracy"
import RiskCategoriesCloud from "@/components/RiskCategoriesCloud"
import WhyRiskIris from "@/components/WhyRiskIris"
import SecurityDataHandling from "@/components/SecurityDataHandling"
import SeeItInAction from "@/components/SeeItInAction"
import StatsBand from "@/components/StatsBand"
import AboutCompany from "@/components/AboutCompany"
import EarlyAccessBand from "@/components/EarlyAccessBand"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import FinalCTA from "@/components/FinalCTA"

export default function Home() {
  return (
    <main>
      <Hero />
      <OfficialSources />
      <HowItWorks />
      <FeatureGrid />
      <UseCases />
      <MatchAccuracy />
      <RiskCategoriesCloud />
      <WhyRiskIris />
      <SecurityDataHandling />
      <SeeItInAction />
      <StatsBand />
      <AboutCompany />
      <EarlyAccessBand />
      <FAQ />
      <Contact />
      <FinalCTA />
    </main>
  )
}
