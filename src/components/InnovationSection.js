import Reveal from "./Reveal";

export default function InnovationSection() {
  return (
    <section className="relative border-b border-white/10 bg-ink">
      <Reveal className="mx-auto max-w-[560px] px-6 py-14 lg:max-w-[1080px] lg:px-10 lg:py-20">
        <div className="eyebrow mb-4 text-[12px] text-accent-2">03 / The innovation</div>
        <h2 className="max-w-2xl text-[30px] font-bold leading-[1.06] tracking-tight sm:text-4xl lg:text-[42px]">
          Engineered to manage risk
          <br />
          in any market.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-muted">
          A risk engine designed to protect capital first. It knows when
          to press, when to pause, and where to accumulate.
        </p>

        <div className="mt-8 flex flex-col gap-[18px] lg:flex-row lg:items-stretch">
          <div className="tile flex-1 p-5 lg:p-6">
            <div className="mb-1.5 font-mono-tight text-xs tracking-[0.16em] text-accent-2">
              SMART ACCUMULATION
            </div>
            <svg viewBox="0 0 800 228" className="mt-2 block w-full">
              <defs>
                <linearGradient id="stopZone" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#E2664F" stopOpacity="0.04" />
                  <stop offset="1" stopColor="#E2664F" stopOpacity="0.14" />
                </linearGradient>
                <linearGradient id="safeZone" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1E66FF" stopOpacity="0" />
                  <stop offset="1" stopColor="#1E66FF" stopOpacity="0.06" />
                </linearGradient>
              </defs>
              <line x1="0" y1="18" x2="800" y2="18" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
              <rect x="0" y="18" width="800" height="110" fill="url(#safeZone)" />
              <rect x="0" y="128" width="800" height="68" fill="url(#stopZone)" />
              <line x1="0" y1="128" x2="800" y2="128" stroke="#5FA0FF" strokeWidth="1.4" strokeDasharray="7 5" />
              <line x1="0" y1="196" x2="800" y2="196" stroke="#E2664F" strokeWidth="1.8" />
              <text x="10" y="14" fontFamily="var(--font-jbmono)" fontSize="12" fill="#6B7480">0%</text>
              <text x="10" y="122" fontFamily="var(--font-jbmono)" fontSize="12" fill="#5FA0FF">-20%</text>
              <text x="10" y="190" fontFamily="var(--font-jbmono)" fontSize="12" fill="#E2664F">-30%</text>
              <text x="128" y="74" fontFamily="var(--font-jbmono)" fontSize="12" fill="#5FA0FF" textAnchor="middle" letterSpacing="1.2">TRADING</text>
              <text x="440" y="220" fontFamily="var(--font-jbmono)" fontSize="12" fill="#E2664F" textAnchor="middle" letterSpacing="1.2" fontWeight="600">ENTRIES PAUSE</text>
              <text x="576" y="103" fontFamily="var(--font-jbmono)" fontSize="12" fill="#5FA0FF" textAnchor="middle" letterSpacing="1.2">RE-ENTRY</text>
              <text x="712" y="48" fontFamily="var(--font-jbmono)" fontSize="12" fill="#5FA0FF" textAnchor="middle" letterSpacing="1.2">ACCUMULATE</text>
              <path d="M0 30 Q60 27 80 36 Q100 43 120 39 Q160 51 200 66 Q240 87 280 108 Q310 126 340 144 Q370 165 400 180 Q420 192 440 197 Q460 198 480 193 Q500 185 520 174 Q540 162 560 151 Q580 140 600 132 Q620 126 640 121 Q660 113 680 99 Q700 84 720 71 Q740 59 760 48 Q780 39 800 31" fill="none" stroke="#4C82E8" strokeWidth="2.4" strokeLinecap="round" />
              <circle cx="440" cy="197" r="6.5" fill="none" stroke="#E2664F" strokeWidth="2" />
              <circle cx="440" cy="197" r="2.5" fill="#E2664F" />
              <circle cx="640" cy="121" r="5.5" fill="#1E66FF" />
              <circle cx="720" cy="71" r="5" fill="#1E66FF" />
              <circle cx="760" cy="48" r="5" fill="#1E66FF" />
              <circle cx="798" cy="31" r="5" fill="#1E66FF" />
            </svg>
            <p className="mt-3 text-[15px] leading-relaxed text-text-dim">
              Where naive systems keep buying, ForexDNA pauses, waits for
              its level, and turns the recovery into profit.
            </p>
          </div>

          <div className="tile flex flex-1 flex-col justify-center gap-4 p-6 lg:flex-row lg:items-center lg:gap-9">
            <div className="eyebrow text-[13px] text-accent-2">
              DESIGNED, RUN, AND KEPT SHARP BY AI
            </div>
            <p className="text-base leading-relaxed text-text-muted lg:max-w-[62ch]">
              A proprietary pipeline builds, monitors, and continuously
              re-tests the strategy as conditions shift — instead of a
              static rule set left to decay.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
