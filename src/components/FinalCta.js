import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function FinalCta() {
  return (
    <section className="relative border-b border-white/10 bg-ink">
      <Reveal className="mx-auto max-w-[560px] px-6 py-14 lg:max-w-[1080px] lg:px-10 lg:py-16">
        <div
          className="relative overflow-hidden rounded-2xl border border-accent/30 bg-panel p-9 shadow-[0_12px_40px_rgba(30,102,255,0.12)] lg:flex lg:items-center lg:justify-between lg:gap-14 lg:p-11"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 22% 0%, rgba(30,102,255,0.2), rgba(6,7,9,0) 66%)",
            }}
          />
          <div className="relative">
            <h2 className="max-w-md text-[32px] font-extrabold leading-[1.04] tracking-tight text-balance sm:text-[46px]">
              Set up once,
              <br />
              <span className="text-accent-2">trade automatically.</span>
            </h2>
            <p className="mt-4 max-w-sm text-[17px] leading-relaxed text-text-muted">
              Set up in minutes. From £500.
            </p>
          </div>
          <div className="relative mt-6 lg:mt-0 lg:shrink-0">
            <MagneticButton
              href="/signup"
              className="btn-primary block min-w-[220px] rounded-lg px-9 py-4 text-center text-sm font-semibold tracking-wide text-white"
            >
              Sign up
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
