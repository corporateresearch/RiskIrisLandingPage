import { AnalystScene } from "@/components/scenes/AnalystScene"
import { BenefitsScene } from "@/components/scenes/BenefitsScene"
import { ClosingHeadline, ClosingPulse } from "@/components/scenes/ClosingScene"
import { FinesScene } from "@/components/scenes/FinesScene"
import { FloatField } from "@/components/scenes/FloatField"
import { HeroFlood } from "@/components/scenes/HeroFlood"
import { NextButton } from "@/components/scenes/NextButton"
import { SignalScene } from "@/components/scenes/SignalScene"
import { StageRail } from "@/components/scenes/StageRail"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { benefits, closing, hero, problem, proof, solution } from "@/content/home"
import { routes } from "@/lib/site"

function Eyebrow({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-text">
      <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-brand px-2 text-on-brand">
        {String(index).padStart(2, "0")}
      </span>
      {children}
    </p>
  )
}

export default function HomePage() {
  return (
    <>
      <StageRail />

      <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line">
        <FloatField direction="diagonal" shape="square" salt={2} />
        <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 id="hero-title" className="text-3xl sm:text-4xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg">{hero.lead}</p>
            <div className="mt-9">
              <NextButton href="#problem">{hero.next}</NextButton>
            </div>
          </div>
          <HeroFlood />
        </Container>
      </section>

      <section id="problem" aria-labelledby="problem-title" className="relative overflow-hidden bg-subtle">
        <FloatField direction="down" shape="cross" salt={5} tone="muted" count={22} />
        <Container className="relative py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <Eyebrow index={1}>{problem.eyebrow}</Eyebrow>
              <h2 id="problem-title" className="text-2xl sm:text-3xl">
                {problem.title}
              </h2>
              <p className="mt-5 text-lg">{problem.lead}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <p>
                  <span className="block font-heading text-4xl font-bold leading-none text-heading">
                    {problem.example.from}
                  </span>
                  <span className="text-sm">{problem.example.fromLabel}</span>
                </p>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 48 24"
                  className="h-6 w-12 text-brand"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h42M34 4l10 8-10 8" />
                </svg>
                <p>
                  <span className="block font-heading text-4xl font-bold leading-none text-brand">
                    {problem.example.to}
                  </span>
                  <span className="text-sm">{problem.example.toLabel}</span>
                </p>
              </div>
              <p className="mt-3 text-xs text-muted">{problem.example.note}</p>
            </div>
            <AnalystScene />
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problem.pains.map((pain) => (
              <li key={pain.title} className="rounded-lg border border-line bg-raised p-5 shadow-card">
                <h3 className="text-lg">{pain.title}</h3>
                <p className="mt-2 text-sm">{pain.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <NextButton href="#solution">{problem.next}</NextButton>
          </div>
        </Container>
      </section>

      <section id="solution" aria-labelledby="solution-title" className="relative overflow-hidden">
        <FloatField direction="up" shape="dot" salt={8} count={26} />
        <Container className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow index={2}>{solution.eyebrow}</Eyebrow>
            </div>
            <h2 id="solution-title" className="text-2xl sm:text-3xl">
              {solution.title}
            </h2>
            <p className="mt-5 text-lg">{solution.lead}</p>
          </div>
          <div className="mt-8">
            <SignalScene />
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {solution.points.map((point) => (
              <li key={point.title} className="rounded-lg border border-line bg-raised p-6 shadow-card">
                <h3 className="text-lg">{point.title}</h3>
                <p className="mt-2 text-sm">{point.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-muted">{solution.hint}</p>
          <div className="mt-10 flex justify-center">
            <NextButton href="#benefits">{solution.next}</NextButton>
          </div>
        </Container>
      </section>

      <section id="benefits" aria-labelledby="benefits-title" className="relative overflow-hidden bg-subtle">
        <FloatField direction="right" shape="ring" salt={11} />
        <Container className="relative py-16 sm:py-24">
          <Eyebrow index={3}>{benefits.eyebrow}</Eyebrow>
          <h2 id="benefits-title" className="mb-10 text-2xl sm:text-3xl">
            {benefits.title}
          </h2>
          <BenefitsScene />
          <div className="mt-12">
            <NextButton href="#proof">{benefits.next}</NextButton>
          </div>
        </Container>
      </section>

      <section id="proof" aria-labelledby="proof-title" className="relative overflow-hidden">
        <FloatField direction="left" shape="square" salt={14} tone="muted" />
        <Container className="relative py-16 sm:py-24">
          <Eyebrow index={4}>{proof.eyebrow}</Eyebrow>
          <h2 id="proof-title" className="text-2xl sm:text-3xl">
            {proof.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg">{proof.lead}</p>
          <div className="mt-10">
            <FinesScene />
          </div>
          <p className="mt-8 max-w-2xl text-sm text-muted">{proof.disclaimer}</p>
          <div className="mt-10">
            <NextButton href="#book">{proof.next}</NextButton>
          </div>
        </Container>
      </section>

      <section
        id="book"
        aria-labelledby="book-title"
        className="on-ink relative overflow-hidden bg-ink text-on-ink-muted"
      >
        <ClosingPulse />
        <Container className="relative py-24 text-center sm:py-32">
          <ClosingHeadline />
          <p className="mx-auto mt-6 max-w-xl text-lg">{closing.lead}</p>
          <div className="mt-10 flex justify-center">
            <Button href={routes.demo} variant="accent" size="lg" className="min-h-14 px-9 text-lg">
              {closing.cta}
            </Button>
          </div>
          <p className="mt-5 text-sm">{closing.note}</p>
        </Container>
      </section>
    </>
  )
}
