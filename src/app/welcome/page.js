import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/SignOutButton";

export const metadata = {
  title: "You're in — ForexDNA",
};

export default async function WelcomePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, risk_preference, created_at")
    .eq("id", user.id)
    .single();

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 md:px-10">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="text-lg font-black tracking-tight">
            Forex<span className="text-accent-2">DNA</span>
          </Link>
          <SignOutButton />
        </div>

        <div className="flex flex-1 items-center justify-center py-16">
          <div className="surface w-full max-w-lg rounded-xl p-9 text-center md:p-12">
            <span className="eyebrow text-[11px] text-accent-2">
              Access confirmed
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}.
            </h1>
            <p className="mt-5 leading-relaxed text-text-dim">
              Your account is set up with a{" "}
              <span className="font-mono-tight text-accent-2">
                {profile?.risk_preference ?? "low"}
              </span>{" "}
              risk preference. There&rsquo;s no live trading or dashboard yet
              — we&rsquo;ll email {user.email} the moment your access to the
              live dashboard and broker connection opens up.
            </p>
            <div className="mt-9 grid grid-cols-3 gap-3 text-left">
              <RoadmapItem label="Dashboard" status="Coming soon" />
              <RoadmapItem label="Risk calc" status="Coming soon" />
              <RoadmapItem label="Copytrading" status="Coming soon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoadmapItem({ label, status }) {
  return (
    <div className="rounded-lg border border-white/10 bg-ink px-3 py-3">
      <div className="text-xs font-medium text-text">{label}</div>
      <div className="eyebrow mt-1 text-[9px] text-text-faint">{status}</div>
    </div>
  );
}
