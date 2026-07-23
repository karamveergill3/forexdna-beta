import Reveal from "./Reveal";
import DepositSlider from "./DepositSlider";
import CalcResultCard from "./CalcResultCard";

export default function CalculatorSection() {
  return (
    <section className="relative border-b border-white/10 bg-panel/40">
      <Reveal className="mx-auto max-w-[560px] px-6 py-14 lg:max-w-[1080px] lg:px-10 lg:py-20">
        <div className="eyebrow mb-4 text-[12px] text-accent-2">04 / Your numbers</div>
        <h2 className="max-w-2xl text-[30px] font-bold leading-[1.06] tracking-tight sm:text-4xl lg:text-[42px]">
          See it before you deposit.
        </h2>

        <div className="glow-in mt-8 rounded-xl border border-accent/30 bg-panel p-6 shadow-[0_12px_40px_rgba(30,102,255,0.12)] lg:p-9">
          <div className="mb-3.5 flex items-baseline justify-between">
            <label className="font-mono-tight text-[13px] tracking-[0.08em] text-text-dim">
              YOUR EQUITY
            </label>
            <CalcResultCard field="deposit" className="font-mono-tight text-[28px] font-bold text-text" />
          </div>

          <DepositSlider showBounds />

          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <CalcResultCard field="week1" />
            <CalcResultCard field="week4" highlight />
          </div>

          <p className="mt-3.5 text-xs leading-snug text-text-faint">
            Based on ForexDNA&rsquo;s live demo account, 22 Jun – 21 Jul
            2026. Historical only — not a projection or guarantee of
            future returns. Capital at risk.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
