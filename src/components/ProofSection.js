import Reveal from "./Reveal";

const stats = [
  { label: "Return (4 weeks)", value: "+49.1%", tone: "high" },
  { label: "Win rate", value: "82.9%", tone: "high" },
  { label: "Max drawdown", value: "0.79%", tone: "normal" },
  { label: "Trades placed", value: "164", tone: "normal" },
];

export default function ProofSection() {
  return (
    <section className="relative border-b border-white/10 bg-panel/40">
      <Reveal className="mx-auto max-w-[560px] px-6 py-14 lg:max-w-[1080px] lg:px-10 lg:py-20">
        <div className="eyebrow mb-4 text-[12px] text-accent-2">02 / The proof</div>

        <div className="lg:grid lg:grid-cols-[1.18fr_0.82fr] lg:items-start lg:gap-14">
          <div>
            <h2 className="text-[30px] font-bold leading-[1.06] tracking-tight sm:text-4xl lg:text-[42px]">
              Forward tested.
              <br />
              Real numbers.
            </h2>
            <p className="mt-[18px] max-w-md text-[15px] leading-relaxed text-text-dim">
              Tracked live from day one on a real demo account — no
              cherry-picked window, no backtest-only numbers.{" "}
              <span className="text-text">Results as they happened.</span>
            </p>
          </div>

          <div className="tile mt-7 p-5 lg:mt-0">
            <table className="w-full border-collapse font-mono-tight text-[13px]">
              <thead>
                <tr>
                  <th className="border-b border-white/10 pb-2.5 text-left text-[11px] font-medium uppercase tracking-[0.12em] text-text-faint">
                    Metric
                  </th>
                  <th className="border-b border-white/10 pb-2.5 text-right text-[11px] font-medium uppercase tracking-[0.12em] text-text-faint">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody>
                {stats.map((s) => (
                  <tr key={s.label} className="transition-colors hover:bg-accent/5">
                    <td className="border-b border-white/6 py-3 text-left text-text">
                      {s.label}
                    </td>
                    <td
                      className="border-b border-white/6 py-3 text-right font-bold"
                      style={{ color: s.tone === "high" ? "var(--color-high)" : "var(--color-text)" }}
                    >
                      {s.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-[11px] leading-snug text-text-faint">
              One live demo account, 22 Jun – 21 Jul 2026. Past performance
              is not a guarantee of future results.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
