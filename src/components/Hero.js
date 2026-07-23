import MagneticButton from "./MagneticButton";
import DepositSlider from "./DepositSlider";
import HeroCalcResult from "./HeroCalcResult";

export default function Hero() {
  return (
    <section className="relative border-b border-white/10">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_50%_20%,transparent_15%,rgba(6,7,9,0.85)_100%)]" />

      <div className="relative mx-auto max-w-[560px] px-6 pb-16 pt-10 lg:max-w-[1080px] lg:px-10 lg:pb-20 lg:pt-14">
        <div className="lg:grid lg:grid-cols-[1fr_0.86fr] lg:items-start lg:gap-x-[72px]">
          {/* text column */}
          <div>
            <h1 className="rise text-[44px] font-extrabold leading-[0.98] tracking-tighter sm:text-6xl lg:text-[64px]">
              Deposit Today,
              <br />
              <span className="text-accent-2">We Do The Rest.</span>
            </h1>
            <p
              className="rise mt-[18px] max-w-xl text-lg leading-relaxed text-text-muted lg:text-xl"
              style={{ animationDelay: "0.08s" }}
            >
              A mean reversion strategy on major FX pairs, managed and
              optimized by AI. Fully automated.
            </p>

            <div
              className="rise mt-8 flex flex-col gap-3 lg:max-w-[240px]"
              style={{ animationDelay: "0.24s" }}
            >
              <MagneticButton
                href="/signup"
                className="btn-primary rounded-lg px-6 py-4 text-center text-sm font-semibold tracking-wide text-white"
              >
                Sign up
              </MagneticButton>
            </div>

            <div
              className="rise mt-[30px] flex gap-9 border-t border-white/10 pt-5"
              style={{ animationDelay: "0.32s" }}
            >
              <div className="flex-1">
                <div className="eyebrow mb-1.5 text-[11px] text-text-faint">Strategy</div>
                <div className="text-sm text-text">Mean reversion · FX majors</div>
              </div>
              <div className="flex-1">
                <div className="eyebrow mb-1.5 text-[11px] text-text-faint">Get started</div>
                <div className="text-sm text-text">From £500</div>
              </div>
            </div>
          </div>

          {/* calculator card */}
          <div
            className="rise glow-in mt-7 rounded-xl border border-accent/35 bg-panel p-[22px] shadow-[0_12px_40px_rgba(30,102,255,0.14)] lg:mt-0 lg:p-[30px]"
            style={{ animationDelay: "0.16s" }}
          >
            <div className="mb-3 flex items-baseline justify-between">
              <span className="font-mono-tight text-xs tracking-[0.1em] text-text-dim">
                YOU DEPOSIT
              </span>
              <HeroCalcResult field="deposit" className="font-mono-tight text-[26px] font-bold lg:text-[30px]" />
            </div>
            <DepositSlider />
            <div className="mt-[18px] flex items-baseline justify-between border-t border-white/10 pt-4">
              <span className="font-mono-tight text-xs tracking-[0.1em] text-text-dim">
                OVER 4 WEEKS*
              </span>
              <HeroCalcResult
                field="result"
                className="font-mono-tight text-[26px] font-bold text-accent-2 sm:text-[34px] lg:text-[40px]"
              />
            </div>
            <p className="mt-3 text-[11px] leading-snug text-text-faint">
              *Live demo account, 22 Jun–21 Jul 2026. Historical only, not a
              projection or guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
