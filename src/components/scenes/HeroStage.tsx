"use client"

import dynamic from "next/dynamic"
import { useCallback, useRef, useState } from "react"
import { hero } from "@/content/home"
import { site } from "@/lib/site"

const HeroRelief = dynamic(() => import("./HeroRelief"), { ssr: false })

const formatCount = (value: number, done: boolean) => `${value.toLocaleString("en-GB")}${done ? "+" : ""}`

/**
 * Hero visual: the 3D block figure, the climbing "hits to review" counter
 * and the closing line. If WebGL is unavailable the source image is shown
 * as a flat grid instead, so the frame is never empty.
 */
export function HeroStage() {
  const counterRef = useRef<HTMLSpanElement>(null)
  const doneRef = useRef(false)
  const [done, setDone] = useState(false)
  const [ready, setReady] = useState(false)
  const [started, setStarted] = useState(false)
  const [failed, setFailed] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [run, setRun] = useState(0)

  const onCount = useCallback((count: number, finished: boolean) => {
    if (counterRef.current) counterRef.current.textContent = formatCount(count, finished)
    if (finished !== doneRef.current) {
      doneRef.current = finished
      setDone(finished)
    }
  }, [])
  const onReady = useCallback(() => {
    setReady(true)
    setStarted(true)
  }, [])
  const onFail = useCallback(() => {
    setFailed(true)
    doneRef.current = true
    setDone(true)
    if (counterRef.current) counterRef.current.textContent = formatCount(1000, true)
  }, [])

  function replay() {
    doneRef.current = false
    setDone(false)
    setPlaying(true)
    setRun((value) => value + 1)
  }

  return (
    <div className="w-full">
      <div
        role="img"
        aria-label="Animation: more than a thousand small blocks rise one by one and assemble into the figure of a person, while a counter of results to review climbs past one thousand."
        className="relative mx-auto aspect-[5/4] w-full max-w-[34rem]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny pixel grid shown only as a fallback */}
        <img
          src={site.heroRelief}
          alt=""
          width={112}
          height={112}
          className={`absolute inset-[12%] h-[76%] w-[76%] transition-opacity duration-500 [image-rendering:pixelated] ${
            ready && !failed ? "opacity-0" : "opacity-40"
          }`}
        />
        {!failed && (
          <HeroRelief
            src={site.heroRelief}
            playing={playing}
            run={run}
            onCount={onCount}
            onReady={onReady}
            onFail={onFail}
          />
        )}

        <p aria-hidden="true" className="pointer-events-none absolute left-0 top-0">
          <span
            ref={counterRef}
            className="block font-heading text-3xl font-light leading-none tracking-tight text-accent tabular-nums sm:text-4xl"
          >
            0
          </span>
          <span className="mt-2 block text-xs font-semibold uppercase tracking-widest text-muted">
            {hero.counterLabel}
          </span>
        </p>
      </div>

      <p
        className={`mx-auto max-w-[34rem] transition-[opacity,transform] duration-700 ${
          done || !started ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <span className="block font-heading text-2xl font-light tracking-tight text-heading sm:text-3xl">
          {hero.punchline}
        </span>
        <span className="mt-1 block text-base">{hero.punchlineSub}</span>
      </p>

      {!failed && (
        <div className="mx-auto mt-2 flex max-w-[34rem] gap-5 text-xs font-medium text-muted">
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-brand"
          >
            {playing ? "Pause the animation" : "Play the animation"}
          </button>
          <button
            type="button"
            onClick={replay}
            className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-brand"
          >
            Replay the search
          </button>
        </div>
      )}
    </div>
  )
}
