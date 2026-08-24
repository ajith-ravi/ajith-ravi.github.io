import { approach } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Approach() {
  return (
    <Section
      id="approach"
      eyebrow="How I work"
      title={<>Debugging is a method, not a mood<span className="text-signal">.</span></>}
    >
      <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
        {approach.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05} className="bg-panel p-7 md:p-9">
            <p className="font-mono text-xs text-signal tracking-[0.2em]">
              STEP {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-display text-xl md:text-2xl font-medium tracking-tight">
              {a.title}
            </h3>
            <p className="mt-3 text-muted leading-relaxed">{a.body}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <p className="mt-8 max-w-3xl text-muted leading-relaxed">
          I started in aerospace engineering at IIT Bombay, where systems fail loudly and
          root-cause analysis is the whole discipline. That habit carried over: treat every slow
          API, oversized bill and flaky pipeline as a system with a findable cause.
        </p>
      </Reveal>
    </Section>
  );
}
