import { writing } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title={<>Published thinking<span className="text-signal">.</span></>}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {writing.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.05}>
            <article className="panel corner p-7 h-full">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{w.venue}</p>
              <h3 className="mt-3 font-display text-lg md:text-xl font-medium leading-snug">
                {w.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{w.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
