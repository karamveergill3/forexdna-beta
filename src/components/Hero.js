import Link from "next/link";
import CandlestickArt from "./CandlestickArt";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="grid-field pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0">
        <div className="level-line absolute left-0 top-[30%] h-px w-full bg-accent-2" />
        <div
          className="level-line absolute left-0 top-[58%] h-px w-full bg-accent-2"
          style={{ animationDelay: "1.6s" }}
        />
        <div
          className="level-line absolute left-0 top-[78%] h-px w-full bg-accent-2"
          style={{ animationDelay: "3.1s" }}
        />
        <div className="sweep-line absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-accent-2 to-transparent shadow-[0_0_26px_rgba(95,160,255,0.7)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_50%_35%,transparent_15%,rgba(6,7,9,0.8)_100%)]" />

      <div
        className="rise pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] items-center pr-6 opacity-70 lg:flex xl:pr-10"
        style={{
          animationDelay: "0.3s",
          maskImage: "linear-gradient(to right, transparent, black 30%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 30%, black 92%, transparent)",
        }}
      >
        <div className="h-[38%] w-full">
          <CandlestickArt />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-14 md:px-10 md:pb-20 md:pt-20">
        <div className="rise eyebrow text-[12px] text-accent-2">
          Automated forex strategy
        </div>
        <h1 className="rise mt-5 text-7xl font-black leading-[0.92] tracking-tighter md:text-[9rem]">
          Forex<span className="text-accent-2">DNA</span>
        </h1>
        <p
          className="rise mt-5 max-w-xl text-xl leading-relaxed text-text-muted md:text-2xl"
          style={{ animationDelay: "0.08s" }}
        >
          Retail access to algorithmic trading — an automated mean-reversion
          strategy on curated FX pairs, wrapped in a risk layer.
        </p>
        <div
          className="rise mt-8 flex flex-wrap items-center gap-5"
          style={{ animationDelay: "0.16s" }}
        >
          <Link
            href="/signup"
            className="btn-primary rounded-lg px-8 py-4 text-sm font-semibold tracking-wide text-white"
          >
            Request access
          </Link>
          <span className="eyebrow text-[11px] text-text-faint">
            No trading experience required
          </span>
        </div>

        <div
          className="rise mt-12 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3"
          style={{ animationDelay: "0.24s" }}
        >
          <Stat label="Strategy" value="Mean reversion · FX" />
          <Stat label="Pairs" value="Curated, ranging" />
          <Stat label="Access" value="By request" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="eyebrow text-[11px] text-text-faint">{label}</span>
      <span className="font-mono-tight text-sm text-text">{value}</span>
    </div>
  );
}
