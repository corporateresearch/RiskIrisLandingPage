import { FactsBand } from "@/components/sections/FactsBand"
import { FaqTeaser } from "@/components/sections/FaqTeaser"
import { FinalCta } from "@/components/sections/FinalCta"
import { Hero } from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { ListsStrip } from "@/components/sections/ListsStrip"
import { Platform } from "@/components/sections/Platform"
import { Pricing } from "@/components/sections/Pricing"
import { ProductTour } from "@/components/sections/ProductTour"
import { Security } from "@/components/sections/Security"
import { UseCases } from "@/components/sections/UseCases"
import { SHOW_PRICING } from "@/lib/site"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ListsStrip />
      <HowItWorks />
      <Platform />
      <ProductTour />
      <UseCases />
      {SHOW_PRICING && <Pricing />}
      <Security />
      <FactsBand />
      <FaqTeaser />
      <FinalCta />
    </>
  )
}
