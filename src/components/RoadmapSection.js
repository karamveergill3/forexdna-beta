import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const items = [
  {
    n: "01",
    title: "One dashboard",
    text: "Daily P&L, top performers, and your own stats in one place.",
  },
  {
    n: "02",
    title: "A risk calculator",
    text: "See projected outcomes at your own equity and risk tolerance before you deposit a cent.",
  },
  {
    n: "03",
    title: "Automated copytrading",
    text: "The strategy trades, you never place an order manually — connected to your own broker account.",
  },
];

export default function RoadmapSection() {
  return (
    <section className="border-b border-white/10 bg-panel/40">
      <Reveal className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-[11px] text-accent-2">
              What you get
            </span>
            <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Deposit. Set risk. Earn.
            </h2>
          </div>
          <p className="eyebrow max-w-xs text-[11px] text-text-faint">
            Request access now to be first in line as each piece ships.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <TiltCard key={item.n} className="surface flex flex-col rounded-xl p-7">
              <span className="font-mono-tight text-4xl font-bold text-accent-2">
                {item.n}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-text-dim">
                {item.text}
              </p>
              <span className="eyebrow mt-5 text-[10px] text-text-faint">
                Coming soon
              </span>
            </TiltCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
