import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-[1440px] px-6 pt-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-12 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-lg font-black tracking-tight">
              Forex<span className="text-accent-2">DNA</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-dim">
              Retail access to algorithmic trading — an automated
              mean-reversion strategy on curated FX pairs.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4 text-[10px] text-text-faint">
              Site
            </div>
            <ul className="flex flex-col gap-3 text-sm text-text-dim">
              <li>
                <Link href="/faq" className="hover:text-text">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-text">
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-text">
                  Request access
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4 text-[10px] text-text-faint">
              Contact
            </div>
            <ul className="flex flex-col gap-3 text-sm text-text-dim">
              <li>
                <a
                  href="mailto:forexdnaltd@gmail.com"
                  className="hover:text-text"
                >
                  forexdnaltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 py-7 text-sm text-text-faint sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl leading-relaxed">
            Nothing on this site is financial advice or an offer to manage
            your funds. Trading foreign exchange carries a high level of
            risk and may not be suitable for every investor; you could lose
            some or all of your deposit.
          </p>
          <span className="font-mono-tight shrink-0">
            &copy; {new Date().getFullYear()} ForexDNA
          </span>
        </div>
      </div>
    </footer>
  );
}
