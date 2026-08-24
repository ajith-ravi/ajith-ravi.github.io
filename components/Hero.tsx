"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site, metrics } from "@/lib/content";

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 22 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8 pt-36 md:pt-48 pb-16 md:pb-24">
      <motion.p {...fade(0)} className="eyebrow">
        {site.role}
      </motion.p>
      <motion.h1
        {...fade(0.08)}
        className="mt-7 font-display font-medium tracking-[-0.025em] leading-[1.04] text-[11vw] md:text-7xl lg:text-[5.5rem] max-w-5xl"
      >
        I make heavy
        <br />
        <span className="text-muted">systems light.</span>
      </motion.h1>
      <motion.p {...fade(0.16)} className="mt-8 max-w-xl text-base md:text-lg text-muted leading-relaxed">
        {site.sub}
      </motion.p>
      <motion.div {...fade(0.24)} className="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="font-mono text-sm bg-ink text-paper rounded-full px-7 py-4 hover:bg-muted transition-colors"
        >
          View work ↓
        </a>
        <a
          href="#contact"
          className="font-mono text-sm border border-ink/40 rounded-full px-7 py-4 hover:border-ink transition-colors"
        >
          Get in touch
        </a>
      </motion.div>
      <motion.dl
        {...fade(0.34)}
        className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 border-t border-line pt-8"
      >
        {metrics.map((m) => (
          <div key={m.label}>
            <dt className="sr-only">{m.label}</dt>
            <dd className="font-display text-3xl md:text-4xl font-medium tracking-tight">
              {m.value}
            </dd>
            <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {m.label}
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
