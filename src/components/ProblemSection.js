import Reveal from "./Reveal";

const problems = [
  {
    label: "Wrong tools",
    text: "Most grid bots are crypto-native, built for markets that don't behave like ranging FX pairs.",
  },
  {
    label: "Signal groups",
    text: "Copy-signal groups are a minefield — they still expect you to place and manage the trade yourself.",
  },
  {
    label: "Inconsistent execution",
    text: "Entry timing is never guaranteed, so two people following the same signal get two different outcomes.",
  },
];

export default function ProblemSection() {
  return (
    <section className="border-b border-white/10 bg-ink">
      <Reveal className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <span className="eyebrow text-[11px] text-accent-2">The problem</span>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Retail has limited access to algorithmic trading.
        </h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {problems.map((p) => (
            <div key={p.label}>
              <div className="eyebrow mb-5 text-[12px] text-accent-2">
                {p.label}
              </div>
              <p className="text-lg leading-relaxed text-text-muted">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
