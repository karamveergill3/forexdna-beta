import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import MagneticButton from "./MagneticButton";

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
            className="group relative hidden text-sm text-text-dim transition hover:text-text sm:inline"
          >
            FAQ
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent-2 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
          {user ? (
            <MagneticButton
              href="/welcome"
              className="btn-primary rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide text-white"
            >
              Dashboard
            </MagneticButton>
          ) : (
            <>
              <Link
                href="/login"
                className="group relative text-sm text-text-dim transition hover:text-text"
              >
                Sign in
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent-2 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
              <MagneticButton
                href="/signup"
                className="btn-primary rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide text-white"
              >
                Sign up
              </MagneticButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
