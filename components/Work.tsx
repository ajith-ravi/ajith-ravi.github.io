"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { caseStudies } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

const accentText: Record<string, string> = {
  bronze: "text-bronze",
  silver: "text-silver",
  gold: "text-gold",
  signal: "text-signal",
};
const accentBorder: Record<string, string> = {
  bronze: "border-bronze",
  silver: "border-silver",
  gold: "border-gold",
  signal: "border-signal",
};

export default function Work() {
  const [open, setOpen] = useState<string | null>(caseStudies[0].id);
  const reduce = useReducedMotion();

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title={<>Case studies, with the numbers attached<span className="text-muted">.</span></>}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted -mt-6 mb-8">
        Click a project to open the full case study
      </p>
      <div className="space-y-4">
        {caseStudies.map((cs) => {
          const isOpen = open === cs.id;
          return (
            <Reveal key={cs.id}>
              <article className="panel corner overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : cs.id)}
                  aria-expanded={isOpen}
                  aria-controls={`cs-${cs.id}`}
                  className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-6 hover:bg-ink/[0.03] transition-colors"
                >
                  <div>
                    <p className={`font-mono text-xs tracking-[0.2em] ${accentText[cs.accent]}`}>
                      {cs.index}
                    </p>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl font-medium tracking-tight">
                      {cs.title}
                    </h3>
                    <p className="mt-1.5 text-muted">{cs.kicker}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {cs.stack.map((t) => (
                        <li
                          key={t}
                          className="font-mono text-[11px] border border-line px-2.5 py-1 text-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    aria-hidden
                    className={`font-mono text-xl mt-1 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`cs-${cs.id}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 border-t border-line space-y-5 text-[15px] leading-relaxed">
                        <div className="pt-4">
                          <p className="eyebrow">Problem</p>
                          <p className="mt-1.5">{cs.problem}</p>
                        </div>
                        <div>
                          <p className="eyebrow">What I built</p>
                          <ul className="mt-1.5 space-y-1.5">
                            {cs.built.map((b) => (
                              <li key={b} className="pl-4 relative">
                                <span className="absolute left-0 top-[9px] w-2 h-[1.5px] bg-ink/60" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="eyebrow">Hard part</p>
                          <p className="mt-1.5">{cs.challenge}</p>
                        </div>
                        <div className={`border-l-2 pl-4 ${accentBorder[cs.accent]}`}>
                          <p className="eyebrow">Result</p>
                          <p className="mt-1.5 font-medium">{cs.result}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
