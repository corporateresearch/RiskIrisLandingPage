"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Problem scene: a short looping animation of an analyst worn down by an
 * endless list of results. Silent, with a pause control. It does not
 * autoplay for visitors who ask for reduced motion; they see a still frame.
 */
export function AnalystVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    video.play().catch(() => {
      // Autoplay can be blocked; the play button still works.
    })
  }, [])

  function toggle() {
    const video = ref.current
    if (!video) return
    if (video.paused) void video.play()
    else video.pause()
  }

  return (
    <figure className="relative mx-auto w-full max-w-xl overflow-hidden rounded-lg bg-ink shadow-raised">
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/analyst-poster.webp"
        width={1280}
        height={720}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label="Animation: an analyst alone at a desk at night scrolls through an endless list of results, rubs their eyes, slumps back and carries on, growing more and more frustrated."
        className="block h-auto w-full"
      >
        <source src="/media/analyst.webm" type="video/webm" />
        <source src="/media/analyst.mp4" type="video/mp4" />
      </video>
      <figcaption className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-on-ink">
        Illustration
      </figcaption>
      <button
        type="button"
        onClick={toggle}
        className="on-ink absolute bottom-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink/80 text-on-ink hover:bg-ink"
      >
        <span className="sr-only">{playing ? "Pause animation" : "Play animation"}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          {playing ? <path d="M7 5h4v14H7zM13 5h4v14h-4z" /> : <path d="M8 5v14l11-7z" />}
        </svg>
      </button>
    </figure>
  )
}
