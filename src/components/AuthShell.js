import Link from "next/link";

export default function AuthShell({ eyebrow, title, subtitle, children, footer }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 md:px-10">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="text-lg font-black tracking-tight">
            Forex<span className="text-accent-2">DNA</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center py-12">
          <div className="surface w-full max-w-md rounded-xl p-8 md:p-10">
            <span className="eyebrow text-[11px] text-accent-2">
              {eyebrow}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-sm leading-relaxed text-text-dim">{subtitle}</p>
            )}
            <div className="mt-8">{children}</div>
            {footer && <div className="mt-7 text-sm text-text-dim">{footer}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
