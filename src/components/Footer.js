export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-9 md:px-10">
        <div className="flex flex-col gap-6 border-t border-white/10 pt-7 text-sm text-text-faint sm:flex-row sm:items-start sm:justify-between">
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
