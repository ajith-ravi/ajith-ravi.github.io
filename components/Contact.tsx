import { site } from "@/lib/content";
import Reveal from "./Reveal";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/ajith-ravi" },
  { label: "GitHub", href: "https://github.com/ajith-ravi" },
  { label: "Medium", href: "https://medium.com/safe-engineering" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 pt-24 md:pt-32 pb-16 md:pb-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Let&apos;s build systems that stay light.
          </p>
          <div className="mt-8 grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-8 items-start">
            <h2 className="font-display text-5xl md:text-7xl font-medium tracking-[-0.02em] leading-[1.02]">
              Ready to build
              <br />
              something fast?
            </h2>
            <div className="md:pt-4">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center justify-between gap-10 w-full max-w-sm border-b border-ink/60 pb-3 font-mono text-sm uppercase tracking-[0.2em] hover:border-ink transition-colors"
              >
                Start a conversation
                <span className="transition-transform group-hover:translate-x-1.5" aria-hidden>
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="mt-20 grid sm:grid-cols-3 border border-line divide-y sm:divide-y-0 sm:divide-x divide-line bg-panel/60">
            <div className="p-7 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Business enquiry
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 block text-[15px] hover:text-muted transition-colors break-all"
              >
                {site.email}
              </a>
              <p className="mt-1.5 text-[15px] text-muted">{site.phone}</p>
            </div>
            <div className="p-7 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Social</p>
              <ul className="mt-4 space-y-1.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-[15px] hover:text-muted transition-colors"
                    >
                      {s.label}
                      <span
                        className="text-muted text-xs opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                        aria-hidden
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Location
              </p>
              <p className="mt-4 text-[15px]">Bangalore, India</p>
              <p className="mt-1.5 text-[15px] text-muted">UTC +5:30 · IST</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <p>© {new Date().getFullYear()} Ajith Ravi</p>
            <p>Designed and built from scratch</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
