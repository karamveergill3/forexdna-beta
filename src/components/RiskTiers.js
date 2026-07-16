const tiers = [
  {
    label: "Low risk",
    color: "var(--color-low)",
    apy: "451%",
    dd: "~22% avg drawdown",
    text: "The steadiest setting.",
  },
  {
    label: "Medium risk",
    color: "var(--color-mid)",
    apy: "512%",
    dd: "~34% avg drawdown",
    text: "The balanced setting.",
  },
  {
    label: "High risk",
    color: "var(--color-high)",
    apy: "934%",
    dd: "~46% avg drawdown",
    text: "Governed by the risk stack.",
  },
];

export default function RiskTiers() {
  return (
    <section className="border-b border-white/10 bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <span className="eyebrow text-[11px] text-accent-2">
          Three risk settings, one engine
        </span>
        <h2 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Choose how the risk stack sizes your account.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.label} className="surface rounded-xl p-9">
              <div className="flex items-center gap-3">
                <span
                  className="inline-block h-1.5 w-7 rounded-full"
                  style={{ background: t.color }}
                />
                <span className="eyebrow text-[11px] text-text-dim">
                  {t.label}
                </span>
              </div>
              <div
                className="mt-5 text-6xl font-black tracking-tighter"
                style={{ color: t.color }}
              >
                {t.apy}
              </div>
              <div className="eyebrow mt-1 text-[11px] text-text-faint">
                modeled apy
              </div>
              <p className="mt-4 text-base text-text-dim">
                {t.dd} · {t.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-text-faint">
          Figures are backtested / forward-tested model output under the
          platform&rsquo;s own assumptions, not a guarantee. Forex trading
          carries a substantial risk of loss, including to your full deposit,
          and past or simulated performance does not predict future results.
        </p>
      </div>
    </section>
  );
}
