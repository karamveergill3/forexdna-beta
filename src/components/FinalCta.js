import Link from "next/link";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(30,102,255,0.18),rgba(30,102,255,0)_62%)]" />
      <div className="mesh-blob mesh-blob-3 pointer-events-none opacity-[0.14]" style={{ background: "var(--color-high)", bottom: "-15%", right: "5%" }} />
      <Reveal className="relative mx-auto max-w-3xl px-6 py-20 text-center md:px-10 md:py-24">
        <span className="eyebrow text-[12px] text-accent-2">ForexDNA</span>
        <h2 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
          The <span className="text-gradient-blue-green">invincible</span> grid strategy.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-text-muted">
          Sign up and be first in line as the dashboard, risk
          calculator, and live copytrading roll out.
        </p>
        <Link
          href="/signup"
          className="btn-primary mt-8 inline-block rounded-lg px-9 py-4 text-sm font-semibold tracking-wide text-white"
        >
          Sign up
        </Link>
      </Reveal>
    </section>
  );
}
