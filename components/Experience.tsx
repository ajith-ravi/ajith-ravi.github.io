import { experience } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Three years, three roles, one platform<span className="text-signal">.</span></>}
    >
      <ol className="relative border-l border-line ml-2 md:ml-4 space-y-12">
        {experience.map((e, i) => (
          <li key={e.role} className="pl-8 md:pl-12 relative">
            <span
              className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 border-2 border-signal bg-paper rounded-full"
              aria-hidden
            />
            <Reveal delay={i * 0.05}>
              <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">{e.period}</p>
              <h3 className="mt-2 font-display text-xl md:text-2xl font-medium tracking-tight">
                {e.role}
              </h3>
              <p className="text-muted">{e.org}</p>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed max-w-3xl">
                {e.points.map((p) => (
                  <li key={p} className="pl-4 relative">
                    <span className="absolute left-0 top-[9px] w-2 h-[1.5px] bg-signal" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
