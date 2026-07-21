import Link from "next/link";
import CandlestickArt from "./CandlestickArt";
import ScrambleText from "./ScrambleText";
import MeshBackground from "./MeshBackground";

export default function Hero() {
  return (
    <section className="relative border-b border-white/10">
      <div className="absolute inset-0 overflow-hidden">
        <MeshBackground />
        <div className="grid-field pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 25%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 25%, black 92%, transparent)",
          }}
        >
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

        {/* Candlestick art — desktop only */}
        <div
          className="rise pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] items-center pr-6 opacity-70 lg:flex xl:pr-10"
          style={{
            animationDelay: "0.3s",
            maskImage: "linear-gradient(to right, transparent, black 30%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 30%, black 92%, transparent)",
          }}
        >
          <div className="h-[38%] w-full scale-[2.5]">
            <CandlestickArt />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pb-14 pt-12 md:px-10 md:pb-20 md:pt-20">
        <div className="rise eyebrow text-[11px] text-accent-2">
          Automated forex strategy
        </div>

        <h1 className="rise mt-4 text-5xl font-black leading-none tracking-tighter sm:text-6xl md:text-8xl lg:text-[9rem]">
          <ScrambleText text="Forex" startDelay={350} />
          <ScrambleText text="DNA" className="text-gradient-blue-green" startDelay={350 + 5 * 85} />
        </h1>

        <p
          className="rise mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:text-xl md:text-2xl"
          style={{ animationDelay: "0.08s" }}
        >
          Retail access to algorithmic trading — an automated mean-reversion
          strategy on curated FX pairs, wrapped in a risk layer.
        </p>

        <div
          className="rise mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
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

        {/* Stats — 3 equal columns on mobile, capped width on desktop so it
            doesn't run into the candlestick art on the right */}
        <div
          className="rise mt-10 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/10 pt-8"
          style={{ animationDelay: "0.24s" }}
        >
          <Stat label="Strategy" value="Mean reversion" />
          <Stat label="Pairs" value="Curated FX" />
          <Stat label="Access" value="By request" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="eyebrow text-[10px] text-text-faint">{label}</span>
      <span className="font-mono-tight text-xs text-text sm:text-sm">{value}</span>
    </div>
  );
}
