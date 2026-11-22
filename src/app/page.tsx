import { AnalystVideo } from "@/components/scenes/AnalystVideo"
import { BenefitNumbers, VariantCycler } from "@/components/scenes/BenefitsScene"
import { ClosingHeadline } from "@/components/scenes/ClosingScene"
import { FinesLedger, FinesTotal } from "@/components/scenes/FinesScene"
import { HeroStage } from "@/components/scenes/HeroStage"
import { NextButton } from "@/components/scenes/NextButton"
import { SignalScene } from "@/components/scenes/SignalScene"
import { StageRail } from "@/components/scenes/StageRail"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { benefits, closing, hero, problem, proof, solution } from "@/content/home"
import { routes } from "@/lib/site"

/**
 * One section per screen. The cinematic sections (hero, problem, closing)
 * carry the "night" class and stay dark in both themes; the reading
 * sections between them follow the visitor's theme.
 *
 * Every two-column section uses the same split, so the right-hand column
 * starts on one shared line down the whole page.
 */
const screen = "relative flex flex-col justify-center py-16 lg:min-h-[calc(100svh-4rem)]"
const split = "grid items-start gap-x-6 gap-y-12 lg:grid-cols-12"
const left = "lg:col-span-6 lg:pr-10"
const right = "lg:col-span-6"
const figure = "font-heading text-3xl font-light leading-none tracking-tight tabular-nums sm:text-4xl"

export default function HomePage() {
  return (
    <>
      <StageRail />

      <section id="hero" aria-labelledby="hero-title" className={`night bg-canvas ${screen}`}>
        <Container className={split}>
          <div className={left}>
            <h1 id="hero-title" className="text-3xl sm:text-4xl">
              {hero.title}
            </h1>
            <p className="mt-8 max-w-[34rem] text-lg">{hero.lead}</p>
            <div className="mt-10">
              <NextButton href="#problem">{hero.next}</NextButton>
            </div>
          </div>
          <div className={right}>
            <HeroStage />
          </div>
        </Container>
      </section>

      <section id="problem" aria-labelledby="problem-title" className={`night bg-subtle ${screen}`}>
        <Container>
          <div className={split}>
            <div className={left}>
              <h2 id="problem-title" className="text-2xl sm:text-3xl">
                {problem.title}
              </h2>
              <p className="mt-6 max-w-[34rem] text-lg">{problem.lead}</p>
              <div className="mt-8 flex items-end gap-6">
                <p>
                  <span className={`block text-heading ${figure}`}>{problem.example.from}</span>
                  <span className="mt-2 block text-sm">{problem.example.fromLabel}</span>
                </p>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 48 24"
                  className="mb-9 h-5 w-10 shrink-0 text-muted"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h42M34 4l10 8-10 8" />
                </svg>
                <p>
                  <span className={`block text-accent ${figure}`}>{problem.example.to}</span>
                  <span className="mt-2 block text-sm">{problem.example.toLabel}</span>
                </p>
              </div>
              <p className="mt-3 text-xs text-muted">{problem.example.note}</p>
            </div>
            <div className={right}>
              <AnalystVideo />
            </div>
          </div>

          <ul className="mt-12 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {problem.pains.map((pain) => (
              <li key={pain.title}>
                <h3 className="text-lg">{pain.title}</h3>
                <p className="mt-1.5 text-sm">{pain.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <NextButton href="#solution">{problem.next}</NextButton>
          </div>
        </Container>
      </section>

      <section id="solution" aria-labelledby="solution-title" className={`bg-canvas ${screen}`}>
        <Container>
          <div className={split}>
            <div className={left}>
              <h2 id="solution-title" className="text-2xl sm:text-3xl">
                {solution.title}
              </h2>
              <p className="mt-6 max-w-[34rem] text-lg">{solution.lead}</p>
              <p className="mt-6 max-w-[34rem] text-sm text-muted">{solution.hint}</p>
            </div>
            <div className={right}>
              <SignalScene />
            </div>
          </div>
          <ul className="mt-12 grid gap-x-6 gap-y-6 sm:grid-cols-3">
            {solution.points.map((point) => (
              <li key={point.title}>
                <h3 className="text-lg">{point.title}</h3>
                <p className="mt-1.5 text-sm">{point.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <NextButton href="#benefits">{solution.next}</NextButton>
          </div>
        </Container>
      </section>

      <section id="benefits" aria-labelledby="benefits-title" className={`bg-subtle ${screen}`}>
        <Container>
          <div className={split}>
            <div className={left}>
              <h2 id="benefits-title" className="text-2xl sm:text-3xl">
                {benefits.title}
              </h2>
              <BenefitNumbers />
              <div className="mt-10">
                <h3 className="mb-1 text-lg">{benefits.variantsTitle}</h3>
                <VariantCycler />
              </div>
            </div>
            <ul className={`${right} border-t border-line`}>
              {benefits.cards.map((item) => (
                <li key={item.title} className="grid gap-x-6 gap-y-1 border-b border-line py-4 sm:grid-cols-2">
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-sm">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <NextButton href="#proof">{benefits.next}</NextButton>
          </div>
        </Container>
      </section>

      <section id="proof" aria-labelledby="proof-title" className={`bg-canvas ${screen}`}>
        <Container>
          <div className={split}>
            <div className={left}>
              <h2 id="proof-title" className="text-2xl sm:text-3xl">
                {proof.title}
              </h2>
              <p className="mt-6 max-w-[34rem] text-lg">{proof.lead}</p>
            </div>
            <div className={right}>
              <FinesTotal label={proof.totalLabel} />
            </div>
          </div>
          <div className="mt-10">
            <FinesLedger showAllLabel={proof.showAll} />
          </div>
          <p className="mt-4 max-w-[44rem] text-sm text-muted">{proof.disclaimer}</p>
          <div className="mt-8">
            <NextButton href="#book">{proof.next}</NextButton>
          </div>
        </Container>
      </section>

      <section id="book" aria-labelledby="book-title" className={`night bg-canvas ${screen}`}>
        <Container className={split}>
          <div className={left}>
            <ClosingHeadline />
            <p className="mt-8 max-w-[34rem] text-lg">{closing.lead}</p>
            <div className="mt-10">
              <Button href={routes.demo} variant="accent" size="lg" className="min-h-14 px-9 text-lg">
                {closing.cta}
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted">{closing.note}</p>
          </div>
          <div className={right}>
            <h3 className="text-lg">{closing.stepsTitle}</h3>
            <ol className="mt-4 border-t border-line">
              {closing.steps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[3.5rem_1fr] items-baseline border-b border-line py-5">
                  <span aria-hidden="true" className="font-heading text-2xl font-light text-accent tabular-nums">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-heading">{step.title}</span>
                    <span className="mt-1 block text-sm">{step.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  )
}
