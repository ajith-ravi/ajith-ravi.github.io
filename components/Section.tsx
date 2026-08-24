import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-medium tracking-tight">
          {title}
        </h2>
      </Reveal>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
}
