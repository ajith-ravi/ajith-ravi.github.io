import { skills } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title={<>Grouped by what it builds<span className="text-signal">.</span></>}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.04}>
            <div className="panel p-6 h-full">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                {s.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="font-mono text-xs border border-line px-2.5 py-1.5 text-ink/80 hover:border-ink transition-colors"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
