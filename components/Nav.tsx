"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

function ISTClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="hidden lg:inline font-mono text-xs text-muted tracking-widest" suppressHydrationWarning>
      IST → {time}
    </span>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-paper/85 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#main" className="font-display font-medium tracking-tight text-lg">
          ajith.ravi
        </a>
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <ISTClock />
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-[11px] uppercase tracking-[0.14em] bg-ink text-paper rounded-full px-5 py-2.5 hover:bg-muted transition-colors"
          >
            Let&apos;s talk
          </a>
          <button
            className="md:hidden font-mono text-[11px] uppercase tracking-widest border border-line rounded-full px-4 py-2.5"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu ="}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="md:hidden border-t border-line bg-paper px-5 py-4 space-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-mono text-sm uppercase tracking-widest text-muted"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
