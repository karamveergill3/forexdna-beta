import Reveal from "./Reveal";

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
    <section className="border-b border-white/10 bg-ink">
      <Reveal className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <span className="eyebrow text-[11px] text-accent-2">
          Development process
        </span>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Built, run, and re-tested by AI.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="surface rounded-xl p-7">
              <span className="font-mono-tight text-4xl font-bold text-accent-2">
                {s.n}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-text-dim">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
