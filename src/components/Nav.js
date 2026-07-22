import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Nav() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="glass-nav sticky top-0 z-50 border-b border-white/10 bg-ink/70">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          Forex<span className="text-accent-2">DNA</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/faq"
            className="hidden text-sm text-text-dim transition hover:text-text sm:inline"
          >
            FAQ
          </Link>
          {user ? (
            <Link
              href="/welcome"
              className="btn-primary rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide text-white"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-text-dim transition hover:text-text"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="btn-primary rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide text-white"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
