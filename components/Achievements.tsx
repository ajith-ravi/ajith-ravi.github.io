import { achievements } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={<>Proof, beyond the day job<span className="text-muted">.</span></>}
    >
      <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.03} className="bg-panel p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{a.tag}</p>
            <h3 className="mt-2.5 font-display text-lg md:text-xl font-medium tracking-tight">
              {a.title}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{a.detail}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
