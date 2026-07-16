import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-xl font-black tracking-tight">
          Forex<span className="text-accent-2">DNA</span>
        </Link>
        <Link
          href="/signup"
          className="btn-primary rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide text-white"
        >
          Request access
        </Link>
      </div>
    </header>
  );
}
