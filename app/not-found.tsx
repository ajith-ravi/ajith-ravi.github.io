import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="font-display text-5xl md:text-7xl font-medium">
        Route not found<span className="text-signal">.</span>
      </h1>
      <p className="max-w-md text-muted">
        This path is not in the system diagram. The homepage has everything.
      </p>
      <Link
        href="/"
        className="font-mono text-sm border border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
      >
        cd ~/
      </Link>
    </main>
  );
}
