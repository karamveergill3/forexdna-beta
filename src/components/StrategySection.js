import Reveal from "./Reveal";

export default function StrategySection() {
  return (
    <section className="relative border-b border-white/10 bg-ink">
      <Reveal className="mx-auto max-w-[560px] px-6 py-14 lg:max-w-[1080px] lg:px-10 lg:py-20">
        <div className="eyebrow mb-4 text-[12px] text-accent-2">01 / The strategy</div>
        <h2 className="max-w-2xl text-[30px] font-bold leading-[1.06] tracking-tight text-balance sm:text-4xl lg:text-[42px]">
          Small wins,
          <br />
          compounded relentlessly.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-muted">
          Cherry-picked ranging FX majors. ForexDNA compounds small
          high-probability moves.
        </p>

        <div className="mt-8 flex flex-col gap-[18px] lg:flex-row">
          <div className="tile flex-1 p-[22px] lg:p-7">
            <svg viewBox="0 0 320 96" className="mb-4 block w-full">
              <defs>
                <linearGradient id="eqfill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="rgba(30,102,255,0.32)" />
                  <stop offset="1" stopColor="rgba(30,102,255,0)" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="320" height="96" rx="10" fill="#070A0F" stroke="rgba(255,255,255,0.08)" />
              <path d="M18 80 C56 70 88 74 130 60 C182 42 236 50 304 30 L304 88 L18 88 Z" fill="url(#eqfill)" />
              <path d="M18 80 C56 70 88 74 130 60 C182 42 236 50 304 30" fill="none" stroke="#5FA0FF" strokeWidth="2.4" strokeLinecap="round" />
              <circle cx="304" cy="30" r="4" fill="#5FA0FF" />
              <rect x="18" y="14" width="76" height="22" rx="5" fill="rgba(30,102,255,0.22)" />
              <text x="26" y="29" fontFamily="var(--font-jbmono)" fontSize="13" fill="#5FA0FF">
                sample view
              </text>
            </svg>
            <h3 className="text-xl font-semibold">One dashboard, everything visible</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-text-dim">
              Daily P&amp;L, open positions and your stats in one place.
            </p>
          </div>

          <div className="tile flex-1 p-[22px] lg:p-7">
            <svg viewBox="0 0 320 96" className="mb-4 block w-full">
              <rect x="0" y="0" width="320" height="96" rx="10" fill="#070A0F" stroke="rgba(255,255,255,0.08)" />
              <circle cx="56" cy="48" r="22" fill="#0B1330" stroke="#1E66FF" strokeWidth="2" />
              <text x="56" y="52" fontFamily="var(--font-jbmono)" fontSize="10" fill="#5FA0FF" textAnchor="middle">
                STRAT
              </text>
              <path d="M82 48 L196 48" stroke="#5FA0FF" strokeWidth="2" strokeDasharray="5 5" />
              <circle cx="140" cy="48" r="3.5" fill="#5FA0FF" />
              <rect x="210" y="18" width="92" height="16" rx="4" fill="rgba(30,102,255,0.16)" />
              <rect x="210" y="40" width="92" height="16" rx="4" fill="rgba(30,102,255,0.16)" />
              <rect x="210" y="62" width="92" height="16" rx="4" fill="rgba(30,102,255,0.16)" />
              <rect x="118" y="66" width="76" height="18" rx="9" fill="#0B1330" stroke="rgba(95,160,255,0.4)" />
              <text x="156" y="79" fontFamily="var(--font-jbmono)" fontSize="10" fill="#5FA0FF" textAnchor="middle">
                auto-placed
              </text>
            </svg>
            <h3 className="text-xl font-semibold">Automated execution</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-text-dim">
              ForexDNA copytrades for you, placing trades automatically —
              no manual order entry.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
