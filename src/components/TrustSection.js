import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import CountUp from "./CountUp";

const steps = [
  {
    n: "01",
    title: "Designed by AI",
    text: "A proprietary pipeline builds and optimizes the strategy, running walk-forward and Monte Carlo testing before anything goes live.",
  },
  {
    n: "02",
    title: "Run by AI",
    text: "In-house systems watch the market in real time, reading current and expected risk to drive sizing.",
  },
  {
    n: "03",
    title: "Kept sharp by AI",
    text: "The system continuously re-tests itself as conditions shift, so the edge adapts instead of decaying on a static rule set.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink">
      <div
        className="heading-glow"
        style={{ background: "var(--color-low)", top: "5%", left: "8%" }}
      />
      <Reveal className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <span className="eyebrow text-[11px] text-accent-2">
          Development process
        </span>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Built, run, and re-tested by AI.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <TiltCard key={s.n} className="surface rounded-xl p-7">
              <CountUp
                value={i + 1}
                duration={900}
                format={(n) => String(Math.round(n)).padStart(2, "0")}
                className="font-mono-tight text-4xl font-bold text-accent-2"
              />
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-text-dim">
                {s.text}
              </p>
            </TiltCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
